<script setup lang="ts">
  import { computed } from 'vue';
  import Dropdown from 'primevue/dropdown';
  import MultiSelect from 'primevue/multiselect';
  import type { DropdownChangeEvent } from 'primevue/dropdown';
  import type { MultiSelectChangeEvent } from 'primevue/multiselect';
  import type { ISelectProps, ISelectOption } from './types';

  const props = withDefaults(defineProps<ISelectProps>(), {
    multiple: false,
    searchable: false,
    disabled: false,
    options: () => [],
  });

  const emit = defineEmits<{
    'update:modelValue': [value: any | any[]];
    change: [event: DropdownChangeEvent | MultiSelectChangeEvent];
  }>();

  const selectClasses = computed(() => ({
    'gst-select': true,
    'gst-select--disabled': props.disabled,
    [`gst-select--${props.validationState}`]: props.validationState,
  }));

  const groupedOptions = computed(() => {
    if (!props.groups) return props.options;

    return props.groups.map((group) => ({
      label: group.label,
      items: props.options.filter((option) => option.groupId === group.id),
    }));
  });

  const handleChange = (event: DropdownChangeEvent | MultiSelectChangeEvent) => {
    emit('change', event);
  };
</script>

<template>
  <div class="gst-select-wrapper" :class="selectClasses">
    <MultiSelect
      v-if="multiple"
      :modelValue="modelValue"
      @update:modelValue="(value) => emit('update:modelValue', value)"
      v-bind="$attrs"
      :options="props.groups ? groupedOptions : props.options"
      :disabled="disabled"
      :placeholder="placeholder"
      :filter="searchable"
      optionLabel="label"
      :optionGroupLabel="props.groups ? 'label' : undefined"
      :optionGroupChildren="props.groups ? 'items' : undefined"
      @change="handleChange"
    >
      <template v-if="$slots.option" #option="slotProps">
        <slot name="option" v-bind="slotProps" />
      </template>
    </MultiSelect>

    <Dropdown
      v-else
      :modelValue="modelValue"
      @update:modelValue="(value) => emit('update:modelValue', value)"
      v-bind="$attrs"
      :options="props.options"
      :disabled="disabled"
      :placeholder="placeholder"
      :filter="searchable"
      optionLabel="label"
      @change="handleChange"
    >
      <template v-if="$slots.option" #option="slotProps">
        <slot name="option" v-bind="slotProps" />
      </template>
    </Dropdown>

    <small v-if="errorMessage" class="gst-select__error">
      {{ errorMessage }}
    </small>
  </div>
</template>

<style lang="scss" scoped>
  .gst-select-wrapper {
    position: relative;
    width: 100%;

    :deep(.p-dropdown),
    :deep(.p-multiselect) {
      width: 100%;
    }

    // 유효성 검사 상태
    &.gst-select--error {
      :deep(.p-dropdown),
      :deep(.p-multiselect) {
        border-color: var(--red-500);
      }
    }

    &.gst-select--warning {
      :deep(.p-dropdown),
      :deep(.p-multiselect) {
        border-color: var(--yellow-500);
      }
    }

    &.gst-select--success {
      :deep(.p-dropdown),
      :deep(.p-multiselect) {
        border-color: var(--green-500);
      }
    }

    // 에러 메시지
    .gst-select__error {
      position: absolute;
      bottom: -1.25rem;
      left: 0;
      color: var(--red-500);
      font-size: 0.75rem;
    }
  }
</style>
