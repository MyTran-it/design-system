<script>
  import { goto } from '$app/navigation'
  import DatePicker from '$lib/components/Input/DatePicker/datePicker.svelte'
  import FileUploader from '$lib/components/Input/FileUpload/fileUploader.svelte'
  import FormRow from '$lib/components/Input/FormRow/formRow.svelte'
  import Input from '$lib/components/Input/Input.svelte'
  import InputSelect from '$lib/components/Input/InputSelect/inputSelect.svelte'
  import Section from '$lib/components/Section/section.svelte'
  import TakePhoto from '$lib/components/Input/FileUpload/takePhoto.svelte'
  import Tooltip from '$lib/components/Tooltip/tooltip.svelte'
  import Button from '$lib/components/Button/button.svelte'
  import Header from '$lib/components/Header/header.svelte'
  import PageTitle from '$lib/components/Header/pageTitle.svelte'
  import Tabs from '$lib/components/Header/Tabs/tabs.svelte'
  import TabItem from '$lib/components/Header/Tabs/tabItem.svelte'
  import Footer from '$lib/components/Footer/footer.svelte'
  import FooterItem from '$lib/components/Footer/footerItem.svelte'
  import ButtonSet from '$lib/components/Button/buttonSet.svelte'
  import PasswordInput from '$lib/components/Input/passwordInput.svelte'

  let list = [
    { id: 0, text: 'Vaciné(e) (2 doses ou plus)' },
    { id: 1, text: 'Partiellement vacciné(e) (1 dose)' },
    { id: 2, text: 'Non vacciné(e)' },
    { id: 3, text: 'Vaciné(e) (2 doses ou plus)' },
    { id: 4, text: 'Partiellement vacciné(e) (1 dose)' },
    { id: 5, text: 'Non vacciné(e)' },
    { id: 6, text: 'Non vacciné(e)' },
    { id: 7, text: 'Vaciné(e) (2 doses ou plus)' },
    { id: 8, text: 'Partiellement vacciné(e) (1 dose)' },
    { id: 9, text: 'Non vacciné(e)' },
  ]

  let listCountry = [
    { id: 'VNM', text: 'Vietnam' },
    { id: 'FRA', text: 'France' },
    { id: 'AFG', text: 'Afghanistan' },
  ]

  let selectedId = 1

  let openCamera = false
  let files = []

  let openTooltip = false
  let openTooltip2 = false
</script>

{#if !openCamera}
  <Header>
    <PageTitle pageTitle="Form part" size="sm" />
    <Tabs selected="1">
      <TabItem href="/button">Button</TabItem>
      <TabItem href="/form">Form</TabItem>
      <TabItem href="/header">Header</TabItem>
    </Tabs>
  </Header>

  <Footer>
    <FooterItem icon="trash" />
  </Footer>

  <Section expanded label="Input" textInfo="- composant">
    <div slot="content">
      <Input
        required
        placeholder="this is a placeholder"
        label="Status vaccinal Covid-19"
        sublabel="this is subLabel"
        helperText="this is a helper text"
      />
      <hr class="form-divider" />
      <Input
        label="Avez-vous des riques de développer une forme grave de covid-19 ?"
        invalidText="this is a helper text"
        icon="trash"
        invalid
        required
      />
      <Input
        label="Êtes-vous professionnel(le) de santé ?"
        disabled
        icon="next"
        helperText="this is a helper text"
      />
      <hr class="form-divider" />
      <PasswordInput label="Password" />
    </div>
  </Section>

  <form>
    <Section label="DatePicker">
      <div slot="content">
        <DatePicker label="Date de naissance" required />
        
        <FormRow columns="2">
          <DatePicker label="Date de naissance" invalid noMargin />
          <DatePicker label="Date de naissance" disabled noMargin />
        </FormRow>
      </div>
    </Section>
    <Section label="Input Select">
      <div slot="content">
        <InputSelect
          placeholder=""
          label="This is a dropdown - no input"
          sublabel="use props: readonly"
          helperText="This a helperText"
          items={list}
          readonly
          required
        />
        <FormRow columns="2" col2="4" label="this is a label of a form row">
          <InputSelect
            placeholder="shouldFilter"
            helperText="This a helperText"
            items={list}
            bind:selectedId
            hideLabel
            readonly
          />
          <InputSelect
            placeholder="Option"
            helperText="This a helperText"
            items={list}
            bind:selectedId
            hideLabel
            shouldFilterItem
            noMargin
            invalid
          />
        </FormRow>
        <InputSelect
          placeholder="Option"
          helperText="This a helperText"
          items={list}
          bind:selectedId
          disabled
          hideLabel
        />
      </div>
    </Section>
  </form>

  <Section expanded label="File uploader">
    <div slot="content">
      <FileUploader
        label="Fichier upload"
        placeholder="File uploader"
        helperText="this is helper text"
        disabled
      />
      <FileUploader
        required
        label="Fichier upload with take picture"
        placeholder="File uploader"
        helperText="Charger un fichier ou prendre une photo"
        invalidSizeText="File's size has exceeded 2MB allowed"
        invalidTypeText="File's type must be jpg, jpeg, png or pdf"
        takePicture
        name="fileUploader"
        bind:files
        on:takePhoto={() => (openCamera = !openCamera)}
      />
    </div>
  </Section>

  <Section label="Tooltip">
    <div slot="content">
      <ButtonSet>
        <Tooltip bind:open={openTooltip} position="top" icon="info">
          <div slot="tooltipText">
            <p>
              Attention, en l'absence de prise en charge, vous ne serez pas
              remboursé.
            </p>
            <br />
            <p>Vous pourrez la rajouter ultérieurement.</p>
          </div>
        </Tooltip>
        <Button
          kind="secondary-outline"
          icon="info"
          label="Droits limités"
          on:click={() => (openTooltip = true)}
        />
      </ButtonSet>

      <Input
        label="Ajouter une autre adresse mail"
        on:change={() => (openTooltip2 = true)}
      />
      <Tooltip
        position="bottom"
        tooltipText="Attention, en ajoutant cette adresse vous autorisez l'utilisateur à voir toutes les informations liées à ce patient, y compris ses résultats d'analyses."
        icon="info"
        bind:open={openTooltip2}
      />
    </div>
  </Section>

  <Section label="TelInput">
    <div slot="content">
      <FormRow
        columns="2"
        col1="1"
        col2="16"
        label="N° de téléphone"
        sublabel="use formRow + inputSelect (country select) + input"
        required
      >
        <InputSelect
          placeholder="Country"
          items={listCountry}
          bind:selectedId
          value="France"
          shouldFilterItem
          hideLabel
          noMargin
        />
        <Input type="tel" icon="phone" hideLabel noMargin />
      </FormRow>

      <FormRow withButton noMargin>
        <Input hideLabel valid invalidText="hehe" />
        <Button>Login</Button>
      </FormRow>

      <FormRow columns="2">
        <InputSelect hideLabel />
        <Button />
      </FormRow>
    </div>
  </Section>
{:else}
  <div  style="width:90%" class='mx-auto my-auto'>
    <TakePhoto
      bind:open={openCamera}
      bind:files
      width="320"
      height="480"
      on:captured={() => (openCamera = !openCamera)}
    />
  </div>
{/if}
