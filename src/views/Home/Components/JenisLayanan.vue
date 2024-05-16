<script setup>
import RotatingCard from "../../../examples/cards/rotatingCards/RotatingCard.vue";
import RotatingCardFront from "../../../examples/cards/rotatingCards/RotatingCardFront.vue";
import RotatingCardFrontInfo from "../../../examples/cards/rotatingCards/RotatingCardFrontInfo.vue";
import RotatingCardFrontWarning from "../../../examples/cards/rotatingCards/RotatingCardFrontWarning.vue";
import RotatingCardBack from "../../../examples/cards/rotatingCards/RotatingCardBack.vue";
import RotatingCardBackInfo from "../../../examples/cards/rotatingCards/RotatingCardBackInfo.vue";
import RotatingCardBackWarning from "../../../examples/cards/rotatingCards/RotatingCardBackWarning.vue";

</script>
<template>
  <section class="my-2 py-2">
    <div class="container">
      <div class="row justify-content-center text-center my-sm-3">
          <div class="col-lg-6">
            <h3 class="text-dark mb-0">Masih bingung dengan data BPS?</h3>
          </div>
        </div>
      <div class="row align-items-center">
        <div class="col-md-12 mx-auto">
          <div class="row">
            <div class="col-lg-4 mx-auto p-lg-4 mt-lg-0 mt-2">
              <RotatingCard>
              <RotatingCardFrontInfo
              image="https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FEEq9xlWAdh88BOK1TjGF%2Fuploads%2FQtupDiveVdddaZITFBjr%2Fbg-info.png?alt=media&token=db2dd690-64b7-4bd6-8c4e-e39b3dd8b7ee"
              title="Konsultasi dengan<br /> Statistisi Ahli BPS"
              description="Konsultasi secara daring langsung bersama Statistisi Ahli dan Analis Data BPS Jawa Timur yang kompeten di bidangnya."
              label="🗓️ Senin-Jumat, 08.00-16.00"
              />

              <RotatingCardBackInfo
              image="https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FEEq9xlWAdh88BOK1TjGF%2Fuploads%2FQtupDiveVdddaZITFBjr%2Fbg-info.png?alt=media&token=db2dd690-64b7-4bd6-8c4e-e39b3dd8b7ee"
              description="Klik tombol di bawah ini untuk membuat reservasi jadwal konsultasi sesuai dengan kebutuhan Anda"
              :action="[
                {
                  route: '/konsultasi',
                  label: 'Buat Reservasi',
                },
              ]"
              />
              </RotatingCard>
            </div>
            <div class="col-lg-4 ms-auto me-auto p-lg-4 mt-lg-0 mt-2">
              <RotatingCard>
              <RotatingCardFront
              image="https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FEEq9xlWAdh88BOK1TjGF%2Fuploads%2FcRA3Uhl8W0qboG5sIMzA%2Fbg-success.png?alt=media&token=691ec035-509c-4dba-97a0-5a6ddfa2412c"
              title="Ngobrol dengan<br /> Mbak AIDA"
              description="Mbak AIDA (Artificial Intelligence untuk Data Assistant) akan melayani permintaan data Anda selama 24 jam"
              label="🗓️ Setiap Hari, 24 Jam Non Stop"
              />

              <RotatingCardBack
              image="https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FEEq9xlWAdh88BOK1TjGF%2Fuploads%2FcRA3Uhl8W0qboG5sIMzA%2Fbg-success.png?alt=media&token=691ec035-509c-4dba-97a0-5a6ddfa2412c"
              description="Harap diingat bahwa meskipun AIDA yang berbasis kecerdasan buatan (AI) berupaya memberikan pelayanan 24 jam non stop, waktu respon yang tidak sebentar mungkin saja bisa terjadi."
              :action="[
                {
                  route: '/aida',
                  label: 'Mulai Mengobrol',
                },
              ]"
              />
              </RotatingCard>
            </div>

            <div class="col-lg-4 ms-auto me-auto p-lg-4 mt-lg-0 mt-2">
              <RotatingCard>
              <RotatingCardFrontWarning
              image="https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FEEq9xlWAdh88BOK1TjGF%2Fuploads%2FWUqeIYS0KpBQf9jBK08i%2Fbg-warning.png?alt=media&token=97a23def-bf95-4ab4-bf35-bd56b79b9c6a"
              title="Baca Koleksi<br />Publikasi BPS"
              description="Anda bisa membaca secara gratis publikasi BPS yang berisi tentang data statistik, ulasan, dan analisis dengan beragam topik."
              label="🗓️ Setiap Saat"
              />

              <RotatingCardBackWarning
              image="https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FEEq9xlWAdh88BOK1TjGF%2Fuploads%2FWUqeIYS0KpBQf9jBK08i%2Fbg-warning.png?alt=media&token=97a23def-bf95-4ab4-bf35-bd56b79b9c6a"
              description="Temukan publikasi statistik BPS berdasarkan kata kunci topik data sesuai kebutuhan Anda"
              :action="[
                {
                  route: 'https://jatim.beta.bps.go.id/id/publication',
                  label: 'Baca Publikasi',
                },
              ]"
              />
              </RotatingCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
