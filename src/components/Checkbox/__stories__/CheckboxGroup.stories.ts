import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import GstCheckboxGroup from '../CheckboxGroup.vue';

const meta = {
  title: 'Components/Checkbox/Group',
  component: GstCheckboxGroup,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'array' },
  },
  render: (args) => ({
    components: { GstCheckboxGroup },
    setup() {
      const value = ref(args.modelValue);
      return { args, value };
    },
    template: '<GstCheckboxGroup v-bind="{ ...args, modelValue: value }" v-model="value" />',
  }),
} satisfies Meta<typeof GstCheckboxGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    modelValue: [1, 2],
    options: [
      { value: 1, label: '옵션 1' },
      { value: 2, label: '옵션 2' },
      { value: 3, label: '옵션 3' },
      { value: 4, label: '비활성화 옵션', disabled: true },
    ],
  },
};

export const WithValidation: Story = {
  args: {
    modelValue: [],
    options: [
      { value: 1, label: '옵션 1' },
      { value: 2, label: '옵션 2' },
    ],
    validationState: 'error',
    errorMessage: '하나 이상 선택해주세요.',
  },
};
