<script setup lang="ts">
  import Button from 'primevue/button';
</script>

<template>
  <Button v-bind="$attrs" :class="['gst-button', $attrs.class]" />
</template>

<style lang="scss" scoped>
  .gst-button {
    &.p-button {
      // 기본 스타일
      &:focus {
        box-shadow: var(--focus-ring);
      }

      // 크기 변형
      &.p-button-sm {
        font-size: 0.875rem;
        padding: 0.25rem 0.5rem;
      }

      &.p-button {
        font-size: 1rem;
        padding: 0.5rem 1rem;
      }

      &.p-button-lg {
        font-size: 1.125rem;
        padding: 0.75rem 1.5rem;
      }

      // 아이콘 전용 버튼
      &.p-button-icon-only {
        padding: 0.5rem;

        &.p-button-sm {
          padding: 0.25rem;
        }

        &.p-button-lg {
          padding: 0.75rem;
        }
      }

      // 로딩 상태
      &.p-button-loading {
        cursor: wait;
        opacity: 0.8;
      }

      // Severity 변형
      @each $severity in (primary, secondary, success, info, warning, danger) {
        &.p-button-#{$severity} {
          background-color: var(--#{$severity}-color);
          border-color: var(--#{$severity}-color);

          &:enabled:hover {
            background-color: var(--#{$severity}-hover-color);
            border-color: var(--#{$severity}-hover-color);
          }

          &.p-button-outlined {
            background-color: transparent;
            color: var(--#{$severity}-color);

            &:enabled:hover {
              background-color: var(--#{$severity}-hover-bg);
            }
          }

          &.p-button-text {
            background-color: transparent;
            color: var(--#{$severity}-color);
            border-color: transparent;

            &:enabled:hover {
              background-color: var(--#{$severity}-hover-bg);
            }
          }
        }
      }
    }
  }
</style>
