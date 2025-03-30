<script>
  import { goto } from '$app/navigation'
  import Header from '$lib/components/Header/header.svelte'
  import HeaderInfo from '$lib/components/Header/headerInfo.svelte'
  import HeaderSection from '$lib/components/Header/headerSection.svelte'
  import MainHeader from '$lib/components/Header/mainHeader.svelte'
  import PageTitle from '$lib/components/Header/pageTitle.svelte'
  import ProgressBar from '$lib/components/Header/ProgressBar/progressBar.svelte'
  import SearchPatient from '$lib/components/Header/SearchPatient/searchPatient.svelte'
  import TabItem from '$lib/components/Header/Tabs/tabItem.svelte'
  import Tabs from '$lib/components/Header/Tabs/tabs.svelte'
  import Search from '$lib/components/Search/search.svelte'
  import Section from '$lib/components/Section/section.svelte'
  import Summary from '$lib/components/Summary/summary.svelte'
  import Icon from '$lib/components/Icon/icon.svelte'
  import Tile from '$lib/components/Tile/tile.svelte'

  let selectedTab = 0

  let listPatient = [
    { id: 1, text: 'Victoria BREINLEN' },
    { id: 2, text: 'Antoine DAVID' },
    { id: 3, text: 'Thomas DEVILLERS' },
    { id: 4, text: 'Marie-Laure VAILLE' },
    { id: 5, text: 'Victoria BREINLEN' },
    { id: 6, text: 'Antoine DAVID' },
    { id: 7, text: 'Thomas DEVILLERS' },
    { id: 8, text: 'Marie-Laure VAILLE' },
  ]

  let listdata = [
    { id: 0, text: 'Vaciné(e) (2 doses ou plus)' },
    { id: 1, text: 'Partiellement vacciné(e) (1 dose)' },
    { id: 2, text: 'Non vacciné(e)' },
    { id: 3, text: 'Vaciné(e) (2 doses ou plus)' },
    { id: 4, text: 'Partiellement vacciné(e) (1 dose)' },
    { id: 5, text: 'Non vacciné(e)' },
  ]

  let searchString1 = ''
  let listSearchResult = []
  async function searchAPI(text) {
    return new Promise((resolve) => {
      setTimeout(() => {
        return resolve(
          listdata.filter(
            (elem) => elem.text.toLowerCase().search(text.toLowerCase()) > -1
          )
        )
      }, 500)
    })
  }

  $: console.log(listPatient)
</script>

<Header>
  <PageTitle pageTitle="Header part" on:goBack={() => goto('/')} />
  <!-- <Tabs selected="2">
    <TabItem href="/button">Button</TabItem>
    <TabItem href="/form">Form</TabItem>
    <TabItem href="/header">Header</TabItem>
  </Tabs> -->

  <HeaderInfo>
    <p>
      <span class="font-semibold"> BREINLEN </span>
      Victoria
    </p>
    <p class="text-light-primary">20/01/1999</p>
    <p class="text-light-primary text-right">Créer le 23/03/22</p>
  </HeaderInfo>

  <!-- <SearchPatient
    icon="location-company"
    items={listPatient}
    placeholder="Choisir un(e) patient(e)"
    kind="primary"
  /> -->
  <ProgressBar value="1" max="5" />
</Header>

<Section label="Main Header" textInfo="- to use at top of <Header/>">
  <div slot="content">
    <div style="background-color: #06332E; color: white;">
      <MainHeader message="Bonjour !" />
    </div>
    <br />
    <div style="background-color: #06332E; color: white;">
      <MainHeader message="With icon" primaryIcon="add-user" />
    </div>
    <br />
    <div style="background-color: #06332E; color: white;">
      <MainHeader
        message="With 2 icons"
        primaryIcon="add-user"
        secondaryIcon="setting"
      />
    </div>
  </div>
</Section>

<Section label="Page Title" textInfo="- to use at top of <Header/>">
  <div slot="content">
    <div style="background-color: #06332E; color: white;">
      <PageTitle size="sm" pageTitle="Size small" />
    </div>
    <br />
    <div style="background-color: #06332E; color: white;">
      <PageTitle size="xl" pageTitle="Size big" />
    </div>
  </div>
</Section>

<Section label="Header Info">
  <div slot="content">
    <div style="background-color: #06332E; color: white;">
      <HeaderInfo>
        <Summary
          urgent
          subTitle1="28/08/2022 à 18:08"
          subTitle2="Pharmacie des Champs aux Melles, Paris"
        >
          <div slot="title">
            <p>
              <Icon name="cassette" />
              Test rapide antigénique Covid-19
            </p>
          </div>
        </Summary>

        <Summary
          urgent
          icon="cassette"
          title="Test rapide antigénique Covid-19"
          subTitle1="28/08/2022 à 18:08"
          subTitle2="Pharmacie des Champs aux Melles, Paris"
        />
      </HeaderInfo>
    </div>
    <br />
    <div style="background-color: #06332E; color: white;">
      <HeaderInfo>
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
    </div>
  </div>
</Section>

<Section label="Header Section">
  <div slot="content">
    <h3>title && subTitle</h3>

    <Tile style="disabled">
      <HeaderSection
        title="Attestation de droit"
        subTitle="Comment la télécharger en 4 étapes"
      />
    </Tile>

    <div class="form-divider" style="margin-top: 2rem;" />

    <h3>Just Title</h3>
    <div style="background-color: #06332E; color: white;">
      <HeaderSection title="Scanner QR code patient·e" />
    </div>
  </div>
</Section>

<Section label="Progress bar" textInfo="- to use at the end of <Header/>">
  <div slot="content">
    <div style="background-color: #06332E;">
      <ProgressBar value="1" max="5" />
      <ProgressBar value="2" max="5" />
      <ProgressBar value="3" max="5" />
      <ProgressBar value="4" max="5" />
      <ProgressBar value="5" max="5" />
    </div>
  </div>
</Section>

<Section label="Tabs" textInfo="- to use at the end of <Header/>">
  <div slot="content">
    <h3>2 ways to use this:</h3>
    <br />
    <p>* Use to change url</p>
    <br />
    <p>
      * Use to change between state of page (which means all components will be
      render at first)
    </p>
    <br />
    <div
      style="background-color: #06332E;  border-radius: 0 0 2.5rem 2.5rem;
   margin-bottom: 2rem; overflow: hidden;"
    >
      <Tabs
        bind:selected={selectedTab}
        on:change={(e) => {
          console.log('currentTab', e.detail)
        }}
      >
        <TabItem disabled>Button</TabItem>
        <TabItem>Form</TabItem>
        <TabItem>Header</TabItem>
      </Tabs>
    </div>
    <div>
      <h3>Click to change content</h3>
      {#if selectedTab == 0}
        <p>Content 1</p>
      {:else if selectedTab == 1}
        <p>Content 2</p>
      {:else if selectedTab == 2}
        <p>Content 3</p>
      {/if}
    </div>
  </div>
</Section>

<Section
  expanded
  label="Search Patient"
  textInfo="- to use at the end of <Header/>"
>
  <div slot="content">
    <SearchPatient
      icon="location-company"
      items={listPatient}
      placeholder="Choisir un(e) patient(e)"
      kind="primary"
    />
  </div>
</Section>

<Section label="Search" textInfo="- to use at the end of <Header/>">
  <div slot="content">
    <Search
      inHeader
      withDropdownList
      bind:items={listSearchResult}
      on:search={async (e) => {
        listSearchResult = await searchAPI(e.detail.searchValue)
      }}
      bind:value={searchString1}
      emptyMessage="It's empty..."
    />
  </div>
</Section>
