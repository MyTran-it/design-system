<script>
  import { goto } from '$app/navigation'
  import Button from '$lib/components/Button/button.svelte'
  import ButtonSet from '$lib/components/Button/buttonSet.svelte'
  import Header from '$lib/components/Header/header.svelte'
  import PageTitle from '$lib/components/Header/pageTitle.svelte'
  import DatePicker from '$lib/components/Input/DatePicker/datePicker.svelte'
  import FileUploader from '$lib/components/Input/FileUpload/fileUploader.svelte'
  import FormRow from '$lib/components/Input/FormRow/formRow.svelte'
  import Input from '$lib/components/Input/Input.svelte'
  import InputSelect from '$lib/components/Input/InputSelect/inputSelect.svelte'
  import Search from '$lib/components/Search/search.svelte'
  import Tile from '$lib/components/Tile/tile.svelte'
  import Toggle from '$lib/components/Toggle/toggle.svelte'
</script>

<Header>
  <PageTitle
    size="sm"
    pageTitle="Grid layout example"
    on:goBack={() => goto('/')}
  />
  <Search inHeader />
</Header>

<h1 class="flex justify-center" style="margin-top: 5rem; color: #06332E">
  Nouveau profil patient·e
</h1>

<div class="test-grid-layout">
  <Tile style="light" noMargin>
    <h3>Identité</h3>
    <Input label="Prénom *" />
    <Input label="Nom *" />
    <DatePicker label="Date de naissance *" />
    <p class="text-light-primary">*champs obligatoires</p>
  </Tile>

  <Tile class="grid-row-span-2" style="light" noMargin>
    <h3>Prise en charge</h3>
    <Input label="N° de sécurité sociale" />
    <FormRow columns="2">
      <Input label="Rang" />
      <Input label="Organisme" />
    </FormRow>

    <Toggle
      labelA="Ajouter une pièce jointe"
      labelB="Ajouter une pièce jointe"
    />

    <InputSelect label="Type de document" value="Mutuelle" />
    <FileUploader hideLabel placeholder="File uploader" />
  </Tile>

  <Tile style="light" noMargin>
    <h3>Contact</h3>
    <Input label="Adresse" icon="location" />
    <FormRow
      columns="2"
      col1="1"
      col2="16"
      label="N° de téléphone"
      sublabel="use formRow + inputSelect (country select) + input"
    >
      <InputSelect
        placeholder="Country"
        value="France"
        shouldFilterItem
        hideLabel
        noMargin
      />
      <Input type="tel" icon="phone" hideLabel noMargin />
    </FormRow>
  </Tile>
</div>

<ButtonSet stacked>
  <Button kind="warning">Créer le profil</Button>
  <Button kind="primary-outline">Annuler</Button>
</ButtonSet>

<style>
  .test-grid-layout {
    display: grid;
    grid-template-columns: 1fr;
    padding: 5rem 0rem;
    gap: 2rem;
  }

  @media screen and (min-width:640px) {
    .test-grid-layout {
      padding: 5rem 8rem;
      display: grid;
      gap: 2rem;
      grid-template-columns: 1fr 1fr;
    }
  }

  :global(.grid-row-span-2) {
    grid-row: span 2;
  }
</style>
