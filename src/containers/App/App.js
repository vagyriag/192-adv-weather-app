import React from 'react';
import WeatherCard from '../../components/WeatherCard/WeatherCard';
import { Grid, CssBaseline, Button } from '@material-ui/core';
import moment from 'moment';
import 'moment/locale/es';

moment.locale('es');

/*const days = [
  {
    day: 'Wed',
    icon: 'http://openweathermap.org/img/wn/02d@2x.png',
    min: '30°',
    max: '40°'
  },
];*/

function App() {
  const [ days, setDays ] = React.useState([]);

  const handleGetWeather = () => {
    var promise = fetch('http://api.openweathermap.org/data/2.5/forecast?q=Cali,co&APPID=79596a3b0efba5c91d3af2f7826d7a07');

    promise.then((info) => {
      return info.json();
    })
    .then((info) => {
      var list = info.list.filter((elem, index) => {
        return index % 8 === 0;
      });

      list = list.map((elem, index, array) => {
        return {
          day: moment.unix(elem.dt).format('ddd'),
          icon: `http://openweathermap.org/img/wn/${elem.weather[0].icon}@2x.png`,
          min: Math.round(elem.main.temp_min - 273.15) + '°',
          max: Math.round(elem.main.temp_max - 273.15) + '°',
        };
      });

      setDays( list );
    });
  }

  return (<div>
    <Button onClick={handleGetWeather} variant="contained" color="primary">
      Get Weather Info
    </Button>

    <Grid container spacing={3}>

      {days && days.map((item) => {
        return <Grid item md={2} key={item.day}>
          <WeatherCard 
            day={item.day}
            icon={item.icon}
            min={item.min}
            max={item.max}
            />
        </Grid>
      })}
      
    </Grid>

    <CssBaseline />
  </div>);
}

export default App;
