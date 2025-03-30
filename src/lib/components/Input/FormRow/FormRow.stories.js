import FormRowExample from '$lib/components/Input/FormRow/FormRowExample.svelte'

export default {
  title: 'Pomegranate/Form/FormRow',
  component: FormRowExample,
  tag: ['autodocs'],
  argTypes: {
    columns: {
      control: { type: 'radio' },
      options: [1, 2, 3],
    },
  },
}

const FormRowTemplate = (args) => ({
  Component: FormRowExample,
  props: args,
})

export const Default = FormRowTemplate.bind({})

Default.args = {
  label: 'This is a form row 1 column',
  sublabel: 'subLabel',
  columns: 1,
}

export const TwoColumns = FormRowTemplate.bind({})

TwoColumns.args = {
  label: 'This is a form row 2 column',
  sublabel: 'You can change large of column by using props : col1, col2',
  columns: 2,
}

export const ThreeColumns = FormRowTemplate.bind({})

ThreeColumns.args = {
  label: 'This is a form row 2 column',
  sublabel: 'You can change large of column by using props : col1, col2, col3',
  columns: 3,
  col1: 1,
  col2: 2,
  col3: 1,
}

export const WithButton = FormRowTemplate.bind({})

WithButton.args = {
  label:
    'You can put an input here to make input with button action (this button will take 6rem of width of the row)',
  withButton: true,
}
