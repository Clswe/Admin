<template>
<div class="container grid px-6 mx-auto">
<h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
Pacientes Cadastrados
</h2>

<div>

<button
 class="px-5 py-3 font-medium float-right  leading-5 text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
>
 Novo Paciente
</button>
</div>
<br>
<div class="w-full overflow-hidden rounded-lg shadow-lg">
<div class="w-full overflow-x-auto">
<!-- Tab Pacientes Cadastrados -->
<table class="w-full whitespace-no-wrap">
<thead>
<tr
 class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
<!-- Início Cabeçalho Tabela Pacientes -->
<th class="px-4 py-3">
Paciente
</th>
<th class="px-4 py-3">
Médico Responsável
</th>
<th class="px-4 py-3">
CPF
</th>
<th class="px-4 py-3">
ID
</th>
<th class="px-4 py-3">
Ações
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
 class="px-2 py-1 font-semibold leading-tight text-gray-700 bg-gray-100 rounded-full dark:text-gray-100 dark:bg-gray-700"
>
911.***.***-26
</span>
</td>
<td class="px-4 py-3 text-sm">
926
</td>
<!-- Ações -->
<td class="px-4 py-3">
<div class="flex items-center space-x-4 text-sm">
<button
 class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-blue-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
 aria-label="Edit" >

 <svg
  class="w-5 h-5"
  aria-hidden="true"
  fill="currentColor"
  viewBox="0 0 20 20"
 >

 <path
 d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
 />
 </svg>
</button>
<button
 class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-blue-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
 aria-label="Delete"
                  >
<svg
 class="w-5 h-5"
 aria-hidden="true"
 fill="currentColor"
 viewBox="0 0 20 20" >

 <path
 fill-rule="evenodd"
 d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
 clip-rule="evenodd"
/>
</svg>
</button>
</div>
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
Felipa Marques
</p>
<p class="text-xs text-gray-600 dark:text-gray-400">

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
 class="px-2 py-1 font-semibold leading-tight text-gray-700 bg-gray-100 rounded-full dark:text-gray-100 dark:bg-gray-700"
>
357.***.***-01
</span>
</td>
<td class="px-4 py-3 text-sm">
351
</td>
<!-- Ações -->
<td class="px-4 py-3">
<div class="flex items-center space-x-4 text-sm">
<button
 class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-blue-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
 aria-label="Edit"
>
 <svg
 class="w-5 h-5"
 aria-hidden="true"
 fill="currentColor"
 viewBox="0 0 20 20"
>
<path
 d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
 />
 </svg>
 </button>
 <button
 class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-blue-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
 aria-label="Delete"
>
 <svg
 class="w-5 h-5"
 aria-hidden="true"
 fill="currentColor"
 viewBox="0 0 20 20"
 >
<path
 fill-rule="evenodd"
 d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
 clip-rule="evenodd"
/>
</svg>
</button>
</div>
</td>
</tr>
<!-- End Paciente 02 -->

<!-- Paciente 03 -->

<tr class="text-gray-700 dark:text-gray-400">
<td class="px-4 py-3">
<div class="flex items-center text-sm">


                 
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
 class="px-2 py-1 font-semibold leading-tight text-gray-700 bg-gray-100 rounded-full dark:text-gray-100 dark:bg-gray-700"
>
798.***.***-10
</span>
</td>
<td class="px-4 py-3 text-sm">
791
</td>

<!-- Ações -->
              
<td class="px-4 py-3">
<div class="flex items-center space-x-4 text-sm">
<button
 class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-blue-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
 aria-label="Edit"
>
<svg
 class="w-5 h-5"
 aria-hidden="true"
 fill="currentColor"
 viewBox="0 0 20 20"
>
<path
 d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
/>
</svg>
</button>
<button
 class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-blue-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
 aria-label="Delete"
>
<svg
 class="w-5 h-5"
  aria-hidden="true"
  fill="currentColor"
  viewBox="0 0 20 20"
>

<path
 fill-rule="evenodd"
 d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
 clip-rule="evenodd"
/>
 </svg>
</button>
 </div>
 <!-- End Ações -->
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
 class="px-2 py-1 font-semibold leading-tight text-gray-700 bg-gray-100 rounded-full dark:text-gray-100 dark:bg-gray-700"
>
919.***.***-30
</span>
</td>
<td class="px-4 py-3 text-sm">
919
</td>
<!-- Ações -->
<td class="px-4 py-3">
<div class="flex items-center space-x-4 text-sm">
<button
 class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-blue-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
 aria-label="Edit"
>
 <svg
 class="w-5 h-5"
 aria-hidden="true"
 fill="currentColor"
 viewBox="0 0 20 20"
>
<path
 d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
 />
 </svg>
 </button>
 <button
 class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-blue-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
 aria-label="Delete"
>
 <svg
 class="w-5 h-5"
 aria-hidden="true"
 fill="currentColor"
 viewBox="0 0 20 20"
 >
<path
 fill-rule="evenodd"
 d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
 clip-rule="evenodd"
/>
</svg>
</button>
</div>
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
048.***.***-36
</span>
</td>
<td class="px-4 py-3 text-sm">
048
</td>

<!-- Ações -->
<td class="px-4 py-3">
<div class="flex items-center space-x-4 text-sm">
<button
 class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-blue-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
 aria-label="Edit"
>
 <svg
 class="w-5 h-5"
 aria-hidden="true"
 fill="currentColor"
 viewBox="0 0 20 20"
