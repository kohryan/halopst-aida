<template>
  <section class="py-4">
    <div class="container">
      <div class="row align-items-center">
        <div v-for="(tahap, index) in tahapanKonsultasi" :key="index" class="col-lg-4">
          <div class="row justify-content-center text-center">
            <DefaultInfoCard
              :image="tahap.image"
              :description="tahap.description"
              :targetUrl="tahap.targetUrl"
              @scrollToPilih="scrollToPilih"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import DefaultInfoCard from "../../../../examples/cards/infoCards/DefaultInfoCard.vue";
import tahap1 from "@/assets/img/illustrations/tahap1.png";
import tahap2 from "@/assets/img/illustrations/tahap2.png";
import tahap3 from "@/assets/img/illustrations/tahap3.png";

const tahapanKonsultasi = [
  {
    image: tahap1,
    description: "Pilih ingin dengan siapa Anda berkonsultasi dan buat reservasi konsultasi",
    targetUrl: "#pilih"
  },
  {
    image: tahap2,
    description: "Petugas akan mengirimkan jadwal dan link konsultasi melalui email yang terdaftar"
  },
  {
    image: tahap3,
    description: "Silakan jelaskan masalah Anda dan dapatkan solusi dari Statistisi Ahli BPS terpercaya"
  }
];

const scrollToPilih = () => {
  // Emit event to scroll to #pilih
  emit('scrollToPilih');
};
</script>
