<template>
  <section v-if="store.LiveData.length >= 10" class="my-10">
    <section class="my-10">
      <div
        v-if="store.LiveData[9]?.IsActionRequired === true"
        class="flex justify-around bg-red-200 mb-6 rounded-md"
      >
        <button
          class="flex text-lg bg-red-500 text-white rounded-2xl p-3 my-2 w-[200px] justify-center animate-pulse-fast items-center"
          @click="store.TakeAction"
        >
          Take Action
          <slot
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              id="Attention"
              height="32px"
              class="flex ml-2"
            >
              <path
                fill="#000000"
                fill-rule="evenodd"
                d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10ZM11 8a1 1 0 1 1 2 0v4a1 1 0 1 1-2 0V8Zm2 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
                clip-rule="evenodd"
                class="color000000 svgShape"
              ></path></svg
          ></slot>
        </button>
      </div>
      <div class="flex flex-row space-x-2 font-semibold">
        <div class="w-[460px] bg-slate-500 p-2 rounded-lg">
          <p class="text-white">{{ store.LiveData[9]?.StatusMessage }}</p>
        </div>
        <div class="">
          <div
            v-if="store.LiveData[9]?.IsAscending === true"
            class="bg-blue1 w-[460px] p-2 rounded-lg"
          >
            <div class="flex flex-row space-x-2">
              <p class="text-white">Rocket is Ascending.</p>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                id="Rocket"
                height="24px"
              >
                <path
                  fill="#000000"
                  d="M16 0s-3.5-.4-6.7 2.8C7.7 4.3 6.4 6.3 5.4 8.1l-2.5-.6-1.6 1.6 2.8 1.4c-.3.6-.4 1-.4 1l.8.8s.4-.2 1-.4l1.4 2.8 1.6-1.6-.5-2.5c1.7-1 3.8-2.3 5.3-3.8C16.4 3.6 16 0 16 0zm-3.2 4.8c-.4.4-1.1.4-1.6 0-.4-.4-.4-1.1 0-1.6.4-.4 1.1-.4 1.6 0 .4.4.4 1.1 0 1.6z"
                  class="color444444 svgShape"
                ></path>
                <path
                  fill="#000000"
                  d="M4 14.2c-.8.8-2.6.4-2.6.4s-.4-1.8.4-2.6 1.5-.9 1.5-.9-1.3-.3-2.1.6c-1.6 1.6-1 4.2-1 4.2s2.6.6 4.2-1c.9-.9.6-2.2.6-2.2s-.2.7-1 1.5z"
                  class="color444444 svgShape"
                ></path>
              </svg>
            </div>
          </div>
          <div
            v-if="store.LiveData[9]?.IsAscending === false"
            class="bg-red1 w-[460px] p-2 rounded-lg"
          >
            <div class="flex flex-row space-x-2">
              <p class="text-white">Rocket is Descending.</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                id="Rocket"
                height="24px"
                class="transform rotate-90"
              >
                <path
                  fill="#000000"
                  d="M16 0s-3.5-.4-6.7 2.8C7.7 4.3 6.4 6.3 5.4 8.1l-2.5-.6-1.6 1.6 2.8 1.4c-.3.6-.4 1-.4 1l.8.8s.4-.2 1-.4l1.4 2.8 1.6-1.6-.5-2.5c1.7-1 3.8-2.3 5.3-3.8C16.4 3.6 16 0 16 
                    0zm-3.2 4.8c-.4.4-1.1.4-1.6 0-.4-.4-.4-1.1 0-1.6.4-.4 1.1-.4 1.6 0 .4.4.4 1.1 0 1.6z"
                  class="color444444 svgShape"
                ></path>
                <path
                  fill="#000000"
                  d="M4 14.2c-.8.8-2.6.4-2.6.4s-.4-1.8.4-2.6 1.5-.9 1.5-.9-1.3-.3-2.1.6c-1.6 1.6-1 4.2-1 4.2s2.6.6 4.2-1c.9-.9.6-2.2.6-2.2s-.2.7-1 1.5z"
                  class="color444444 svgShape"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div>
          <div
            v-if="store.LiveData[9]?.IsActionRequired === true"
            class="bg-red-500 w-[460px] p-2 rounded-lg"
          >
            <p class="text-white">Urgent: Please take necessary action.</p>
          </div>
          <div
            v-if="store.LiveData[9]?.IsActionRequired === false"
            class="bg-blue1 w-[460px] p-2 rounded-lg"
          >
            <p class="text-white">No Action Required</p>
          </div>
        </div>
      </div>
    </section>
    <div class="flex flex-row justify-center space-x-[200px]">
      <div class="flex flex-col space-y-2 items-center">
        <h1 class="bg-white py-1 px-8 rounded-md text-blue2">Velocity</h1>
        <p class="bg-blue3 text-white p-2 rounded-md select-all">
          {{ store.LiveData[9]?.Velocity }}
        </p>
      </div>
      <div class="flex flex-col space-y-2 items-center">
        <h1 class="bg-white py-1 px-8 rounded-md text-green">Altitude</h1>
        <p class="bg-blue3 text-white p-2 rounded-md select-all">
          {{ store.LiveData[9]?.Altitude }}
        </p>
      </div>
      <div class="flex flex-col space-y-2 items-center">
        <h1 class="bg-white py-1 px-2 rounded-md text-red3">Temperature</h1>
        <p class="bg-blue3 text-white p-2 rounded-md select-all">
          {{ store.LiveData[9]?.Temperature }}
        </p>
      </div>
    </div>

    <div class="flex flex-row justify-center">
      <section class="flex flex-row space-x-10">
        <div>
          <div class="card">
            <Chart
              type="line"
              :data="LiveVelocityChartData"
              :options="LiveVelocityChartOptions"
              class="h-[300px] w-[300px]"
            />
          </div>
        </div>
        <div>
          <div class="card">
            <Chart
              type="line"
              :data="LiveAltitudeChartData"
              :options="LiveAltitudeChartOptions"
              class="h-[300px] w-[300px]"
            />
          </div>
        </div>
        <div>
          <div class="card">
            <Chart
              type="line"
              :data="LiveTemperatureChartData"
              :options="LiveTemperatureChartOptions"
              class="h-[300px] w-[300px]"
            />
          </div>
        </div>
      </section>
    </div>
  </section>
  <section v-else class="m-10">
    <h3 class="flex justify-center text-xl animate-bounce">
      Loading Live data... Please wait.
    </h3>
    <h3 class="flex justify-center mt-5 text-lg">{{ countdown }}</h3>
    <div class="mt-10 flex justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enable-background="new 0 0 64 64"
        viewBox="0 0 64 64"
        id="Rocket"
        height="64px"
        width="64px"
      >
        <path
          d="M51.57 49.44c1.49.8 3.21 1.08 4.88.81-3.16-1.95-6.13-4.29-8.87-6.99C47.78 45.85 49.26 48.19 51.57 49.44zM21.95 44.71c2.11-.72 3.92-2.79 4.39-4.84-3.46 2.05-7.3 3.54-11.46 4.44C16.63 45.11 19.44 45.58 21.95 44.71z"
          fill="#085fdd"
          class="color000000 svgShape"
        ></path>
        <path
          d="M57.6 51.08c-2.17.61-4.54.35-6.52-.72-2.93-1.58-4.69-4.69-4.57-8-5.93-2.9-12.49-3.94-19.03-3.03-.23 2.65-2.47 5.43-5.2 6.37-3.13 1.07-6.91.34-8.86-.99-4.39 2.97-8.04 7-10.56 11.67C1.63 58.63.67 61.03 0 63.52h64C62.77 58.97 60.57 54.69 57.6 51.08zM15.95 55.65c-.2 1.25-.62 2.38-1.22 3.17-.49.68-1.05 1.02-1.51.94-.46-.07-.89-.56-1.17-1.34-.33-.94-.42-2.14-.23-3.4.19-1.25.61-2.38 1.21-3.17.45-.61.96-.94 1.39-.94h.12c.46.07.89.56 1.17 1.34C16.05 53.2 16.13 54.4 15.95 55.65zM30.34 57.53c-.08.61-.37 1.13-.77 1.5-.38.32-.83.46-1.24.4-.94-.13-1.56-1.21-1.39-2.39.1-.61.37-1.13.78-1.5.32-.27.69-.41 1.04-.41.08 0 .14 0 .21.02C29.9 55.26 30.51 56.35 30.34 57.53zM39.02 47.85c-.23 1.56-1.46 2.68-2.73 2.49-1.28-.18-2.12-1.62-1.89-3.19.22-1.45 1.28-2.51 2.45-2.51.1 0 .2 0 .28.01C38.41 44.84 39.25 46.27 39.02 47.85zM51.85 57.77c-.14.97-.63 1.83-1.36 2.42-.72.57-1.61.82-2.49.69-.88-.13-1.65-.63-2.17-1.39-.53-.78-.75-1.74-.6-2.7.27-1.83 1.74-3.14 3.39-3.14.15 0 .31.01.46.04C50.9 53.95 52.14 55.79 51.85 57.77zM15.83 29.9h4.35c.36 0 .66-.3.66-.66 0-.36-.3-.66-.66-.66h-1.3l1.95-6.8h3.04c0 .67.01 1.36.04 2.07.01.24.22.45.47.45h4.77l-1.17 2.65h8.04l-1.17-2.65h4.77c.25 0 .46-.21.47-.45.03-.71.04-1.4.04-2.07h3.04l1.95 6.8h-1.31c-.36 0-.66.3-.66.66 0 .36.3.66.66.66h4.35c.36 0 .66-.3.66-.66 0-.36-.3-.66-.66-.66H46.5l-3.16-11c-.08-.28-.34-.48-.63-.48h-2.77c-.54-5.96-2.01-9.98-2.77-11.7-.38-.86-1.24-1.42-2.19-1.42h-2.32V1.14c0-.36-.3-.66-.66-.66-.36 0-.66.3-.66.66v2.86h-2.32c-.95 0-1.8.55-2.19 1.42-.75 1.73-2.23 5.74-2.77 11.7h-2.78c-.29 0-.55.2-.63.48l-3.15 11h-1.68c-.36 0-.66.3-.66.66C15.17 29.61 15.46 29.9 15.83 29.9zM42.21 18.43l.58 2.04h-2.68c-.02-.7-.05-1.38-.09-2.04H42.21zM32 11.16c1.79 0 3.23 1.45 3.23 3.23 0 1.79-1.45 3.23-3.23 3.23-1.78 0-3.23-1.45-3.23-3.23C28.77 12.61 30.22 11.16 32 11.16zM21.79 18.43h2.18c-.04.66-.07 1.33-.09 2.04H21.2L21.79 18.43z"
          fill="#085fdd"
          class="color000000 svgShape"
        ></path>
        <path
          d="M29.84,28.02l-0.05,0.22c-0.57,2.51,0.18,3.93,0.89,5.3c0.33,0.63,0.67,1.29,0.89,2.05l0.14,0.5l0.34-0.38
		c3.43-3.87,2.13-7.36,2.07-7.5l-0.07-0.18H29.84z"
          fill="#085fdd"
          class="color000000 svgShape"
        ></path>
      </svg>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, watchEffect, reactive } from "vue";
