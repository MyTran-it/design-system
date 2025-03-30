<script>
  import { getContext } from 'svelte'
  import { clickOutside } from '../../utils/clickOutside'
  import Icon from '../Icon/icon.svelte'
  import InfoTag from '../Tag/InfoTag/infoTag.svelte'

  /**
   * Set the title of bubble point
   * @type {string}
   */
  export let title = ''

  /** Set an id for the bubble point */
  export let id = 'mh-' + Math.random().toString(36)

  /** Obtain a reference to the HTML element */
  export let bubblePoint__ref = null

  /**
   * @type {'done' | 'disable'}
   */
  export let state = ''

  /**
   * Set to `true` if this bubble point is expandable
   */
  export let expandable = false

  /**
   * Set to `true` to open the bubble pont
   */
  export let open = false

  const { lastBubbleId, setLastBubble } = getContext('BubbleProgress')

  setLastBubble(id)
</script>

<div {id} bind:this={bubblePoint__ref} class="mh--bubble--step">
  <div {id} class="mh--bubble--step--line">
    <div class="mh--bubble--step--line-point" class:done={state == 'done'}>
      {#if state == 'done'}
        <Icon name="valid" size="lg"/>
      {/if}
    </div>
    {#if $lastBubbleId != id}
      <div class="mh--bubble--step--line-vertical" />
    {/if}
  </div>

  <div
    {id}
    class="mh--bubble--step--content"
    class:disable={state == 'disable'}
    use:clickOutside
    on:click_outside={() => (open = false)}
  >
    <button
      type="button"
      class="mh--bubble--step--content__header"
      on:click={() => expandable && (open = !open)}
    >
      <span class="font-semibold">
        {title}
      </span>
      {#if expandable}
        <span
          class="mh--bubble--step--content__header-icon"
          aria-expanded={open}
        >
          <Icon name="chevron-down" />
        </span>
      {/if}
    </button>
    <div class="mh--bubble--step--content__content">
      {#if state == 'disable'}
        <InfoTag kind="disabled" />
      {:else if expandable}
        <slot name="above" />
        <div
          class="mh--bubble--step--content__content-below"
          aria-expanded={open}
        >
          <slot name="below" />
        </div>
      {:else}
        <slot />
      {/if}
    </div>
  </div>
</div>
