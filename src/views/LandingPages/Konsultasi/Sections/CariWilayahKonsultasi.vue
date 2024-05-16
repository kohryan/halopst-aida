<script setup>
import { ref, computed } from 'vue';

const searchQuery = ref('');
const options = ref(['Provinsi Jawa Timur', 'Kabupaten Pacitan', 'Kabupaten Tulungagung', 'Kota Surabaya','Kota Batu']);
const showOptions = ref(false);

const filteredOptions = computed(() => {
  if (searchQuery.value === '' && !showOptions.value) {
    return [];
  }
  return options.value.filter(option =>
    option.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

const onSearch = () => {
  // Logic for handling search input
};

const selectOption = option => {
  searchQuery.value = option;
  showOptions.value = false;
};

const onFocus = () => {
  showOptions.value = true;
};

const onBlur = () => {
  setTimeout(() => {
    showOptions.value = false;
  }, 100); // Delay to allow click event to register
};
</script>

<template>
    <div class="relative">
      <div class="input-field">
        <input
          type="text"
          class="form-control bg-white px-3"
          placeholder="Cari berdasarkan wilayah"
          aria-label="Wilayah BPS"
          aria-describedby="button-addon2"
          v-model="searchQuery"
          @focus="onFocus"
          @blur="onBlur"
          @keyup.enter="onSearch"
        />
        <i class="fa fa-search search-icon"></i>
      </div>
      <ul v-if="filteredOptions.length > 0" class="collection dropdown text-gray-400">
        <li v-for="(option, index) in filteredOptions" :key="index" class="collection-item text-gray-400" @click="selectOption(option)">
          {{ option }}
        </li>
      </ul>
    </div>
  </template>
  
  <style scoped>
  .relative {
    position: relative;
  }
  .input-field {
    position: relative;
  }
  .search-icon {
    position: absolute;
    right: 10px; /* Adjust the right position as needed */
    top: 50%;
    transform: translateY(-50%);
    color: #aaa; /* Adjust icon color */
  }
  .collection {
    max-height: 200px;
    overflow-y: auto;
    list-style-type: none;
    padding: 0;
    margin: 0;
    background: white;
    position: absolute;
    width: 100%;
    z-index: 10;
    top: 100%;
  }
  .collection-item {
    font-size: small;
    padding: 0 16px;
    cursor: pointer;
    color: #212529;
  }
  .collection-item:hover {
    background-color: #eee;
  }
  </style>