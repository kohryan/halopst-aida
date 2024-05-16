<script setup>
// example components
import DefaultInfoCard from "../../../../examples/cards/infoCards/DefaultInfoCard.vue";

// icon tahapan
import tahap1 from "@/assets/img/illustrations/tahap1.png";
import tahap2 from "@/assets/img/illustrations/tahap2.png";
import tahap3 from "@/assets/img/illustrations/tahap3.png";

</script>
<template>
  <section class="py-4">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-4">
          <div class="row justify-content-center text-center">
            <DefaultInfoCard
              :image="tahap1"
              description="Pilih ingin dengan siapa Anda berkonsultasi dan buat reservasi konsultasi"
            />
          </div>
        </div>
        <div class="col-lg-4">
          <div class="row justify-content-center text-center">
            <DefaultInfoCard
              :image="tahap2"
              description="Petugas akan mengirimkan jadwal dan link konsultasi melalui email yang terdaftar"
            />
          </div>
        </div>
        <div class="col-lg-4">
          <div class="row justify-content-center text-center">
            <DefaultInfoCard
              :image="tahap3"
              description="Silakan jelaskan masalah Anda dan dapatkan solusi dari Statistisi Ahli BPS terpercaya"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
