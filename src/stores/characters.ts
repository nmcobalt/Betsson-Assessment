import { defineStore } from "pinia";
import data from "../jsons/mock-data.json";
import { Character} from "../types/characterTypes"

type PartialCharacter = Partial<Character>

export const useCharactersStore = defineStore("characters", {
  state: () => {
    return {
      characters: [] as PartialCharacter[],
    };
  },
  actions:{
    async getCharacters(){
      try{

        const characters = (await Promise.resolve(data)).characters as PartialCharacter[];
        this.characters = characters.map((character: PartialCharacter) => {
          return {
            id: character.id,
            name: character.name,
            image: character.image
          }
        });

      } catch (error) {
        console.log(error)
      }
    },
    // async fetchCharacters(): Promise<void> {
    //   const promise: Promise<Character[]> = new Promise((resolve) => {
    //     resolve(data:Character[]);
    //   })

    //   this.characters = await promise
    // },
  },
  // getters: {
  //   filteredCharacters(state){
  //     return (nameValue:string) => state.characters.filter(char=>char.name === nameValue)
  //   }
  // }
});
