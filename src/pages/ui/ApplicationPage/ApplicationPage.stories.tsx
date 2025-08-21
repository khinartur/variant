import type {Meta, StoryObj} from '@storybook/react-vite'
import {MemoryRouter, Route, Routes} from 'react-router-dom'
import {AppRoutes} from '~/shared/constants'
import {useAppStore} from '~/shared/store'
import {buildAppRoutePath} from '~/shared/utils'
import {ApplicationPage} from './ApplicationPage'

const meta = {
    title: 'Pages/ApplicationPage',
    component: ApplicationPage,
    tags: ['autodocs'],
} satisfies Meta<typeof ApplicationPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: () => {
        useAppStore.setState({letters: [], formDraft: null})
        return (
            <div style={{width: '100%', maxWidth: '1120px', margin: '0 auto'}}>
                <ApplicationPage />
            </div>
        )
    },
    decorators: [
        Story => {
            return (
                <MemoryRouter initialEntries={[AppRoutes.newApplication]}>
                    <Story />
                </MemoryRouter>
            )
        },
    ],
}

export const Filled: Story = {
    render: () => {
        useAppStore.setState({
            letters: [],
            formDraft: {
                jobTitle: 'Software Engineer',
                company: 'Google',
                skills: 'JavaScript, React, Node.js',
                details: 'I am a software engineer with 5 years of experience',
            },
        })
        return (
            <div style={{width: '100%', maxWidth: '1120px', margin: '0 auto'}}>
                <ApplicationPage />
            </div>
        )
    },
    decorators: [
        Story => {
            return (
                <MemoryRouter initialEntries={[AppRoutes.newApplication]}>
                    <Story />
                </MemoryRouter>
            )
        },
    ],
}

export const Generated: Story = {
    render: () => {
        useAppStore.setState({
            letters: [
                {
                    id: '0',
                    content:
                        'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Vestibulum id ligula porta felis euismod semper. Maecenas sed diam eget risus varius blandit sit amet non magna. Curabitur blandit tempus porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    formData: {
                        jobTitle: 'Software Engineer',
                        company: 'Google',
                        skills: 'JavaScript, React, Node.js',
                        details:
                            'I am a software engineer with 5 years of experience',
                    },
                },
            ],
            formDraft: null,
        })
        return (
            <div style={{width: '100%', maxWidth: '1120px', margin: '0 auto'}}>
                <ApplicationPage />
            </div>
        )
    },
    decorators: [
        Story => {
            return (
                <MemoryRouter
                    initialEntries={[
                        buildAppRoutePath(AppRoutes.application, {id: '0'}),
                    ]}
                >
                    <Routes>
                        <Route
                            path={AppRoutes.application}
                            element={<Story />}
                        />
                    </Routes>
                </MemoryRouter>
            )
        },
    ],
}
