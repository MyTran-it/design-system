<script>
  import { fly } from 'svelte/transition'
  import Icon from '../Icon/icon.svelte'

  /**
   * @type {'done' | 'disable'}
   */
  export let state = ''

  /**
   * Set the title of bubble detail
   * @type {string}
   */
  export let title = ''
</script>

<div class="mh--bubble--step detail">
  <div class="mh--bubble--step--line">
    <div
      in:fly={{ y: -200, duration: 500 }}
      class="mh--bubble--step--line-point"
      class:done={state == 'done'}
    >
      {#if state == 'done'}
        <Icon name="valid" size="lg" />
      {/if}
    </div>
    <div class="mh--bubble--step--line-vertical detail" />
  </div>
  <div in:fly={{ y: -200, duration: 500 }} class="mh--bubble--step--content">
    <span class="font-semibold">
      {title}
    </span>
    <div class="mh--bubble--step--content--detail">
      <slot />
    </div>
  </div>
</div>
