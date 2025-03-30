<script>
  import Icon from '../../Icon/icon.svelte'

  /**
   * Icon name
   * @type {string}
   */
  export let icon = ''

  /** Set to `true` if the button used inside a content */
  export let inner = false

  /** Specify the `type` attribute for the button element */
  export let type = 'button'

  /**
   * Specify the size of button
   * @type {'sm' | 'md' | 'lg' | 'thinner'}
   */
  export let size = 'md'

  /** Set to `true` to disable the button */
  export let disabled = false

  $: buttonProps = {
    type,
    disabled,
    class: [
      'mh--btn--card',
      'primary',
      `mh--btn--card__${size}`,
      inner && 'inner',
      $$restProps.class,
    ]
      .filter(Boolean)
      .join(' '),
  }

  function iconSize(buttonSize) {
    if (buttonSize === 'thinner') return 'sm'
    else if (buttonSize === 'sm') return 'md'
    else if (buttonSize === 'md') return 'lg'
    else if (buttonSize === 'lg') return 'xl'
  }
</script>

<button
  {...buttonProps}
  on:click
  on:mouseover
  on:mouseenter
  on:mouseleave
  on:focus
>
  {#if icon}
    <Icon name={icon} size={iconSize(size)} />
  {/if}
</button>
