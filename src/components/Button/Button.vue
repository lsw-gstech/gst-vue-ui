<script setup lang="ts">
  import { computed } from 'vue'
  import Button from 'primevue/button'
  import type { IButtonProps } from './types'

  const props = withDefaults(defineProps<IButtonProps>(), {
    disabled: false,
    loading: false,
    variant: 'filled',
    severity: 'primary',
    iconOnly: false,
  })

  const buttonClasses = computed(() => ({
    'gst-button': true,
    'gst-button--loading': props.loading,
    [`gst-button--${props.variant}`]: true,
    [`gst-button--${props.severity}`]: true,
    'gst-button--icon-only': props.iconOnly,
  }))
</script>

<template>
  <Button
    v-bind="$attrs"
    :label="!props.iconOnly ? props.label : undefined"
    :icon="props.icon"
    :disabled="props.disabled"
    :loading="props.loading"
    :severity="props.severity"
    :class="buttonClasses"
    :text="props.variant === 'text'"
    :outlined="props.variant === 'outlined'"
    @click="$emit('click', $event)"
  />
</template>

<style lang="scss" scoped>
  .gst-button {
    // 기본 스타일
    &:focus {
      box-shadow: var(--focus-ring);
    }

    // 크기 변형
    &--small {
      font-size: 0.875rem;
      padding: 0.25rem 0.5rem;
    }

    &--normal {
      font-size: 1rem;
      padding: 0.5rem 1rem;
    }

    &--large {
      font-size: 1.125rem;
      padding: 0.75rem 1.5rem;
    }

    // 아이콘 전용 버튼
    &--icon-only {
      padding: 0.5rem;

      &.gst-button--small {
        padding: 0.25rem;
      }

      &.gst-button--large {
        padding: 0.75rem;
      }
    }

    // 로딩 상태
    &--loading {
      cursor: wait;
      opacity: 0.8;
    }

    // Severity 변형
    @each $severity in (primary, secondary, success, info, warning, danger) {
      &--#{$severity} {
        &.p-button {
          background-color: var(--#{$severity}-color);
          border-color: var(--#{$severity}-color);

          &:hover {
            background-color: var(--#{$severity}-hover-color);
            border-color: var(--#{$severity}-hover-color);
          }
        }

        &.p-button.p-button-outlined {
          background-color: transparent;
          color: var(--#{$severity}-color);

          &:hover {
            background-color: var(--#{$severity}-hover-bg);
          }
        }

        &.p-button.p-button-text {
          background-color: transparent;
          color: var(--#{$severity}-color);
          border-color: transparent;

          &:hover {
            background-color: var(--#{$severity}-hover-bg);
          }
        }
      }
    }
  }
</style>
