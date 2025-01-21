import type { Meta, StoryObj } from '@storybook/vue3'
import GstButton from '../Button.vue'

// 메타데이터 정의
const meta = {
  title: 'Components/Button',
  component: GstButton,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof GstButton>

export default meta
type Story = StoryObj<typeof meta>

// 기본 버튼 스토리
export const Default: Story = {
  args: {
    label: '기본 버튼',
  },
}

// 로딩 상태 스토리
export const Loading: Story = {
  args: {
    label: '로딩 버튼',
    loading: true,
  },
}

// 비활성화 상태 스토리
export const Disabled: Story = {
  args: {
    label: '비활성화 버튼',
    disabled: true,
  },
}
