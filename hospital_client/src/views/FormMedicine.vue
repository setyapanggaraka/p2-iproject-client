<script>
import Sidebar from '../components/Sidebar.vue'
import { useCounterStore } from '../stores/counter';
import { mapActions } from 'pinia';
export default {
    data() {
        return {
            medicineData: {
                name: '',
                amount: '',
                dose: '',
                photoUrl: ''
            }
        }
    },
    components: {
        Sidebar
    },
    methods: {
        ...mapActions(useCounterStore, ['addMedicine']),
        readData() {
            this.addMedicine(this.medicineData)
        }
    }
}
</script>

<template>
    <Sidebar />
    <div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        <div class="sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5">
            <div class="px-6 flex items-center justify-between space-x-4 2xl:container">
                <h5 hidden class="text-2xl text-gray-600 font-medium lg:block">Add New Medicine</h5>
                <button class="w-12 h-16 -mr-2 border-r lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 my-auto" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
    <section class="bg-gray-50 dark:bg-gray-900 pb-20">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div
                class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1
                        class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Add Medicine
                    </h1>
                    <form class="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label for="medicine_name"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Medicine
                                Name</label>
                            <input v-model="medicineData.name" type="text" name="medicine_name" id="medicine_name"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Medicine Name">
                        </div>
                        <div>
                            <label for="amount"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Medicine
                                Amount</label>
                            <input v-model="medicineData.amount" type="number" name="amount" id="amount"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="20">
                        </div>
                        <div>
                            <label for="dose"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Medicine
                                Dose</label>
                            <input v-model="medicineData.dose" type="number" name="dose" id="dose"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="500 mg">
                        </div>
                        <div>
                            <label for="medicine_name"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photo Url</label>
                            <input v-model="medicineData.photoUrl" type="text" name="medicine_photoUrl"
                                id="medicine_photoUrl"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Medicine Photo">
                        </div>
                        <div class="flex space-x-2 justify-center">
                            <button @click.prevent="readData" type="button"
                                class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Create
                                Medicine</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>