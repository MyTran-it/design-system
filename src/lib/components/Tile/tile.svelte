<script>
  /**
   * Set to `true` for no padding
   */
  export let noPadding = false

  /**
   * Set to `true` for no margin
   */
  export let noMargin = false

  /**
   * Set style of tile
   * @type {'dark' | 'light' | 'noColor' | 'disabled'}
   */
  export let style = 'dark'

  $: tileProps = {
    class: [
      'mh--tile',
      style,
      noMargin && 'noMargin',
      noPadding && 'noPadding',
      $$restProps.class,
    ]
      .filter(Boolean)
      .join(' '),
  }
</script>

<div {...tileProps}>
  <slot />
</div>
