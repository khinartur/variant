import type {Meta, StoryObj} from '@storybook/react-vite'
import {ApplicationForm} from './ApplicationForm'

const meta = {
    title: 'Widgets/Application form',
    component: ApplicationForm,
    tags: ['autodocs'],
} satisfies Meta<typeof ApplicationForm>

export default meta
type Story = StoryObj<typeof meta>

export const Empty: Story = {
    args: {
        processing: false,
        onGenerate: () => Promise.resolve(),
    },
    render: () => (
        <div style={{width: '100vw', height: '600px'}}>
            <ApplicationForm
                processing={false}
                onGenerate={() => Promise.resolve()}
            />
        </div>
    ),
    parameters: {
        layout: 'fullscreen',
    },
}
