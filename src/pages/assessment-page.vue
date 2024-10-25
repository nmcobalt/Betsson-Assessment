<template>
  <div>
    <h1>Assessment Page</h1>

    <div v-if="charactersList.frontFilteredCharacters?.length" class="characters-list">
      <CharacterCard v-for="item in charactersList.characters" :key="item.id" :name="item.name" :image="item.image?.url"></CharacterCard>
    </div>
  </div>
</template>

<script lang="ts">
import CharacterCard from "../components/characters/character-card.vue";
import { useCharactersStore } from "../stores/characters";

export default {
  components: {
    CharacterCard,
  },
  setup() {
    const charactersList = useCharactersStore();
    charactersList.getCharacters();

    return { charactersList };
  },
  mounted() {
    //console.log(this.charactersList.frontFilteredCharacters)
  }
};
</script>

<style lang="scss" scoped>
.characters-list {
  padding: 20px;

  display: flex;
  flex-wrap: wrap;
  gap: 24px;
}
</style>
