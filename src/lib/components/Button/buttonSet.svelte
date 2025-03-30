<script>
  /** Set to `true` to stack the buttons vertically */
  export let stacked = false

  /** Set an id for the input element */
  export let id = 'mh-' + Math.random().toString(36)

  $: buttonSetProps = {
    ...$$restProps,
    class: ['mh--btn-set', stacked && 'mh--btn-set--stacked', $$restProps.class]
      .filter(Boolean)
      .join(' '),
  }
</script>

<div {id} {...buttonSetProps}>
  <slot />
</div>
