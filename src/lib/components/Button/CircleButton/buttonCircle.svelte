<script>
  import Icon from '../../Icon/icon.svelte'

  /**
   *  Specify the kind of button
   * @type {"primary" | "secondary" }
   */
  export let kind = 'primary'

  /**
   * Set to `true` if this button is floating at bottom of page
   */
  export let float = false

  /**
   * Icon name
   * @type {string}
   */
  export let icon = undefined

  /**
   * Specify the size of button
   * @type {'sm' | 'md' | 'lg'}
   */
  export let size = 'md'

  /** Specify the `type` attribute for the button element */
  export let type = 'button'

  /**
   * Button contents
   * @type {string}
   */
  export let label = 'OK'

  $: buttonProps = {
    type,
    class: [
      'mh--btn--circle',
      `${kind}`,
      size !== 'md' && `mh--btn--circle__${size}`,
      float && 'mh--btn--float',
      $$restProps.class,
    ]
      .filter(Boolean)
      .join(' '),
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
    <Icon name={icon} />
  {:else}
    {label}
  {/if}
</button>
