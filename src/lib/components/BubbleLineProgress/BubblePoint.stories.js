import BubblePoint from './bubblePoint.svelte'
import BubbleProgress from './bubbleProgress.svelte'

export default {
    title: 'Pomegranate/BubbleProgress/BubblePoint',
    component: BubblePoint,
    decorators: [() => BubbleProgress],
    tags: ['autodocs']
}

const BubblePointTemplate = (args) => ({
    Component: BubblePoint,
    props: args,
})

export const Default = BubblePointTemplate.bind({})

Default.args = {
    title: 'Bubble point - no state with slot default'
}

export const Done = BubblePointTemplate.bind({})

Done.args = {
    title: 'Bubble point - state: done',
    state: 'done'
}

export const Disable = BubblePointTemplate.bind({})

Disable.args = {
    title: 'Bubble point - state: disable',
    state: 'disable'
}

export const Expandable = BubblePointTemplate.bind({})

Expandable.args = {
    title: 'Bubble point expandable - 2 slot available: above, below',
    expandable: true
}