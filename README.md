# HAPPE - Hospital App PPE

### About this project
This project's goal is to gather developers far and wide to help create a Full Stack Web App that interfaces with ArcGIS to show a heatmap of hospitals in need of masks, ventilators and other equipment to treat COVID 19. 

## Ultimate Goal

The government is able to use this tool to send aid directly to the hospitals that need it most. There is no good way to keep track of who needs what right now and this is an attempt to help sort that out.

## Current Requirements

1. Be able to verify a person representing hospital in need of aid
    a. Should we limit this to only doctors with a public record?
    b. What is necessary to validate a person like this?
2. Be able to interface with ArcGIS software.
3. Users shall be able to send donations directly to hospitals
    a. How can we verify that the equipment sent is properly sterilized and medical grade?

## Run the app

You first need to have `docker` installed on your machine.
Run: `docker-compose up --build`
The app is accesible at http:localhost:8001.
