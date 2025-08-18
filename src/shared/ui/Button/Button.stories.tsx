import type {Meta, StoryObj} from '@storybook/react-vite'
import {
    IconCopy20,
    IconHome20,
    IconPlus20,
    IconRepeat24,
    IconTrash20,
} from '~/shared/icons'
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
        <div style={{display: 'flex', gap: '16px'}}>
            <div
                style={{display: 'flex', flexDirection: 'column', gap: '16px'}}
            >
                <Button variant="primary">Button</Button>
                <Button variant="primary" iconLeft={<IconPlus20 />}>
                    Button
                </Button>
                <Button variant="primary" iconRight={<IconPlus20 />}>
                    Button
                </Button>
                <Button variant="primary" loading iconLeft={<IconPlus20 />}>
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
                <Button variant="outline" iconLeft={<IconTrash20 />}>
                    Button
                </Button>
                <Button variant="outline" iconRight={<IconTrash20 />}>
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
                <Button variant="ghost" iconLeft={<IconTrash20 />}>
                    Button
                </Button>
                <Button variant="ghost" iconRight={<IconTrash20 />}>
                    Button
                </Button>
                <Button variant="ghost" disabled>
                    Button
                </Button>
            </div>
        </div>
    ),
}

export const Outline: Story = {
    args: {
        variant: 'outline',
        size: 'lg',
        children: 'Try Again',
        iconLeft: <IconRepeat24 />,
    },
}

export const OutlineOnlyIcon: Story = {
    args: {
        variant: 'outline',
        size: 'sm',
        iconLeft: <IconHome20 />,
    },
}

export const Ghost: Story = {
    args: {
        variant: 'ghost',
        size: 'xs',
        children: 'Copy to clipboard',
        iconRight: <IconCopy20 />,
    },
}
