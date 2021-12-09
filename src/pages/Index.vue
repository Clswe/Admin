<template>
  <div class="container px-6 mx-auto grid">
    <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
Painel Geral
</h2>

 

<!-- Cards -->
<div class="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
<!-- Card -->


<div
 class="flex items-center p-4 bg-white rounded-lg dark:bg-gray-800 shadow-lg"
>
        <div
          class="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500"
        >
          <svg
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
            />
          </svg>
        </div>
        <div>
          <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
       Atendimentos abertos
          </p>
          <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
            63
          </p>
        </div>
      </div>
      <!-- Card -->
      <div
        class="flex items-center p-4 bg-white rounded-lg dark:bg-gray-800 shadow-lg"
      >
        <div
          class="p-3 mr-4 text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500"
        >
          <svg
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div>
          <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
            Consultas Agendadas
          </p>
          <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
            50
          </p>
        </div>
      </div>
      <!-- Card -->
      <div
        class="flex items-center p-4 bg-white rounded-lg dark:bg-gray-800 shadow-lg"
      >
        <div
          class="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500"
        >
          <svg
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
            />
          </svg>
        </div>
        <div>
          <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
           Exames em abertos
          </p>
          <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
            5.898,00
          </p>
        </div>
      </div>
      <!-- Card -->
      <div
        class="flex items-center p-4 bg-white rounded-lg dark:bg-gray-800 shadow-lg"
      >
        <div
          class="p-3 mr-4 text-teal-500 bg-teal-100 rounded-full dark:text-teal-100 dark:bg-teal-500"
        >
          <svg
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div>
          <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
            Consultas Realizadas
          </p>
          <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
            35
          </p>
        </div>
      </div>
    </div>

<!-- Inicio Tab Pacientes -->

<div class="w-full overflow-hidden rounded-lg shadow-lg">
<div class="w-full overflow-x-auto">
<table class="w-full whitespace-no-wrap">
<thead>
<tr
 class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800"
>
<!-- Início Cabeçalho Tabela Pacientes -->
<th class="px-4 py-3">
Paciente
</th>
<th class="px-4 py-3">
Médico Responsável
</th>
<th class="px-4 py-3">
Status
</th>
<th class="px-4 py-3">
Última consulta
</th>
<!-- Final Cabeçalho Tabela Pacientes -->

</tr>
</thead>


<tbody
 class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800"
>

<!-- Paciente 01 -->
<tr class="text-gray-700 dark:text-gray-400">
<td class="px-4 py-3">
<div class="flex items-center text-sm">

<div
 class="relative hidden w-8 h-8 mr-3 rounded-full md:block"
>
<img
 class="object-cover w-full h-full rounded-full"
 src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
 alt=""
 loading="lazy"
>
<div
 class="absolute inset-0 rounded-full shadow-inner"
 aria-hidden="true"
/>
</div>
<!-- Dados do Paciente -->
<div>
<p class="font-semibold">
Cristian Luiz
</p>
<p class="text-xs text-gray-600 dark:text-gray-400">
911.***.***-26
</p>
</div>
<!-- End Dados Paciente -->

</div>
</td>

<td class="px-4 py-3 text-sm">
Dr.João Siqueira
</td>
<td class="px-4 py-3 text-xs">
<span
 class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"
>
Atend Realizado
</span>
</td>
<td class="px-4 py-3 text-sm">
21/10/2021
</td>
</tr>
<!-- End Paciente 01 -->

<tr class="text-gray-700 dark:text-gray-400">
<td class="px-4 py-3">
<div class="flex items-center text-sm">

<!-- Paciente 02 -->
            
<div
 class="relative hidden w-8 h-8 mr-3 rounded-full md:block"
>
<img
 class="object-cover w-full h-full rounded-full"
 src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&facepad=3&fit=facearea&s=707b9c33066bf8808c934c8ab394dff6"
 alt=""
 loading="lazy"
>
<div
 class="absolute inset-0 rounded-full shadow-inner"
 aria-hidden="true"
/>
</div>

<!-- Dados do Paciente -->

<div>
<p class="font-semibold">
Adrian Rodrigues
</p>
<p class="text-xs text-gray-600 dark:text-gray-400">
357.***.***-01
</p>
</div>
</div>
</td>

<!-- End Dados Paciente -->

<td class="px-4 py-3 text-sm">
Dr.Mario Silva
</td>
<td class="px-4 py-3 text-xs">
<span
 class="px-2 py-1 font-semibold leading-tight text-orange-700 bg-orange-100 rounded-full dark:text-white dark:bg-orange-600"
>
Atend em andamento
</span>
</td>
<td class="px-4 py-3 text-sm">
21/10/2021
</td>
</tr>

<!-- End Paciente 02 -->

<tr class="text-gray-700 dark:text-gray-400">
<td class="px-4 py-3">
<div class="flex items-center text-sm">

<!-- Paciente 03 -->
                 
<div
 class="relative hidden w-8 h-8 mr-3 rounded-full md:block"
>
<img
 class="object-cover w-full h-full rounded-full"
 src="https://images.unsplash.com/photo-1551069613-1904dbdcda11?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
 alt=""
 loading="lazy"
