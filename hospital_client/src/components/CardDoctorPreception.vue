<script>
export default {
    props: ['item']
}
</script>

<template>
    <div class="w-full md:w-1/2 xl:w-1/3 px-4">
        <div class="bg-white rounded-lg overflow-hidden mb-10">
            <img :src="item.Medicine.photoUrl" alt="image" class="w-full" />
            <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                <h3>
                    <a href="javascript:void(0)" class="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        ">
                        Patient Name: {{ item.patient_name }}
                    </a>
                </h3>
                <p class="text-base text-body-color leading-relaxed">
                    Age: {{ item.patient_age }}
                </p>
                <p class="text-base text-body-color leading-relaxed">
                    Medicine Name: {{ item.Medicine.name }}
                </p>
                <p class="text-base text-body-color leading-relaxed">
                    Medicine Dose: {{ item.Medicine.dose }}
                </p>
                <p class="text-base text-body-color leading-relaxed mb-7">
                    User Description: {{ item.use_description }}
                </p>
                <div v-if="item.status === 'unclaimed'">
                    <button type="button"
                        class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Pay
                        Now</button>
                </div>
                <div v-else-if="item.status === 'claimed'">
                    <p
                        class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                        Accepted</p>
                </div>
            </div>
        </div>
    </div>
</template>