import type {Meta, StoryObj} from '@storybook/react-vite'
import {IconHome, IconPlus, IconTrash} from '~/shared/icons'
import {Text} from '../Text'
import {Button} from './Button'

const meta = {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Variants: Story = {
    render: () => (
        <div
            style={{
                display: 'flex',
                flex: '1',
                justifyContent: 'center',
                gap: '48px',
            }}
        >
            <div
                style={{display: 'flex', flexDirection: 'column', gap: '16px'}}
            >
                <Text variant="h1" size="2xl">
                    Primary
                </Text>
                <Button variant="primary">Button</Button>
                <Button variant="primary" iconLeft={<IconPlus />}>
                    Button
                </Button>
                <Button variant="primary" iconRight={<IconPlus />}>
                    Button
                </Button>
                <Button variant="primary" loading iconLeft={<IconPlus />}>
                    Button
                </Button>
                <Button variant="primary" disabled>
                    Button
                </Button>
            </div>
            <div
                style={{display: 'flex', flexDirection: 'column', gap: '16px'}}
            >
                <Text variant="h1" size="2xl">
                    Outline
                </Text>
                <Button variant="outline">Button</Button>
                <Button variant="outline" iconLeft={<IconTrash />}>
                    Button
                </Button>
                <Button variant="outline" iconRight={<IconTrash />}>
                    Button
                </Button>
                <Button variant="outline" loading iconRight={<IconTrash />}>
                    Button
                </Button>
                <Button variant="outline" disabled>
                    Button
                </Button>
            </div>
            <div
                style={{display: 'flex', flexDirection: 'column', gap: '16px'}}
            >
                <Text variant="h1" size="2xl">
                    Ghost
                </Text>
                <Button variant="ghost">Button</Button>
                <Button variant="ghost" iconLeft={<IconTrash />}>
                    Button
                </Button>
                <Button variant="ghost" iconRight={<IconTrash />}>
                    Button
                </Button>
                <Button variant="ghost" loading iconRight={<IconTrash />}>
                    Button
                </Button>
                <Button variant="ghost" disabled>
                    Button
                </Button>
            </div>
            <div
                style={{display: 'flex', flexDirection: 'column', gap: '16px'}}
            >
                <Text variant="h1" size="2xl">
                    Icon Only
                </Text>
                <Button variant="primary" iconLeft={<IconPlus />} />
                <Button variant="outline" iconLeft={<IconHome />} />
                <Button variant="ghost" iconLeft={<IconTrash />} />
            </div>
        </div>
    ),
}
