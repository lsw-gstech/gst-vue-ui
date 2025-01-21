import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import GstCheckbox from '../Checkbox.vue';

const meta = {
  title: 'Components/Checkbox/Single',
  component: GstCheckbox,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'boolean' },
  },
  render: (args) => ({
    components: { GstCheckbox },
    setup() {
      const value = ref(args.modelValue);
      return { args, value };
    },
    template: '<GstCheckbox v-bind="{ ...args, modelValue: value }" v-model="value" />',
  }),
} satisfies Meta<typeof GstCheckbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: '기본 체크박스',
    modelValue: true,
  },
};

export const Indeterminate: Story = {
  args: {
    label: '중간 상태',
    modelValue: false,
    indeterminate: true,
  },
};

export const CustomIcon: Story = {
  args: {
    label: '사용자 정의 아이콘',
    modelValue: false,
    customIcon: 'pi-heart-fill',
  },
};

export const WithValidation: Story = {
  args: {
    label: '유효성 검사',
    modelValue: false,
    validationState: 'error',
    errorMessage: '필수 항목입니다.',
  },
};
