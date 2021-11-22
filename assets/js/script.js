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

            })
            

