<template>
  <div class="modal-backdrop">
    <div class="modal">
      <p>Apakah Anda yakin menghapus kenangan bersama Ning AIDA?</p>
      <div class="modal-buttons">
        <button class="confirm-button" @click="$emit('confirm')">Ya</button>
        <button class="cancel-button" @click="$emit('cancel')">Tidak</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalView'
};
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Ensure modal is above other content */
}

.modal {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
}

.modal-buttons {
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
}

.confirm-button {
  background-color: red;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.cancel-button {
  background-color: gray;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
