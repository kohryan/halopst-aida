<script setup>
// example components
import InfoCard from "../../../../examples/cards/infoCards/InfoCard.vue";

// icon tahapan
import timeseries from "@/assets/img/illustrations/timeseries.png";
import sosduk from "@/assets/img/illustrations/sosduk.png";
import pertanian from "@/assets/img/illustrations/pertanian.png";
import ekonomi from "@/assets/img/illustrations/ekonomi.png";
import pertambangan from "@/assets/img/illustrations/pertambangan.png";
import inflasi from "@/assets/img/illustrations/inflasi.png";

</script>
<template>
  <section class="py-0">
    <div class="container">
      <div class="row align-items-top">
        <div class="col-lg-2">
          <div class="row justify-content-center text-center">
            <InfoCard 
              :image="timeseries"
              description="Time Series"
              :url="'/konsultasi'"
            />
          </div>
        </div>
        <div class="col-lg-2">
          <div class="row justify-content-center text-center">
            <InfoCard
              :image="sosduk"
              description="Sosial & Kependudukan"
              :url="'/konsultasi'"
            />
          </div>
        </div>
        <div class="col-lg-2">
          <div class="row justify-content-center text-center">
            <InfoCard
              :image="pertanian"
              description="Pertanian"
              :url="'/konsultasi'"
            />
          </div>
        </div>
        <div class="col-lg-2">
          <div class="row justify-content-center text-center">
            <InfoCard
              :image="ekonomi"
              description="Ekonomi"
              :url="'/konsultasi'"
            />
          </div>
        </div>
        <div class="col-lg-2">
          <div class="row justify-content-center text-center">
            <InfoCard
              :image="inflasi"
              description="Inflasi"
              :url="'/konsultasi'"
            />
          </div>
        </div>
        <div class="col-lg-2">
          <div class="row justify-content-center text-center">
            <InfoCard
              :image="pertambangan"
              description="Pertambangan, Energi, dan Konstruksi"
              :url="'/konsultasi'"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
