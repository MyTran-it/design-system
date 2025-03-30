import TextArea from './textArea.svelte'

export default {
  title: 'Pomegranate/Form/TextArea',
  component: TextArea,
  tags: ['autodocs'],
}

const TextAreaTemplate = (args) => ({
  Component: TextArea,
  props: args,
})

export const Default = TextAreaTemplate.bind({})

Default.args = {
  label: 'Default',
  placeholder: 'Comment..',
}
