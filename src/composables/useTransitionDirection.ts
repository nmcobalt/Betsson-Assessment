import { ref } from "vue";



export interface ListItem {
  [k: string]: string;
}


export function useTransitionDirection<L extends ListItem , K extends keyof ListItem>(list:L[], keyToMatch:K, defaultDirection = "left") {

  const direction = ref(defaultDirection);

  const resolveDirection = (from: string, to: string) => { 
    const fromIndex = getPathIndex(from)
    const toIndex = getPathIndex(to)

    if (fromIndex === -1) {
      //console.warn("One of the provided keys was not found in the list.");
      direction.value = "left";
    } else if(toIndex === -1 ){
      direction.value = "none";
    } else {
      direction.value = fromIndex > toIndex ? "right" : fromIndex < toIndex ? "left" : "none";
    }
    console.log("direction.value", direction.value, fromIndex, toIndex);
  };

  const getPathIndex = ( val: string) => {
    if (!val || !keyToMatch) return -1     
    return list.findIndex((item) => item[keyToMatch] === val);
  };



  return { direction, resolveDirection };
}
