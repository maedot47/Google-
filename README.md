## OLOL MAP

This table organizes and tracks the different tasks and components of the project. 
## Tasks/Components Overview

This table organizes and tracks the different tasks and components of the project.

| Task Component            | Description                                                                 | Notes                                                                 |
|---------------------------|-----------------------------------------------------------------------------|-----------------------------------------------------------------------|
| **Maedot Map Integration** | Integrate Maedot map into the application for geographical mapping.         | Need to obtain API key for Maedot map.                               |
| **Maedot API (Embedded)**  | Embed Maedot API into the platform and initialize components.               | Set up map rendering and data fetching.                               |
| **Maedot API (Start Work)**| Initialize the Maedot map and trigger map-related activities when starting. | Define the trigger mechanism.                                        |
| **Evangeline API Setup**   | Obtain and configure API key for Evangeline API.                            | API key successfully configured.                                      |
| **Evangeline Search**      | Implement search functionality for Maedot/Evangeline integration.           | Search logic needs to be finalized.                                   |
| **School Coordinates**     | Implement form to input coordinates of the school.                         | Need to implement user input for coordinates.                         |
| **School Image Capture**   | Allow users to take and upload images around the school.                    | Integrate image capture functionality.                                |
| **Evangeline Write-Up**    | Create detailed documentation for the Evangeline API.                      

## Key Features
Location Data: Each location (like "OLOL" or "Main Entrance") has associated latitude/longitude coordinates and an array of image URLs.
-Image Navigation: When a location is selected, the images for that location are shown, and users can cycle through them using the navigation buttons.
-Split Screen Layout: If a location is selected, the app switches to a split-screen layout where the map is on one side and the images are on the other.
-Full Map View: When no location is selected, the app shows a default view of the map with all markers visible.
## Components:
App.js: The main component that handles the app's logic, including:

Managing the state for map visibility (showMap), selected location (selectedLocation), and current image index (currentImageIndex).
Defining a list of locations with associated coordinates and images.
Rendering a map with markers representing the locations and handling user interactions (clicking on a marker to show images).
Managing the image carousel (previous/next buttons).
APIProvider & Map: These components are used to integrate the Google Maps API into the app. The APIProvider component provides the API key, and the Map component renders the map.

Marker & Pin: Markers are used to mark the points of interest on the map. When clicked, each marker triggers a function to display images associated with the selected location.


Description:
Our website is like a regular Google Map, with postal addresses, icons, and categories, but we’ve added some awesome features to make it way more useful. On our map, you can actually click on different parts of the school building to explore what’s inside. Instead of just seeing a basic layout, you can find specific areas, like classrooms, hallways, or other important spots in the school.

Who’s it for and why?
This is perfect for new students and staff at Our Lady of Lourdes who might feel shy or awkward about asking for directions. It’s like having a personal tour guide without having to talk to anyone. For example, if you’re trying to find your way around, you can click on a hallway to see which room numbers are there. It’s super handy if you’re trying to get to class quickly or figure out where your next room is.

Plus, it’s not just for new people! Even if you’ve been here a while, it’s a great tool to help you learn more about the building and save time. No more wandering around wondering where things are—just click, explore, and go.



