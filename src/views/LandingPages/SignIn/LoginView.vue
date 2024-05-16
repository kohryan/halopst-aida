<script setup>
import { onMounted } from "vue";
import router from "@/router";

// Google Login
import { decodeCredential, googleLogout } from "vue3-google-login";

// example components
import NavbarLogin from "@/examples/navbars/NavbarLogin.vue";
import Header from "@/examples/Header.vue";

//Vue Material Kit 2 components
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialSwitch from "@/components/MaterialSwitch.vue";
import MaterialButton from "@/components/MaterialButton.vue";

//image
import bg0 from "@/assets/img/bg9.jpg";

// material-input
import setMaterialInput from "@/assets/js/material-input";
onMounted(() => {
  setMaterialInput();
});
</script>
<template>
  <NavbarLogin/>
  <Header>
    <div
      class="page-header align-items-start min-vh-100"
      :style="{
        backgroundImage: `url(${bg0}`
      }"
      loading="lazy"
    >
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container my-auto">
        <div class="row">
          <div class="col-lg-4 col-md-8 col-12 mx-auto">
            <div class="card z-index-0 fadeIn3 fadeInBottom">
              <div
                class="card-header p-0 position-relative mt-n4 mx-3 z-index-2"
              >
                <div
                  class="bg-gradient-success shadow-success border-radius-lg py-3 pe-1"
                >
                  <h4
                    class="text-white font-weight-bolder text-center mt-2 mb-0"
                  >
                  <span class="font-weight-normal"><i>Login </i></span> HaloPST
                  </h4>
                </div>
              </div>
              <div class="card-body">
                <form role="form" class="text-start">
                  <MaterialInput
                    id="email"
                    class="input-group-outline my-3"
                    :label="{ text: 'Email', class: 'form-label' }"
                    type="email"
                  />
                  <MaterialInput
                    id="password"
                    class="input-group-outline mb-3"
                    :label="{ text: 'Password', class: 'form-label' }"
                    type="password"
                  />
                  <MaterialSwitch
                    class="d-flex align-items-center mb-3"
                    id="rememberMe"
                    labelClass="mb-0 ms-3"
                    checked
                    >Ingat saya</MaterialSwitch
                  >

                  <div class="text-center">
                    <MaterialButton
                      class="my-4 mb-2"
                      variant="gradient"
                      color="success"
                      fullWidth
                      >Log in</MaterialButton
                    >
                  </div>
                  <p class="mt-4 text-sm text-center">
                    Tidak memiliki akun?
                  </p>
                  <div class="row" v-if="loggedIn">
                    <div class="col-12">
                      <div class="d-flex gap-3 flex-column mt-3">
                        <button @click="logout">LogOut</button>
                          <h2>The name is:{{ user.name }}</h2>
                          <h2>the email is:{{ user.email }}</h2>
                          <img :src="user.picture" />
                      </div>
                    </div>
                  </div>
                  <div class="row" v-else>
                    <div class="col-12 text-center">
                      <div
                        class="d-flex gap-3 flex-column mt-3 justify-content-center"
                      >
                      <GoogleLogin
                        :callback="callback"
                        promt
                        auto-login
                        class="align-self-md-center shadow"
                        id="btn_google"
                      />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Header>
</template>
