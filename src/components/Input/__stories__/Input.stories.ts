import type { Meta, StoryObj } from '@storybook/vue3';
import type { InputProps } from '../types';
import GstInput from '../Input.vue';

const meta = {
  title: 'Components/Input',
  component: GstInput,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number'],
    },
    size: {
      control: 'select',
      options: ['small', 'normal', 'large'],
    },
    validationState: {
      control: 'select',
      options: ['success', 'warning', 'error'],
    },
    disabled: { control: 'boolean' },
    readonly: { control: 'boolean' },
  },
} satisfies Meta<typeof GstInput>;

export default meta;
type Story = StoryObj<typeof GstInput>;

export const Default: Story = {
  args: {
    placeholder: '텍스트를 입력하세요',
  },
};

export const WithSearch: Story = {
  args: {
    placeholder: '검색어를 입력하세요',
    type: 'search',
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: '비밀번호를 입력하세요',
  },
};

export const WithValidation: Story = {
  args: {
    validationState: 'error',
    placeholder: '유효하지 않은 입력',
  },
};
