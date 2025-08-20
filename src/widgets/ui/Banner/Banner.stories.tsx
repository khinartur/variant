import type {Meta, StoryObj} from '@storybook/react-vite'
import {MemoryRouter} from 'react-router-dom'
import {AppRoutes} from '~/shared/constants'
import {useAppStore} from '~/shared/store'
import {Banner} from './Banner'

const meta = {
    title: 'Widgets/Banner',
    component: Banner,
    tags: ['autodocs'],
} satisfies Meta<typeof Banner>

export default meta
type Story = StoryObj<typeof meta>

const mockLetters = [
    {
        id: '0',
        content: 'Letter 1',
    },
    {
        id: '1',
        content: 'Letter 2',
    },
    {
        id: '2',
        content: 'Letter 3',
    },
]

export const Default: Story = {
    render: () => <Banner />,
    decorators: [
        Story => {
            useAppStore.setState({letters: mockLetters})
            return (
                <MemoryRouter initialEntries={[AppRoutes.applications]}>
                    <Story />
                </MemoryRouter>
            )
        },
    ],
}
