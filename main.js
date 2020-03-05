window.onload = function() {
  weatherBallon( 7522434 );
}

function weatherBallon( cityID ) {
  var key = '77f97b598769bf8861004c74e30ebbba';
  fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key)  
  .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(data) {
    console.log(data);
    drawWeather(data);
  })
  .catch(function() {
    // catch any errors
  });
}

function drawWeather( d ) {
	var celcius = Math.round(parseFloat(d.main.temp)-273.15);
	
	document.getElementById('temp').innerHTML = celcius + '&deg;';
    console.log(temp);

}

$('#navbar ul, .khk').on('click', function(event){
    if(this.hash !== ''){
        event.preventDefault();
        const hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top - 100
        }, 
    800);
    }
});