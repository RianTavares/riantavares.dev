import type { Meta, StoryObj } from '@storybook/react';
import { BaseStory } from '.';

const meta: Meta<typeof BaseStory> = {
  title: 'Design Tokens/Typography',
  component: BaseStory,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof BaseStory>;

export const Story = {};

