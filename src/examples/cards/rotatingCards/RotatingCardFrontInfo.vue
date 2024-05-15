<script setup>
defineProps({
  image: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <div
    class="front-info front-background"
    :style="{
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
    }"
  >
    <div class="card-body py-7 text-center">
      <i v-if="icon" class="material-icons text-white text-4xl my-3">{{
        icon
      }}</i>
      <h3 class="text-white" v-html="title" />
      <p class="text-white opacity-8">
        {{ description }}
      </p>
      <p
        v-if="label"
        class="text-sm text-white font-weight-bold"
      >
        {{ label }}
      </p>
    </div>
  </div>
</template>
