import type {Meta, StoryObj} from '@storybook/react-vite'
import {MemoryRouter} from 'react-router-dom'
import {
    AppRoutes,
    DEFAULT_NEW_APPLICATION_FORM_VALUES,
} from '~/shared/constants'
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
        formData: DEFAULT_NEW_APPLICATION_FORM_VALUES,
    },
    {
        id: '1',
        content: 'Letter 2',
        formData: DEFAULT_NEW_APPLICATION_FORM_VALUES,
    },
    {
        id: '2',
        content: 'Letter 3',
        formData: DEFAULT_NEW_APPLICATION_FORM_VALUES,
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
