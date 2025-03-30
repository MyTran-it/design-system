<script>
  import HeaderSection from '$lib/components/Header/headerSection.svelte'
  import PageTitle from '$lib/components/Header/pageTitle.svelte'
  import Layout from '../+layout.svelte'
</script>

<Layout>
  <svelte:fragment slot="header">
    <slot name="header" />
  </svelte:fragment>
</Layout>

<slot />
