function registerEvents() {
  document.getElementById("loadTodos").addEventListener("click", function () {
    AirQuality();
  })
  document.getElementById("loadUser").addEventListener("click", function () {
    loadFacts();
  })
}

function loadTodos() {
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let html = "";
      data.forEach(todo => {
        html += "<li>" + todo.title + "</li>"

      });
      document.getElementById("list").innerHTML = html;
      console.log(html);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function loadUsers() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let html = "";
      data.forEach(user => {
        html += "<li>" + user.name + "</li>"

      });
      document.getElementById("list").innerHTML = html;
      console.log(html);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function loadFacts() {
  $.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/facts?limit=' + 3,
    headers: { 'X-Api-Key': 'yxCJkMFfDk/dCEXp6vpd3Q==bkrmrcc9JG72n8OA' },
    contentType: 'application/json',
    success: function (result) {

      let html = "";
      result.forEach(fact => {
        html += "<li>" + fact.fact + "</li>"

      });


      document.getElementById("list").innerHTML = html;
      console.log(result);
    },
    error: function ajaxError(jqXHR) {
      console.error('Error: ', jqXHR.responseText);
    }
  });
}
function AirQuality() {
  var city = document.getElementById("city_input").value;
  $.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/airquality?city=' + city,
    headers: { 'X-Api-Key': 'yxCJkMFfDk/dCEXp6vpd3Q==bkrmrcc9JG72n8OA' },
    contentType: 'application/json',
    success: function (result) {

      let html = "";
      
      html += "<li>" + "AQI by CO " + result.CO.aqi + "</li>"
      html += "<li>" + "AQI by NO2 " + result.NO2.aqi + "</li>"
      html += "<li>" + "AQI by O3 " + result.O3.aqi + "</li>"
      html += "<li>" + "AQI by SO2 " + result.SO2.aqi + "</li>"
      var airqualityChart = new Image();
      airqualityChart.src = "air_quality_chart.png";
      document.body.appendChild(airqualityChart);
      console.log(result);

      document.getElementById("list").innerHTML = html;
      console.log(result);
    },
    error: function ajaxError(jqXHR) {
      console.error('Error: ', jqXHR.responseText);
    }
  });
}




registerEvents();