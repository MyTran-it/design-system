<script>
  import { goto } from '$app/navigation'
  import Button from '$lib/components/Button/button.svelte'
  import ButtonSet from '$lib/components/Button/buttonSet.svelte'
  import Header from '$lib/components/Header/header.svelte'
  import MainHeader from '$lib/components/Header/mainHeader.svelte'
  import SearchPatient from '$lib/components/Header/SearchPatient/searchPatient.svelte'
  import Icon from '$lib/components/Icon/icon.svelte'
  import Marginer from '$lib/components/Marginer/marginer.svelte'
  import Modal from '$lib/components/Modal/modal.svelte'
  import Search from '$lib/components/Search/search.svelte'
  import Layout from './+layout.svelte'
  import ChronoTimer from '$lib/components/ChronoTimer/chronoTimer.svelte'

  let listdata = [
    { id: 0, text: 'Vaciné(e) (2 doses ou plus)' },
    { id: 1, text: 'Partiellement vacciné(e) (1 dose)' },
    { id: 2, text: 'Non vacciné(e)' },
    { id: 3, text: 'Vaciné(e) (2 doses ou plus)' },
    { id: 4, text: 'Partiellement vacciné(e) (1 dose)' },
    { id: 5, text: 'Non vacciné(e)' },
  ]

  let listEst = [
    { id: 0, text: 'Pharmacie A' },
    { id: 1, text: 'Pharmacie B' },
    { id: 2, text: 'Pharmacie C' },
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

  export let data

  let selectedEstId = 0
</script>

<Layout {data}>
  <svelte:fragment slot="header">
    <!-- <MainHeader
      primaryIcon="host"
      secondaryIcon="setting"
      on:primaryAction={() => alert('host')}
      on:secondaryAction={() => alert('setting')}
    >
      <div>
        <h2>Bonjour, Marie Biologique</h2>
        <p>
          Pharmacie des Champs aux Melles
        </p>
      </div>
    </MainHeader> -->
    <SearchPatient
      kind="primary"
      icon="location-company"
      items={listEst}
      withLine
      bind:selectedItemId={selectedEstId}
    >
      <div>
        <h2>Bonjour, Marie Biologique</h2>
        <p>{listEst[selectedEstId].text}</p>
      </div>
    </SearchPatient>
  </svelte:fragment>

  <Marginer direction="vertical" margin="3rem" />

  <ButtonSet class="my-auto" stacked>
    <Button
      label="Go to icon library"
      icon="next"
      kind="warning"
      on:click={() => goto('/icon')}
    />
    <Button
      label="Go to Button part"
      icon="next"
      on:click={() => goto('/button')}
    />
    <Button
      kind="primary-outline"
      label="Go to Form part"
      icon="next"
      on:click={() => goto('/form')}
    />
    <Button
      kind="secondary-outline"
      label="Go to Header part"
      icon="next"
      on:click={() => goto('/header')}
    />
    <Button
      kind="warning"
      label="Application for IVD"
      icon="next"
      on:click={() => goto('/ivd')}
    />
    <Button label="Modal" icon="next" on:click={() => goto('/modal')} />
    <Button
      kind="primary-outline"
      label="Grid-Layout"
      icon="next"
      on:click={() => goto('/grid')}
    />
    <Button
      label="Peseshet Demo"
      kind="warning"
      icon="next"
      on:click={() => goto('/psst-demo')}
    />
  </ButtonSet>
</Layout>
