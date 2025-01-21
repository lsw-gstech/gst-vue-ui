import type { Meta, StoryObj } from '@storybook/vue3';
import GstInput from '../Input.vue';

const meta = {
  title: 'Components/Input',
  component: GstInput,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'text' },
    type: {
      control: 'select',
      options: ['text', 'number', 'password'],
    },
    size: {
      control: 'select',
      options: ['small', 'normal', 'large'],
    },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    readonly: { control: 'boolean' },
    prefixIcon: { control: 'text' },
    suffixIcon: { control: 'text' },
    clearable: { control: 'boolean' },
    validationState: {
      control: 'select',
      options: ['success', 'warning', 'error'],
    },
    errorMessage: { control: 'text' },
  },
} satisfies Meta<typeof GstInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: '텍스트를 입력하세요',
    modelValue: '삭제 버튼 테스트',
    clearable: false,
  },
};

export const WithIcons: Story = {
  args: {
    placeholder: '검색어를 입력하세요',
    prefixIcon: 'pi-search',
    clearable: true,
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: '비밀번호를 입력하세요',
    prefixIcon: 'pi-lock',
  },
};

export const WithValidation: Story = {
  args: {
    validationState: 'error',
    errorMessage: '올바른 이메일 주소를 입력해주세요',
    value: 'invalid-email',
  },
};
