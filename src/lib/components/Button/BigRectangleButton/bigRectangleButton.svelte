<script>
  import Icon from '../../Icon/icon.svelte'

  /**
   *  Specify the kind of button
   * @type {"primary" | "primary-outline" | "secondary" | "secondary-outline" | "warning"}
   */
  export let kind = 'primary'

  /** Set to `true` to disable the button */
  export let disabled = false

  /**
   * Icon name
   * @type {string}
   */
  export let icon = undefined

  /** Specify the `type` attribute for the button element */
  export let type = 'button'

  /**
   * Label title
   * @type {string}
   */
  export let title = ''

  /**
   * Subtitle
   * @type {string}
   */
  export let subtitle = ''

  $: buttonProps = {
    disabled,
    type,
    ...$$restProps,
    class: ['mh--btn--rectangle', `${kind}`, $$restProps.class]
      .filter(Boolean)
      .join(' '),
  }
</script>

<button {...buttonProps} on:click>
  {#if icon}
    <Icon name={icon} />
  {/if}
  <h3>
    {title}
  </h3>
  <p class="text-light-primary">
    {subtitle}
  </p>
</button>
