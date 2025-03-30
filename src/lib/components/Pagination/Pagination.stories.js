import Pagination from './pagination.svelte'

export default {
  title: 'Pomegranate/Pagination',
  component: Pagination,
  tags: ['autodocs'],
}

const PaginationTemplate = (args) => ({
  Component: Pagination,
  props: args,
})

export const Default = PaginationTemplate.bind({})

Default.args = {
  totalPage: 6,
}
