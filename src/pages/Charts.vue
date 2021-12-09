<template>
  <div class="container px-6 mx-auto grid">
    <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
      Charts
    </h2>

    <CTA />

    <p class="mb-8 text-gray-600 dark:text-gray-400">
      Charts are provided by
      <a
        class="text-blue-600 dark:text-blue-400 hover:underline"
        href="https://www.chartjs.org/"
      >
        Chart.js
      </a>
      . Note that the default legends are disabled and you should provide a
      description for your charts in HTML. See source code for examples.
    </p>

    <div class="grid gap-6 mb-8 md:grid-cols-2">
      <!-- Lines chart -->
      <div class="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800 shadow-lg">
        <h4 class="mb-4 font-semibold text-gray-800 dark:text-gray-300">
          Lucro Anual
        </h4>
        <div
          class="flex mt-4 text-sm text-gray-600 dark:text-gray-400"
        >
          <!-- Chart legend -->
          <div class="flex items-center w-full">
            <ChartLine element="line" />
          </div>
        </div>
      </div>
      <!-- Bars chart -->
      <div class="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800 shadow-lg">
        <h4 class="mb-4 font-semibold text-gray-800 dark:text-gray-300">
          Tráfego
        </h4>
        <div
          class="flex justify-center mt-4 space-x-3 text-sm text-gray-600 dark:text-gray-400"
        >
          <!-- Chart legend -->
          <ChartBar element="bar" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CTA from '@components/CTA.vue';
import ChartLine from '@components/ChartLine.vue';
import ChartBar from '@components/ChartBar.vue';

export default {
  name: 'Charts',
  components: {
    CTA,
    ChartLine,
    ChartBar
  }
};
</script>
