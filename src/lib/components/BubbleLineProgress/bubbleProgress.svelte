<script>
  import { writable } from 'svelte/store'
  import { setContext } from 'svelte'

  export let noPadding = false

  let bubbleLine_ref

  const lastBubbleId = writable(null)

  setContext('BubbleProgress', {
    lastBubbleId,
    setLastBubble: (id) => {
      lastBubbleId.set(id)
    },
  })
</script>

<div class="mh--bubble--progress" bind:this={bubbleLine_ref} class:noPadding>
  <slot />
</div>
