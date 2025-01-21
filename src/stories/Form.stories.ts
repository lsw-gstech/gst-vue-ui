import type { Meta, StoryObj } from '@storybook/vue3'
import { ref, watch } from 'vue'
import GstButton from '../components/Button/Button.vue'
import GstInput from '../components/Input/Input.vue'

const meta = {
  title: 'Form',
  tags: ['autodocs'],
  render: () => ({
    components: {
      GstButton,
      GstInput,
    },
    setup() {
      const inputValue = ref('')
      return { inputValue }
    },
    template: `
      <div class="form-demo">
        <h2>폼 요소</h2>
        
        <section class="section">
          <h3>입력 필드</h3>
          <div class="field">
            <GstInput
              placeholder="기본 입력 필드"
              v-model="inputValue"
              clearable
            />
          </div>
          <div class="field">
            <GstInput
              placeholder="아이콘이 있는 입력 필드"
              prefixIcon="pi-search"
              modelValue=""
              clearable
            />
          </div>
          <div class="field">
            <GstInput
              type="password"
              placeholder="비밀번호 입력"
              prefixIcon="pi-lock"
              modelValue=""
            />
          </div>
          <div class="field">
            <GstInput
              placeholder="에러 상태"
              validationState="error"
              errorMessage="올바른 이메일 주소를 입력해주세요"
              modelValue="invalid-email"
            />
          </div>
        </section>

        <section class="section">
          <h3>버튼</h3>
          <div class="field">
            <GstButton label="기본 버튼" />
            <GstButton label="비활성화 버튼" disabled />
            <GstButton label="로딩 버튼" loading />
          </div>
          <div class="field">
            <GstButton label="Primary" severity="primary" />
            <GstButton label="Secondary" severity="secondary" />
            <GstButton label="Success" severity="success" />
            <GstButton label="Warning" severity="warning" />
            <GstButton label="Danger" severity="danger" />
          </div>
        </section>
      </div>
    `,
    style: `
      .form-demo {
        padding: 2rem;
        max-width: 800px;
        margin: 0 auto;
      }
      .section {
        margin-bottom: 2rem;
      }
      h2 {
        margin-bottom: 2rem;
        color: var(--text-color);
      }
      h3 {
        margin-bottom: 1rem;
        color: var(--text-color-secondary);
      }
      .field {
        margin-bottom: 1rem;
        display: flex;
        gap: 1rem;
        align-items: flex-start;
      }
    `,
  }),
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Overview: Story = {}
