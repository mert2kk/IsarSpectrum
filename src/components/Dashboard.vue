<template>
  <div class="card flex flex-col items-center bg-back">
    <header
      class="flex flex-row h-[80px] w-full px-5 bg-white items-center justify-between fixed top-0 z-10 border-b-2 shadow-sm"
    >
      <div>
        <img
          src="/Users/mertkadirkayan/IsarGui/src/assets/Logo.png"
          alt="Logo"
          class="h-[80px] pb-2"
        />
      </div>
      <div class="bg-blue1 p-2 rounded-2xl text-white font-medium text-sm">
        {{ realTime }}
      </div>
    </header>
    <h2 class="text-2xl font-bold m-4 flex justify-center mt-[100px]">
      Spectrum Data
    </h2>
    <section
      class="flex flex-row space-x-[100px] border p-10 border-gray-300 mt-2"
    >
      <section class="flex flex-row space-x-[100px] font-semibold">
        <div class="flex flex-col items-center space-y-2">
          <h1 class="bg-white py-1 px-8 rounded-md text-blue2">Velocity</h1>
          <p class="bg-blue2 text-white p-2 rounded-md select-all">
            {{ store.Data.velocity }}
          </p>
          <div class="card">
            <Chart
              type="bar"
              :data="VelocityChartData"
              :options="VelocityChartOptions"
              class="h-[200px] w-[180px]"
            />
          </div>
        </div>
        <div class="flex flex-col items-center space-y-2">
          <h1 class="bg-white py-1 px-8 rounded-md text-green">Altitude</h1>
          <p class="bg-green text-white p-2 rounded-md select-all">
            {{ store.Data.altitude }}
          </p>
          <div class="card">
            <Chart
              type="bar"
              :data="AltitudeChartData"
              :options="AltitudeChartOptions"
              class="h-[200px] w-[180px]"
            />
          </div>
        </div>
        <div class="flex flex-col items-center space-y-2">
          <h1 class="bg-white py-1 px-2 rounded-md text-red3">Temperature</h1>

          <p class="bg-red3 text-white p-2 rounded-md select-all">
            {{ store.Data.temperature }}
          </p>
          <div class="card">
            <Chart
              type="bar"
              :data="TemperatureChartData"
              :options="TemperatureChartOptions"
              class="h-[200px] w-[180px]"
            />
          </div>
        </div>
      </section>
      <section class="flex flex-col mt-6 w-full items-center">
        <div class="font-bold mb-5">
          <button
            class="bg-blue1 text-white p-2 rounded-lg"
            @click="updateSpectrumData()"
          >
            Update Spectrum Data
          </button>
        </div>
        <h2 class="mb-6 text-xl font-bold">Status</h2>
        <div class="flex flex-col space-y-2 font-semibold">
          <div class="w-[500px] bg-slate-500 p-2 rounded-lg">
            <p class="text-white">{{ store.Data.statusMessage }}</p>
          </div>
          <div class="">
            <div
              v-if="store.Data.isAscending === true"
              class="bg-blue1 w-[500px] p-2 rounded-lg"
            >
              <div class="flex flex-row space-x-2">
                <p class="text-white">Rocket is Descending.</p>
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
              v-if="store.Data.isAscending === false"
              class="bg-red1 w-[500px] p-2 rounded-lg"
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
              v-if="store.Data.isActionRequired === true"
              class="bg-red-500 w-[500px] p-2 rounded-lg"
            >
              <p class="text-white">Urgent: Please take necessary action.</p>
            </div>
            <div
              v-if="store.Data.isActionRequired === false"
              class="bg-blue1 w-[500px] p-2 rounded-lg"
            >
              <p class="text-white">No Action Required</p>
            </div>
          </div>
        </div>
      </section>
    </section>
    <section class="mt-6">
      <h2 class="text-2xl font-bold mb-4 flex justify-center">
        Real-time Rocket Telemetry
      </h2>
      <LiveOverView />
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useDataStore } from "../Store/DataStore.ts";
import Chart from "primevue/chart";
import LiveOverView from "../components/LiveOverView.vue";

let store = useDataStore();

const realTime = ref(new Date().toLocaleTimeString());

const updateClock = () => {
  realTime.value = new Date().toLocaleTimeString();
  requestAnimationFrame(updateClock);
};

const updateSpectrumData = async () => {
  try {
    await Promise.all([
      store.fetchSpectrumStatus(),
      // Other asynchronous functions go here
    ]);
    VelocityChartData.value = setVelocityChartData();
    VelocityChartOptions.value = setVelocityChartOptions();
    AltitudeChartData.value = setAltitudeChartData();
    AltitudeChartOptions.value = setAltitudeChartOptions();
    TemperatureChartData.value = setTemperatureChartData();
    TemperatureChartOptions.value = setTemperatureChartOptions();
    updateClock();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

onMounted(async () => {
  try {
    updateSpectrumData();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});

/////////////Velocity Bar

const VelocityChartData = ref();
const VelocityChartOptions = ref();

const setVelocityChartData = () => {
  return {
    labels: [""],
    datasets: [
      {
        label: "Velocity",
        backgroundColor: "#02013C",
        borderColor: "#02013C",
        data: [store.Data.velocity],
      },
    ],
  };
};
const setVelocityChartOptions = () => {
  return {
    maintainAspectRatio: true,
    aspectRatio: 0.9,
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
          color: "#000000",
          font: {
            weight: 500,
          },
        },
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      y: {
        suggestedMin: -100,
        suggestedMax: 100,
        ticks: {
          color: "#000000",
        },
        grid: {
          color: "#000000",
          drawBorder: false,
        },
      },
    },
  };
};

/////////////Altitude Bar

const AltitudeChartData = ref();
const AltitudeChartOptions = ref();

const setAltitudeChartData = () => {
  return {
    labels: [""],
    datasets: [
      {
        label: "Altitude",
        backgroundColor: "#008000",
        borderColor: "#008000",
        data: [store.Data.altitude],
      },
    ],
  };
};
const setAltitudeChartOptions = () => {
  return {
    maintainAspectRatio: true,
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
          color: "#000000",
          font: {
            weight: 500,
          },
        },
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      y: {
        suggestedMin: 0,
        ticks: {
          color: "#000000",
        },
        grid: {
          color: "#000000",
          drawBorder: false,
        },
      },
    },
  };
};

// watch(
// () => store.LiveData[0],
// () => {
// AltitudeChartData.value = setAltitudeChartData();
// AltitudeChartOptions.value = setAltitudeChartOptions();
// }
// );
/////////Temperature Bar

const TemperatureChartData = ref();
const TemperatureChartOptions = ref();

const setTemperatureChartData = () => {
  return {
    labels: [""],
    datasets: [
      {
        label: "Temperature",
        backgroundColor: "#AA4E63",
        borderColor: "#AA4E63",
        data: [store.Data.temperature],
      },
    ],
  };
};
const setTemperatureChartOptions = () => {
  return {
    maintainAspectRatio: false,
    aspectRatio: 0.9,
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
          color: "#000000",
          font: {
            weight: 500,
          },
        },
        grid: {
          display: false,
          drawBorder: false,
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