import { useDataStore } from "../Store/DataStore";
import Chart from "primevue/chart";

let store = useDataStore();

const countdown = ref(5);

const updateCountDown = () => {
  const intervalId = setInterval(() => {
    if (countdown.value > 0) {
      countdown.value -= 1;
    } else {
      clearInterval(intervalId);
    }
  }, 1000);
};
updateCountDown();

onMounted(async () => {
  try {
    await store.LiveUpdate();

    LiveVelocityChartData.value = setLiveVelocityChartData();
    LiveVelocityChartOptions.value = setLiveVelocityChartOptions();
    LiveAltitudeChartData.value = setLiveAltitudeChartData();
    LiveAltitudeChartOptions.value = setLiveAltitudeChartOptions();
    LiveTemperatureChartData.value = setLiveTemperatureChartData();
    LiveTemperatureChartOptions.value = setLiveTemperatureChartOptions();
  } catch (error) {
    console.error("Error fetching  live data:", error);
  }
});

watch(
  () => store.LiveData[0],
  () => {
    LiveVelocityChartData.value = setLiveVelocityChartData();
    LiveVelocityChartOptions.value = setLiveVelocityChartOptions();
    LiveAltitudeChartData.value = setLiveAltitudeChartData();
    LiveAltitudeChartOptions.value = setLiveAltitudeChartOptions();
    LiveTemperatureChartData.value = setLiveTemperatureChartData();
    LiveTemperatureChartOptions.value = setLiveTemperatureChartOptions();
  }
);

