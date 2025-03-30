import BubbleDetail from './bubbleDetail.svelte'

export default {
    title: 'Pomegranate/BubbleProgress/BubbleDetail',
    component: BubbleDetail,
    tags: ['autodocs']
}

const BubbleDetailTemplate = (args) => ({
    Component: BubbleDetail,
    props: args,
})

export const Default = BubbleDetailTemplate.bind({})

Default.args = {
    title: 'Bubble Detail default'
}

export const Done = BubbleDetailTemplate.bind({})

Done.args = {
    title: 'Bubble Detail Done - state: done',
    state: 'done'
}