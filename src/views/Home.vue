<template>
  <div class="home">
    <h1>Weather App</h1>
    <div class="enter-city">
      <input
        v-model="data.city"
        @keyup.enter="getWeather"
        type="text"
        placeholder="Enter a city"
      />
    </div>
    <div v-if="data.weather" class="weather">
      <h1>{{ Math.round(data.weather.main.temp - 273.15) }}&deg;</h1>
      <h2>
        {{ data.weather.weather[0].main }}
      </h2>
      <h3>
        {{ data.weather.weather[0].description }}
      </h3>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from "vue";

export default {
  setup() {
    const data = reactive({
      city: "",
      weather: null,
    });

    const apiUrl = "http://localhost:3000/";
    const getWeather = async () => {
      const res = await fetch(`${apiUrl}?q=${data.city}`);
      const dataRes = await res.json();
      data.weather = dataRes;
    };

    return {
      data,
      getWeather,
    };
  },
};
</script>

<style lang="sass">
.enter-city
  input
    font-size: 40px
.weather
  margin-top: 10px
  h1
    font-size: 80px
  h1, h2, h3
    margin: 0
</style>