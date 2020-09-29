import Component from '@glimmer/component';
import {asyncHelper, toFar} from '../helpers/http-helper';
import { tracked } from '@glimmer/tracking';

const API_KEY_URL = 'http://api.airvisual.com/v2/nearest_city?lat=35.98&lon=140.33&key=458da956-9fdd-4638-bab6-23bdfe05636c';

export default class WeatherTrackerComponent extends Component {
  @tracked weatherData = null;
  @tracked refreshCount = 0;
  @tracked isCelsius = true;
  @tracked degreesToShow = null;
  constructor(){
    super(...arguments);
    this.loadWeather();
  }

  async loadWeather(){
    asyncHelper(API_KEY_URL, data => {
      this.refreshCount += 1;
      console.log(data)
      this.weatherData = data.data;
      this.degreesToShow = data.data.current.weather.tp
      this.isCelsius = true;
    })
  }

  refreshWeather(){
    this.weatherData = null;
    this.loadWeather();
  }

  toggleDegrees(){
    const celsius = this.weatherData.current.weather.tp;

    if(this.isCelsius){
      this.isCelsius = false;
      this.degreesToShow = toFar(celsius);
    } else {
      this.isCelsius = true;

      this.degreesToShow = celsius;
    }
  }
}