>
<div
 class="absolute inset-0 rounded-full shadow-inner"
 aria-hidden="true"
/>
</div>
<!-- Dados do Paciente  -->
<div>
<p class="font-semibold">
Rosana Fátima 
</p>
<p class="text-xs text-gray-600 dark:text-gray-400">
798.***.***-10
</p>
</div>
</div>
</td>

<!-- End Dados do Paciente -->
<td class="px-4 py-3 text-sm">
Dra. Liz Pires
</td>
<td class="px-4 py-3 text-xs">
<span
 class="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-700"
>
Atend Cancelado
</span>
</td>
<td class="px-4 py-3 text-sm">
11/05/2021
</td>
</tr>
<!-- End Paciente 03 -->

  
<!-- Paciente 04 -->

<tr class="text-gray-700 dark:text-gray-400">
<td class="px-4 py-3">
<div class="flex items-center text-sm">

<div
 class="relative hidden w-8 h-8 mr-3 rounded-full md:block"
>
 <img
 class="object-cover w-full h-full rounded-full"
 src="https://images.unsplash.com/photo-1551006917-3b4c078c47c9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
 alt=""
 loading="lazy"
>

<div
 class="absolute inset-0 rounded-full shadow-inner"
 aria-hidden="true"
/>
</div>

<!-- Dados do Paciente -->

<div>
<p class="font-semibold">
Lara Hemetério
</p>
<p class="text-xs text-gray-600 dark:text-gray-400">
919.***.***-30
</p>
</div>
</div>
<!-- End Dados do Paciente -->

</td>
<td class="px-4 py-3 text-sm">
Dr. Omero Fustaine
</td>
<td class="px-4 py-3 text-xs">
<span
 class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"
>
Atend Realizado
</span>
</td>
<td class="px-4 py-3 text-sm">
15/10/2021
</td>
</tr>
<!-- End Paciente 04 -->

<!-- Paciente 05 -->

<tr class="text-gray-700 dark:text-gray-400">
<td class="px-4 py-3">
<div class="flex items-center text-sm">
  
<div
 class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
<img
 class="object-cover w-full h-full rounded-full"
 src="https://images.unsplash.com/photo-1546456073-6712f79251bb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
 alt=""
 loading="lazy"
>
 <div
 class="absolute inset-0 rounded-full shadow-inner"
 aria-hidden="true"
/>
</div>

<!-- Dados do Paciente -->
<div>
<p class="font-semibold">
João Mesquita
</p>
<p class="text-xs text-gray-600 dark:text-gray-400">
048.***.***-36
</p>
</div>
</div>
<!-- End Dados do Paciente -->
</td>
<td class="px-4 py-3 text-sm">
Dr. Matheus Nobre
</td>
<td class="px-4 py-3 text-xs">
<span
 class="px-2 py-1 font-semibold leading-tight text-gray-700 bg-gray-100 rounded-full dark:text-gray-100 dark:bg-gray-700"
>
Consulta Remarcada
</span>
</td>
<td class="px-4 py-3 text-sm">
6/10/2020
</td>
</tr>

<!-- End Paciente 05 -->

<!-- Paciente 06 -->

<tr class="text-gray-700 dark:text-gray-400">
<td class="px-4 py-3">
<div class="flex items-center text-sm">

<div
 class="relative hidden w-8 h-8 mr-3 rounded-full md:block"
>
<img
  class="object-cover w-full h-full rounded-full"
  src="https://images.unsplash.com/photo-1502720705749-871143f0e671?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=b8377ca9f985d80264279f277f3a67f5"
  alt=""
  loading="lazy"
>
<div
 class="absolute inset-0 rounded-full shadow-inner"
 aria-hidden="true"
/>

</div>
<!-- Dados do Paciente -->
<div>
<p class="font-semibold">
Mauro Hemetério
</p>
<p class="text-xs text-gray-600 dark:text-gray-400">
284.***.***-19
</p>
</div>
</div>
<!-- End Dados do Paciente -->
</td>
<td class="px-4 py-3 text-sm">
Dr. Horacio Pinto
</td>
<td class="px-4 py-3 text-xs">
<span
 class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"
>
 Atend Realizado
</span>
</td>
<td class="px-4 py-3 text-sm">
6/10/2020
</td>
</tr>

<!-- End Paciente 06 -->

<!-- Paciente 07 -->
<tr class="text-gray-700 dark:text-gray-400">
<td class="px-4 py-3">
<div class="flex items-center text-sm">
                
<div
 class="relative hidden w-8 h-8 mr-3 rounded-full md:block"
>
<img
 class="object-cover w-full h-full rounded-full"
 src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
 alt=""
 loading="lazy"
>

<div
 class="absolute inset-0 rounded-full shadow-inner"
 aria-hidden="true"
/>
<!-- Dados do paciente -->
</div>
<div>
<p class="font-semibold">
Luciana Santos
</p>
<p class="text-xs text-gray-600 dark:text-gray-400">
227.***.***-20
</p>
</div>
</div>
<!-- End Dados do Paciente -->
</td>
<td class="px-4 py-3 text-sm">
Dra. Liz Pires
</td>
<td class="px-4 py-3 text-xs">
<span
 class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"
