import { ref } from "vue";



export interface ListItem {
  [k: string]: string | undefined;
}


export function useTransitionDirection<L extends ListItem , K extends keyof ListItem>(list:L[], keyToMath:K, defaultDirection = "left") {

  const direction = ref(defaultDirection);


  const resolveDirection = (from: string, to: string) => { 
    const fromIndex = getPathIndex(from)
    const toIndex = getPathIndex(to)
    direction.value = fromIndex > toIndex ? "right" : fromIndex < toIndex ? "left" : "none";
    console.log("direction.value", direction.value);

  };

  const getPathIndex = ( val: string) => {
    if (!val || !keyToMath) return 0      
    const index = list.findIndex((item) => item[keyToMath] === val);
    return index ? index : 0;
  };



  return { direction, resolveDirection };
}
