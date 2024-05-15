<script setup>
defineProps({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  action: {
    type: Array,
    route: String,
    label: String,
    color: String,
    required: true,
  },
});
</script>
<template>
  <div
    class="back-info back-background"
    :style="{
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
    }"
  >
    <div class="card-body pt-5 text-center">
      <a class="d-block blur-shadow-image">
        <img src="../../../assets/img/illustrations/jadwal.png" width="40%" class="img-fluid mb-2 border-radius-lg" />
      </a>
      <p class="text-white">
        {{ description }}
      </p>
      <div class="buttons-group">
        <a
          v-for="({ route, color, label }, index) of action"
          :key="index"
          :href="route"
          target="_blank"
          class="btn btn-sm mt-3 inline-block ms-1"
          :class="`${color ? `btn-${color}` : 'btn-white'}`"
          >{{ label }}</a
        >
      </div>
    </div>
  </div>
</template>
