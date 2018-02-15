import axios from 'axios';

const API_KEY = '91fdb5dbc5d94080f87e60a891aee775';

export default {
  getCurrentWeather: (city) => {
    console.log(city);
    let encodedURI = window.encodeURI('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&type=accurate&APPID=' + API_KEY);

    return axios.get(encodedURI)
      .then((response) => {
        return response.data;
      });
  }
}
