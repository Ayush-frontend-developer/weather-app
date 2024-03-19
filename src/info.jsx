import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';



function box ({info}){
    let value = {
        name:info.name,
        feels: info.feels,
      humidity: info.humidity,
     pressure: info.pressure,
     temp: info.temp,
     weather: info.weather
    }

    return(
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={value.humidity>80 ? "daoudi-aissa-Pe1Ol9oLc4o-unsplash.jpg":(value.temp>15 ? "scott-goodwill-7KrWmnpRafw-unsplash.jpg":"phil-muller-SuBr6PPSwuI-unsplash.jpg") }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <h4>weather</h4>
          <p>{value.humidity>80 ? <ThunderstormIcon/>:(value.temp>15 ?<WbSunnyIcon/>:<AcUnitIcon/>)}</p>
        </Typography >
        <Typography style={value.name?{display:"block"}:{display:"none"}} component={"div"}>
        <h5>city {value.name}</h5>
        <p> humidity = {value.humidity}</p>
        <p> pressure = {value.pressure}</p>
        <p> temperature = {value.temp}</p>
        <p> weather = {value.weather}</p>
        <p> feels = {value.feels}</p>
        </Typography>
      </CardContent>
    </Card>
    )
}

export default box