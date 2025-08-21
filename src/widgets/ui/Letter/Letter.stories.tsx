import type {Meta, StoryObj} from '@storybook/react-vite'
import {MemoryRouter} from 'react-router-dom'
import {
    AppRoutes,
    DEFAULT_NEW_APPLICATION_FORM_VALUES,
} from '~/shared/constants'
import {Letter} from './Letter'

const meta = {
    title: 'Widgets/Letter',
    component: Letter,
    tags: ['autodocs'],
} satisfies Meta<typeof Letter>

export default meta
type Story = StoryObj<typeof meta>

export const Loading: Story = {
    render: () => (
        <div
            style={{
                width: '100%',
                maxWidth: '520px',
                height: '600px',
                margin: '0 auto',
            }}
        >
            <Letter loading />
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

export const FormEmpty: Story = {
    render: () => (
        <div
            style={{
                width: '100%',
                maxWidth: '520px',
                height: '600px',
                margin: '0 auto',
            }}
        >
            <Letter />
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

const mockLetter = {
    id: '1',
    content:
        'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed consectetur. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed posuere consectetur est at lobortis. Aenean lacinia bibendum nulla sed consectetur.',
    formData: DEFAULT_NEW_APPLICATION_FORM_VALUES,
}

export const FormFilled: Story = {
    render: () => (
        <div
            style={{
                width: '100%',
                maxWidth: '520px',
                height: '600px',
                margin: '0 auto',
            }}
        >
            <Letter letter={mockLetter} />
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

export const PreviewFilled: Story = {
    render: () => (
        <div
            style={{
                width: '100%',
                maxWidth: '520px',
                height: '600px',
                margin: '0 auto',
            }}
        >
            <Letter preview letter={mockLetter} />
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

export const PreviewFilledShort: Story = {
    render: () => (
        <div
            style={{
                width: '100%',
                maxWidth: '520px',
                height: '600px',
                margin: '0 auto',
            }}
        >
            <Letter
                preview
                letter={{
                    ...mockLetter,
                    content: mockLetter.content.slice(0, 100),
                }}
            />
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
