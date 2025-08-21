import type {Meta, StoryObj} from '@storybook/react-vite'
import {MemoryRouter} from 'react-router-dom'
import {AppRoutes} from '~/shared/constants'
import {Text} from '../Text'
import {Logo} from './Logo'

const meta = {
    title: 'Components/Logo',
    component: Logo,
    tags: ['autodocs'],
} satisfies Meta<typeof Logo>

export default meta
type Story = StoryObj<typeof meta>

export const Variants: Story = {
    render: () => (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '32px',
                alignItems: 'center',
            }}
        >
            <Text variant="h1" size="2xl">
                Default
            </Text>
            <div
                style={{
                    padding: '16px',
                    border: '1px dashed var(--color-border)',
                    borderRadius: '16px',
                }}
            >
                <Logo />
            </div>
            <Text variant="h1" size="2xl">
                Short
            </Text>
            <div
                style={{
                    padding: '16px',
                    border: '1px dashed var(--color-border)',
                    borderRadius: '16px',
                }}
            >
                <Logo short />
            </div>
        </div>
    ),
    decorators: [
        Story => (
            <MemoryRouter initialEntries={[AppRoutes.applications]}>
                <Story />
            </MemoryRouter>
        ),
    ],
}
