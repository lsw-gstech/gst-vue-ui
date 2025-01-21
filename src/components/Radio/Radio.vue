<script setup lang="ts">
  import { computed } from 'vue';
  import RadioButton from 'primevue/radiobutton';
  import type { IRadioProps } from './types';

  const props = withDefaults(defineProps<IRadioProps>(), {
    inline: false,
    disabled: false,
    options: () => [],
  });

  const emit = defineEmits<{
    'update:modelValue': [value: any];
    change: [event: Event];
  }>();

  const radioGroupClasses = computed(() => ({
    'gst-radio-group': true,
    'gst-radio-group--inline': props.inline,
    'gst-radio-group--disabled': props.disabled,
    [`gst-radio-group--${props.validationState}`]: props.validationState,
  }));

  const handleChange = (event: Event) => {
    emit('change', event);
  };
</script>

<template>
  <div class="gst-radio-wrapper" :class="radioGroupClasses">
    <div class="gst-radio-group">
      <div v-for="option in options" :key="option.value" class="gst-radio-item">
        <RadioButton
          :modelValue="modelValue"
          @update:modelValue="(value) => emit('update:modelValue', value)"
          :value="option.value"
          :disabled="option.disabled || disabled"
          @change="handleChange"
        />
        <label class="gst-radio-label">{{ option.label }}</label>
      </div>
    </div>

    <small v-if="errorMessage" class="gst-radio-group__error">
      {{ errorMessage }}
    </small>
  </div>
</template>

<style lang="scss" scoped>
  .gst-radio-wrapper {
    .gst-radio-group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      &.gst-radio-group--inline {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1rem;
      }
    }

    .gst-radio-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .gst-radio-label {
      cursor: pointer;
      user-select: none;
      color: var(--text-color);
    }

    // 유효성 검사 상태
    &.gst-radio-group--error :deep(.p-radiobutton) {
      .p-radiobutton-box {
        border-color: var(--red-500);

        &.p-highlight {
          background: var(--red-500);
          border-color: var(--red-500);
        }
      }
    }

    &.gst-radio-group--warning :deep(.p-radiobutton) {
      .p-radiobutton-box {
        border-color: var(--yellow-500);

        &.p-highlight {
          background: var(--yellow-500);
          border-color: var(--yellow-500);
        }
      }
    }

    &.gst-radio-group--success :deep(.p-radiobutton) {
      .p-radiobutton-box {
        border-color: var(--green-500);

        &.p-highlight {
          background: var(--green-500);
          border-color: var(--green-500);
        }
      }
    }

    // 에러 메시지
    .gst-radio-group__error {
      display: block;
      margin-top: 0.25rem;
      color: var(--red-500);
      font-size: 0.75rem;
    }
  }
</style>
