<script>
  import { goto } from '$app/navigation'
  import ButtonCircle from '$lib/components/Button/CircleButton/buttonCircle.svelte'
  import Button from '$lib/components/Button/button.svelte'
  import ButtonSet from '$lib/components/Button/buttonSet.svelte'
  import ProgressBar from '$lib/components/Header/ProgressBar/progressBar.svelte'
  import Header from '$lib/components/Header/header.svelte'
  import HeaderSection from '$lib/components/Header/headerSection.svelte'
  import MainHeader from '$lib/components/Header/mainHeader.svelte'
  import PageTitle from '$lib/components/Header/pageTitle.svelte'
  import DatePicker from '$lib/components/Input/DatePicker/datePicker.svelte'
  import FileUploader from '$lib/components/Input/FileUpload/fileUploader.svelte'
  import FormRow from '$lib/components/Input/FormRow/formRow.svelte'
  import Input from '$lib/components/Input/Input.svelte'
  import InputSelect from '$lib/components/Input/InputSelect/inputSelect.svelte'
  import Link from '$lib/components/Link/link.svelte'
  import Marginer from '$lib/components/Marginer/marginer.svelte'
  import Section from '$lib/components/Section/section.svelte'
  import Tile from '$lib/components/Tile/tile.svelte'
  import Tooltip from '$lib/components/Tooltip/tooltip.svelte'

  let state = ''
  let value = 0
  let canCreate = false

  //prise en charge & tooltip
  let expanded = false

  let nom = ''
  let prenom = ''
  let date = ''
  let adresse = ''
  let phone = ''
  let files = ''

  function checkStep() {
    /** add check valid date before calcul value*/
    value = !!nom + !!prenom + !!date + !!adresse + !!phone + !!files
  }

  function enoughToCreate() {
    canCreate = nom && prenom && date && adresse && phone
  }

  $: checkStep(nom, prenom, date, adresse, phone, files)

  $: enoughToCreate(nom, prenom, date, adresse, phone)
</script>

