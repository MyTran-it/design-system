<script>
  import TabItem from '$lib/components/Header/Tabs/tabItem.svelte'
  import Tabs from '$lib/components/Header/Tabs/tabs.svelte'

  import Header from '$lib/components/Header/header.svelte'
  import HeaderInfo from '$lib/components/Header/headerInfo.svelte'
  import PageTitle from '$lib/components/Header/pageTitle.svelte'
  import Summary from '$lib/components/Summary/summary.svelte'
  import Layout from '../+layout.svelte'

</script>

<Layout>
  <svelte:fragment slot="header">
    <PageTitle pageTitle="Demo hehe" />
    <HeaderInfo size="xl">
      <div>
        <p>BREINLEN</p>
        <p>Victoria</p>
        <p class="text-light-primary">20/01/1999</p>
      </div>
      <br />
      <div>
        <p>>>VICTORIA>BREINLEN>></p>
        <p class="text-light-primary">Créer le 23/03/22</p>
      </div>
    </HeaderInfo>
    <!-- <Tabs selected="1">
      <TabItem>En cours</TabItem>
      <TabItem>Terminés</TabItem>
    </Tabs> -->
    <slot name="header" />
  </svelte:fragment>
</Layout>

<slot />
