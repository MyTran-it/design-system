<script>
  import Search from '$lib/components/Search/search.svelte'
  import Layout from '../+layout.svelte'
</script>

<Layout>
  <svelte:fragment slot="header">
    <Search />
    <slot name="header" />
  </svelte:fragment>
</Layout>

<slot />
