import { ref } from "vue";



export interface ListItem {
  [k: string]: string | undefined;
}


export function useTransitionDirection(list: ListItem[], keyToMath = "name", defaultDirection = "left") {

  const direction = ref(defaultDirection);


  const resolveDirection = (from: string, to: string) => { 
    const fromIndex = getPathIndex(from)
    const toIndex = getPathIndex(to)
    direction.value = fromIndex > toIndex ? "right" : fromIndex < toIndex ? "left" : "none";
  };

  const getPathIndex = ( val: string) => {
    const index = list.findIndex((item) => item[keyToMath] === val);
    return index ? index : 0;
  };



  return { direction, resolveDirection };
}