>
<path
 d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
 />
 </svg>
 </button>
 <button
 class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-blue-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
 aria-label="Delete"
>
 <svg
 class="w-5 h-5"
 aria-hidden="true"
 fill="currentColor"
 viewBox="0 0 20 20"
 >
<path
 fill-rule="evenodd"
 d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
 clip-rule="evenodd"
/>
</svg>
</button>
</div>
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
 class="px-2 py-1 font-semibold leading-tight text-gray-700 bg-gray-100 rounded-full dark:text-gray-100 dark:bg-gray-700"
>
284.***.***-19
</span>
</td>
<td class="px-4 py-3 text-sm">
284
</td>
<!-- Ações -->
<td class="px-4 py-3">
<div class="flex items-center space-x-4 text-sm">
<button
 class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-blue-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
 aria-label="Edit"
>
 <svg
 class="w-5 h-5"
 aria-hidden="true"
 fill="currentColor"
 viewBox="0 0 20 20"
>
<path
 d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
 />
 </svg>
 </button>
 <button
 class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-blue-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
 aria-label="Delete"
>
 <svg
 class="w-5 h-5"
 aria-hidden="true"
 fill="currentColor"
 viewBox="0 0 20 20"
 >
<path
 fill-rule="evenodd"
 d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
 clip-rule="evenodd"
/>
</svg>
</button>
</div>
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
 class="px-2 py-1 font-semibold leading-tight text-gray-700 bg-gray-100 rounded-full dark:text-gray-100 dark:bg-gray-700"
>
227.***.***-20
</span>
</td>
<td class="px-4 py-3 text-sm">
227
</td>
<!-- Ações -->
<td class="px-4 py-3">
<div class="flex items-center space-x-4 text-sm">
<button
 class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-blue-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
 aria-label="Edit"
>
 <svg
 class="w-5 h-5"
 aria-hidden="true"
 fill="currentColor"
 viewBox="0 0 20 20"
>
<path
 d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
 />
 </svg>
 </button>
 <button
 class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-blue-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
 aria-label="Delete"
>
 <svg
 class="w-5 h-5"
 aria-hidden="true"
 fill="currentColor"
 viewBox="0 0 20 20"
 >
<path
 fill-rule="evenodd"
 d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
 clip-rule="evenodd"
/>
</svg>
</button>
</div>
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

</p>
</div>
</div>
<!-- End Dados Paciente -->

</td>
<td class="px-4 py-3 text-sm">
Dra. Joana Marques
</td>
<td class="px-4 py-3 text-xs">
<span
 class="px-2 py-1 font-semibold leading-tight text-gray-700 bg-gray-100 rounded-full dark:text-gray-100 dark:bg-gray-700"
>
636.***.***-65
</span>
</td>
<td class="px-4 py-3 text-sm">
636
</td>
<!-- Ações -->
<td class="px-4 py-3">
<div class="flex items-center space-x-4 text-sm">
<button
 class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-blue-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
 aria-label="Edit"
>
 <svg
 class="w-5 h-5"
 aria-hidden="true"
 fill="currentColor"
 viewBox="0 0 20 20"
>
<path
 d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
 />
 </svg>
 </button>
 <button
 class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-blue-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
 aria-label="Delete"
>
 <svg
 class="w-5 h-5"
 aria-hidden="true"
 fill="currentColor"
 viewBox="0 0 20 20"
 >
<path
 fill-rule="evenodd"
 d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
 clip-rule="evenodd"
/>
</svg>
</button>
</div>
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
Antônio Rodrigues
</p>
<p class="text-xs text-gray-600 dark:text-gray-400">

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
 class="px-2 py-1 font-semibold leading-tight text-gray-700 bg-gray-100 rounded-full dark:text-gray-100 dark:bg-gray-700"
>
021.***.***-95
</span>
</td>
<td class="px-4 py-3 text-sm">
021

</td>
<!-- Ações -->
<td class="px-4 py-3">
<div class="flex items-center space-x-4 text-sm">
<button
 class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-blue-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
 aria-label="Edit"
>
 <svg
 class="w-5 h-5"
 aria-hidden="true"
 fill="currentColor"
 viewBox="0 0 20 20"
>
<path
 d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
 />
 </svg>
 </button>
 <button
 class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-blue-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
 aria-label="Delete"
>
 <svg
 class="w-5 h-5"
 aria-hidden="true"
 fill="currentColor"
 viewBox="0 0 20 20"
 >
<path
 fill-rule="evenodd"
 d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
 clip-rule="evenodd"
/>
</svg>
</button>
</div>
</td>
</tr>
<!-- End Paciente 09 -->

</tbody>
</table> 
</div>
<!-- End tab Pacientes -->

    
<div
 class="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800"
>
<span class="flex items-center col-span-3">Paginas 1-09 de 30 </span>
<span class="col-span-2" />

<!--Inicio Paginação -->

<span class="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
<nav aria-label="Table navigation">
<ul class="inline-flex items-center">
<li>
<button
  class="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-blue"
  aria-label="Previous"
>
                  <svg
                    class="w-4 h-4 fill-current"
                    aria-hidden="true"
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
                  class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-blue"
                >
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
                  class="px-3 py-1 text-white transition-colors duration-150 bg-blue-600 border border-r-0 border-blue-600 rounded-md focus:outline-none focus:shadow-outline-blue"
                >
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
  </div>
</template>

