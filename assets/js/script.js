var inputValue = $('.search');
var searchBtn = $('.searchBtn');
var storedSearches = $('#storedSearches');
var main = $('main');

var searches= [];


function renderSearches() {
  
    storedSearches.html("");
    for (var i = 0; i < searches.length; i++) {
        var search = searches[i];
        

        var button = $(`<button>`);
        button.text(search);
        button.attr('data-index', i);
        button.attr('class', 'list-group-item list-group-item-action');

        storedSearches.append(button);

        button.on('click', function() {
            inputValue.val(searches);
            var citySearch = $(this).text()
            inputValue.val(citySearch);
            fetchWeather();
        })
      
    }
}


//saves searches
function storeSearches() {
    localStorage.setItem('searches', JSON.stringify(searches));
}
searchBtn.on('click', function(event){
  
    event.preventDefault();
    
        var searchText = inputValue.val();
        if (searchText === "") {
            return;
        }
        searches.push(searchText);
      
        fetchWeather();
        storedSearches();
        renderSearches();
        
    
    })

function fetchWeather(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+ inputValue.val() + '&units=imperial&id=524901&appid=c0c8e3bb6abc081507f7c5a91f54d2e0')
        .then(function(respone){
          return respone.json();
        })
        .then(function(data){
                console.log(data);
                var nameValue = data.name;
                $('.name').text(nameValue);
                var latitude = data.coord.lat;
                var longitude = data.coord.lon;

           
 //uses values from first API to fetch another.
 function uviFetch() {
    fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + latitude +'&lon=' + longitude + '&units=imperial&id=524901&appid=0fe3cfd026afb76b1605f15581136ad8')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            //adds data to html
            console.log(data);
            var weatherDesc = data.current.weather[0].main;
            $('.weather').text('Weather: ' + weatherDesc);
            var dateValue = data.current.dt;
            var newDate = new Date(dateValue*1000).toLocaleDateString('en-US');
            $('.name').append(' (' + newDate + ')');
            var weatherIcon = data.current.weather[0].icon;
            $('.name').append('<img class="weatherIcon iconSizing">');
            $('.weatherIcon').attr('src', 'http://openweathermap.org/img/wn/' + weatherIcon + '@2x.png');
            $('.weatherIcon').attr('alt', 'Weather Icon');
            var tempValue = data.current.temp;
            $('.temp').text('Temperature: ' + Math.round(tempValue) + '° F');
            var humidityValue = data.current.humidity;
            $('.humidity').text('Humidity: ' + humidityValue + '%');
            var uvValue = data.current.uvi;
            $('span').text(uvValue);
            var windValue = data.current.wind_speed;
            $('.wind').text('Wind Speed: ' + windValue + 'mph');

             //forecast tomorrow
             var dates = data.daily[1].dt;
             var forecastDates = new Date(dates*1000).toLocaleDateString('en-US');
             $('#dateOne').text(forecastDates);
             var forecastWeatherIcon = data.daily[1].weather[0].icon;
             $('#weatherIconOne').attr('src', 'http://openweathermap.org/img/wn/' + forecastWeatherIcon + '@2x.png');
             var forecastTemp = data.daily[1].temp.day;
             $('#tempOne').text('Temperature: ' + Math.round(forecastTemp) + '° F');
             var forecastHumidity = data.daily[1].humidity;
             $('#humidityOne').text('Humidity: ' + forecastHumidity + '%');


              //forecast day 2
                    var dates = data.daily[2].dt;
                    var forecastDates = new Date(dates*1000).toLocaleDateString('en-US');
                    $('#dateTwo').text(forecastDates);
                    var forecastWeatherIcon = data.daily[2].weather[0].icon;
                    $('#weatherIconTwo').attr('src', 'http://openweathermap.org/img/wn/' + forecastWeatherIcon + '@2x.png');
                    var forecastTemp = data.daily[2].temp.day;
                    $('#tempTwo').text('Temperature: ' + Math.round(forecastTemp) + '° F');
                    var forecastHumidity = data.daily[2].humidity;
                    $('#humidityTwo').text('Humidity: ' + forecastHumidity + '%');

                    //forecast day 3
                    var dates = data.daily[3].dt;
                    var forecastDates = new Date(dates*1000).toLocaleDateString('en-US');
                    $('#dateThree').text(forecastDates);
                    var forecastWeatherIcon = data.daily[3].weather[0].icon;
                    $('#weatherIconThree').attr('src', 'http://openweathermap.org/img/wn/' + forecastWeatherIcon + '@2x.png');
                    var forecastTemp = data.daily[3].temp.day;
                    $('#tempThree').text('Temperature: ' + Math.round(forecastTemp) + '° F');
                    var forecastHumidity = data.daily[3].humidity;
                    $('#humidityThree').text('Humidity: ' + forecastHumidity + '%');

                     //forecast day 4
                     var dates = data.daily[4].dt;
                     var forecastDates = new Date(dates*1000).toLocaleDateString('en-US');
                     $('#dateFour').text(forecastDates);
                     var forecastWeatherIcon = data.daily[4].weather[0].icon;
                     $('#weatherIconFour').attr('src', 'http://openweathermap.org/img/wn/' + forecastWeatherIcon + '@2x.png');
                     var forecastTemp = data.daily[4].temp.day;
                     $('#tempFour').text('Temperature: ' + Math.round(forecastTemp) + '° F');
                     var forecastHumidity = data.daily[4].humidity;
                     $('#humidityFour').text('Humidity: ' + forecastHumidity + '%');

                     //forecast day 5
                    var dates = data.daily[5].dt;
                    var forecastDates = new Date(dates*1000).toLocaleDateString('en-US');
                    $('#dateFive').text(forecastDates);
                    var forecastWeatherIcon = data.daily[5].weather[0].icon;
                    $('#weatherIconFive').attr('src', 'http://openweathermap.org/img/wn/' + forecastWeatherIcon + '@2x.png');
                    var forecastTemp = data.daily[5].temp.day;
                    $('#tempFive').text('Temperature: ' + Math.round(forecastTemp) + '° F');
                    var forecastHumidity = data.daily[5].humidity;
                    $('#humidityFive').text('Humidity: ' + forecastHumidity + '%');
 

            })


