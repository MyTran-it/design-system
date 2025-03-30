<script>
  import Header from '$lib/components/Header/header.svelte'
</script>

<Header>
  <slot name="header" />
</Header>
<slot />
