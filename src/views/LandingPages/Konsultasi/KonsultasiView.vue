<script setup>
// Example components
import NavbarKonsultasi from "../../../examples/navbars/NavbarKonsultasi.vue";
import DefaultFooter from "../../../examples/footers/FooterDefault.vue";

// Image
import bg0 from "@/assets/img/bg9.jpg";

// Sections
import Tahapan from "./Sections/TahapKonsultasi.vue";
import PetugasKonsultasi from "./Sections/PetugasKonsultasi.vue"; 

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
