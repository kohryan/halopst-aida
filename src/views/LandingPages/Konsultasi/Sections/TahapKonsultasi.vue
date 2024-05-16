<script setup>
// example components
import DefaultInfoCard from "../../../../examples/cards/infoCards/DefaultInfoCard.vue";
import CenteredBlogCard from "../../../../examples/cards/blogCards/CenteredBlogCard.vue";
</script>
<template>
  <section class="py-4">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-4">
          <div class="row justify-content-start">
            <DefaultInfoCard
              color="info"
              icon="public"
              description="Pilih ingin dengan siapa Anda berkonsultasi dan buat reservasi konsultasi"
            />
          </div>
        </div>
        <div class="col-lg-4">
          <div class="row justify-content-start">
            <DefaultInfoCard
              color="info"
              icon="public"
              description="Petugas akan mengirimkan jadwal dan link konsultasi melalui email yang terdaftar"
            />
          </div>
        </div>
        <div class="col-lg-4">
          <div class="row justify-content-start">
            <DefaultInfoCard
              color="info"
              icon="public"
              description="Silakan jelaskan masalah Anda dan dapatkan solusi dari Statistisi Ahli BPS terpercaya"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
