<template>
<div class="py-4 text-gray-500 dark:text-gray-400">
<div class="flex flex-col justify-around items-center space-y-2 mb-2">
<router-link
 to="/dashboard"
 >

<div
 class="p-2 mx-6 bg-transparent dark:bg-white rounded-lg"
>
<img
 width="200"
 class="mx-auto"
 src="@assets/images/logo.png"
 alt="Logo"
>
</div>
</router-link>
</div>

<ul>
<template
v-for="(item, index) in menu"
>
<li
v-if="item.isVisible"
:key="index"
 class="relative px-6 py-3"
>
          <span
            v-if="$route.path === item.route"
            class="absolute inset-y-0 left-0 w-1 bg-blue-600 rounded-tr-lg rounded-br-lg"
            aria-hidden="true"
          />
          <router-link
            class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
            :to="item.route"
          >
            <i :class="item.icon" />
            <span class="ml-4">{{ item.label }}</span>
          </router-link>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {
      menu: [
        {
          label: 'Dashboard',
          icon: 'fa fa-home',
          isVisible: true,
          route: '/dashboard'
        },
        {
          label: 'Pacientes',
          icon: 'fa fa-mouse-pointer',
          isVisible: true,
          route: '/pacientes'
        },
        {
          label: 'Cadastrar Paciente',
          icon: 'fa fa-puzzle-piece',
          isVisible: true,
          route: '/CadPaciente'
        },
       
      ]
    };
  }
};
</script>
