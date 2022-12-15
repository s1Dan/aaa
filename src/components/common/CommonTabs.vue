<template>
  <section class="common-tabs">
    <div class="common-tabs__tabs">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        class="common-tabs__tab"
        :class="{ 'common-tabs__tab--active': tab.value === modelValue }"
        @click="handleTabClick(tab)"
      >
        {{ tab.label }}
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  tabs: {
    type: Array,
    required: true,
  },
  modelValue: {
    type: String,
    required: true,
  },
});

const $emit = defineEmits(['update:modelValue']);

const handleTabClick = (tab) => {
  $emit('update:modelValue', tab.value);
};

</script>

<style lang="scss" scoped>
.common-tabs {
  margin-bottom: 2rem;

  &__tabs {
    display: flex;
    justify-content: center;
  }

  &__tab {
    padding: 0.5rem 1rem;
    border: 1px solid $color-primary;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:not(:last-child) {
      margin-right: 1rem;
    }

    &:hover {
      background-color: $color-primary;
      color: $color-white;
    }

    &--active {
      background-color: $color-primary;
      color: $color-white;
    }
  }
}
</style>
