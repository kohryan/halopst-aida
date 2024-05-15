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
              image="https://images.unsplash.com/photo-1569683795645-b62e50fbf103?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
              icon="touch_app"
              title="Konsultasi dengan<br /> Statistisi Ahli BPS"
              description="Konsultasi secara daring langsung bersama Statistisi Ahli dan Analis Data BPS Jawa Timur yang kompeten di bidangnya."
              label="🗓️ Senin-Jumat, 08.00-16.00"
              />

              <RotatingCardBackInfo
              image="https://images.unsplash.com/photo-1498889444388-e67ea62c464b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1365&q=80"
              title="Buat Reservasi"
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
              image="https://images.unsplash.com/photo-1569683795645-b62e50fbf103?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
              icon="touch_app"
              title="Ngobrol dengan<br /> Mbak AIDA"
              description="Mbak AIDA (Artificial Intelligence untuk Data Assistant) akan melayani permintaan data Anda selama 24 jam"
              label="🗓️ Setiap Hari, 24 Jam Non Stop"
              />

              <RotatingCardBack
              image="https://images.unsplash.com/photo-1498889444388-e67ea62c464b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1365&q=80"
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
              <RotatingCardFrontWarning
              image="https://images.unsplash.com/photo-1569683795645-b62e50fbf103?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
              icon="touch_app"
              title="Ngobrol dengan<br /> Mbak AIDA"
              description="Mbak AIDA (Artificial Intelligence untuk Data Assistant) akan melayani permintaan data Anda selama 24 jam"
              label="🗓️ Setiap Hari, 24 Jam Non Stop"
              />

              <RotatingCardBackWarning
              image="https://images.unsplash.com/photo-1498889444388-e67ea62c464b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1365&q=80"
              title="Buat Reservasi"
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
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
