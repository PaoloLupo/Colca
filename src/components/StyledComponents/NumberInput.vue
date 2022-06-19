<template>
  <div class="relative flex flex-auto">
    <input type="number"
           id="floating_outlined"
           class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-xl text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
           :value="modelValue"
           @input="$emit('update:modelValue',$event.target.value)"
           v-bind="$attrs"
    >
    <label v-bind="$attrs" for="floating_outlined" class="absolute text-base  font-bold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-800 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">{{name}}
      <a class="text-orange-500 stacked-fractions">
        {{units}}
      </a>
    </label>

  </div>

</template>

<script setup lang="ts">


defineProps({
  name : String,
  units: String,
  modelValue:Number,
})

defineEmits(['update:modelValue'])


</script>
