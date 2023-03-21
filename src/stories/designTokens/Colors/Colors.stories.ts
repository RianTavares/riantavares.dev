import type { Meta, StoryObj } from '@storybook/react';
import Colors from '.';

const meta: Meta<typeof Colors> = {
  title: 'Design Tokens/Colors',
  component: Colors,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Colors>;

export const Story = {};

