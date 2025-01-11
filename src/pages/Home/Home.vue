<script>
import Card from './components/Card.vue';
export default {
  components: { Card },
  data() {
    return {
      fountains: {
        img: 'https://cdn.pixabay.com/photo/2022/03/04/14/39/water-7047480_640.jpg',
        name: 'Инфинита',
        lang: 42.659359,
        long: 23.271423,
        isFunctional: true,
        isFavorite: true,
        type: 'Заведение',
        details:
          'От Инфинита: В офиса си имаме система за филтриране на вода за пиене и може да напълним шише на всеки желаещ.',
      },
    };
  },
};
</script>

<template>
  <Card :source="fountains" />
</template>

<style scoped></style>
