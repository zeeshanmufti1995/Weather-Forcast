var inputValue = $('.search');
var searchBtn = $('.searchBtn');
var storedSearches = $('#storedSearches');
var main = $('main');

var searches= [];


function renderSearches() {
  
    storedSearches.html("");
    for (var i = 0; i < searches.length; i++) {
        var search = searches[i];
        

        var button = $('<button>');
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


function fetchWeather(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+ inputValue.val() + '&units=imperial&id=524901&appid=c0c8e3bb6abc081507f7c5a91f54d2e0')
        .then(function(respone){
            respone.json().then(function(data){
                console.log(data);
                var nameValue = data.name;
                $('.name').text(nameValue);

           

            })
     

        })

 
}

searchBtn.on('click', function(){
  
    fetchWeather();
    renderSearches();
    

})