<script setup lang="ts">
  import { computed, ref } from 'vue';
  import InputText from 'primevue/inputtext';
  import type { IInputProps } from './types';

  const inputRef = ref<InstanceType<typeof InputText> | null>(null);
  const props = withDefaults(defineProps<IInputProps>(), {
    type: 'text',
    disabled: false,
    readonly: false,
    clearable: false,
  });

  const emit = defineEmits<{
    'update:modelValue': [value: string];
    change: [event: Event];
    clear: [];
  }>();

  const inputClasses = computed(() => ({
    'gst-input': true,
    'gst-input--disabled': props.disabled,
    'gst-input--readonly': props.readonly,
    [`gst-input--${props.size}`]: true,
    [`gst-input--${props.validationState}`]: props.validationState,
    'gst-input--with-prefix': !!props.prefixIcon,
    'gst-input--with-suffix': !!props.suffixIcon || props.clearable,
  }));

  const inputValue = computed({
    get: () => props.modelValue ?? '',
    set: (value: string) => emit('update:modelValue', value),
  });

  const handleClear = () => {
    emit('update:modelValue', '');
    emit('clear');
    // @ts-ignore
    inputRef.value?.$el.focus();
  };

  const handleChange = (event: Event) => {
    console.log('handleChange', event);
    emit('change', event);
  };
</script>

<template>
  <div class="gst-input-wrapper" :class="inputClasses">
    <span v-if="prefixIcon" class="gst-input__prefix">
      <i :class="['pi', prefixIcon]" />
    </span>

    <InputText
      ref="inputRef"
      v-model="inputValue"
      v-bind="$attrs"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      @change="handleChange"
    />

    <span v-if="suffixIcon" class="gst-input__suffix">
      <i :class="['pi', suffixIcon]" />
    </span>

    <button
      v-if="clearable && !!props.modelValue"
      type="button"
      class="gst-input__clear"
      @click="handleClear"
      aria-label="텍스트 전체 삭제"
    >
      <i class="pi pi-times-circle" />
    </button>

    <small v-if="errorMessage" class="gst-input__error">
      {{ errorMessage }}
    </small>
  </div>
</template>

<style lang="scss" scoped>
  .gst-input-wrapper {
    position: relative;
    display: inline-flex;
    align-items: center;
    width: 100%;

    .p-inputtext {
      width: 100%;

      &:enabled:focus {
        box-shadow: var(--focus-ring);
      }
    }

    // 크기 변형
    &.gst-input--small .p-inputtext {
      padding: 0.25rem 0.5rem;
      font-size: 0.875rem;
    }

    &.gst-input--normal .p-inputtext {
      padding: 0.5rem 0.75rem;
      font-size: 1rem;
    }

    &.gst-input--large .p-inputtext {
      padding: 0.75rem 1rem;
      font-size: 1.125rem;
    }

    // 아이콘 스타일
    .gst-input__prefix,
    .gst-input__suffix {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--text-color-secondary);
    }

    .gst-input__prefix {
      left: 0.5rem;
    }

    .gst-input__suffix {
      right: 0.5rem;
    }

    &.gst-input--with-prefix .p-inputtext {
      padding-left: 2rem;
    }

    &.gst-input--with-suffix .p-inputtext {
      padding-right: 2rem;
    }

    // 삭제 버튼
    .gst-input__clear {
      position: absolute;
      right: 0.5rem;
      background: none;
      border: none;
      color: var(--text-color-secondary);
      cursor: pointer;
      padding: 0.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s;
      z-index: 1;

      &:hover {
        color: var(--text-color);
        transform: scale(1.1);
      }

      .pi {
        font-size: 1rem;
      }
    }

    // 유효성 검사 상태
    &.gst-input--error .p-inputtext {
      border-color: var(--red-500);
    }

    &.gst-input--warning .p-inputtext {
      border-color: var(--yellow-500);
    }

    &.gst-input--success .p-inputtext {
      border-color: var(--green-500);
    }

    // 에러 메시지
    .gst-input__error {
      position: absolute;
      bottom: -1.25rem;
      left: 0;
      color: var(--red-500);
      font-size: 0.75rem;
    }
  }
</style>
