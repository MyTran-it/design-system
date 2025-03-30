<script>
  import FormRow from '$lib/components/Input/FormRow/formRow.svelte'
  import Input from '$lib/components/Input/Input.svelte'
  import InputSelect from '$lib/components/Input/InputSelect/inputSelect.svelte'

  let listCountry = [
    { id: 'VNM', text: 'Vietnam' },
    { id: 'FRA', text: 'France' },
    { id: 'AFG', text: 'Afghanistan' },
  ]
  let selectedId
</script>

<FormRow
  columns="2"
  col1="1"
  col2="16"
  label="N° de téléphone"
  sublabel="use formRow + inputSelect (country select) + input"
>
  <InputSelect
    placeholder="Country"
    items={listCountry}
    bind:selectedId
    value="France"
    shouldFilterItem
    hideLabel
  />
  <Input type="tel" icon="phone" hideLabel />
</FormRow>
