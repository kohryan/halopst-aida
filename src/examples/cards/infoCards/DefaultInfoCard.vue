<script setup>
defineProps({
  icon: {
    type: [String, Object],
    default: "",
    component: String,
    size: String,
    color: String,
  },
  image: {
    type: Object,
    component: String,
    class: String,
    default: () => {},
  },
  description: {
    type: [String, Object],
    required: true,
    text: String,
    class: String,
  },
  col: {
    type: String,
    default: "",
  },
});
</script>
<script>
export default {
  inheritAttrs: false,
};
</script>
<template>
  <div :class="`${col ? col : 'col-md-12'}`">
    <div v-bind="$attrs" class="info">
      <i
        v-if="icon"
        class="material-icons text-gradient"
        :class="`${
          typeof icon == 'object'
            ? `text-${icon.color} text-${icon.size}`
            : 'text-success text-3xl'
        }`"
        >{{ typeof icon == "object" ? icon.component : icon }}</i
      >
      <img v-if="image" :src="image.component" :class="image.class" />
      <p class="text-dark" :class="typeof description == 'string' ? 'pe-5' : description.class">
        {{ typeof description == "string" ? description : description.text }}
      </p>
    </div>
  </div>
</template>
