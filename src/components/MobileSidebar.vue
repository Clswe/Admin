<template>
  <transition
    enter-class="transition ease-in-out duration-150"
    enter-active-class="opacity-0 transform -translate-x-20"
    enter-to-class="opacity-100"
    leave-class="transition ease-in-out duration-150"
    leave-active-class="opacity-100"
    leave-to-class="opacity-0 transform -translate-x-20"
  >
    <aside
      v-show="isSideMenuOpen"
      class="fixed inset-y-0 z-20 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-white dark:bg-gray-800 md:hidden"
      @click="$emit('closeSideMenu')"
      @keydown.escape="$emit('closeSideMenu')"
    >
      <Menu />
    </aside>
  </transition>
</template>

<script>
import Menu from './Menu';
export default {
  name: 'MobileSidebar',
  components: {
    Menu
  },
  props: {
    isSideMenuOpen: Boolean
  }
};
</script>
