import type {Meta, StoryObj} from '@storybook/react-vite'
import {IconHome, IconPlus, IconTrash} from '~/shared/icons'
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
                gap: '16px',
            }}
        >
            <div
                style={{display: 'flex', flexDirection: 'column', gap: '16px'}}
            >
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
                <Button variant="outline">Button</Button>
                <Button variant="outline" iconLeft={<IconTrash />}>
                    Button
                </Button>
                <Button variant="outline" iconRight={<IconTrash />}>
                    Button
                </Button>
                <Button variant="outline" disabled>
                    Button
                </Button>
            </div>
            <div
                style={{display: 'flex', flexDirection: 'column', gap: '16px'}}
            >
                <Button variant="ghost">Button</Button>
                <Button variant="ghost" iconLeft={<IconTrash />}>
                    Button
                </Button>
                <Button variant="ghost" iconRight={<IconTrash />}>
                    Button
                </Button>
                <Button variant="ghost" disabled>
                    Button
                </Button>
            </div>
            <div
                style={{display: 'flex', flexDirection: 'column', gap: '16px'}}
            >
                <Button variant="primary" iconLeft={<IconPlus />} />
                <Button variant="outline" iconLeft={<IconHome />} />
                <Button variant="ghost" iconLeft={<IconTrash />} />
            </div>
        </div>
    ),
}
