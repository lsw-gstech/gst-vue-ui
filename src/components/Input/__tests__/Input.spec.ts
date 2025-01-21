import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import GstInput from '../Input.vue'

describe('GstInput', () => {
  it('입력값이 정상적으로 업데이트되어야 합니다', async () => {
    const wrapper = mount(GstInput, {
      props: {
        modelValue: '',
        'onUpdate:modelValue': (e: string) => wrapper.setProps({ modelValue: e }),
      },
    })

    await wrapper.find('input').setValue('테스트')
    expect(wrapper.props('modelValue')).toBe('테스트')
  })

  it('아이콘이 정상적으로 렌더링되어야 합니다', () => {
    const wrapper = mount(GstInput, {
      props: {
        prefixIcon: 'pi-search',
        suffixIcon: 'pi-times',
      },
    })

    expect(wrapper.find('.pi-search').exists()).toBe(true)
    expect(wrapper.find('.pi-times').exists()).toBe(true)
  })

  it('삭제 버튼이 정상적으로 동작해야 합니다', async () => {
    const wrapper = mount(GstInput, {
      props: {
        modelValue: '테스트',
        clearable: true,
        'onUpdate:modelValue': (e: string) => wrapper.setProps({ modelValue: e }),
      },
    })

    await wrapper.find('.gst-input__clear').trigger('click')
    expect(wrapper.props('modelValue')).toBe('')
  })

  it('유효성 검사 상태가 정상적으로 표시되어야 합니다', () => {
    const wrapper = mount(GstInput, {
      props: {
        validationState: 'error',
        errorMessage: '에러 메시지',
      },
    })

    expect(wrapper.classes()).toContain('gst-input--error')
    expect(wrapper.find('.gst-input__error').text()).toBe('에러 메시지')
  })
})
