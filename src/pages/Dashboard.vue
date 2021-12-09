<template>
  <div
    class="flex h-screen bg-gray-50 dark:bg-gray-900"
    :class="{'overflow-hidden': isSideMenuOpen}"
  >
    <!-- Desktop sidebar -->
    <DesktopSidebar
      :is-is-side-menu-open="isSideMenuOpen"
      @closeIsSideMenu="isSideMenuOpen = false"
    />
    <!-- Backdrop -->
    <transition
      enter-class="transition ease-in-out duration-150"
      enter-active-class="opacity-0"
      enter-to-class="opacity-100"
      leave-class="transition ease-in-out duration-150"
      leave-active-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isSideMenuOpen"
        class="fixed inset-0 z-10 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center"
      />
    </transition>
    <!-- Mobile sidebar -->
    <MobileSidebar
      :is-side-menu-open="isSideMenuOpen"
      @closeSideMenu="isSideMenuOpen = false"
    />

    <div class="flex flex-col flex-1 w-full bg-gray-50 dark:bg-gray-900">
      <Navigation
        @toggleSideMenu="isSideMenuOpen = !isSideMenuOpen"
      />
      <main class="h-full py-6 overflow-y-auto">
        <div class="container grid px-6 mx-auto">
          <router-view />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import DesktopSidebar from '@components/DesktopSidebar.vue';
import MobileSidebar from '@components/MobileSidebar.vue';
import Navigation from '@components/Navigation.vue';
export default {
  name: 'Dashboard',
  components: {
    DesktopSidebar,
    MobileSidebar,
    Navigation
  },
  data () {
    return {
      isSideMenuOpen: false
    };
  }
};
</script>
