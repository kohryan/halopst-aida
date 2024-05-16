<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import NavbarKonsultasi from "../../../examples/navbars/NavbarKonsultasi.vue";
import DefaultFooter from "../../../examples/footers/FooterDefault.vue";

//image
import bg0 from "@/assets/img/bg9.jpg";

//sections
import Tahapan from "./Sections/TahapKonsultasi.vue";
import PetugasKonsultasi from "./Sections/PetugasKonsultasi.vue"; 

const body = document.getElementsByTagName("body")[0];
//hooks
onMounted(() => {
  body.classList.add("about-us");
  body.classList.add("bg-gray-200");
});

onUnmounted(() => {
  body.classList.remove("about-us");
  body.classList.remove("bg-gray-200");
});
</script>
<template>
  <NavbarKonsultasi
    :action="{
      route: 'javascript:;',
      label: 'Buy Now',
      color: 'btn-white',
    }"
  />
  <header class="bg-gradient-dark">
    <div
      class="page-header min-vh-70"
      :style="{ backgroundImage: `url(${bg0})` }"
    >
      <span class="mask bg-gradient-dark opacity-4"></span>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center mx-auto my-auto">
            <h1 class="text-white">
              Konsultasikan Masalah Data Statistik dengan Ahlinya
            </h1>
            <p class="mb-4 text-white text-dark">
              Layanan konsultasi langsung secara daring dengan Statistisi Ahli dan Analis Data Profesional dari BPS Jawa Timur
            </p>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="card card-body shadow-xl mx-3 mx-md-4 mt-n6">
    <Tahapan />
    <PetugasKonsultasi />
  </div>
  <DefaultFooter />
</template>
