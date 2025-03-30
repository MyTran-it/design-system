<script>
  import Icon from '../Icon/icon.svelte'

  /**
   *  Specify the kind of button
   * @type {"primary" | "primary-outline" | "secondary" | "secondary-outline" | "warning" }
   */
  export let kind = 'primary'

  /** Set to `true` to disable the button */
  export let disabled = false

  /**
   * Specify the size of button
   * @type {'md' | 'lg'}
   */
  export let size = 'md'

  /** Set to `true` if the button shorty*/
  export let shorty = false

  /** Specify the `type` attribute for the button element */
  export let type = 'button'

  /**
   * Icon name
   * @type {string}
   */
  export let icon = ''

  /**
   * Button contents
   * @type {string}
   */
  export let label = ''

  $: hasIconOnly = icon && !(label || $$slots.default)
  $: buttonProps = {
    disabled,
    type,
    ...$$restProps,
    class: [
      'mh--btn',
      `mh--btn__${size}`,
      `${kind}`,
      shorty && 'mh--btn--short',
      icon && !hasIconOnly && 'hasIcon',
      $$restProps.class,
    ]
      .filter(Boolean)
      .join(' '),
  }
</script>

<button {...buttonProps} on:click>
  <slot>
    {label}
  </slot>
  {#if icon}
    <Icon name={icon} size="lg" />
  {/if}
</button>
