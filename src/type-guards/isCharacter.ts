import { Character, CharacterData} from "../types/characterTypes"

export function isCharacterData(data: unknown): data is CharacterData {
  return (
    typeof data === "object" &&
    data !== null &&
    Array.isArray((data as CharacterData).characters) &&
    (data as CharacterData).characters.every(isCharacter)
  );
}

export function isCharacter(item: unknown): item is Character {
  if (typeof item !== "object" || item === null) return false;

  const character = item as Partial<Character>;
  return (
    typeof character.id === "string" &&
    typeof character.name === "string" &&
    character.powerstats !== undefined && typeof character.powerstats === "object" &&
    character.biography !== undefined && typeof character.biography === "object" &&
    character.appearance !== undefined && typeof character.appearance === "object" &&
    character.work !== undefined && typeof character.work === "object" &&
    character.connections !== undefined && typeof character.connections === "object" &&
    character.image !== undefined && typeof character.image === "object" &&
    typeof character.image.url === "string"
  );
}