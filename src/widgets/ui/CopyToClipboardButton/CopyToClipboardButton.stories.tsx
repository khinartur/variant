import type {Meta, StoryObj} from '@storybook/react-vite'
import {CopyToClipboardButton} from './CopyToClipboardButton'

const meta = {
    title: 'Widgets/CopyToClipboardButton',
    component: CopyToClipboardButton,
    tags: ['autodocs'],
} satisfies Meta<typeof CopyToClipboardButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        content: 'Letter content',
    },
    render: args => (
        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
            <CopyToClipboardButton {...args} />
        </div>
    ),
}
