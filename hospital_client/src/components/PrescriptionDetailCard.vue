<script>
import { useCounterStore } from '../stores/counter';
import { mapActions, mapState } from 'pinia';
export default {
    methods: {

        ...mapActions(useCounterStore, ['fetchPrescriptionById']),
        ...mapActions(useCounterStore, ['updatePrescriptionStatus'])

    },
    created() {
        this.fetchPrescriptionById(this.$route.params.id)
    },
    computed: {
        ...mapState(useCounterStore, ['prescriptionDetail'])
    }
}
</script>

<template>
    <div class="container mx-auto my-60">
        <div>
            <div class="bg-white relative shadow rounded-lg w-5/6 md:w-5/6  lg:w-4/6 xl:w-3/6 mx-auto">
                <div class="flex justify-center">
                    <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt=""
                        class="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110">
                </div>

                <div class="mt-16">
                    <h1 class="font-bold text-center text-3xl text-gray-900 mb-3">
                        {{ prescriptionDetail.User ? prescriptionDetail.User.Doctor.name : "" }}
                    </h1>
                    <p class="text-center text-sm text-gray-400 font-medium mb-2">
                        {{ prescriptionDetail.User ? prescriptionDetail.User.Doctor.specialization : "" }}
                    </p>
                    <p class="text-center text-sm text-gray-400 font-medium">SIP Number:
                        {{ prescriptionDetail.User ? prescriptionDetail.User.Doctor.sip_number : "" }}
                    </p>
                    <div class="my-5 px-6">

                        <p @submit.prevent="updatePrescriptionStatus(prescriptionDetail.id)" href="#"
                            class="text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white">
                            Accept</p>

                    </div>

                    <div class="w-full">
                        <h3 class="font-medium text-gray-900 text-left px-6">Recent activites</h3>
                        <div class="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
                            <p href="#"
                                class="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt=""
                                    class="rounded-full h-6 shadow-md inline-block mr-2">
                                Patient Name: {{ prescriptionDetail.patient_name }}
                            </p>
                            <p href="#"
                                class="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt=""
                                    class="rounded-full h-6 shadow-md inline-block mr-2">
                                Patient Age: {{ prescriptionDetail.patient_age }}
                            </p>
                            <p href="#"
                                class="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt=""
                                    class="rounded-full h-6 shadow-md inline-block mr-2">
                                Patient Address: {{ prescriptionDetail.patient_address }}
                            </p>
                            <p href="#"
                                class="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt=""
                                    class="rounded-full h-6 shadow-md inline-block mr-2">
                                Medicine Name: {{ prescriptionDetail.Medicine ? prescriptionDetail.Medicine.name : "" }}
                            </p>
                            <p href="#"
                                class="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt=""
                                    class="rounded-full h-6 shadow-md inline-block mr-2">
                                Medicine Dose: {{ prescriptionDetail.Medicine ? prescriptionDetail.Medicine.dose : "" }}
                            </p>
                            <p href="#"
                                class="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt=""
                                    class="rounded-full h-6 shadow-md inline-block mr-2">
                                Medicine Amount: {{ prescriptionDetail.Medicine ? prescriptionDetail.Medicine.amount :
                                        ""
                                }}
                            </p>
                            <p href="#"
                                class="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt=""
                                    class="rounded-full h-6 shadow-md inline-block mr-2">
                                Use Description: {{ prescriptionDetail.use_description }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

</template>