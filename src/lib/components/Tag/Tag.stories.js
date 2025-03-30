import Tag from '$lib/components/Tag/tag.svelte'

export default {
  title: 'Pomegranate/Tag',
  component: Tag,
  tags: ['autodocs'],
}

const TagTemplate = (args) => ({
  Component: Tag,
  props: args,
})

export const Default = TagTemplate.bind({})

Default.args = {
  label: 'Antigénique',
}
