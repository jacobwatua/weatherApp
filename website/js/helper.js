//This file was created to avoid having a huge code. It contains variables storing data for the web page
const zipCodes = [
  { zip: '10001', city: 'New York' },
  { zip: '90001', city: 'Los Angeles' },
  { zip: '60601', city: 'Chicago' },
  { zip: '94102', city: 'San Francisco' },
  { zip: '77001', city: 'Houston' },
  { zip: '33101', city: 'Miami' },
  { zip: '20001', city: 'Washington, D.C.' },
  { zip: '02108', city: 'Boston' },
  { zip: '75201', city: 'Dallas' },
  { zip: '19101', city: 'Philadelphia' },
  { zip: '98101', city: 'Seattle' },
  { zip: '30301', city: 'Atlanta' },
  { zip: '48201', city: 'Detroit' },
  { zip: '78701', city: 'Austin' },
  { zip: '94103', city: 'San Diego' },
  { zip: '37201', city: 'Nashville' },
  { zip: '10007', city: 'New York' },
  { zip: '90012', city: 'Los Angeles' },
  { zip: '60611', city: 'Chicago' },
  { zip: '94111', city: 'San Francisco' },
  { zip: '77002', city: 'Houston' },
  { zip: '33109', city: 'Miami' },
  { zip: '20002', city: 'Washington, D.C.' },
  { zip: '02109', city: 'Boston' },
  { zip: '75202', city: 'Dallas' },
  { zip: '19102', city: 'Philadelphia' },
  { zip: '98102', city: 'Seattle' },
  { zip: '30302', city: 'Atlanta' },
  { zip: '48202', city: 'Detroit' },
  { zip: '78702', city: 'Austin' },
  { zip: '94104', city: 'San Diego' },
  { zip: '37202', city: 'Nashville' },
  { zip: '10017', city: 'New York' },
  { zip: '90024', city: 'Los Angeles' },
  { zip: '60606', city: 'Chicago' },
  { zip: '94105', city: 'San Francisco' },
  { zip: '77005', city: 'Houston' },
  { zip: '33122', city: 'Miami' },
  { zip: '20005', city: 'Washington, D.C.' },
  { zip: '02111', city: 'Boston' },
  { zip: '75205', city: 'Dallas' },
  { zip: '19107', city: 'Philadelphia' }
];



const places = [
  { city: 'New York', latitude: 40.7128, longitude: -74.0060 },
  { city: 'Los Angeles', latitude: 34.0522, longitude: -118.2437 },
  { city: 'Chicago', latitude: 41.8781, longitude: -87.6298 },
  { city: 'San Francisco', latitude: 37.7749, longitude: -122.4194 },
  { city: 'Houston', latitude: 29.7604, longitude: -95.3698 },
  { city: 'Miami', latitude: 25.7617, longitude: -80.1918 },
  { city: 'Washington, D.C.', latitude: 38.9072, longitude: -77.0369 },
  { city: 'Boston', latitude: 42.3601, longitude: -71.0589 },
  { city: 'Dallas', latitude: 32.7767, longitude: -96.7970 },
  { city: 'Philadelphia', latitude: 39.9526, longitude: -75.1652 },
  { city: 'London', latitude: 51.5074, longitude: -0.1278 },
  { city: 'Paris', latitude: 48.8566, longitude: 2.3522 },
  { city: 'Brussels', latitude: 50.8503, longitude: 4.3517 },
  { city: 'Vienna', latitude: 48.2082, longitude: 16.3738 },
  { city: 'Tokyo', latitude: 35.6895, longitude: 139.6917 },
  { city: 'Rome', latitude: 41.9028, longitude: 12.4964 },
  { city: 'Berlin', latitude: 52.5200, longitude: 13.4050 },
  { city: 'Madrid', latitude: 40.4168, longitude: -3.7038 },
  { city: 'Athens', latitude: 37.9838, longitude: 23.7275 },
  { city: 'Sydney', latitude: -33.8651, longitude: 151.2099 },
  { city: 'Rio de Janeiro', latitude: -22.9068, longitude: -43.1729 },
  { city: 'Cape Town', latitude: -33.9249, longitude: 18.4241 },
  { city: 'Moscow', latitude: 55.7558, longitude: 37.6176 },
  { city: 'Dubai', latitude: 25.2048, longitude: 55.2708 },
  { city: 'Mumbai', latitude: 19.0760, longitude: 72.8777 },
  { city: 'Beijing', latitude: 39.9042, longitude: 116.4074 },
  { city: 'Bangkok', latitude: 13.7563, longitude: 100.5018 },
  { city: 'Cairo', latitude: 30.0444, longitude: 31.2357 },
  { city: 'Cancun', latitude: 21.1619, longitude: -86.8515 },
  { city: 'Buenos Aires', latitude: -34.6037, longitude: -58.3816 },
  { city: 'Lima', latitude: -12.0464, longitude: -77.0428 },
  { city: 'Auckland', latitude: -36.8485, longitude: 174.7633 },
  { city: 'Seoul', latitude: 37.5665, longitude: 126.9780 },
];

/**
 * getRandomItems - Generates random items from a list without repetition.
 *
 * @param {Array} list - The original list from which random items will be generated.
 * @param {number} count - The number of random items to generate.
 * @returns {Array} - An array of randomly selected items without repetition.
 */

function getRandomItems(list, count) {
  const randomItems = [];
  const copiedList = list.slice();
  while (randomItems.length < count && copiedList.length > 0) {
    const randomIndex = Math.floor(Math.random() * copiedList.length);
    const randomItem = copiedList.splice(randomIndex, 1)[0];
    randomItems.push(randomItem);
  }

  return randomItems;
}


/**
 * displayLists - creates an unordered list and a detailed lists and appends it to the  document
 * @void - no parameters
 * @retuns - no return value
 */

function displayLists () {
    const zips = getRandomItems(zipCodes, 25);
    const zipsRoot = document.querySelector('.zips');
    const lats = getRandomItems(places, 10);
    const latsRoot = document.querySelector('.latlons');
    const zipsContainer = document.createElement('ul');
    zips.map(allZips => {
        const {zip, city} = allZips;
        const li = document.createElement('li');
        li.textContent = city + " " + zip;
        zipsContainer.appendChild(li);
    });
    zipsRoot.appendChild(zipsContainer);
    const latsContainer = document.createElement('dl');
    lats.map(lat => {
        const  {city, latitude, longitude } = lat;
        const dt = document.createElement('dt');
        const data1 = document.createElement('dd');
        const data2 = document.createElement('dd');
        dt.textContent = city;
        data1.textContent =  `Latitude : ${latitude}`
        data2.textContent = `Longitude : ${longitude}`
        latsContainer.appendChild(dt);
        latsContainer.appendChild(data1);
        latsContainer.appendChild(data2);
    });
    latsRoot.appendChild(latsContainer);
}


document.addEventListener('DOMContentLoaded', () => {
    displayLists();
});