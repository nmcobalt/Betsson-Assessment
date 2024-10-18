<template>
  <div class="character-card">
    <div class="character-card__name">{{ name }}</div>
    <div v-if="image" class="character-card__image-wrap">
      <img class="character-card__image" :src="image" :alt="name" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    image: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      required: true,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.character-card {
  background-color: #424242;
  flex: 0 0 180px;
  

  &__name {
    padding: 15px;
    color: #fff;
  }

  &__image-wrap {
    position: relative;
    aspect-ratio: 200/ 273;
  }

  &__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
