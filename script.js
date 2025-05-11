fetch('https://ipapi.co/json/')
  .then(response => response.json())
  .then(data => {
    console.log("IP:", data.ip);
    console.log("City:", data.city);
    console.log("Region:", data.region);
    console.log("Country:", data.country_name);
    console.log("Latitude/Longitude:", data.latitude, data.longitude);

    // Optional: send to your Google Sheet / external service
  })
  .catch(error => {
    console.error('Error fetching IP info:', error);
  });
