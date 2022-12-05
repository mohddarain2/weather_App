const API_KEY =`2f1529d5c73a063ca5bb0e2b51d3251f`
//const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
//const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

const form =document.querySelector("form")
const search =document.querySelector("#search")
const weather =document.querySelector("#weather")

form.addEventListener("submit",(event)=>{
    getWeather(search.value)
    event.preventDefault();
})
 
const getWeather= async(city)=>{
    weather.innerHTML='<h1>Loading...</h1>'
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url)
    const data = await response.json()
    return  showWeather(data)
}

const showWeather = (data)=>{
    if(data.cod=="404"){
        weather.innerHTML='<h1>City not found</h1>'
        return;
    }
    weather.innerHTML =` <div>
                            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
                        </div>
                        <div>
                            <h2>${data.main.temp}℃</h2>
                            <h3>${data.weather[0].main}</h3>
                        </div>`
}



