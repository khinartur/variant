import type {Meta, StoryObj} from '@storybook/react-vite'
import {ApplicationPage} from './ApplicationPage'

const meta = {
    title: 'Pages/ApplicationPage',
    component: ApplicationPage,
    tags: ['autodocs'],
} satisfies Meta<typeof ApplicationPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: () => (
        <div style={{width: '100vw'}}>
            <ApplicationPage />
        </div>
    ),
    parameters: {
        layout: 'fullscreen',
    },
}
