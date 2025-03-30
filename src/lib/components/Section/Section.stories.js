import Section from '$lib/components/Section/section.svelte'

export default {
  title: 'Pomegranate/Section',
  component: Section,
  tags: ['autodocs'],
}

const SectionTemplate = (args) => ({
  Component: Section,
  props: args,
})

export const Default = SectionTemplate.bind({})

Default.args = {
  label: 'Section 1',
  textInfo: '- this is text info',
}
