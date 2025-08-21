import type {Meta, StoryObj} from '@storybook/react-vite'
import {MemoryRouter} from 'react-router-dom'
import {AppRoutes} from '~/shared/constants'
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
        <div style={{width: '100%', maxWidth: '1120px', margin: '0 auto'}}>
            <ApplicationPage />
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
