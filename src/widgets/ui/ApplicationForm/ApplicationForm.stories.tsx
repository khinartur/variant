import type {Meta, StoryObj} from '@storybook/react-vite'
import {useAppStore} from '~/shared/store'
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
    render: args => (
        <div style={{width: '100%', height: '600px'}}>
            <ApplicationForm {...args} />
        </div>
    ),
}

export const Processing: Story = {
    args: {
        processing: true,
        onGenerate: () => Promise.resolve(),
    },
    render: args => {
        useAppStore.setState({
            formDraft: {
                jobTitle: 'Software Engineer',
                company: 'Google',
                skills: 'JavaScript, React, Node.js',
                details: 'I am a software engineer with 5 years of experience',
            },
        })
        return (
            <div style={{width: '100%', height: '600px'}}>
                <ApplicationForm {...args} />
            </div>
        )
    },
}

export const Filled: Story = {
    args: {
        letter: {
            id: '1',
            content: 'I am a software engineer with 5 years of experience',
            formData: {
                jobTitle: 'Software Engineer',
                company: 'Google',
                skills: 'JavaScript, React, Node.js',
                details: 'I am a software engineer with 5 years of experience',
            },
        },
        processing: false,
        onGenerate: () => Promise.resolve(),
    },
    render: args => {
        return (
            <div style={{width: '100%', height: '600px'}}>
                <ApplicationForm {...args} />
            </div>
        )
    },
}
