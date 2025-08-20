import type {Meta, StoryObj} from '@storybook/react-vite'
import {MemoryRouter} from 'react-router-dom'
import {AppRoutes} from '~/shared/constants'
import {useAppStore} from '~/shared/store'
import {Applications} from './Applications'

const meta = {
    title: 'Pages/Applications',
    component: Applications,
    tags: ['autodocs'],
} satisfies Meta<typeof Applications>

export default meta
type Story = StoryObj<typeof meta>

export const NoLetters: Story = {
    render: () => (
        <div style={{width: '1120px'}}>
            <Applications />
        </div>
    ),
    decorators: [
        Story => {
            useAppStore.setState({letters: []})
            return (
                <MemoryRouter initialEntries={[AppRoutes.applications]}>
                    <Story />
                </MemoryRouter>
            )
        },
    ],
}

const mockLetters = [
    {
        id: '1',
        content:
            'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cras mattis consectetur purus sit amet fermentum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, a pharetra augue. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Vestibulum id ligula porta felis euismod semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
    },
    {
        id: '2',
        content:
            'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cras mattis consectetur purus sit amet fermentum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, a pharetra augue. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Vestibulum id ligula porta felis euismod semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
    },
    {
        id: '3',
        content:
            'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cras mattis consectetur purus sit amet fermentum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, a pharetra augue. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Vestibulum id ligula porta felis euismod semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
    },
    {
        id: '4',
        content:
            'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cras mattis consectetur purus sit amet fermentum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, a pharetra augue. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Vestibulum id ligula porta felis euismod semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
    },
    {
        id: '5',
        content:
            'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cras mattis consectetur purus sit amet fermentum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, a pharetra augue. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Vestibulum id ligula porta felis euismod semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
    },
]

export const WithLetters: Story = {
    render: () => (
        <div style={{width: '1120px', height: 'auto'}}>
            <Applications />
        </div>
    ),
    decorators: [
        Story => {
            useAppStore.setState({letters: mockLetters.slice(0, 3)})
            return (
                <MemoryRouter initialEntries={[AppRoutes.applications]}>
                    <Story />
                </MemoryRouter>
            )
        },
    ],
}

export const FullProgress: Story = {
    render: () => (
        <div style={{width: '1120px', height: 'auto'}}>
            <Applications />
        </div>
    ),
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
