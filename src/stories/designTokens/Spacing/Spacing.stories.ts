import type { Meta, StoryObj } from '@storybook/react';
import { Spacing } from '.';

const meta: Meta<typeof Spacing> = {
  title: 'Design Tokens/Spacing',
  component: Spacing,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Spacing>;

export const Story = {};

