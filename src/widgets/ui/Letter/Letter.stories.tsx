import type {Meta, StoryObj} from '@storybook/react-vite'
import {Letter} from './Letter'

const meta = {
    title: 'Widgets/Letter',
    component: Letter,
    tags: ['autodocs'],
} satisfies Meta<typeof Letter>

export default meta
type Story = StoryObj<typeof meta>

export const FormEmpty: Story = {
    render: () => (
        <div style={{width: '550px', height: '600px'}}>
            <Letter />
        </div>
    ),
}

const mockLetter = {
    id: '1',
    content:
        'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed consectetur. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed posuere consectetur est at lobortis. Aenean lacinia bibendum nulla sed consectetur.',
}

export const FormFilled: Story = {
    render: () => (
        <div style={{width: '550px', height: '600px'}}>
            <Letter letter={mockLetter} />
        </div>
    ),
}

export const PreviewFilled: Story = {
    render: () => (
        <div style={{width: '550px', height: '600px'}}>
            <Letter preview letter={mockLetter} />
        </div>
    ),
}

export const PreviewFilledShort: Story = {
    render: () => (
        <div style={{width: '550px', height: '600px'}}>
            <Letter
                preview
                letter={{
                    ...mockLetter,
                    content: mockLetter.content.slice(0, 100),
                }}
            />
        </div>
    ),
}
