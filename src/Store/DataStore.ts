import { defineStore } from 'pinia'
import { ref } from 'vue'


export const useDataStore = defineStore("Dashboard", () => {

    //SpectrumStatus

    let Data = ref<Data[]>([])

    interface Data {
        velocity: number;
        altitude: number;
        temperature: number;
        statusMessage: string
        isAscending: boolean
        isActionRequired: boolean
    }

    async function fetchSpectrumStatus() {
        try {
            const response = await fetch('https://webfrontendassignment-isaraerospace.azurewebsites.net/api/SpectrumStatus');
            const data = await response.json();

            Data.value = data
            console.log(Data.value);
            return data;
        } catch (error) {
            // Handle errors, e.g., log the error or show a user-friendly message
            console.error('Error fetching data:', error.message);
            throw error;
        }
    }




    //WebSocket

    let LiveData = ref<LiveData[]>([])


    interface LiveData {
        Velocity: number;
        Altitude: number;
        Temperature: number;
        StatusMessage: string
        IsAscending: boolean
        IsActionRequired: boolean
    }




    async function LiveUpdate() {
        const socket = new WebSocket(
            "wss://webfrontendassignment-isaraerospace.azurewebsites.net/api/SpectrumWS"
        );

        const openPromise = new Promise<void>((resolve) => {
            socket.addEventListener("open", (event) => {
                console.log("WebSocket connection opened:", event);
                resolve();
            });
        });

        const messagePromise = new Promise<void>((resolve, reject) => {
            socket.addEventListener("message", (event) => {
                try {
                    const data = JSON.parse(event.data);
                    console.log("Received data:", data);
                    // LiveData.value = [data]
                    LiveData.value.push(data)
                    if (LiveData.value.length > 10) {
                        LiveData.value.shift()
                    }
                    resolve();
                } catch (error) {
                    console.error("Error processing WebSocket data:", error);
                    reject(error);
                }
            });
        });

        const closePromise = new Promise<void>((resolve) => {
            socket.addEventListener("close", (event) => {
                console.log("WebSocket connection closed:", event);
                resolve();
            });
        });

        const errorPromise = new Promise<void>((resolve) => {
            socket.addEventListener("error", (event) => {
                console.error("WebSocket error:", event);
                resolve();
            });
        });

        await Promise.all([openPromise, messagePromise, closePromise, errorPromise]);
    }




    async function TakeAction() {
        try {
            const response = await fetch('https://webfrontendassignment-isaraerospace.azurewebsites.net/api/ActOnSpectrum');



        } catch (error) {
            // Handle errors, e.g., log the error or show a user-friendly message
            console.error('Error fetching data:', error.message);
            throw error;
        }
    }

    return {
        Data,
        LiveData,

        fetchSpectrumStatus,
        LiveUpdate,

        TakeAction
    }

















})