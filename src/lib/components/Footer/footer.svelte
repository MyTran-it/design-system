<script>
  import { fly } from 'svelte/transition'
</script>

<svelte:head>
  <style>
    body > div {
      padding-bottom: 7rem;
    }
  </style>
</svelte:head>

<div class="mh--footer" in:fly={{ y: 200, duration: 500 }}>
  <slot />
</div>
