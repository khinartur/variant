import type {Meta, StoryObj} from '@storybook/react-vite'
import {Header} from './Header'

const meta = {
    title: 'Widgets/Header',
    component: Header,
    tags: ['autodocs'],
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
    render: () => (
        <div style={{width: '800px'}}>
            <Header />
        </div>
    ),
}
