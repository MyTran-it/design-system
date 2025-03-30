<script>
  import Icon from '../Icon/icon.svelte'

  $: infoCardProps = {
    ...$$restProps,
    class: ['mh--tag--notification', $$restProps.class]
      .filter(Boolean)
      .join(' '),
  }
</script>

<div {...infoCardProps}>
  <slot />
  <Icon style="margin-left: auto" name="info" size="lg" />
</div>
