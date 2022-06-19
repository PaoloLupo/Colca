<template xmlns="">
  <div class="border-solid border-2 border-blue-400 basis-1/4">
    <v-stage  :config="configKonva">
      <v-layer>
        <v-circle :config="configCircle"></v-circle>
      </v-layer>
    </v-stage>
  </div>

</template>

<script setup>

const configKonva= {
  width: 200,
      height: 200
}

const configCircle= {
  x: 100,
      y: 100,
      radius: 70,
      fill: "red",
      stroke: "black",
      strokeWidth: 4
}

</script>