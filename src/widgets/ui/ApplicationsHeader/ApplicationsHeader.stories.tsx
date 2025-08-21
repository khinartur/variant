import type {Meta, StoryObj} from '@storybook/react-vite'
import {MemoryRouter} from 'react-router-dom'
import {AppRoutes} from '~/shared/constants'
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
        <div style={{width: '100%'}}>
            <ApplicationsHeader />
        </div>
    ),
    decorators: [
        Story => {
            return (
                <MemoryRouter initialEntries={[AppRoutes.applications]}>
                    <Story />
                </MemoryRouter>
            )
        },
    ],
}
