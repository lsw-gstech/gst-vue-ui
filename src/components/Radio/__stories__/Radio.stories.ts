import type { Meta, StoryObj } from '@storybook/vue3';
import GstRadio from '../Radio.vue';

const meta = {
  title: 'Components/Radio',
  component: GstRadio,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'text' },
    value: { control: 'text' },
    label: { control: 'text' },
    name: { control: 'text' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof GstRadio>;

export default meta;
type Story = StoryObj<typeof GstRadio>;

export const Default: Story = {
  args: {
    modelValue: '1',
    value: '1',
    label: '옵션 1',
  },
};

export const Disabled: Story = {
  args: {
    modelValue: '1',
    value: '1',
    label: '비활성화된 옵션',
    disabled: true,
  },
};

export const WithName: Story = {
  args: {
    modelValue: '1',
    value: '1',
    label: '그룹 옵션',
    name: 'group1',
  },
};
