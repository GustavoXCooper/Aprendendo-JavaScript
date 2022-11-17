document.querySelector('.busca').addEventListener('submit', async (event) =>{
    event.preventDefault();

    let input = document.querySelector('#searchInput').value;
   
    if (input !== ''){
        clearInfo()
        showWarning('Loading...')
        let result = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=
        ${encodeURI(input)}&units=metric&lang=pt_br&appid=7b8479fb0e7d853b4dc423ef8c142c14`)
        
        let json = await result.json();
    
        console.log(json)
        if (json.cod === 200){
            showInfo({
                name: json.name,
                country: json.sys.country,
                temp: json.main.temp,
                tempIcon: json.weather[0].icon,
                windSpeed: json.wind.speed,
                windAngle: json.wind.deg

            })
        } else {
            clearInfo();
            showWarning(json.message);
        }
    } else {
        clearInfo();
    }
})

function showWarning(msg){
    document.querySelector('.aviso').innerHTML = msg
}
function showInfo(json){
    showWarning('');
    
    document.querySelector('.resultado').style.display = 'block';

    document.querySelector('.titulo').innerHTML = `${json.name}, ${json.country}`
    document.querySelector('.tempInfo').innerHTML = `${json.temp}, <sup>C°</sup>`
    document.querySelector('.ventoInfo').innerHTML = `${json.windSpeed} <span>km/h</span>`

    document.querySelector('.temp img').setAttribute('src', `http://openweathermap.org/img/wn/${json.tempIcon}@2x.png`)

    document.querySelector('.ventoPonto').style.transform = `rotate(${json.windAngle-90}deg)`
}

function clearInfo(){
    showWarning('');
    document.querySelector('.resultado').style.display = 'none';

}