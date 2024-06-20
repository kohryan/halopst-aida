<script setup>
// example components
import TransparentBlogCard from "../../../../examples/cards/blogCards/TransparentBlogCard.vue";
</script>

<template>
  <section class="py-0">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <h3 class="mb-5">Manajemen Mutu Halo PST</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3 col-sm-6">
          <TransparentBlogCard
            image="https://res.cloudinary.com/bpsjatim/image/upload/f_auto,q_auto/ib1kzbe6hrz8uwxbnnmj"
            title="SOP Halo PST"
            description="Standar Operasional Prosedur Aplikasi Halo PST sebagai bentuk jaminan mutu BPS Provinsi Jawa Timur."
            v-bind:action="{
              route: 'https://ppid.bps.go.id/upload/doc/SOP_Halo_PST__PST_Digital__1718846394.pdf',
              color: 'success',
              label: 'Lihat'
              }"          
            />
        </div>
        <div class="col-lg-3 col-sm-6">
          <TransparentBlogCard
            image="https://res.cloudinary.com/bpsjatim/image/upload/f_auto,q_auto/ib1kzbe6hrz8uwxbnnmj"
            title="Maklumat Pelayanan Halo PST"
            description="Maklumat Pelayanan Halo PST sebagai bentuk jaminan mutu BPS Provinsi Jawa Timur."
            v-bind:action="{
              route: 'https://ppid.bps.go.id/upload/doc/SOP_Halo_PST__PST_Digital__1718846394.pdf',
              color: 'success',
              label: 'Lihat'
              }"          
            />
        </div>
        <div class="col-lg-3 col-sm-6">
          <TransparentBlogCard
            image="https://res.cloudinary.com/bpsjatim/image/upload/f_auto,q_auto/ib1kzbe6hrz8uwxbnnmj"
            title="Standar Pelayanan Halo PST"
            description="Standar Pelayanan Aplikasi Halo PST sebagai bentuk jaminan mutu BPS Provinsi Jawa Timur."
            v-bind:action="{
              route: 'https://ppid.bps.go.id/upload/doc/SOP_Halo_PST__PST_Digital__1718846394.pdf',
              color: 'success',
              label: 'Lihat'
              }"          
            />
        </div>
        <div class="col-lg-3 col-sm-6">
          <TransparentBlogCard
            image="https://res.cloudinary.com/bpsjatim/image/upload/f_auto,q_auto/ib1kzbe6hrz8uwxbnnmj"
            title="Kebijakan dan Sasaran Mutu Halo PST"
            description="Kebijakan dan Sasaran Mutu Aplikasi Halo PST sebagai bentuk jaminan mutu BPS Provinsi Jawa Timur."
            v-bind:action="{
              route: 'https://ppid.bps.go.id/upload/doc/SOP_Halo_PST__PST_Digital__1718846394.pdf',
              color: 'success',
              label: 'Lihat'
              }"          
            />
        </div>
      </div>
    </div>
  </section>
</template>
