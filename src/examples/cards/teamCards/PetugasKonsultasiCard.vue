<script setup>
import MaterialBadge from "../../../components/MaterialBadge.vue";

defineProps({
  image: {
    type: String,
    required: true,
  },
  profile: {
    type: Object,
    required: true,
    name: String,
    link: String,
  },
  satker: {
    type: Object,
    label: String,
    color: String,
    required: true,
  },
  topik1: {
    type: String,
    required: true,
  },
  topik2: {
    type: String,
    required: true,
  },
  jabatan: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <div class="card card-profile">
    <div class="row">
      <div class="col-lg-4 col-md-6 col-12 mt-n5">
          <div class="p-3 pe-md-0">
            <img
              class="w-100 border-radius-md shadow-lg"
              :src="image"
              :alt="profile.name"
            />
          </div>
      </div>
      <div class="col-lg-8 col-md-6 col-12 my-auto">
        <div class="card-body ps-lg-0">
          <h6 class="mb-0">{{ profile.name }}</h6>
          <p class="text-weight-bold text-sm mb-0" :class="`text-${satker.color}`">{{ satker.label }}</p>
          <p class="mb-2 text-xs"><i class="fa fa-briefcase text-xs margin-right-4"></i> {{ jabatan }}</p>
          <div class="col-lg-12">
            <MaterialBadge color="gray-300" class="mb-1 text-dark opacity-6" style="margin-right: 2px; text-transform: none;"
              >{{ topik1 }}</MaterialBadge
            >
            <MaterialBadge color="gray-300" class="mb-1 text-dark opacity-6" style="margin-right: 2px; text-transform: none;"
              >{{ topik2 }}</MaterialBadge
            >
          </div>
          <div class="col-lg-12">
            <a
              href="/reservasi"
              class="btn btn-sm bg-gradient-danger mt-2 mb-0" style="text-transform: none;"
              >Buat Reservasi
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
