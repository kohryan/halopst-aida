<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import NavbarDefault from "../../examples/navbars/NavbarDefault.vue";
import DefaultFooter from "../../examples/footers/FooterDefault.vue";
import Header from "../../examples/Header.vue";
import FilledInfoCard from "../../examples/cards/infoCards/FilledInfoCard.vue";

// sections
import BuiltByDevelopers from "./Components/BuiltByDevelopers.vue";
import PresentationInformation from "./Sections/PresentationInformation.vue";

//images
import bg0 from "@/assets/img/bg9.jpg";
import wavesWhite from "@/assets/img/waves-white.svg";

//dep
import Typed from "typed.js";

//hooks
const body = document.getElementsByTagName("body")[0];
onMounted(() => {
  body.classList.add("presentation-page");
  body.classList.add("bg-gray-200");

  if (document.getElementById("typed")) {
    // eslint-disable-next-line no-unused-vars
    var typed = new Typed("#typed", {
      stringsElement: "#typed-strings",
      typeSpeed: 90,
      backSpeed: 90,
      backDelay: 200,
      startDelay: 500,
      loop: true,
    });
  }
  
});
onUnmounted(() => {
  body.classList.remove("presentation-page");
  body.classList.remove("bg-gray-200");
});

</script>

<template>
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <NavbarDefault :sticky="true" />
      </div>
    </div>
  </div>
  <Header>
    <div
      class="page-header min-vh-75"
      :style="`background-image: url(${bg0})`"
      loading="lazy"
    >
      <span class="mask bg-gradient-dark opacity-2"></span>
      <div class="container">
        <div class="row">
          <div class="col-lg-7 text-center mx-auto position-relative">
            <h1
              class="text-white pt-3 mt-n5 me-2"
              :style="{ display: 'inline-block ' }"
            >
            Halo PST BPS Jatim!
            </h1>
            <p class="text-white px-5 mt-1" :style="{ fontWeight: '500' }">
              <i>"Saya lagi butuh <span class="text-white" id="typed"></span>, nih </i>🥺 <br />
              <span class="text-white font-weight-bold">
                Tenang! Kami Ada untuk Solusi Data Anda
              </span>
            </p>
            <div id="typed-strings">
              <h1>data statistik</h1>
              <h1>konsultasi data</h1>
              <h1><s>jodoh</s> ide skripsi</h1>
            </div>
          </div>
          <div class="col-lg-6 mx-auto position-relative">
            <div class="input-group mt-3">
              <input type="text" class="form-control bg-white px-3" placeholder="Cari Data Apa?" aria-label="Recipient's username" aria-describedby="button-addon2" v-model="searchQuery" @keyup.enter="search">
              <button class="btn btn-success" style="margin-bottom: 0;" type="button-lg" id="button-addon2" @click="search">Cari</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Header>

  <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6">
    <PresentationInformation />
    
  </div>

</template>

