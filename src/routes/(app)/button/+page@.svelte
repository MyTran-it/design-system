<script>
  import Button from '$lib/components/Button/button.svelte'
  import ButtonAnimation from '$lib/components/Button/AnimationButton/buttonAnimation.svelte'
  import ButtonCircle from '$lib/components/Button/CircleButton/buttonCircle.svelte'
  import ButtonSet from '$lib/components/Button/buttonSet.svelte'
  import InfoCard from '$lib/components/InfoCard/infoCard.svelte'
  import InfoTag from '$lib/components/Tag/InfoTag/infoTag.svelte'
  import SliderToggle from '$lib/components/SliderToggle/sliderToggle.svelte'
  import Tag from '$lib/components/Tag/tag.svelte'
  import Toggle from '$lib/components/Toggle/toggle.svelte'
  import BigSquareButton from '$lib/components/Button/BigSquareButton/bigSquareButton.svelte'
  import ButtonCard from '$lib/components/Button/CardButton/buttonCard.svelte'
  import Header from '$lib/components/Header/header.svelte'
  import PageTitle from '$lib/components/Header/pageTitle.svelte'
  import Tabs from '$lib/components/Header/Tabs/tabs.svelte'
  import TabItem from '$lib/components/Header/Tabs/tabItem.svelte'
  import Search from '$lib/components/Search/search.svelte'
  import BigRectangleButton from '$lib/components/Button/BigRectangleButton/bigRectangleButton.svelte'
  import Notification from '$lib/components/Notification/notification.svelte'
  import FlagToggle from '$lib/components/Toggle/FlagCheckbox/flagCheckbox.svelte'
  import Pagination from '$lib/components/Pagination/pagination.svelte'

  //Example slider test
  let value = 0.5
  let value2 = 0
  let value3 = 1

  let roles = [
    'host',
    'tester',
    'prescriber',
    'validator',
    'sampler',
    'collecter',
  ]

  let _roles = []

  $: console.log(_roles)
  //Example for Button animation

  let isLoading = false
  let isDone = false

  let callApi = () => {
    isLoading = true
    isDone = false
    setTimeout(() => {
      isLoading = false
      isDone = true
    }, 2000)
  }

  let isLoading2 = false
  let isDone2 = false

  let callApi2 = () => {
    isLoading2 = true
    isDone2 = false
    setTimeout(() => {
      isLoading2 = false
      isDone2 = true
    }, 2000)
  }

  let callApi3 = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve('ok')
      }, 500)
    })
  }

  let selectedItem
  //Example for search bar

  let listTag = ['Antigénique', 'PCR']
  let listFilter = []

  let listdata = [
    { id: 0, text: 'Vaciné(e) (2 doses ou plus)', subtext: 'test' },
    { id: 1, text: 'Partiellement vacciné(e) (1 dose)', subtext: 'test' },
    { id: 2, text: 'Non vacciné(e)', subtext: 'test' },
    { id: 3, text: 'Vaciné(e) (2 doses ou plus)', subtext: 'test' },
    { id: 4, text: 'Partiellement vacciné(e) (1 dose)', subtext: 'test' },
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

  let openNotif = 'true'
</script>

<Header>
  <PageTitle
    pageTitle="Button part"
    goBackOverride={() => alert('You just use goBackOverride')}
  />
  <Tabs selected="0">
    <TabItem href="/button">Button</TabItem>
    <TabItem href="/form">Form</TabItem>
    <TabItem href="/header">Header</TabItem>
  </Tabs>
</Header>

<Pagination style="margin: 5rem" totalPage={6} />

<FlagToggle labelOn="Marqué comme urgent" labelOff="Urgent?" />

<div>
  <Button label="open notification" on:click={() => (openNotif = !openNotif)} />
  <Notification
    bind:open={openNotif}
    kind="warning"
    timeout="500"
    hideCloseButton
  >
    La réponse à cette question est anonyme et visible uniquement par la
    personne validant les résultats.
  </Notification>

  <div>
    <h1>H1 Titre de page</h1>
    <h2>H2 Titre de section</h2>

    <h3>H3 Titre de paragraphe</h3>

    <p>
      Corps de <span class="font-semibold">texte</span>
    </p>

    <p>Input Example</p>

    <p class="text-light-primary">Corps de texte léger</p>

    <button> Bouton </button>
  </div>

  <br />
  <hr />
  <br />

  <div style="">
    <div>
      <h2>Pro + patient·es</h2>

      <ButtonSet>
        <BigSquareButton
          kind="double"
          icon="folder-detail"
          titlePrimaryButton="Patient·es"
          subtitlePrimaryButton="voir tout"
          on:primaryAction={() => {
            alert('Voir tous les tests')
          }}
          on:secondaryAction={() => {
            alert('Créer un test')
          }}
          titleSecondaryButton="Créer profil"
          secondaryIcon="add-user"
        />

        <BigSquareButton
          kind="secondary"
          icon="folder-detail"
          titlePrimaryButton="Tous mes test"
          subtitlePrimaryButton="Victoria Breinlen"
          on:primaryAction={() => {
            alert('Voir tous les tests')
          }}
        />
      </ButtonSet>

      <ButtonSet>
        <BigSquareButton
          kind="primary-outline"
          icon="folder-detail"
          titlePrimaryButton="Dossiers"
          subtitlePrimaryButton="voir tout"
          on:primaryAction={() => {
            alert('Voir tous les tests')
          }}
        />
        <BigSquareButton
          disabled
          kind="primary"
          icon="folder-detail"
          titlePrimaryButton="Tous mes test"
          subtitlePrimaryButton="Victoria Breinlen"
          on:primaryAction={() => {
            alert('Voir tous les tests')
          }}
        />
      </ButtonSet>

      <ButtonSet stacked>
        <BigRectangleButton
          kind="primary-outline"
          icon="add-user"
          title="Créer patient"
          subtitle="Nouveau profil"
          on:click={() => {
            alert('Voir tous les tests')
          }}
        />
        <BigRectangleButton
          kind="primary"
          icon="qrcode"
          title="Scanner"
          subtitle="N'importe quel QR code"
          on:click={() => {
            alert('Voir tous les tests')
          }}
        />
      </ButtonSet>

      <br />
      <hr />
      <br />

      <p>Example Button set stacked</p>
      <ButtonSet stacked>
        <Button kind="warning" on:click={() => alert('Effectuer le test')}>
          Effectuer le test
        </Button>
        <Button
          kind="primary"
          icon="save"
          on:click={() => alert('Enregistrer le prélèvement')}
        >
          Enregistrer le prélèvement
        </Button>
        <Button kind="primary-outline" on:click={() => alert('Annuler')}>
          Annuler
        </Button>
      </ButtonSet>
      <ButtonSet>
        <Button kind="secondary-outline" icon="add-filled" shorty>Créer</Button>
        <Button disabled kind="tertiary" icon="add-filled" shorty>Créer</Button>
      </ButtonSet>
      <ButtonSet>
        <Button size="lg" kind="secondary-outline" icon="add-filled" shorty>
          Créer
        </Button>
        <Button size="lg" disabled kind="tertiary" icon="add-filled" shorty>
          Créer
        </Button>
      </ButtonSet>
      <ButtonSet>
        <Button kind="secondary-outline" icon="add-filled">Créer</Button>

        <Button disabled kind="tertiary" icon="add-filled">Créer</Button>
      </ButtonSet>
    </div>

    <br />
    <hr />
    <br />

    <div>
      <h2>Circle Button</h2>
      <h3>Portail Peseshet</h3>
      <ButtonSet>
        <ButtonCircle
          size="sm"
          icon="search"
          on:click={() => alert('this is circle button')}
        />

        <ButtonCircle
          kind="secondary"
          icon="search"
          on:click={() => alert('this is circle button')}
        />
      </ButtonSet>
      <h3>Appli Coursier</h3>
      <ButtonSet>
        <ButtonCircle
          size="lg"
          icon="search"
          on:click={() => alert('this is circle button')}
        />
        <ButtonCircle
          kind="secondary"
          size="lg"
          on:click={() => alert('this is circle button')}
        />
      </ButtonSet>
    </div>
  </div>

  <br />
  <hr />
  <br />

  <h2>Bouton carte</h2>
  <div style="display: flex; gap: 2rem">
    <div>
      <h3>Big, no inner</h3>
      <ButtonCard
        icon="new-folder"
        size="lg"
        on:click={() => alert('hi')}
        disabled
      />
    </div>
    <div>
      <h3>Medium, inner</h3>
      <ButtonCard icon="new-folder" inner on:click={() => alert('hi')} />
    </div>
    <div>
      <h3>Small, no inner</h3>
      <ButtonCard icon="new-folder" size="sm" on:click={() => alert('hi')} />
    </div>
    <div>
      <h3>Thinner, no inner</h3>
      <ButtonCard
        icon="new-folder"
        size="thinner"
        inner
        on:click={() => alert('hi')}
      />
    </div>
  </div>
  <br />
  <hr />
  <br />

  <h2>Toggle urgent</h2>
  <div style="display: flex; justify-content: center;">
    <Toggle invalid labelOn="Marqué comme urgent" labelOff="Urgent?" />
  </div>

  <div style="padding: 2rem;">
    <ButtonSet stacked>
      <Toggle>"L'imprimante est partagée par plusieurs utilisateurs"</Toggle>
      <Button icon="print">Imprimer</Button>
      <Button kind="primary-outline">Annuler</Button>
    </ButtonSet>
  </div>
  <div style="height: 50rem; background-color: #e6efef; padding: 1rem">
    <h3>Toggle avec icon, invalid</h3>
    <Toggle
      toggled
      disabled
      invalid
      icon
      labelOn="Marqué comme urgent"
      labelOff="Urgent?"
    />
    <br />
    <h3>Toggle sans icon</h3>
    <Toggle
      labelOn="Remplissage automatique"
      labelOff="Remplissage automatique"
    />
    <br />
    <h3>Toggle avec icon, disabled</h3>
    <Toggle
      icon
      labelOn="Remplissage automatique"
      labelOff="Remplissage automatique"
      disabled
    />
    <div
      style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin: 2rem;"
    >
      {#each roles as r}
        <Toggle
          labelOff={r}
          labelOn={r}
          name={r}
          bind:group={_roles}
          value={r}
        />
      {/each}
    </div>
    <p>
      List selected: <br />
      {_roles}
    </p>
  </div>

  <br />
  <hr />
  <br />

  <h2>Slider Test Result</h2>
  <ButtonSet stacked>
    <SliderToggle
      label="Ligne de test (T)"
      labelOff="Absente"
      labelOn="Présente"
      bind:value
    />
    <SliderToggle
      label="Ligne de test (A)"
      labelOff="Absente"
      labelOn="Présente"
      bind:value={value2}
    />
    <SliderToggle
      label="Ligne de test (B)"
      labelOff="Absente"
      labelOn="Présente"
      bind:value={value3}
    />
  </ButtonSet>
  <br />
  <hr />
  <br />

  <h2>Button with Animation</h2>

  <div
    style="height: 10rem; padding: 2rem; display: flex; align-items: center; gap: 1rem"
  >
    <h3>Loading bar (auto loading)</h3>
    <ButtonAnimation
      loadingLabel="Envoi en cours..."
      doneLabel="Réussi !"
      bind:isLoading
      bind:isDone
      loadingFunction={callApi3}
      type="loading-bar"
    />
  </div>

  <div
    style="height: 10rem; padding: 2rem; display: flex; align-items: center; gap: 1rem"
  >
    <h3>Button loading (click for animation)</h3>
    <ButtonAnimation
      icon="hourglass"
      clickLabel="Cliquer pour envoyer"
      loadingLabel="Envoi en cours..."
      doneLabel="Réussi !"
      bind:isLoading={isLoading2}
      bind:isDone={isDone2}
      loadingFunction={callApi3}
      type="button"
    />
  </div>

  <br />
  <hr />
  <br />

  <h2>Tags</h2>
  <div style="padding: 2rem; background-color: #06332E; color: #FFFFFF">
    {#each listTag as tag}
      <Tag
        label={tag}
        on:select={(e) => {
          if (e.detail.selected) listFilter = [...listFilter, tag]
          else listFilter = listFilter.filter((e) => e !== tag)
        }}
      />
    {/each}
    <br />
    <br />
    <h3>List filter example (action on tag):</h3>
    <p>
      {listFilter}
    </p>
  </div>

  <br />
  <hr />
  <br />

  <h2>Infomation</h2>

  <br />

  <h3>Info Card</h3>

  <InfoCard style="margin: 2rem">
    La réponse à cette question est anonyme et visible uniquement par la
    personne validant les résultats.
  </InfoCard>

  <br />

  <Notification kind="success">
    La réponse à cette question est anonyme et visible uniquement par la
    personne validant les résultats.
  </Notification>

  <br />

  {#if openNotif}
    <Notification kind="warning">
      La réponse à cette question est anonyme et visible uniquement par la
      personne validant les résultats.
    </Notification>
  {/if}

  <h3>Info Tag</h3>
  <div style="height: 15rem; background-color: hsl(0, 0%, 95%);">
    <span>Status: &nbsp;</span>
    <InfoTag label="Prioritaire" />
    <InfoTag label="Prélèvement" kind="tertiary-light" />
    <InfoTag label="Transport" kind="neutral" />
    <InfoTag label="Dépassé : 15:34" kind="warning" rightIcon="timer" />
    <InfoTag label="Questionnaire incomplet" kind="disabled" />
    <InfoTag label="Annulé" kind="error" />
    <InfoTag label="15:34" leftIcon="timer" kind="warning" size="xl" />
  </div>

  <br />
  <hr />
  <br />

  <h3>Barre de recherche</h3>
  <h3><i> normal </i></h3>
  <div style=" padding-bottom: 3rem; ">
    <Search
      withDropdownList
      bind:items={listSearchResult}
      on:search={async (e) => {
        listSearchResult = await searchAPI(e.detail.searchValue)
      }}
      bind:value={searchString1}
      emptyMessage="It's empty..."
    />
  </div>

  <h3><i> with prop "expanded" </i></h3>
  <div style="height: auto">
    <Search
      withDropdownList
      expanded
      bind:items={listSearchResult}
      on:search={async (e) => {
        listSearchResult = await searchAPI(e.detail.searchValue)
      }}
      bind:value={searchString1}
      emptyMessage="It's empty..."
    >
      <div slot="expanded-content" class="flex justify-center">
        <Tag label="Antigénique" />
        <Tag label="PCR" />
        <Tag label="Test" selected />
      </div>
    </Search>
  </div>
</div>

<style>
</style>
