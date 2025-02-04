import type { Meta, StoryObj } from '@storybook/vue3';
import type { SelectProps } from '../types';
import GstSelect from '../Select.vue';

const meta = {
  title: 'Components/Select',
  component: GstSelect,
  tags: ['autodocs'],
  args: {
    options: [
      { value: 1, label: '옵션 1' },
      { value: 2, label: '옵션 2' },
      { value: 3, label: '옵션 3' },
    ],
  },
  argTypes: {
    modelValue: {
      control: 'select',
      options: [1, 2, 3],
    },
    options: {
      control: 'object',
    },
    placeholder: {
      control: 'text',
    },
    filter: {
      control: 'boolean',
    },
    optionLabel: {
      control: 'text',
      defaultValue: 'label',
    },
    optionValue: {
      control: 'text',
      defaultValue: 'value',
    },
    optionDisabled: {
      control: 'text',
      defaultValue: 'disabled',
    },
    optionGroupLabel: {
      control: 'text',
      defaultValue: 'label',
    },
    optionGroupChildren: {
      control: 'text',
      defaultValue: 'items',
    },
  },
} satisfies Meta<SelectProps>;

export default meta;
type Story = StoryObj<SelectProps>;

export const Default: Story = {
  args: {
    placeholder: '선택하세요',
  },
};

export const WithFilter: Story = {
  args: {
    placeholder: '검색하세요',
    filter: true,
    options: Array.from({ length: 20 }, (_, i) => ({
      value: i + 1,
      label: `옵션 ${i + 1}`,
    })),
  },
};

export const WithGroups: Story = {
  args: {
    placeholder: '선택하세요',
    options: [
      {
        label: '그룹 1',
        items: [
          { value: 1, label: '옵션 1' },
          { value: 2, label: '옵션 2' },
        ],
      },
      {
        label: '그룹 2',
        items: [
          { value: 3, label: '옵션 3' },
          { value: 4, label: '옵션 4' },
        ],
      },
    ],
  },
};
