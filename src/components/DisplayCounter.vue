<template>
  <div ref="counter" class="display-counter">{{ counter }}</div>
</template>

<script lang="ts">
export default {
  name: 'DisplayCounter',
  props: {
    counter: {
      type: Number,
      default: 0
    }
  },
  setup() {
    return {}
  },
  mounted() {
    console.log("mounted");
    (this.$refs['counter'] as HTMLElement).addEventListener('click', this.printClicked)
  },
  beforeUnmount() {
    console.log("beforeUnmount");

    //this.$refs['counter'].removeEventListener('click', this.printClicked)
  },
  methods: {
    printClicked() {
      console.log("clicked")
    }
  }
}
</script>


<style lang="scss" scoped>
.display-counter{
  background-color: var(--color-primary, red);
  margin: 20px auto;
  max-width: 200px;
  border-radius: 4px;

  @include scr-phones{
    max-width: none;
    background-color: yellow;
  }
  @include scr-tablets{
    background-color: aqua;
  }
}
</style>