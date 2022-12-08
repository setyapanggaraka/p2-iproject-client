<script>
export default {
    props: ['doctor']
}
</script>

<template>
    <div class="w-full md:w-1/2 xl:w-1/3 px-4">
        <div class="bg-white rounded-lg overflow-hidden mb-10">
            <img :src="doctor.photoUrl" alt="image" class="w-full" />
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
                        {{ doctor.name }}
                    </a>
                </h3>
                <p class="text-base text-body-color leading-relaxed">
                    Specialization: {{ doctor.specialization }}
                </p>
                <p class="text-base text-body-color leading-relaxed">
                    Sip Number: {{ doctor.sip_number }}
                </p>
                <p class="text-base text-body-color leading-relaxed mb-7">
                    Status: {{ doctor.status }}
                </p>

            </div>
        </div>
    </div>
</template>