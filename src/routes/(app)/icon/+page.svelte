<script>
  import Header from '$lib/components/Header/header.svelte'
  import PageTitle from '$lib/components/Header/pageTitle.svelte'
  import Icon from '$lib/components/Icon/icon.svelte'
  import FormRow from '$lib/components/Input/FormRow/formRow.svelte'
  import InputSelect from '$lib/components/Input/InputSelect/inputSelect.svelte'
  import Tile from '$lib/components/Tile/tile.svelte'
  import LIB_ICONS from '$lib/icons/mh-icons.js'

  const availableIcons = Object.keys(LIB_ICONS)

  let listIcons = availableIcons.reduce((acc, currentValue) => {
    return [...acc, { id: acc.length, text: currentValue }]
  }, [])
  const listColor = [
    { id: 'var(--clr-text-04)', text: 'Default' },
    { id: 'var(--clr-interactive-tertiary)', text: 'Light green' },
    { id: 'var(--clr-support-error)', text: 'Error' },
    { id: 'var(--clr-text-disabled)', text: 'Disabled' },
  ]
  let nameIcon = listIcons[0].text
  let color = listColor[0]
</script>

<Header>
  <PageTitle pageTitle="Icon Library" previousPage="/" />
</Header>

<Tile style="light">
  <InputSelect
    items={listColor}
    bind:selectedId={color.id}
    bind:value={color.text}
  />
  <FormRow columns="2" col1="1" col2="4">
    <div class="autoMargin">
      <Icon class="mx-auto" size="xl" name={nameIcon} fill={color.id} />
    </div>
    <InputSelect
      shouldFilterItem
      label="Icon name"
      items={listIcons}
      bind:value={nameIcon}
    />
  </FormRow>
</Tile>
