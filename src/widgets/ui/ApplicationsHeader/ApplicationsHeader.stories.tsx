import type {Meta, StoryObj} from '@storybook/react-vite'
import {ApplicationsHeader} from './ApplicationsHeader'

const meta = {
    title: 'Widgets/ApplicationsHeader',
    component: ApplicationsHeader,
    tags: ['autodocs'],
} satisfies Meta<typeof ApplicationsHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: () => (
        <div style={{width: '100vw'}}>
            <ApplicationsHeader />
        </div>
    ),
    parameters: {
        layout: 'fullscreen',
    },
}
