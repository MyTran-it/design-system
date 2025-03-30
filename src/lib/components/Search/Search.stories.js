import Search from './search.svelte'

export default {
  title: 'Pomegranate/Header/Search',
  component: Search,
  tags: ['autodocs'],
  argTypes: {},
}

const SearchTemplate = (args) => ({
  Component: Search,
  props: args,
})

export const Default = SearchTemplate.bind({})

Default.args = {}

export const ExpandedOption = SearchTemplate.bind({})

ExpandedOption.args = {
  expanded: true,
}

export const IfInHeader = SearchTemplate.bind({})

IfInHeader.args = {
  inHeader: true,
}
