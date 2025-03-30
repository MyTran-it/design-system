<script>
  import Icon from '../Icon/icon.svelte'
  import { afterUpdate } from 'svelte'
  import { fly } from 'svelte/transition'
  import { clickOutside } from '../../utils/clickOutside'

  /**
   * Label Icon name
   * @type {string}
   */
  export let labelIcon = ''

  /** Specify the label text
   * @type {string}
   */
  export let label = ''

  /**
   * Icon name
   * @type {string}
   */
  export let icon = ''

  /** Specify the tooltip text
   * @type {string}
   */
  export let tooltipText = ''

  /**
   * Set the direction of the tooltip relative to the icon
   * @type {"top" | "bottom" }
   */
  export let position = 'bottom'

  /**
   * Set to `true` to open tooltip
   */
  export let open = false

  let ref
  let refTooltipBubble = null

  afterUpdate(() => {
    if (open) {
      const refTooltip = ref.getBoundingClientRect()
      const refBubble = refTooltipBubble.getBoundingClientRect()

      let offsetY = 0

      switch (position) {
        case 'top':
          offsetY = -1 * (refBubble.height + refTooltip.height)
          break
        case 'bottom':
          offsetY = 0
          break
        default:
          break
      }

      refTooltipBubble.style.marginTop = offsetY / 8 + 'rem'
    }
  })
</script>

<div
  class="mh--tooltip"
  use:clickOutside
  on:click_outside={() => (open = false)}
>
  <button
    type="button"
    bind:this={ref}
    class="mh--tooltip--label"
    on:click={() => {
      open = !open
    }}
  >
    <slot />
    {#if label}
      <span>
        {label}
      </span>
    {/if}
    {#if labelIcon}
      <Icon name={labelIcon} />
    {/if}
  </button>

  {#if open}
    <div
      class="mh--tooltip--bubble"
      class:bottom={position === 'bottom'}
      class:top={position === 'top'}
      bind:this={refTooltipBubble}
      transition:fly={{ y: 50, duration: 1000 }}
    >
      <div class="mh--tooltip--bubble-icon" class:multiple--icon={icon}>
        {#if icon}
          <Icon name={icon} />
        {/if}
        <button type="button" on:click={() => (open = false)}>
          <Icon name="close" />
        </button>
      </div>
      <slot name="tooltipText">
        {tooltipText}
      </slot>
    </div>
  {/if}
</div>
