<template>
  <section class="md:flex md:flex-col">
    <div class="md:flex md:flex-1">
      <div
        class="md:flex md:flex-col bg-[#F1F1F1] md:w-96 md:h-screen p-4 gap-4"
      >
        <div class="flex flex-col items-center pb-6">
          <img
            class="w-24 h-24 mb-3 rounded-full shadow-lg"
            src="src/assets/icon/avatar.png"
            alt="Bonnie image"
          />
          <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-blacke">
            {{ profile.fullname }}
          </h5>
          <span class="text-sm text-gray-500 dark:text-gray-400"
            >Atlet PBJI</span
          >
        </div>

        <div class="">
          <div class="flex items-center gap-3">
            <img class="w-7 h-7" src="../assets/icon/home.png" alt="" />
            <div class="text-sm text-based">
              Kel.Maguwoharjo, Kec.Depok, Kab.Sleman, Prov. DI Yogyakarta
            </div>
          </div>
          <div class="mt-3 flex items-center gap-3">
            <img class="w-7 h-7" src="../assets/icon/logout.png" alt="" />
            <button
              class="text-sm text-based text-red-600"
              @click="confimLogoutDialog"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <div class="bg-white md:w-full ml-6 mr-6 mt-6">
        <div class="bg-red-600 rounded-md">
          <div class="text-white pt-6 pl-5 pr-5 pb-5">
            <h2 class="text-2xl font-bold">Hello, {{ uname.uname }}</h2>
            <p>
              {{ id_number }}
            </p>
            <div
              class="rounded-md bg-white text-black mt-4 pl-4 pt-4 pb-4 pr-4"
            >
              <h3 class="text-bold text-slate-700 mb-2">Jumlah presensi</h3>
              <hr />
              <h1 class="text-7xl font-bold text-yellow-400">
                {{ presence.presenceCount }}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";
import { getProfile, getPresenceCount } from "src/services/auth.service";

const $q = useQuasar();
const $router = useRouter();

const confimLogoutDialog = () => {
  $q.dialog({
    title: "Logout",
    message: "Are you sure you want to logout?",
    cancel: true,
    persistent: true,
  }).onOk(async () => {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("auth_user");
    await $router.push({ name: "login" });
  });
};

const profile = ref([]);
const uname = ref([]);
const presence = ref([]);
const id_number = ref([]);

const getData = async () => {
  const dataProfile = await getProfile(localStorage.getItem("auth_token"));
  const dataPresence = await getPresenceCount(
    localStorage.getItem("auth_token")
  );
  console.log(dataProfile.data);
  console.log(dataProfile.data.id_number);
  console.log(dataProfile.data.personal.fullname);
  console.log(dataPresence);

  profile.value = dataProfile.data.personal;
  uname.value = dataProfile.data;
  presence.value = dataPresence.data;
  id_number.value = dataProfile.data.id_number;
};

// const getPresenceCount = async () => {
//   const dataPresence = await getPresenceCount(
//     localStorage.getItem("auth_token")
//   );
//   console.log(dataPresence);
// };

onMounted(() => {
  getData();
});
</script>
