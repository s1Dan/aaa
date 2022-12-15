<script setup>

const textSearch = ref('');
const newsSearched = computed(() => states.filter((searchItem) => searchItem
  .toLowerCase() .includes(textSearch.value.toLowerCase())));
import search from '@/components/my_search.vue';
import { computed, ref } from 'vue';


const states = [
  '«Яндекс» провёл YaC, Минцифры хочет обязать операторов блокировать автообзвоны и другие итоги дня:',
  'Synchron, которая разрабатывает нейроинтерфейсы для помощи парализованным людям, привлекла $75 млн от фондов Билла Гейтса, Джеффа Безоса и других',
  'В ВТБ сообщили, что введённые санкции против связанных с банком компаний не окажут серьёзного влияния на работу группы. Об этом же сказали и в «Росбанке»',
  'Российское подразделение My.Games станет отдельной компанией, которая войдёт в СП под контролем Innova, объявил новый владелец Александр Чачава.',
  'Агентство Setters запустило креативный холдинг Setters Creative Capital. В него вошли действующие проекты агентства, а в будущем вступят и новые.'
  ];

</script>

<template>
  <section class="new_search-view">
    <div class="new_search-view__header"> <search v-model="textSearch" /> </div>
    <transition name="fade" mode="out-in" >
      <div v-if="isLoading" class="new_search-view__loader-container">
        <div class="new_search-view__loader" />
      </div>
      <div v-else class="new_search-view__list" >
        <div v-for="searchItem in newsSearched" class="new_search-view__item">
          <a :href="searchItem.url" target="_blank" class="new_search-view__link"/>
          <h4 class="new_search-view__item-title"> 
          {{ searchItem }} </h4>
          <p class="new_search-view__item-description"> 
          {{ searchItem.summary }} </p>
        </div>
      </div>
    </transition>
  </section>
</template>

<style lang="scss" scoped>
.new_search-view 
{
  display: flex;
  flex-direction: column;
  height: 100%;

  &__header 
  {
    padding: 1rem;
    background: #cdb4db;
  }

  &__list 
  {
    height: 100%;
    padding: 1rem;
    overflow: auto;
    display: flex;
    flex-direction: column;
    background: #ffc8dd;

    &::-webkit-scrollbar-thumb 
    {
      background: #ffffff;
      border-radius: 0.5rem;
    }

    &::-webkit-scrollbar 
    { 
      width: 0.5rem
    }

    &::-webkit-scrollbar-track 
    { 
      background: #a2d2ff
    }
  }

  &__item 
  {
    padding: 1rem;
    border: 1px solid #549cb4;
    border-radius: 0.25rem;
    margin-bottom: 1rem;
    position: relative;
    background: #ffffff;
    transition: background-color 0.2s ease-in-out;
    &:hover 
    { 
      background-color: #ffafcc
    }
  }

  &__item-title {
    margin: 0;
    margin-bottom: 0.5rem;
  }

  &__item-description 
  { 
    margin: 0 
  }

  &__link {
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }

  &__loader-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &__loader {
    width: 4.8rem;
    height: 4.8rem;
    border: 0.5rem solid #FFF;
    border-bottom-color: #9C4A1A;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
    0% {
       transform: rotate(0deg)
       }

    100% 
    { 
      transform: rotate(360deg)
    }
  }
}

.fade-enter-active, .fade-leave-active 
{ 
  transition: opacity 0.5s
}

.fade-enter, .fade-leave-to, .fade-enter-from
{ 
  opacity: 0
}

</style>
