<script setup>
import { useRouter } from 'vue-router';
defineProps({
  image: {
    type: String,
    required: true,
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
  targetUrl: {
    type: String,
    required: true
  }
});

const router = useRouter();

// Fungsi untuk melakukan scroll ke elemen dengan ID tertentu
const scrollToSection = (id) => {
  const targetElement = document.querySelector(id);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
};

// Handler untuk menangani klik pada komponen
const handleClick = (targetUrl) => {
  if (targetUrl.startsWith('#')) {
    scrollToSection(targetUrl);
  } else {
    router.push(targetUrl);
  }
};
</script>

<template>
  <div :class="`${col ? col : 'col-md-12'}`">
    <div class="info" @click="handleClick(targetUrl)" style="cursor: pointer;">
      <img :src="image" width="35%" class="img-fluid border-radius-lg mb-2" />
      <p class="text-dark" :class="typeof description == 'string' ? 'pe-0' : description.class">
        {{ typeof description == "string" ? description : description.text }}
      </p>
    </div>
  </div>
</template>
