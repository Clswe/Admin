<template>
  <aside
    class="z-20 flex-shrink-0 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block h-full"
  >
    <Menu />
  </aside>
</template>

<script>
import Menu from './Menu';
export default {
  name: 'DesktopSidebar',
  components: {
    Menu
  },
  props: {
    isSideMenuOpen: Boolean
  }
};
</script>
