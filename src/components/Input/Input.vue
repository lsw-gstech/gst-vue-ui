<template>
  <InputText
    v-model="localValue"
    :type="props.type"
    :placeholder="props.placeholder"
    :disabled="props.disabled"
    :readonly="props.readonly"
    v-bind="$attrs"
    @change="handleChange"
    :class="inputClasses"
  />
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import InputText from 'primevue/inputtext';
  import type { InputProps } from './types';

  const props = defineProps<InputProps>();

  const emit = defineEmits<{
    'update:modelValue': [value: string];
    change: [event: Event];
  }>();

  const localValue = computed({
    get: () => props.modelValue,
    set: (value) => emit('update:modelValue', value),
  });

  const handleChange = (event: Event) => {
    emit('change', event);
  };

  const inputClasses = computed(() => ({
    'gst-input': true,
    'gst-input--disabled': props.disabled,
    [`gst-input--${props.size}`]: props.size,
    [`gst-input--${props.validationState}`]: props.validationState,
  }));
</script>

<style lang="scss" scoped>
  .gst-input {
    &.p-inputtext {
      // 기본 스타일
      &:enabled:hover {
        border-color: var(--primary-color);
      }

      &:enabled:focus {
        border-color: var(--primary-color);
        box-shadow: var(--focus-ring);
      }

      // 크기 변형
      &.gst-input--small {
        font-size: 0.875rem;
        padding: 0.375rem 0.75rem;
      }

      &.gst-input--large {
        font-size: 1.125rem;
        padding: 0.75rem 1rem;
      }

      // 상태 변형
      &.gst-input--success {
        border-color: var(--green-500);
        &:enabled:hover,
        &:enabled:focus {
          border-color: var(--green-600);
        }
      }

      &.gst-input--warning {
        border-color: var(--yellow-500);
        &:enabled:hover,
        &:enabled:focus {
          border-color: var(--yellow-600);
        }
      }

      &.gst-input--error {
        border-color: var(--red-500);
        &:enabled:hover,
        &:enabled:focus {
          border-color: var(--red-600);
        }
      }
    }
  }
</style>
