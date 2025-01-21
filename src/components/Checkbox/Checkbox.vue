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

  const value = computed({
    get: () => props.modelValue,
    set: (newValue) => emit('update:modelValue', newValue),
  });

  const checkboxClasses = computed(() => ({
    'gst-checkbox': true,
    'gst-checkbox--disabled': props.disabled,
    [`gst-checkbox--${props.validationState}`]: props.validationState,
  }));

  const handleChange = (event: Event) => {
    emit('change', event);
  };
</script>

<template>
  <div class="gst-checkbox-wrapper" :class="checkboxClasses">
    <div class="gst-checkbox-item">
      <Checkbox
        :binary="true"
        :modelValue="value"
        @update:modelValue="value = $event"
        :indeterminate="indeterminate"
        :disabled="disabled"
        @change="handleChange"
      >
        <template v-if="customIcon" #icon="{ checked }">
          <i
            :class="[
              'pi',
              {
                [customIcon]: checked,
                'pi-minus': props.indeterminate,
              },
            ]"
          />
        </template>
      </Checkbox>
      <label v-if="label" class="gst-checkbox-label">{{ label }}</label>
    </div>

    <small v-if="errorMessage" class="gst-checkbox__error">
      {{ errorMessage }}
    </small>
  </div>
</template>

<style lang="scss" scoped>
  .gst-checkbox-wrapper {
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
    &.gst-checkbox--error :deep(.p-checkbox) {
      .p-checkbox-box {
        border-color: var(--red-500);

        &.p-highlight {
          background: var(--red-500);
        }
      }
    }

    &.gst-checkbox--warning :deep(.p-checkbox) {
      .p-checkbox-box {
        border-color: var(--yellow-500);

        &.p-highlight {
          background: var(--yellow-500);
        }
      }
    }

    &.gst-checkbox--success :deep(.p-checkbox) {
      .p-checkbox-box {
        border-color: var(--green-500);

        &.p-highlight {
          background: var(--green-500);
        }
      }
    }

    // 에러 메시지
    .gst-checkbox__error {
      display: block;
      margin-top: 0.25rem;
      color: var(--red-500);
      font-size: 0.75rem;
    }
  }
</style>
