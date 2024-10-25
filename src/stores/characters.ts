import { defineStore } from "pinia";
//import data from "../jsons/mock-data.json";
import { Character, AppState, Image } from "../types/characterTypes";
import {isCharacterData} from "../type-guards/isCharacter";

//type PartialCharacter = Partial<Character>



interface IFrontFilteredCharacter {
  id: string;
  name: string;
  image: Image;
}

export const useCharactersStore = defineStore("characters", {
  state: () => {
    return {
      characters: [] as Character[],
    };
  },
  actions: {
    async getCharacters() {
      try {
        const response = await fetch("/characters/mock-data.json");
        const data = (await response.json()) as AppState;

        if (isCharacterData(data)) {
          this.characters = data?.characters as Character[];
        } else {
          console.error("Data does not match CharacterData type");
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {
    frontFilteredCharacters(state): IFrontFilteredCharacter[] {
      return state.characters.map((item) => {
        return {
          id: item.id,
          name: item.name,
          image: item.image,
        };
      });
    },
  },
});
