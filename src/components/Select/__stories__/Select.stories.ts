import type { Meta, StoryObj } from '@storybook/vue3';
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
} satisfies Meta<typeof GstSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: '선택하세요',
  },
};

export const Multiple: Story = {
  args: {
    placeholder: '여러 항목을 선택하세요',
    multiple: true,
  },
};

export const WithGroups: Story = {
  args: {
    placeholder: '선택하세요',
    groups: [
      { id: 'g1', label: '그룹 1' },
      { id: 'g2', label: '그룹 2' },
    ],
    options: [
      { value: 1, label: '옵션 1', groupId: 'g1' },
      { value: 2, label: '옵션 2', groupId: 'g1' },
      { value: 3, label: '옵션 3', groupId: 'g2' },
      { value: 4, label: '옵션 4', groupId: 'g2' },
    ],
  },
};

export const WithSearch: Story = {
  args: {
    placeholder: '검색하세요',
    searchable: true,
    options: Array.from({ length: 20 }, (_, i) => ({
      value: i + 1,
      label: `옵션 ${i + 1}`,
    })),
  },
};
