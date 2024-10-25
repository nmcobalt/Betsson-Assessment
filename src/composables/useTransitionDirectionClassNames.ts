import { ref, computed } from "vue";


export const useTransitionDirectionClassNames = (defaultDirection = "left") => {
  const direction = ref(defaultDirection);

  const directionTransitionName = computed(() => {
    return direction.value === "left" ? "slide-left" : direction.value === "right" ? "slide-right" : "fade";
  });

  return { directionTransitionName };
};
