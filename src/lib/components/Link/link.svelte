<script>
  /** Set to `true` to disable the link */
  export let disabled = false

  /**
   * Specify the href value
   * @type {string}
   */
  export let href = undefined

  /**
   * Set to `true` to open link in new tab
   */
  export let newTab = false

  /**
   * Set to `true` to normal style for Link
   */
  export let normalStyle = false
</script>

<a
  class={['mh--link', $$restProps.class].filter(Boolean).join(' ')}
  class:normalStyle
  {href}
  target={newTab && !disabled ? '_blank' : '_self'}
  aria-disabled={disabled}
  on:click
>
  <slot />
</a>
