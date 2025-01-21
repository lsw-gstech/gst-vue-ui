import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import GstRadio from '../Radio.vue';

const meta = {
  title: 'Components/Radio',
  component: GstRadio,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'text' },
    inline: { control: 'boolean' },
  },
  render: (args) => ({
    components: { GstRadio },
    setup() {
      const value = ref(args.modelValue);
      return { args, value };
    },
    template: '<GstRadio v-bind="{ ...args, modelValue: value }" v-model="value" />',
  }),
} satisfies Meta<typeof GstRadio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    modelValue: '1',
    options: [
      { value: '1', label: '옵션 1' },
      { value: '2', label: '옵션 2' },
      { value: '3', label: '옵션 3' },
    ],
  },
};

export const Inline: Story = {
  args: {
    modelValue: '1',
    inline: true,
    options: [
      { value: '1', label: '옵션 1' },
      { value: '2', label: '옵션 2' },
      { value: '3', label: '옵션 3' },
    ],
  },
};

export const WithDisabled: Story = {
  args: {
    modelValue: '1',
    options: [
      { value: '1', label: '옵션 1' },
      { value: '2', label: '옵션 2' },
      { value: '3', label: '비활성화 옵션', disabled: true },
    ],
  },
};

export const WithValidation: Story = {
  args: {
    modelValue: '',
    options: [
      { value: '1', label: '옵션 1' },
      { value: '2', label: '옵션 2' },
    ],
    validationState: 'error',
    errorMessage: '필수 항목입니다.',
  },
};
