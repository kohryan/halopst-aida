<template>
  <section class="py-4">
    <div class="container">
      <div class="row align-items-center justify-content-center">
        <!-- tahap 1 -->
        <div class="col-lg-3 row justify-content-center text-center">
          <DefaultInfoCard
            :image="tahapanKonsultasi[0].image"
            :description="tahapanKonsultasi[0].description"
            :targetUrl="tahapanKonsultasi[0].targetUrl"
            @scrollToPilih="scrollToPilih"
          />
        </div>
        <!-- Arrow -->
        <div class="col-lg-1 text-center d-lg-block d-none ">
          <img src="@/assets/img/illustrations/panah-kanan.png" alt="Arrow" class="img-fluid" />
        </div>
        <!-- tahap 2 -->
        <div class="col-lg-3 row justify-content-center text-center">
          <DefaultInfoCard
            :image="tahapanKonsultasi[1].image"
            :description="tahapanKonsultasi[1].description"
            :targetUrl="tahapanKonsultasi[1].targetUrl"
            @scrollToPilih="scrollToPilih"
          />
        </div>
        <!-- Arrow -->
        <div class="col-lg-1 text-center d-lg-block d-none ">
          <img src="@/assets/img/illustrations/panah-kanan.png" alt="Arrow" class="img-fluid" />
        </div>
        <!-- tahap 3 -->
        <div class="col-lg-3 row justify-content-center text-center">
          <DefaultInfoCard
            :image="tahapanKonsultasi[2].image"
            :description="tahapanKonsultasi[2].description"
            :targetUrl="tahapanKonsultasi[2].targetUrl"
            @scrollToPilih="scrollToPilih"
          />
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

<style scoped>
  .row {
    display: flex;
    align-items: center;
  }

  .col-lg-3, .col-lg-1 {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .col-lg-1 img {
    width: 100%;
    max-width: 50px; /* Adjust as necessary */
  }
</style>
