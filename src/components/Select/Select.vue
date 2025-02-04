<script setup lang="ts">
  import Dropdown from 'primevue/dropdown';
</script>

<template>
  <Dropdown v-bind="$attrs" :class="['gst-select', $attrs.class]" />
</template>

<style lang="scss" scoped>
  .gst-select {
    &.p-dropdown {
      // 기본 스타일
      &:not(.p-disabled):hover {
        border-color: var(--primary-color);
      }

      &:not(.p-disabled).p-focus {
        border-color: var(--primary-color);
        box-shadow: var(--focus-ring);
      }

      // 패널 스타일
      .p-dropdown-panel {
        .p-dropdown-items {
          .p-dropdown-item {
            &.p-highlight {
              background-color: var(--primary-hover-bg);
              color: var(--primary-color);
            }

            &:not(.p-highlight):not(.p-disabled):hover {
              background-color: var(--primary-hover-bg);
            }
          }
        }
      }
    }
  }

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