// VELOCITY LIVE CHART
const LiveVelocityChartData = ref();
const LiveVelocityChartOptions = ref();

const setLiveVelocityChartData = () => {
  //Starts after 10 Input
  return {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    datasets: [
      {
        label: "Velocity",
        data: store.LiveData.slice(0, 10).map((data) => data.Velocity),
        fill: false,
        borderColor: "#02013C",
        tension: 0.4,
      },
    ],
  };
};
const setLiveVelocityChartOptions = () => {
  return {
    maintainAspectRatio: false,
    aspectRatio: 0.6,
    plugins: {
      legend: {
        labels: {
          color: "#02013C",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#02013C",
        },
        grid: {
          color: "#02013C",
        },
      },
      y: {
        ticks: {
          color: "#000000",
        },
        grid: {
          color: "#000000",
        },
        suggestedMin: -100,
        suggestedMax: 100,
      },
    },
  };
};

//ALTITUDE LIVE CHART

const LiveAltitudeChartData = ref();
const LiveAltitudeChartOptions = ref();

const setLiveAltitudeChartData = () => {
  //Starts after 10 Input
  return {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    datasets: [
      {
        label: "Altitude",
        data: store.LiveData.slice(0, 10).map((data) => data.Altitude),
        fill: true,
        borderColor: "#008000",
        tension: 0.4,
      },
    ],
  };
};
const setLiveAltitudeChartOptions = () => {
  return {
    maintainAspectRatio: false,
    aspectRatio: 0.9,
    plugins: {
      legend: {
        labels: {
          color: "#008000",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#008000",
        },
        grid: {
          color: "#008000",
        },
      },
      y: {
        ticks: {
          color: "#000000",
        },
        grid: {
          color: "#000000",
        },
      },
    },
  };
};

//Temperature LIVE CHART

const LiveTemperatureChartData = ref();
const LiveTemperatureChartOptions = ref();

const setLiveTemperatureChartData = () => {
  //Starts after 10 Input
  return {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    datasets: [
      {
        label: "Temperature",
        data: store.LiveData.slice(0, 10).map((data) => data.Temperature),
        fill: false,
        borderColor: "#AA4E63",
        tension: 0.4,
      },
    ],
  };
};
const setLiveTemperatureChartOptions = () => {
  return {
    maintainAspectRatio: false,
    aspectRatio: 0.6,
    plugins: {
      legend: {
        labels: {
          color: "#AA4E63",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#AA4E63",
        },
        grid: {
          color: "#AA4E63",
        },
      },
      y: {
        ticks: {
          color: "#000000",
        },
        grid: {
          color: "#000000",
        },
        suggestedMin: -30,
        suggestedMax: 30,
      },
    },
  };
};
</script>

<style scoped></style>
