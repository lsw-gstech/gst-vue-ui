import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import GstButton from '../Button.vue'

// PrimeVue Button 컴포넌트 모킹
vi.mock('primevue/button', () => ({
  default: {
    name: 'Button',
    template:
      '<button :class="{ \'p-button-loading\': loading }" @click="$emit(\'click\', $event)"><slot>{{ label }}</slot></button>',
    props: {
      label: String,
      loading: Boolean,
    },
  },
}))

describe('GstButton', () => {
  it('기본 버튼이 정상적으로 렌더링되어야 합니다', () => {
    const wrapper = mount(GstButton, {
      props: {
        label: '기본 버튼',
      },
    })
    expect(wrapper.text()).toBe('기본 버튼')
    expect(wrapper.classes()).toContain('gst-button--filled')
  })

  it('아웃라인 버튼이 정상적으로 렌더링되어야 합니다', () => {
    const wrapper = mount(GstButton, {
      props: {
        label: '아웃라인 버튼',
        variant: 'outlined',
      },
    })
    expect(wrapper.classes()).toContain('gst-button--outlined')
  })

  it('텍스트 버튼이 정상적으로 렌더링되어야 합니다', () => {
    const wrapper = mount(GstButton, {
      props: {
        label: '텍스트 버튼',
        variant: 'text',
      },
    })
    expect(wrapper.classes()).toContain('gst-button--text')
  })

  it('아이콘 버튼이 정상적으로 렌더링되어야 합니다', () => {
    const wrapper = mount(GstButton, {
      props: {
        icon: 'pi pi-check',
        iconOnly: true,
      },
    })
    expect(wrapper.classes()).toContain('gst-button--icon-only')
  })

  it('크기 변형이 정상적으로 적용되어야 합니다', () => {
    const wrapper = mount(GstButton, {
      props: {
        label: '큰 버튼',
        size: 'large',
      },
    })
    expect(wrapper.classes()).toContain('gst-button--large')
  })

  it('disabled 상태일 때 클릭이 불가능해야 합니다', () => {
    const wrapper = mount(GstButton, {
      props: {
        label: '비활성화 버튼',
        disabled: true,
      },
    })

    expect(wrapper.attributes('disabled')).toBeDefined()
  })

  it('클릭 이벤트가 정상적으로 발생해야 합니다', async () => {
    const wrapper = mount(GstButton, {
      props: {
        label: '테스트 버튼',
      },
    })

    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
  })

  it('loading 상태일 때 로딩 인디케이터가 표시되어야 합니다', () => {
    const wrapper = mount(GstButton, {
      props: {
        label: '로딩 버튼',
        loading: true,
      },
    })

    expect(wrapper.find('button').classes()).toContain('p-button-loading')
  })
})