<Header>
  <PageTitle
    size="sm"
    pageTitle="Connexion"
    previousPage="/psst-demo"
    goBackOverride={() => {
      if (state == 'noEmail') {
        state = ''
      } else if (state == 'createProfile') {
        state = 'noEmail'
      } else if (state == 'form') {
        state = 'createProfile'
      } else if (state == 'guide') {
        state = 'form'
      } else goto('/psst-demo')
    }}
  />
  {#if state == 'form'}
    <ProgressBar max={5} bind:value />
  {:else if state == 'guide'}
    <HeaderSection
      title="Attestation de droit"
      subTitle="Comment la télécharger en 4 étapes"
    />
  {:else}
    <MainHeader message="Bienvenue !" />
  {/if}
</Header>

{#if state == ''}
  <Tile style="noColor">
    <h3>Connexion ou inscription</h3>
    <Marginer direction="vertical" />
    <p>
      Que vous soyez déjà enregistré ou non, le processus est le même : il
      suffit de saisir votre adresse email.
    </p>
  </Tile>

  <Tile style="light">
    <Input label="Adresse mail" helperText="Votre adresse doit-être valide" />
    <Button style="width:80%" class="flex mx-auto" label="Envoyer" on:click={() => (state = 'createProfile')} />
  </Tile>

  <Marginer direction="vertical" margin="2rem" />

  <Link class="flex justify-center" on:click={() => (state = 'noEmail')}>
    Je n'ai pas d'adresse mail
  </Link>
{:else if state == 'noEmail'}
  <Tile style="noColor">
    <h3>Pas d'adresse mail ?</h3>
    <Marginer direction="vertical" />
    <p>
      Rapprochez-vous du professionel de santé vous accueillant pour le test. Ce
      dernier sera en mesure de créer votre profil pour vous.
    </p>
  </Tile>

  <div class="autoMargin">
    <ButtonCircle on:click={() => (state = '')} />
  </div>
{:else if state == 'createProfile'}
  <Tile style="noColor">
    <h3>Création du profil</h3>
    <Marginer direction="vertical" />
    <p>
      Pour créer votre profil automatiquement, scannez le recto votre carte
      d'identité.
    </p>
    <Marginer direction="vertical" />
    <p class="text-light-primary">ici disclaimer sur le stockage de la photo</p>
  </Tile>

  <ButtonSet stacked>
    <Button label="Scanner la carte" />
    <Button
      kind="primary-outline"
      label="Je n'ai pas ma carte"
      on:click={() => {
        state = 'form'
      }}
    />
  </ButtonSet>
{:else if state == 'form'}
  <form>
    <Section expanded label="Identité">
      <div slot="content">
        <Input label="Prénom *" bind:value={prenom} />
        <Input label="Nom *" bind:value={nom} />
        <DatePicker label="Date de naissance *" bind:value={date} />
        <span class="text-light-primary">* champs obligatoires</span>
      </div>
    </Section>

    <Section label="Contact" textInfo="- optionnel">
      <div slot="content">
        <Input label="Adresse" icon="location" bind:value={adresse} />
        <FormRow label="N° de téléphone" columns="2" col1="1" col2="4">
          <InputSelect
            hideLabel
            placeholder="Contry"
            items={[{ id: '1', text: 'France' }]}
          />
          <Input hideLabel type="number" icon="phone" bind:value={phone} />
        </FormRow>
      </div>
    </Section>

    <Section bind:expanded label="Prise en charge" textInfo="- optionnel">
      <div slot="content">
        <FileUploader
          label="Ajouter votre attestation de droit"
          helperText="Cliquer pour charger un fichier"
          invalidTypeText="Le fichier doit être au format .pdf"
          bind:files
          accept={['pdf']}
        />
        <p>
          Votre attestation de droit est téléchargeable sur votre <Link
            normalStyle
            href="https://www.ameli.fr/"
            newTab
            disabled
          >
            compte Améli
          </Link>, rubrique "mes démarches"
        </p>
        <Tooltip open={expanded && !files} position="bottom" icon="info">
          <div slot="tooltipText">
            <p>
              Attention, en l'absence de prise en charge, vous ne serez pas
              remboursé.
            </p>
            <Marginer direction="vertical" />
            <p>Vous pourrez la rajouter ultérieurement.</p>
          </div>
        </Tooltip>
        <ButtonSet>
          <Button
            kind="secondary-outline"
            label="Besoin d'aide"
            icon="question"
            on:click={() => (state = 'guide')}
          />
        </ButtonSet>
      </div>
    </Section>

    <ButtonSet stacked>
      <Button
        kind={value == 6 ? 'warning' : 'primary'}
        label="Créer le profil"
        disabled={!canCreate}
      />
      <Button label="Annuler" kind="primary-outline" />
    </ButtonSet>
  </form>
{:else if state == 'guide'}
  <Tile style="noColor" class="flex column gap__3">
    <Button
      class="autoMargin"
      kind="secondary-outline"
      label="Voir la démarche en vidéo"
      icon="video"
    />
    <p>1. Rendez-vous sur <Link inline href>ameli.fr</Link></p>
    <hr class="form-divider dark" />
    <p>
      2. Connectez-vous à votre compte en cliquant sur le bouton: "Compte améli"
    </p>
    <img
      class="autoMargin"
      alt="step1"
      width="300px"
      src="/images/attes1.png"
    />
    <hr class="form-divider dark" />
    <p>
      3. Dans la rubrique "mes démarches ", cliquez sur "télécharger mon
      attestation de droits"
    </p>
    <img
      class="autoMargin"
      alt="step2"
      width="300px"
      src="/images/attes2.png"
    />
    <hr class="form-divider dark" />
    <Tile style="light" noMargin>
      <p>
        4. Déposez le fichier pdf que vous avez téléchargé en cliquant sur le
        “+” ci-dessous
      </p>
      <Marginer direction="vertical" margin="2rem" />
      <FileUploader
        label="Ajouter votre attestation de droit"
        helperText="Cliquer pour charger un fichier"
        invalidTypeText="Le fichier doit être au format .pdf"
        bind:files
        accept={['pdf']}
      />
    </Tile>
  </Tile>
{/if}
