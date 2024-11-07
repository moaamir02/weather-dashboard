// localStorageUtils.js

// Save last searched city to local storage
export function saveLastSearchedCity(city) {
    localStorage.setItem('lastSearchedCity', city);
}

// Retrieve last searched city from local storage
export function getLastSearchedCity() {
    return localStorage.getItem('lastSearchedCity') || '';
}

// Save temperature unit (Celsius or Fahrenheit)
export function saveTemperatureUnit(unit) {
    localStorage.setItem('temperatureUnit', unit);
}

// Retrieve temperature unit from local storage
export function getTemperatureUnit() {
    return localStorage.getItem('temperatureUnit') || 'Celsius';
}
