<script>
  import { goto } from '$app/navigation'
  import Button from '$lib/components/Button/button.svelte'
  import ButtonSet from '$lib/components/Button/buttonSet.svelte'
  import Header from '$lib/components/Header/header.svelte'
  import PageTitle from '$lib/components/Header/pageTitle.svelte'
  import Modal from '$lib/components/Modal/modal.svelte'
  import Search from '$lib/components/Search/search.svelte'

  let modalPassive = false
  let modalDefault = false
  let modalDanger = false
</script>

<Header>
  <PageTitle size="sm" pageTitle="Modal part" on:goBack={() => goto('/')} />
  <Search inHeader />
</Header>

<ButtonSet stacked>
  <Button label="Open modal passive" on:click={() => (modalPassive = true)} />
  <Button
    kind="primary-outline"
    label="Open modal 2 buttons"
    on:click={() => (modalDefault = true)}
  />
  <Button
    kind="warning"
    label="Open modal 2 buttons danger"
    on:click={() => (modalDanger = true)}
  />
  <Button label="Open modal passive" on:click={() => (modalPassive = true)} />
  <Button
    kind="primary-outline"
    label="Open modal 2 buttons"
    on:click={() => (modalDefault = true)}
  />
  <Button
    kind="warning"
    label="Open modal 2 buttons danger"
    on:click={() => (modalDanger = true)}
  />
  <Button label="Open modal passive" on:click={() => (modalPassive = true)} />
  <Button
    kind="primary-outline"
    label="Open modal 2 buttons"
    on:click={() => (modalDefault = true)}
  />
  <Button
    kind="warning"
    label="Open modal 2 buttons danger"
    on:click={() => (modalDanger = true)}
  />
  <Button label="Open modal passive" on:click={() => (modalPassive = true)} />
  <Button
    kind="primary-outline"
    label="Open modal 2 buttons"
    on:click={() => (modalDefault = true)}
  />
</ButtonSet>
<Modal
  bind:open={modalPassive}
  passiveModal
  modalHeading="This is a modal passive"
>
  <p>It mean this modal have only one button to close it.</p>
</Modal>

<Modal
  bind:open={modalDefault}
  paddingTop
  modalHeading="Supprimer patient·e (longgggggg heading)"
  primaryButtonText="Confirmer suppression"
  primaryButtonIcon="trash"
  secondaryButtonText="Annuler"
  on:firstButtonAction={() => alert('hehe')}
>
  <p>This modal have 2 buttons which you can init icon too !</p>
  <p>
    This modal using a paddingTop and space sm, so you can still see the header.
  </p>
  <p>Becareful when using prop paddingTop here.</p>
</Modal>

<Modal
  bind:open={modalDanger}
  danger
  paddingTop
  modalHeading="Supprimer patient·e"
  primaryButtonText="Confirmer suppression"
  primaryButtonIcon="trash"
  secondaryButtonText="Annuler"
  on:firstButtonAction={() => alert('hehe')}
>
  <p>This modal have 2 buttons which you can init icon too !</p>
  <p>
    This modal using a paddingTop and space sm, so you can still see the header.
  </p>
  <p>
    This is a modal danger, you can notice it by the color of icon and button.
  </p>
</Modal>
