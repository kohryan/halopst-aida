<script setup>
import CariWilayah from "./CariWilayahKonsultasi.vue";

// example component
import PetugasKonsultasiCard from "@/examples/cards/teamCards/PetugasKonsultasiCard.vue";
import MaterialPagination from "@/components/MaterialPagination.vue";
import MaterialPaginationItem from "@/components/MaterialPaginationItem.vue";

// images
import arih from "@/assets/img/arih.jpg";
import ode from "@/assets/img/ode.jpg";
import peni from "@/assets/img/peni.jpg";

import SpesialisasiKonsultasi from "./SpesialisasiKonsultasi.vue";
</script>

<template>
  <section id="pilih" class="pb-5 satker-relative bg-gradient-dark mx-n3">
    <div class="container">
      <div class="row">
        <div class="col-md-6 text-start mb-3 mt-5">
          <CariWilayah />
        </div>
        <div class="col-md-12 text-start mb-5">
          <h3 class="text-white z-index-1 satker-relative">
            Konsultasi Umum
          </h3>
          <p class="text-white text-dark mb-0">
            Pilih petugas layanan berikut jika Anda ingin berkonsultasi terkait data statistik secara umum
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-6 mb-4">
          <PetugasKonsultasiCard
            class="mt-4"
            :image="arih"
            jabatan="Statistisi Ahli Pertama"
            :profile="{ name: 'Arih Thoyibatul I, S.Tr.Stat.' }"
            :satker="{ label: 'BPS Prov. Jawa Timur', color: 'success' }"
            topik1="Umum"
            topik2="Kependudukan"
          />
        </div>
        <div class="col-lg-4 col-6 mb-4">
          <PetugasKonsultasiCard
            class="mt-4"
            :image="ode"
            jabatan="Statistisi Ahli Muda"
            :profile="{ name: 'La Ode Ahmad Arafat, SST.' }"
            :satker="{ label: 'BPS Prov. Jawa Timur', color: 'success' }"
            topik1="Umum"
            topik2="Kependudukan"
          />
        </div>
        <div class="col-lg-4 col-6 mb-4">
          <PetugasKonsultasiCard
            class="mt-4"
            :image="peni"
            jabatan="Statistisi Ahli Madya"
            :profile="{ name: 'Peni Meivita, S.Si., M.M.' }"
            :satker="{ label: 'BPS Prov. Jawa Timur', color: 'success' }"
            topik1="Umum"
            topik2="Ekonomi"
          />
        </div>
      </div>
      <div class="container pt-5">
      <div class="row">
        <div class="col-lg-4 mx-auto">
          <MaterialPagination :style="{ marginLeft: '80px' }">
            <MaterialPaginationItem prev />
            <MaterialPaginationItem label="1" />
            <MaterialPaginationItem label="2" active />
            <MaterialPaginationItem label="3" />
            <MaterialPaginationItem label="4" />
            <MaterialPaginationItem label="5" />
            <MaterialPaginationItem next />
          </MaterialPagination>
        </div>
      </div>
    </div>
    <div class="row">
        <div class="col-md-8 text-start mb-5 mt-2">
          <h3 class="text-white z-index-1 satker-relative">
            Cari Statistisi Ahli atau Spesialisasi
          </h3>
          <p class="text-white text-dark mb-0">
            Pilih kategori yang tersedia sesuai masalah Anda
          </p>
        </div>
      </div>
      <SpesialisasiKonsultasi />
    </div>
  </section>
</template>
