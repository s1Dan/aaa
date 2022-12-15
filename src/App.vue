<template>
  <section class="app">
    <CommonTabs
      v-model="activeTab"
      :tabs="tabs"
    />

    <div class="app__content">
      <keep-alive>
        <component :is="currentView" />
      </keep-alive>
    </div>
  </section>
</template>

<script setup>
import CommonTabs from '@/components/common/CommonTabs.vue';
import { computed, onMounted, ref } from 'vue';
import ServicesView from '@/views/ServicesView.vue';
import SearchView from '@/views/SearchView.vue';
import ImagesView from '@/views/ImagesView.vue';

const tabs = [
  {
    label: 'Услуги',
    value: 'services',
    component: ServicesView,
  },
  {
    label: 'Поиск',
    value: 'search',
    component: SearchView,
  },
  {
    label: 'Картинки',
    value: 'images',
    component: ImagesView,
  },
];

const activeTab = ref('services');

const currentView = computed(() => {
  const tab = tabs.find(({ value }) => value === activeTab.value);

  return tab.component;
});

const getCurrentTabFromUrl = () => {
  const url = new URL(window.location.href);
  const tab = url.searchParams.get('tab');

  if (tab) {
    activeTab.value = tab;
  }
};

onMounted(() => {
  getCurrentTabFromUrl();
});
</script>

<style lang="scss">
.app {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;

  &__content {
    border: 1px solid $color-primary;
    border-radius: 0.25rem;
    max-width: 40rem;
    width: 100%;
    height: 30rem;

    @include layout-mobile {
      max-width: 100%;
      height: 90%;
    }
  }
}
</style>
