<script>
  import ButtonCircle from '$lib/components/Button/CircleButton/buttonCircle.svelte'
  import ButtonSet from '../../Button/buttonSet.svelte'
  import { onMount, onDestroy } from 'svelte'
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  /** Set an id for the input element */
  export let id = 'mh-' + Math.random().toString(36)

  export let files = []
  export let videoSource = null
  export let open = false
  export let width = 640
  export let height = 640
  export let format = 'jpeg'

  // default user media options
  let constraints = { audio: false, video: true }
  let stream = null
  let selectedId = 0
  let selectedCamera
  let canvas = null
  let photo = null
  let data = null
  let state = 'streaming'
  let devices = []

  onMount(async () => {
    await navigator.mediaDevices.getUserMedia({ audio: false, video: true })
    devices = await navigator.mediaDevices.enumerateDevices()
    devices = devices.filter((device) => device.kind === 'videoinput')

    if (devices.length > 1) {
      devices = devices.filter((device) =>
        device.getCapabilities().facingMode.includes('environment')
      )
    }

    if (typeof selectedId === 'string') selectedId = 0
    selectedCamera = devices[selectedId].deviceId

    await switchCamera()
  })

  onDestroy(() => {
    if (stream)
      stream.getTracks().forEach((track) => {
        track.stop()
      })
  })

  async function switchCamera(ev) {
    if (ev) {
      selectedId = (selectedId + 1) % devices.length
      selectedCamera = devices[selectedId].deviceId
    }

    if (stream) {
      stream.getTracks().forEach((track) => {
        track.stop()
      })
    }

    constraints.video = {
      deviceId: selectedCamera,
    }

    stream = await navigator.mediaDevices.getUserMedia(constraints)

    videoSource.srcObject = stream
    videoSource.play()
  }

  function takepicture() {
    const context = canvas.getContext('2d')
    if (width && height) {
      canvas.width = width
      canvas.height = height
      context.drawImage(videoSource, 0, 0, width, height)

      data = canvas.toDataURL('image/' + format)
      photo.setAttribute('src', data)
      state = 'captured'
    }
    if (stream) {
      stream.getTracks().forEach((track) => {
        track.stop()
      })
    }
  }

  async function dataUrlToFile(dataUrl) {
    const res = await fetch(dataUrl)
    const blob = await res.blob()
    const name = 'mh-' + new Date().getTime() + '.' + format
    return new File([blob], name, { type: 'image/' + format })
  }
</script>

<div class="mh--take--photo">
  <div class="mh--take--photo--input" class:hidden={state == 'captured'}>
    <video
      autoplay
      muted
      playsinline
      bind:this={videoSource}
      {id}
      class="mh--take--photo--video"
    >
      <track kind="captions" />
    </video>
    <ButtonSet>
      <ButtonCircle
        kind="secondary"
        size="sm"
        on:click={() => {
          open = false
        }}
        icon="close"
      />
      <ButtonCircle size="sm" icon="camera" on:click={takepicture} />
      {#if devices.length > 1}
        <ButtonCircle size="sm" icon="renew" on:click={switchCamera} />
      {/if}
    </ButtonSet>
  </div>
  <div class="mh--take--photo--output" class:hidden={state == 'streaming'}>
    <canvas {id} bind:this={canvas} />
    <img {id} alt="Capture_photo" bind:this={photo} />

    <ButtonSet>
      <ButtonCircle
        size="sm"
        kind="secondary"
        on:click={() => {
          open = false
        }}
        icon="close"
      />
      <ButtonCircle
        size="sm"
        icon="rotate"
        on:click={() => {
          state = 'streaming'
          switchCamera()
        }}
      />
      <ButtonCircle
        size="sm"
        icon="save"
        on:click={async () => {
          files = [await dataUrlToFile(data)]
          dispatch('captured', {
            files,
          })
        }}
      />
    </ButtonSet>
  </div>
</div>