>
Atend Realizado
</span>
</td>
<td class="px-4 py-3 text-sm">
6/10/2020
</td>
</tr>
<!-- End Paciente 07  -->

<!-- Paciente 08 -->

<tr class="text-gray-700 dark:text-gray-400">
<td class="px-4 py-3">
<div class="flex items-center text-sm">


<div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
<img
  class="object-cover w-full h-full rounded-full"
  src="https://images.unsplash.com/photo-1566411520896-01e7ca4726af?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
  alt=""
  loading="lazy"
>

<div
 class="absolute inset-0 rounded-full shadow-inner"
 aria-hidden="true"
/>
</div>

<!-- Dados Paciente -->
<div>
<p class="font-semibold">
Andréa Olimpio
</p>
<p class="text-xs text-gray-600 dark:text-gray-400">
636.***.***-65
</p>
</div>
</div>
<!-- End Dados Paciente -->

</td>
<td class="px-4 py-3 text-sm">
Dra. Joana Marques
</td>
<td class="px-4 py-3 text-xs">
<span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
Atend Realizado
</span>
</td>
<td class="px-4 py-3 text-sm">
6/10/2020
</td>
</tr>

<!-- End Paciente 08 -->

<!-- Paciente 09 -->
<tr class="text-gray-700 dark:text-gray-400">
<td class="px-4 py-3">
<div class="flex items-center text-sm">

<div
 class="relative hidden w-8 h-8 mr-3 rounded-full md:block"
>
<img
 class="object-cover w-full h-full rounded-full"
 src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
 alt=""
 loading="lazy"
>

<div
 class="absolute inset-0 rounded-full shadow-inner"
 aria-hidden="true"
/>                 
</div>
<!-- Dados do paciente -->
<div>
<p class="font-semibold">
Sara Nogueira
</p>
<p class="text-xs text-gray-600 dark:text-gray-400">
021.***.***-95
</p>
</div>
</div>
<!-- Dados do paciente -->
</td>
<td class="px-4 py-3 text-sm">
Dr. Olavo Rodrigues
</td>

<td class="px-4 py-3 text-xs">
<span
 class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"
>
Consulta Realizada
</span>
</td>
<td class="px-4 py-3 text-sm">
22/10/2021

</td>
</tr>
<!-- End Paciente 09 -->
</tbody>
</table>

<!-- End Tab Paciente -->

</div>
<div
 class="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800"
>
        
<span class="flex items-center col-span-3"> Paginas 1-09 de 30 </span>
<span class="col-span-2" />

<!-- Inicio Paginação -->

<span class="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
<nav aria-label="Table navigation">
<ul class="inline-flex items-center">
<li>

<button
 class="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-blue"
 aria-label="Previous"
>
<svg
 aria-hidden="true"
 class="w-4 h-4 fill-current"
 viewBox="0 0 20 20"
>
<path
 d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
 clip-rule="evenodd"
 fill-rule="evenodd"
/>

</svg>
</button>
</li>
<li>
<button
 class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-blue">
1
</button>
</li>
<li>
<button
 class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-blue"
>
2
</button>
</li>
<li>
<button
 class="px-3 py-1 text-white transition-colors duration-150 bg-blue-600 border border-r-0 border-blue-600 rounded-md focus:outline-none focus:shadow-outline-blue">
3
</button>
</li>
<li>
<button
 class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-blue"
>
 4
</button>
</li>
<li>
<span class="px-3 py-1">...</span>
</li>
<li>
<button
 class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-blue"
>
8
                </button>
              </li>
<li>
<button
  class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-blue"
>
9
</button>
</li>
<li>
<button
 class="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-blue"
 aria-label="Next"
>
<svg
 class="w-4 h-4 fill-current"
 aria-hidden="true"
 viewBox="0 0 20 20"
>
<path
 d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
 clip-rule="evenodd"
 fill-rule="evenodd"
/>
</svg>
</button>
</li>
</ul>
</nav>
</span>
</div>
</div>

<!-- End Paginação -->

<!-- Charts -->
    <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
   Nivel de satisfação
    </h2>
    
      <div class="min-w-0 p-4 bg-white rounded-lg dark:bg-gray-800 shadow-lg">
       
        <div
          class="flex mt-4 text-sm text-gray-600 dark:text-gray-400"
        >
          <!-- Chart legend -->
         
        </div>
      </div>
      <div class="min-w-0 p-4 bg-white rounded-lg dark:bg-gray-800 shadow-lg">
        <h4 class="mb-4 font-semibold text-gray-800 dark:text-gray-300">
          Avaliação
        </h4>
        <div
          class="flex justify-center mt-4 space-x-3 text-sm text-gray-600 dark:text-gray-400"
        >
          <!-- Chart legend -->
          <ChartBar element="bar" />
        </div>
      </div>
    
  </div>
</template>

<script>


import ChartBar from '@components/ChartBar.vue';

export default {
  components: {
    ChartBar
  }
};
</script>

<style>

</style>
