<template>
  <!-- Navbar -->
  <section id="navbar" class="hidden md:flex justify-between items-center p-3 bg-white shadow-md">
    <div class="flex items-center gap-1">
      <img class="w-11" src="../assets/icon/logo.png" alt="" />
      <div class="text-3xl font-extrabold font-sans">PBJI-DIY</div>
    </div>
    <div class="flex items-center gap-8"></div>
  </section>
  <!-- mobile navbar -->
  <section id="mobileNavbar" class="block md:hidden shadow-md">
    <nav class="bg-white border-gray-200">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" class="flex items-center">
          <img src="../assets/icon/logo.png" class="h-8 mr-3" alt="Logo PBJI" />
          <span class="self-center text-2xl font-extrabold whitespace-nowrap">PBJI DIY</span>
        </a>
        <button data-collapse-toggle="navbar-default" type="button"
          class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"></path>
          </svg>
        </button>
      </div>
    </nav>
  </section>
  <!-- End of Navbar -->

  <div>
    <router-view />
  </div>
</template>

<script setup></script>
