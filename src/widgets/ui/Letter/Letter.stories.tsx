import type {Meta, StoryObj} from '@storybook/react-vite'
import {Letter} from './Letter'

const meta = {
    title: 'Widgets/Letter',
    component: Letter,
    tags: ['autodocs'],
} satisfies Meta<typeof Letter>

export default meta
type Story = StoryObj<typeof meta>

export const Form: Story = {
    render: () => (
        <div style={{width: '550px', height: '600px'}}>
            <Letter />
        </div>
    ),
}

export const Preview: Story = {
    render: () => (
        <div style={{width: '550px', height: '600px'}}>
            <Letter
                preview
                letter="Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed consectetur. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec id elit non mi porta gravida at eget metus.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed posuere consectetur est at lobortis. Aenean lacinia bibendum nulla sed consectetur."
            />
        </div>
    ),
}
