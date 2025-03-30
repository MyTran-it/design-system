<script>
  import { createEventDispatcher } from 'svelte'
  import { onMount } from 'svelte'
  import Icon from '../../Icon/icon.svelte'

  const dispatch = createEventDispatcher()

  export let icon = 'close'

  /** Specify the `type` attribute for the button element */
  export let type = 'button'

  export let clickLabel = ''
  export let loadingLabel = ''
  export let doneLabel = ''
  export let isLoading = false
  export let isDone = false
  export let loadingFunction = false

  let textInfo

  $: if (type == 'button' && !isDone && !isLoading) {
    textInfo = clickLabel
  } else if (type == 'loading-bar' && !isDone && !isLoading) {
    textInfo = loadingLabel
  } else if (isLoading) {
    textInfo = loadingLabel
  } else if (isDone) {
    textInfo = doneLabel
  }

  onMount(async () => {
    if (type == 'loading-bar') {
      if (loadingFunction) {
        isLoading = true
        let result = await loadingFunction()
        if (result) {
          isDone = true
          isLoading = false
        }
      } else {
        dispatch('loading')
      }
    }
  })
</script>

<div class="mh--btn--animation" class:index-1={isLoading || isDone}>
  <button
    {type}
    class="mh--btn--animation--info"
    on:click={async () => {
      if (!isDone) {
        if (loadingFunction) {
          isLoading = true
          let result = await loadingFunction()
          if (result) {
            isDone = true
            isLoading = false
          }
        } else {
          type == 'button' && dispatch('loading')
        }
      }
    }}
  >
    <span class="mh--btn--animation--info-text" class:fade-in={isDone}>
      {textInfo}
    </span>

    <span
      class="mh--btn--animation--info-icon"
      class:spinning={isLoading}
      class:fade-in={isDone}
    >
      <Icon name={isDone ? 'valid' : icon} size="lg" />
    </span>
  </button>
  <div
    class="mh--btn--animation--loading"
    class:is-loading={isLoading}
    class:is-done={isDone}
  />
</div>
