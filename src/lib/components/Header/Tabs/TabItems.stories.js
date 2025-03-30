import TabsItemsExample from './TabsItemsExample.svelte'
import Header from '../header.svelte'

export default {
    title: 'Pomegranate/Header/Tabs',
    component: TabsItemsExample,
    tags: ['autodocs'],
    decorators: [() => Header]
}

const TabsItemsTemplate = (args) => ({
    Component: TabsItemsExample,
    props: args
})

export const Default = TabsItemsTemplate.bind({
    args: {}
})