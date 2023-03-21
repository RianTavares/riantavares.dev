import type { Meta, StoryObj } from '@storybook/react';
import { OtherVars } from '.';

const meta: Meta<typeof OtherVars> = {
  title: 'Design Tokens/Others',
  component: OtherVars,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof OtherVars>;

export const Story = {};

