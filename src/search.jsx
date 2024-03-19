import Button from '@mui/material/Button';
import "./search.css"
import AcUnitIcon from '@mui/icons-material/AcUnit';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

function search ({hello}){

    let [country,setcountry] = useState("")
    let api_key = "insert your key"
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${api_key}&units=metric`

    let [err,seterr] = useState(false)
    function value (event){
        setcountry(event.target.value)
    }
     async function abnormal(event){
        event.preventDefault()
       try{
        seterr(false)
        let Response = await fetch(api)
        let converted = await Response.json().catch(()=>{console.log("you have typed wrong info")})
        let result = {
            name:converted.name,
            temp:converted.main.temp,
            humidity:converted.main.humidity,
            feels:converted.main.feels_like,
            pressure:converted.main.pressure,
            weather:converted.weather[0].description
        }
        console.log(converted)
        setcountry("")
       hello(result)
       }catch(erro){
        console.log(erro)
        seterr(true)
        console.log(err)
       }
    }

      
    return(<div>
        <form onSubmit={abnormal} id='form'>
         <TextField value={country} onChange={value} size="small" id="outlined-basic" label="Outlined" variant="filled" required />
         <Button type='submit' color='secondary'variant='outlined' >search</Button>
     </form>
     <h4 style={{color:"red", letterSpacing:"5px"}}>{err==true? 'incorrect name':""}</h4>
    </div>)
}

export default search;