import type { Meta, StoryObj } from '@storybook/svelte';
import Widget from '../../Widget.svelte';
import { BasicStory } from './example/index.js';

const meta = {
	title: 'Widget/AnimatedContainer',
	component: Widget,
	args: {
		width: '400px',
		height: '400px'
	}
} satisfies Meta<Widget>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
	args: BasicStory
};
export const BasicOnCanvas: Story = {
	args: {
		...BasicStory,
		renderer: 'canvas'
	}
};
