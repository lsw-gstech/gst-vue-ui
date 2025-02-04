<template>
  <RadioButton
    v-model="localValue"
    :value="props.value"
    :label="props.label"
    :name="props.name"
    :disabled="props.disabled"
    v-bind="$attrs"
    @change="handleChange"
    :class="['gst-radio', $attrs.class]"
  />
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import RadioButton from 'primevue/radiobutton';
  import type { RadioProps } from './types';

  const props = defineProps<RadioProps>();

  const emit = defineEmits<{
    'update:modelValue': [value: any];
    change: [event: Event];
  }>();

  const localValue = computed({
    get: () => props.modelValue,
    set: (value) => emit('update:modelValue', value),
  });

  const handleChange = (event: Event) => {
    emit('change', event);
  };
</script>

<style lang="scss" scoped>
  .gst-radio {
    &.p-radiobutton {
      // 기본 스타일
      .p-radiobutton-box {
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
