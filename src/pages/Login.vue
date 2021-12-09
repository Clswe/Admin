<template>
<div
class="bg-gray-50 dark:bg-gray-900 flex min-h-screen items-center p-6"
>
<div
 class="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl dark:bg-gray-800"
>
<div class="flex flex-col overflow-y-auto md:flex-row">
<div class="h-32 md:h-auto md:w-1/2 flex items-center justify-center bg-transparent dark:bg-white rounded-t-lg md:rounded-l-lg md:rounded-t-none p-12 md:p-0">
<img
 aria-hidden="true"
 class="object-cover"
 src="@assets/images/logo.png"
 alt="Logo"
></div>


<div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
<!-- Inicio forms login -->
<form
 class="w-full"
 @submit.prevent="submit"
>
            <h1
              class="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200 text-center"
            >
              Bem vindo de volta
            </h1>
            <div class="flex flex-col space-y-2">
              <label class="block text-sm">
                <span class="text-gray-700 dark:text-gray-400">Email</span>
             
                <div
                  class="relative text-gray-500 focus-within:text-blue-600 dark:focus-within:text-blue-400"
                >
                  <input
                    v-model="form.email"
                    type="email"
                    class="w-full pl-8 pr-2 text-sm text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-md dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:placeholder-gray-500 focus:bg-white focus:border-blue-300 focus:outline-none focus:shadow-outline-blue form-input"
                    placeholder="email@example.com"
                  >
                  <div
                    class="absolute inset-y-0 flex items-center ml-3 pointer-events-none"
                  >
                    <i class="fa fa-envelope" />
                  </div>
                </div>
              </label>
              <label class="block text-sm">
                <span class="text-gray-700 dark:text-gray-400">Sua Senha</span>
              
                <div
                  class="relative text-gray-500 focus-within:text-blue-600 dark:focus-within:text-blue-400"
                >
                  <input
                    v-model="form.password"
                    type="password"
                    class="w-full pl-8 pr-2 text-sm text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-md dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:placeholder-gray-500 focus:bg-white focus:border-blue-300 focus:outline-none focus:shadow-outline-blue form-input"
                    placeholder="******"
                  >
                  <div
                    class="absolute inset-y-0 flex items-center ml-3 pointer-events-none"
                  >
                    <i class="fa fa-lock" />
                  </div>
                </div>
              </label>
            </div>
  
            <button
              class="block w-full px-4 py-2 mt-4 font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue uppercase"
              :disabled="form.processing"
              :class="{'opacity-25': form.processing}"
              type="submit"
            >
              <span v-if="!form.processing">Entrar</span>
              <i
                v-else
                class="fa fa-spinner animate-spin"
              />
            </button>

            <hr class="my-8">

            <div class="flex items-center justify-center flex-col font-medium dark:text-gray-400">
              <p class="text-sm">
                Desenvolvido por <a
                  href="mailto:lucasoaresgomes@gmail.com?subject=Suporte"
                  class="hover:underline"
                >CristianLuiz</a>
              </p>
              <p class="text-sm">
                &copy; {{ tzMoment().format('YYYY') }}
              </p>
              <p>
                <span class="text-sm">Precisa
                  de Suporte?</span>
                <a
                  target="_blank"
                  class="transition text-green ml-2"
                  href=""
                >
                  <i class="fab fa-whatsapp" />
                </a>
              </p>
            </div>
          </form>

  <!-- END FORMS LOGIN -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    status: {
      type: String,
      default: () => ''
    }
  },

  data () {
    return {
      form: {
        email: '',
        password: '',
        processing: false
      }
    };
  },
  methods: {
    submit () {
      this.form.processing = true;
      const loader = this.$loading.show();
      setTimeout(() => {
        loader.hide();
        this.form.processing = false;
        this.$router.push({ name: 'Dashboard' });
      }, 5000);
    }
  }
};
</script>
