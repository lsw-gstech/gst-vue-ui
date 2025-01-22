<script setup lang="ts">
  import { computed } from 'vue';
  import Checkbox from 'primevue/checkbox';
  import type { ICheckboxGroupProps } from './types';

  const props = withDefaults(defineProps<ICheckboxGroupProps>(), {
    disabled: false,
    options: () => [],
  });

  const emit = defineEmits<{
    'update:modelValue': [value: any[]];
    change: [event: Event];
  }>();

  const value = computed({
    get: () => props.modelValue,
    set: (newValue) => emit('update:modelValue', newValue),
  });

  const handleGroupCheckbox = (checked: boolean, optionValue: any) => {
    const newValue = [...(value.value || [])];
    if (checked) {
      newValue.push(optionValue);
    } else {
      const index = newValue.indexOf(optionValue);
      if (index > -1) newValue.splice(index, 1);
    }
    value.value = newValue;
  };

  const checkboxGroupClasses = computed(() => ({
    'gst-checkbox-group': true,
    'gst-checkbox-group--disabled': props.disabled,
    [`gst-checkbox-group--${props.validationState}`]: props.validationState,
  }));

  const handleChange = (event: Event) => {
    emit('change', event);
  };
</script>

<template>
  <div class="gst-checkbox-group-wrapper" :class="checkboxGroupClasses">
    <div class="gst-checkbox-group">
      <div v-for="option in options" :key="option.value" class="gst-checkbox-item">
        <Checkbox
          :modelValue="value"
          @update:modelValue="(checked: boolean) => handleGroupCheckbox(checked, option.value)"
          :value="option.value"
          :disabled="option.disabled || disabled"
          @change="handleChange"
        />
        <label class="gst-checkbox-label">{{ option.label }}</label>
      </div>
    </div>

    <small v-if="errorMessage" class="gst-checkbox-group__error">
      {{ errorMessage }}
    </small>
  </div>
</template>

<style lang="scss" scoped>
  .gst-checkbox-group-wrapper {
    .gst-checkbox-group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .gst-checkbox-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .gst-checkbox-label {
      cursor: pointer;
      user-select: none;
      color: var(--text-color);
    }

    // 유효성 검사 상태
    &.gst-checkbox-group--error :deep(.p-checkbox) {
      .p-checkbox-box {
        border-color: var(--red-500);

        &.p-highlight {
          background: var(--red-500);
        }
      }
    }

    &.gst-checkbox-group--warning :deep(.p-checkbox) {
      .p-checkbox-box {
        border-color: var(--yellow-500);

        &.p-highlight {
          background: var(--yellow-500);
        }
      }
    }

    &.gst-checkbox-group--success :deep(.p-checkbox) {
      .p-checkbox-box {
        border-color: var(--green-500);

        &.p-highlight {
          background: var(--green-500);
        }
      }
    }

    // 에러 메시지
    .gst-checkbox-group__error {
      display: block;
      margin-top: 0.25rem;
      color: var(--red-500);
      font-size: 0.75rem;
    }
  }
</style>
