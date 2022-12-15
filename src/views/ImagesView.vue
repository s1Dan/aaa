<template>
  <section class="cats_images-view">
    <div class="cats_images-view__header">
      <div class="cats_images-view__tabs">
        <button
          v-for="tab in tabs"
          :key="tab"
          class="cats_images-view__tab"
          :class="{
            'cats_images-view__tab--active': tab.name === currentTab,
          }" @click="handleTabChange(tab.name)">

          <img :src="tab.img" :alt="tab.name" />
        </button>
      </div>
    </div>

    <div v-if="cats" ref="scrollContainer" class="cats_images-view__content">
      <keep-alive>
        <component :is="currentImageComponent" :images="cats" />
      </keep-alive>
    </div>
  </section>
</template>

<script setup>




const cats = [
  "https://adonius.club/uploads/posts/2022-06/1654177438_18-adonius-club-p-samaya-malenkaya-koshka-krasivo-foto-19.jpg",
  "https://avatars.dzeninfra.ru/get-zen_doc/3770780/pub_6117bb937e37175eb6409d6b_6117bc5e74a4fa1687544d88/scale_1200 ",
  "https://mobimg.b-cdn.net/v3/fetch/72/720f0e46ad63e7a42eb7ed350dd36614.jpeg",
  "https://top10a.ru/wp-content/uploads/2020/04/iu4nwfhzv.jpg",
  "https://rare-gallery.com/uploads/posts/847542-Cats-Kittens-Glance-Paws.jpg",
  "https://wallbox.ru/wallpapers/main/201627/bb00d2ffc0feaae.jpg"
];


const scrollContainer = ref(null);
const images = ref(null);
const currentTab = ref("list");
const currentImageComponent = computed(() =>currentTab.value === "list" ? ImagesList : ImagesGrid);

const handleTabChange = (tabName) => { currentTab.value = tabName; };

watch(
  () => currentTab.value,
  () => { scrollContainer.value.scrollTo(0, 0); });

const tabs = [{
    name: "list",
    img: listImg,
  },
  {
    name: "grid",
    img: gridImg,
  },];

import { onMounted, ref, computed, watch } from "vue";
import listImg from "@/assets/images/list.svg";
import ImagesList from "@/components/images/ImagesList.vue";
import gridImg from "@/assets/images/grid.svg";
import ImagesGrid from "@/components/images/ImagesGrid.vue";

</script>

<style lang="scss" scoped>
.cats_images-view {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  &__tabs {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    margin-left: auto;
  }

  &__header {
    flex-shrink: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5rem;
    width: 100%;
    padding: 0 1rem;
    background-color: #d6ccc2;
  }

  &__tab {
    background-color: #457b9d;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    transition: background-color 0.2s ease-in-out;

    img {
      width: 1rem;
      height: auto;
    }

    & + & { margin-left: 0.5rem; }

    &:hover { opacity: 0.8; }

    &--active { background-color: #e63946; }

  }

  &__content {
    display: flex;
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    flex: 1 1 auto;

    &::-webkit-scrollbar-thumb {
      background: #e63946;
      
      border-radius: 0.5rem;
    }

    &::-webkit-scrollbar { width: 0.5rem; }

    &::-webkit-scrollbar-track { background: #d6ccc2; }

  }
}
</style>
