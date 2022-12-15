<script setup>
defineProps({ 
  modelValue: { 
    default: '', 
    type: String 
    },
});

const emit = defineEmits(['update:modelValue']);
const handleInput = (event) => { emit('update:modelValue', event.target.value) };
</script>

<style lang="scss" scoped>
.new_search-bar {
  display: flex;
  align-items: center;
  background: ghostwhite;
  border-radius: 0.4rem;
  padding: 0 0.5rem;

  &__input {
    height: 3rem;
    flex-grow: 2;
    background: transparent;
    font-weight: 500;

    &:focus 
    {
       outline: none 
    }
    
    &__img {
    width: 1rem;
    height: auto;
    margin-right: 0.5rem
  }
  }
}
</style>

<template>
  <div class="new_search-bar">
    <img :src="searchImg" alt=""
     class="new_search-bar__img" >
    
    <input
      :value="modelValue" class="new_search-bar__input"
      placeholder="Введите название статьи" @input="handleInput" >

  </div>

</template>
