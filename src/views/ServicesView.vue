<template>
  <section class="services_carwash-view">
    <h3 class="services_carwash-view__title">
      Услуги автомойки  </h3>

    <div class="services_carwash-view__content">
      <div class="services_carwash-view__list">
        <div v-for="service in servicesWithChosenStatus"
         :key="service.id"
          class="services_carwash-view__item"
          :class="{'services_carwash-view__item--chosen': service.isChosen}"
          @click="handleServiceClick(service)" >
          <div class="services_carwash-view__item-title"> {{ service.title }} </div>
          <div class="services_carwash-view__item-description"> {{ service.description }} </div>
          <hr> <div class="services_carwash-view__item-price"> {{ service.price }} ₽ </div>
        </div>
      </div>
      <div class="services_carwash-view__result"> 
      <span> Итого </span> 
      <span>{{ resultPrice }} ₽ </span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue';

const services = [
  {
    id: 1,
    title: 'Мойка авто (легковое)',
    price: 1500,
  },
  {
    id: 2,
    title: 'Мойка авто (Внедорожник)',
    price: 2000,
  },
  {
    id: 3,
    title: 'Мойка авто (Грузовое)',
    price: 3500,
  },
  {
    id: 4,
    title: 'Мойка авто (автобус)',
    price: 3000,
  },
  {
    id: 5,
    title: 'Мойка окон',
    price: 1200,
  },
  {
    id: 6,
    title: 'Проверка давления в колесах',
    price: 500,
  }
];

const chosenServices = ref([]);

const resultPrice = computed(() => 
  servicesWithChosenStatus.value.reduce((acc, service) => 
    (service.isChosen ? acc + service.price : acc), 0));

const servicesWithChosenStatus = computed(() => services.map((service) => 
  { 
    const isChosen = chosenServices.value.includes(service.id);

  return {
    ...service,
    isChosen };
}));

const handleServiceClick = (service) => 
{
  if (service.isChosen) {
    chosenServices.value = chosenServices.value.filter((id) => 
      id !== service.id);
    return;
  }

  chosenServices.value.push(service.id);
};
</script>

<style lang="scss" scoped>
.services_carwash-view {
  position: relative;
  background: #2b2d42;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding-top: 1rem;

  &__content {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    padding: 2rem 0;

  }
  &__title {
    color: #8d99ae;
    font-size: 2rem;
  }

  &__list {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 15% 1rem 15%;
    justify-content: flex-start;

    overflow: auto;

    @include layout-mobile 
    {
      padding: 0 5% 1rem 5%;
    }

    &::-webkit-scrollbar 
    {
      width: 0.5rem;
    }

    &::-webkit-scrollbar-track 
    {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb 
    {
      background: #918F8E;
      border-radius: 0.5rem;
    }
  }

  &__item {
    user-select: none;
    display: flex;
    padding: 1rem;
    font-weight: bold;
    justify-content: space-between;
    cursor: pointer;
    align-items: center;
    background: #edf2f4;
    color: #2b2d42;
    font-size: 1rem;
    transition: color 0.2s ease-in-out, background 0.2s ease-in-out;
    border-radius: 0.2rem;

    &:hover 
    {
      filter: brightness(1.1);
      opacity: 0.8;
    }

    &--chosen 
    {
      background: #918F8E;
    }

    &+& 
    {
      margin-top: 0.5rem
    }
  }

  &__item-price 
  {
    font-size: 1.2rem;
    font-weight: bold;
  }

  &__result 
  {
    border-top: 0.2rem #F2F2F2 solid;
    font-size: 1.2rem;
    font-weight: bold;
    align-items: center;
    display: flex;
    justify-content: space-between;
    color: #F2F2F2;
    width: 100%;
    padding: 1rem 8rem;

    @include layout-mobile 
    {
      padding: 1rem 5%;
    }
  }
}

</style>
