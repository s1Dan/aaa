<script setup>
defineProps({ 
  images: { 
  type: Array, required: true
  }, 
});
</script>

<style lang="scss" scoped>
.pictures-list {
  display: flex;
  width: 100%;
  flex-direction: column;

  &__item {
    display: flex;
    height: 10rem;
    margin-bottom: 1rem;
    border: 0.1rem solid #000;
    padding: 0.5rem;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
  }

  &__img {
    width: auto;
    height: 100%;
    margin-right: 1rem;
  }
}
</style>



<template>
  <section class="pictures-list">
    <div v-for="img in images" :key="img" class="pictures-list__item" >
      <img class="pictures-list__img" :src="img" alt="" >
      <div class="pictures-list__info"> url: {{ img }} </div> </div>
  </section>
</template>

