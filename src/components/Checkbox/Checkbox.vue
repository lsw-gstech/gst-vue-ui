<script setup lang="ts">
  import { computed } from 'vue';
  import Checkbox from 'primevue/checkbox';
  import type { ICheckboxProps } from './types';

  const props = withDefaults(defineProps<ICheckboxProps>(), {
    indeterminate: false,
    disabled: false,
  });

  const emit = defineEmits<{
    'update:modelValue': [value: boolean];
    change: [event: Event];
  }>();

  const localValue = computed({
    get: () => props.modelValue,
    set: (value) => emit('update:modelValue', value),
  });

  const checkboxClasses = computed(() => ({
    'gst-checkbox': true,
    'gst-checkbox--disabled': props.disabled,
    [`gst-checkbox--${props.validationState}`]: props.validationState,
  }));

  const handleChange = (event: Event) => {
    emit('change', event);
  };

  const checkboxId = `gst-checkbox-${Math.random().toString(36).substring(2, 9)}`;
</script>

<template>
  <Checkbox v-model="localValue" v-bind="$attrs" :class="['gst-checkbox', $attrs.class]" />
</template>

<style lang="scss" scoped>
  .gst-checkbox {
    &.p-checkbox {
      // 기본 스타일
      .p-checkbox-box {
        &:not(.p-disabled):hover {
          border-color: var(--primary-color);
        }

        &.p-focus {
          border-color: var(--primary-color);
          box-shadow: var(--focus-ring);
        }

        &.p-highlight {
          background-color: var(--primary-color);
          border-color: var(--primary-color);

          &:not(.p-disabled):hover {
            background-color: var(--primary-hover-color);
            border-color: var(--primary-hover-color);
          }
        }
      }
    }
  }
</style>
