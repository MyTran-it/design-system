import Modal from './modal.svelte'

export default {
    title: 'Pomegranate/Modal',
    component: Modal,
    tags: ['autodocs']
}

const ModalTemplate = (args) => ({
    Component: Modal,
    props: args,
})

export const Default = ModalTemplate.bind({})

Default.args = {
    open: true,
    modalHeading: 'This is a modal example'
}