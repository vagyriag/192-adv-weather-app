import React from 'react';
import WeatherCard from '../../components/WeatherCard/WeatherCard';
import { Grid, CssBaseline } from '@material-ui/core';

const days = [
  {
    day: 'Wed',
    icon: 'http://openweathermap.org/img/wn/02d@2x.png',
    min: '30°',
    max: '40°'
  },
  {
    day: 'Thu',
    icon: 'http://openweathermap.org/img/wn/01d@2x.png',
    min: '40°',
    max: '50°'
  },
  {
    day: 'Fri',
    icon: 'http://openweathermap.org/img/wn/04d@2x.png',
    min: '24°',
    max: '29°'
  },
  {
    day: 'Sat',
    icon: 'http://openweathermap.org/img/wn/02d@2x.png',
    min: '35°',
    max: '47°'
  },
  {
    day: 'Sun',
    icon: 'http://openweathermap.org/img/wn/11d@2x.png',
    min: '50°',
    max: '60°'
  },
];

function App() {
  return (<div>
    <h1>hola</h1>

    <Grid container spacing={3}>

      {days.map((item) => {
        return <Grid item md={2}>
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
