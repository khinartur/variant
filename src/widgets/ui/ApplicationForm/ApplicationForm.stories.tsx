import type {Meta, StoryObj} from '@storybook/react-vite'
import {ApplicationForm} from './ApplicationForm'

const meta = {
    title: 'Widgets/Application form',
    component: ApplicationForm,
    tags: ['autodocs'],
} satisfies Meta<typeof ApplicationForm>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
    args: {},
}
