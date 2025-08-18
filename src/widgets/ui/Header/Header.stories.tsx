import type {Meta, StoryObj} from '@storybook/react-vite'
import {Header} from './Header'

const meta = {
    title: 'Widgets/Header',
    component: Header,
    tags: ['autodocs'],
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: () => (
        <div style={{width: '100vw'}}>
            <Header />
        </div>
    ),
    parameters: {
        layout: 'fullscreen',
    },
}
