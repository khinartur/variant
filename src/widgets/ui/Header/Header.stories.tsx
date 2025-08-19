import type {Meta, StoryObj} from '@storybook/react-vite'
import {MemoryRouter} from 'react-router-dom'
import {AppRoutes} from '~/shared/constants'
import {Header} from './Header'

const meta = {
    title: 'Widgets/Header',
    component: Header,
    tags: ['autodocs'],
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const OnHomePage: Story = {
    render: () => (
        <div style={{width: '100vw'}}>
            <Header />
        </div>
    ),
    parameters: {
        layout: 'fullscreen',
    },
    decorators: [
        Story => (
            <MemoryRouter initialEntries={[AppRoutes.applications]}>
                <Story />
            </MemoryRouter>
        ),
    ],
}

export const OnNewApplicationPage: Story = {
    render: () => (
        <div style={{width: '100vw'}}>
            <Header />
        </div>
    ),
    parameters: {
        layout: 'fullscreen',
    },
    decorators: [
        Story => (
            <MemoryRouter initialEntries={[AppRoutes.newApplication]}>
                <Story />
            </MemoryRouter>
        ),
    ],
}
