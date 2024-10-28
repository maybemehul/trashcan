// Function to initialize the map
function initMap() {
    // Center the map on Potheri, Chennai
    const potheri = { lat: 12.9175, lng: 80.0422 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: potheri,
    });

    // Fetch bin data from the backend
    fetch('/bins')
        .then(response => response.json())
        .then(bins => {
            bins.forEach(bin => {
                // Determine the color based on the fill level
                let color = 'green'; // Default color
                if (bin.currentFill > 75) {
                    color = 'red'; // Full bins
                }

                // Create a marker for each bin
                const marker = new google.maps.Marker({
                    position: { lat: bin.latitude, lng: bin.longitude },
                    map: map,
                    title: bin.location,
                    icon: {
                        path: google.maps.SymbolPath.CIRCLE,
                        scale: 10,
                        fillColor: color,
                        fillOpacity: 1,
                        strokeWeight: 1,
                        strokeColor: 'black'
                    }
                });

                // Add an info window to show bin details
                const infoWindow = new google.maps.InfoWindow({
                    content: `<h3>${bin.location}</h3><p>Status: ${bin.status}</p><p>Current Fill: ${bin.currentFill}%</p>`
                });

                // Show info window on marker click
                marker.addListener('click', () => {
                    infoWindow.open(map, marker);
                });
            });
        })
        .catch(error => console.error('Error fetching bin data:', error));
}

// Initialize the map when the window loads
window.onload = initMap;
