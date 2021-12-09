<template>


<div class="mt-10 sm:mt-0">
<div class="md:grid md:grid-cols-3">
<div class="md:col-span-1">
<div class="px-4 sm:px-0">
<br>
<h2 class="text-lg font-medium leading-6 text-gray-900">Informações do paciente</h2>
<p class="mt-1 text-sm text-gray-600">
Insira as informações necessárias para o cadastro do paciente.
</p>
<br>
</div>
</div>

<br>
<div class="mt-5 md:mt-0 md:col-span-2">
<!-- Inio forms Paciente -->

<!-- Nome do Paciente -->
<form action="#" method="POST">
<div class="shadow overflow-hidden sm:rounded-md">
<div class="px-4 py-5 bg-white sm:p-6">
<div class="grid grid-cols-6 gap-6">
<div class="col-span-6 sm:col-span-3">
<label for="first-name" class="block text-sm font-medium text-gray-700">Nome</label>
<input type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 focus:ring-blue-600 focus:border-blue-600 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
</div>

<div class="col-span-6 sm:col-span-3">
<label for="last-name" class="block text-sm font-medium text-gray-700">Sobrenome</label>
<input type="text" name="last-name" id="last-name" autocomplete="family-name" class="mt-1 focus:ring-blue-600 focus:border-blue-600 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
</div>

<div class="col-span-6 sm:col-span-3">
<label for="cpf" class="block text-sm font-medium text-gray-700">CPF</label>
<input type="number" name="cpf-user" id="cpf" autocomplete="." class="mt-1 focus:ring-blue-600 focus:border-blue-600 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
</div>

<div class="col-span-6 sm:col-span-3">
<label for="datanasc" class="block text-sm font-medium text-gray-700">Data de Nascimento</label>
<input type="date" name="datanasc" id="data" autocomplete="." class="mt-1 focus:ring-blue-600 focus:border-blue-600 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
</div>


<div class="col-span-6 sm:col-span-3">
<label for="peso" class="block text-sm font-medium text-gray-700">Peso(KG)</label>
<input type="Number" name="peso" id="peso" autocomplete="." class="mt-1 focus:ring-blue-600 focus:border-blue-600 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
</div>

<div class="col-span-6 sm:col-span-3">
<label for="Altura" class="block text-sm font-medium text-gray-700">Altura</label>
<input type="Number" name="altura" id="altura" autocomplete="." class="mt-1 focus:ring-blue-600 focus:border-blue-600 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
</div>

<div class="col-span-6 sm:col-span-3">
<label for="estado" class="block text-sm font-medium text-gray-700">Estado</label>
<select id="estado" name="estado" autocomplete="estado-name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-600 focus:border-blue-600 sm:text-sm">
<option>-----</option>
<option>-----</option>
<option>----</option>
</select>
</div>

<div class="col-span-6">
<label for="street-address" class="block text-sm font-medium text-gray-700">Enderço</label>
<input type="text" name="street-address" id="street-address" autocomplete="street-address" class="mt-1 focus:ring-blue-600 focus:border-blue-600 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
</div>
 
<div class="col-span-6 sm:col-span-6 lg:col-span-2">
<label for="city" class="block text-sm font-medium text-gray-700">Cidade</label>
<input type="text" name="city" id="city" autocomplete="address-level2" class="mt-1 focus:ring-blue-600 focus:border-blue-600 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
</div>


<div class="col-span-6 sm:col-span-3 lg:col-span-2">
<label for="postal-code" class="block text-sm font-medium text-gray-700">CEP</label>
<input type="text" name="postal-code" id="postal-code" autocomplete="postal-code" class="mt-1 focus:ring-blue-600 focus:border-blue-600 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
</div>

</div>
</div>
<div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
<button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600">
 Salvar
</button>
</div>
</div>
</form>
<!--  End Form Paciente -->
</div>
</div>
</div>

    
 </template>