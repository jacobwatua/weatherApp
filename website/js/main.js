/* This API key uses City Zip code to generate data */
const zipBaseUrl = "https://api.openweathermap.org/data/2.5/weather?zip=";
const key = "&appid=c7fb010deb4178e03a4c21d228bea1c9&units=metric";

/* This key uses latitude and longitude to generate data */
const latitudeLonigtudeUrl = "https://api.openweathermap.org/data/2.5/weather?lat=";


function toogleForm () {
    const searchOption = document.querySelector("#search-options");
    const values = ["lat-long-form", "zip-code-form"];
    searchOption.addEventListener('change', function (event) {
        const displayedForm = event.target.value;
        switch (displayedForm) {
            case "lat-long-form" : {
                document.querySelector(`.${values[0]}`).style.display = "block";
                document.querySelector(`.${values[1]}`).style.display = "none"
                break;
            }
            default : {
                document.querySelector(`.${values[1]}`).style.display = "block";
                document.querySelector(`.${values[0]}`).style.display = "none"
                break;
            }
        }
    }, true);
}

const postData = async function (url='', data={}) {
    console.log(data);
    const response = await fetch(url, {
        method : "POST",
        credentials : "same-origin",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(data),
    });
    try {
        const newData = await response.json();
        return newData;
    }
    catch (err) {
        console.log("Error", err);
    }
}





const retrieveData = async function (baseUrl) {
    const response = await fetch(baseUrl);
    try {
        const newData = await response.json()
        return newData;
    }
    catch (err) {
        console.log("Error ", err);
    }
}


const updateUI = function (weatherData) {
  document.getElementById("City").textContent = weatherData.name;
  document.getElementById("country").innerHTML = weatherData.sys.country;
  document.getElementById("description").innerHTML = weatherData.weather[0].description;
  document.getElementById("min-temp").innerHTML = weatherData.main.temp_min;
  document.getElementById("max-temp").innerHTML = weatherData.main.temp_max;
  document.getElementById("feels-like").innerHTML = weatherData.main.feels_like;
  document.getElementById("humidity").innerHTML = weatherData.main.humidity;
  document.getElementById("visibility").innerHTML = weatherData.visibility;
  document.getElementById("cloudiness").innerHTML = weatherData.clouds.all;
  document.getElementById("wind-speed").innerHTML = weatherData.wind.speed;
  document.getElementById("sunrise").innerHTML = new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString();
  document.getElementById("sunset").innerHTML = new Date(weatherData.sys.sunset * 1000).toLocaleTimeString();
  document.querySelector(".generated-results").style.display = "block";
};




function useZipCode () {
    const formData = getFormData('zip-code-form');
    retrieveData(zipBaseUrl+formData[1]+key).then(
    function (data) {
        postData('/getForecast', data).then(
            retrieveData('/viewForecast').then(
                function (data) {
                    if (data.cod == 200) {
                        updateUI(data);
                    }
                    else{
                        displayErrorMessage();
                    }
                }
            )
        );
    }
    );
}




function useLatLon () {
    const formData = getFormData('lat-long-form');
    retrieveData(latitudeLonigtudeUrl+formData[0]+`&lon=${formData[1]}`+key).then(
        function (data) {
            postData('/getForecast', data).then(
                retrieveData('/viewForecast').then(
                    function (data) {
                        if (data.cod == 200) {
                            updateUI(data);
                        }
                        else{
                            displayErrorMessage();
                        }
                    }
                )
            );
        }
    );
}




function displayErrorMessage () {
    const errorMessage = document.getElementsByClassName("error-message")[0];
    errorMessage.style.display = "block";
    setTimeout (() => {
        errorMessage.style.display = "none";
    }, 2000);
}


function toggleResults () {
    document.querySelector("#close--icon").addEventListener('click', function () {
        document.querySelector('.generated-results').style.display = "none";
    });
}



function getFormData (formID) {
    const target = document.querySelector(`#${formID}`);
    const inputs = target.getElementsByTagName('input');
    return [inputs[0].value, inputs[1].value];
}



document.addEventListener('DOMContentLoaded', function () {
    toogleForm();
    toggleResults();
    document.getElementsByTagName('button')[0].addEventListener('click', (event)=> {
        event.preventDefault();
        useZipCode();
    });

    document.getElementsByTagName('button')[1].addEventListener('click', (event)=> {
        event.preventDefault();
        useLatLon();
    });
})


