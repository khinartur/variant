import type {Meta, StoryObj} from '@storybook/react-vite'
import {NewApplication} from './NewApplication'

const meta = {
    title: 'Pages/NewApplication',
    component: NewApplication,
    tags: ['autodocs'],
} satisfies Meta<typeof NewApplication>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: () => (
        <div style={{width: '100vw'}}>
            <NewApplication />
        </div>
    ),
    parameters: {
        layout: 'fullscreen',
    },
}
