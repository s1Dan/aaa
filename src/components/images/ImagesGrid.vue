<style lang="scss" scoped>
.pictures-grid {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(v-bind(COLUMNS), 1fr);

  &__column {
    display: flex;
    flex-direction: column;
    width: 100%;
    img { width: 100%;height: auto;}
  }
}
</style>

<script setup>
import { computed } from 'vue';
const COLUMNS = 2;
const props = defineProps({ images: { type: Array, required: true, }, });
const columns = computed(() => {
  const result = [];
  for (let i = 0; i < COLUMNS; i++) 
  { result.push( props.images.filter((_, index) => index % COLUMNS === i), ); }
  return result;});
</script>

<template>
  <section class="pictures-grid">
    <div 
    v-for="(column, i) in columns" 
    :key="i" class="pictures-grid__column" 
    >
      <img 
      v-for="img in column" 
      :key="img" :src="img" alt="" 
      >
    </div>
  </section>
</template>

