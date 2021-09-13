
// The following example creates five accessible and
// focusable markers.
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat: 53.799999, lng: -1.750000 },
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
    [{ lat: 53.353889465332, lng: -6.2433300018311 }, "Dublin"],
    [{ lat: 59.3247 , lng: 18.056 }, " Sweden"],
    [{ lat: 38.722221374512, lng: -9.1927795410156 }, "Lisbon"],
    [{ lat: 19.0144, lng: 72.8479 }, "india"],
    [{ lat: 40.808601379395, lng: 111.62370300293 }, "china"],    
    [{ lat: 5.3600001335144, lng: -4.0082998275757 }, "cote d'ivoire"],
    [{ lat: 35.5711, lng: -5.3724 }, "morroco"],
    [{ lat: -36.7258987426766, lng: 174.69830322266 }, "new zealand"],
    [{ lat: 48.8534, lng: 2.3488 }, "france"],   
    [{ lat: 10.779999732971, lng: 106.6549987793 }, "Ho chi minh City"],
    [{ lat: 22.248310089111, lng: 114.15239715576 }, "hong kong"],
    [{ lat: 1.2879500389099, lng: 103.85178375244 }, "singapore"],
  ];
  // Create an info window to share between markers.
  const infoWindow = new google.maps.InfoWindow();
  // Create the markers.
  tourStops.forEach(([position, title], i) => {
    const marker = new google.maps.Marker({
      position,
      map,
      title: `${i + 1}. ${title}`,
      label: `${i + 1}`,
      optimized: false,
    });
    // Add a click listener for each marker, and set up the info window.
    marker.addListener("click", () => {
      infoWindow.close();
      infoWindow.setContent(marker.getTitle());
      infoWindow.open(marker.getMap(), marker);
    });
  });
}
