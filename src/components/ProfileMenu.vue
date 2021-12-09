<template>
  <li class="relative">
    <button
      class="align-middle rounded-full focus:shadow-outline-blue focus:outline-none"
      aria-label="Account"
      aria-haspopup="true"
      @click="$emit('toggleProfileMenu')"
      @keydown.escape="$emit('closeProfileMenu')"
    >
      <img
        class="object-cover w-8 h-8 rounded-full"
        src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
        alt="User"
        aria-hidden="true"
        loading="lazy"
      >
    </button>
    <template v-if="isProfileMenuOpen">
      <ul
        x-transition:leave-class="transition ease-in duration-150"
        x-transition:leave-active-class="opacity-100"
        x-transition:leave-to-class="opacity-0"
        class="absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md dark:border-gray-700 dark:text-gray-300 dark:bg-gray-700"
        aria-label="submenu"
        @click="$emit('closeProfileMenu')"
        @keydown.escape="$emit('closeProfileMenu')"
      >
        <li class="flex">
          <router-link
            class="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
            to="/"
          >
            <i class="fa fa-user" />
            <span class="ml-3">Perfil</span>
          </router-link>
        </li>
        <li class="flex">
          <router-link
            class="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
            to="/"
          >
            <i class="fa fa-cogs" />
            <span class="ml-2">Configurações</span>
          </router-link>
        </li>
        <li class="flex">
          <router-link
            class="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200 cursor-pointer"
            to="/"
          >
            <i class="fa fa-sign-out-alt" />
            <span class="ml-3">Sair</span>
          </router-link>
        </li>
      </ul>
    </template>
  </li>
</template>

<script>
export default {
  name: 'ProfileMenu',
  props: {
    isProfileMenuOpen: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style>

</style>
