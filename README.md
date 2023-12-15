# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

# SpectrumGui
Spectrum Flight Visualization

Assignment:
Assignment Scenario
“Spectrum”, the launch vehicle built by Isar Aerospace just performed a successful lift-off from
the launch pad and is flying towards Earth orbit. A web service provides live insights into
Spectrum’s sensor system during its maiden flight. Your task is to visualize these sensor values
in a web interface so that the crew in ground control can check if everything is okay.

Assignment A
Please consider the following API endpoint SpectrumStatus in the provided server.
https://webfrontendassignment-isaraerospace.azurewebsites.net/api/SpectrumStatus
Upon Http GET request, this endpoint returns important sensor data, specifically the current
velocity, altitude, temperature, a status message, a boolean indicating whether the vehicle is
ascending or descending, and a Boolean indicating if the rocket requires any action from the
user.

Task: Build a web-based GUI (preferably using React) to appropriately visualize the sensor
values retrieved from this endpoint. It is entirely up to you, which specific type(s) of visualization
you chose (line charts, bar charts, gauges, text boxes etc.). Just imagine that a crew member
at ground control needs to be able to easily understand the data. The UI should be updated
with new data upon request from the user, e.g. through a simple click on a button.

Assignment B
Please consider the following API endpoint SpectrumWS in the provided server.
wss://webfrontendassignment-isaraerospace.azurewebsites.net/api/SpectrumWS
Upon the right Http Get request, this endpoint will “upgrade” the communication protocol to
web socket (wss) and start live streaming the same type of sensor data.

Task: Use the live data pushed by the server to continuously update the user interface. You
may reuse the GUI you developed in assignment A. However, sometimes the launch vehicle
randomly requires action from the crew ({“isActionRequired”: true}). Whenever this happens
do the following:
- Be sure to inform the user of this critical status change in a way that can’t be overseen.
- Give the user the option to act in Spectrum using the third endpoint below
(ActOnSpectrum).
https://webfrontendassignment-isaraerospace.azurewebsites.net/api/ActOnSpectrum

Assignment C
Please comment on potential improvements of the API structure, deviations from common
standards or performance enhancements.

General notes:
- The backend provides new data every ~500ms.
- The portrayed launch vehicle trajectory is just a simple mockup and not at all realistic.
- As this is Spectrum’s maiden flight you can expect regular situations where the crew
will need to act on it.
- If you experience failing requests in the SpectrumWS endpoint, please reconnect.


**Below you can see my improvements and comments.**

# **Monitoring and Logging:**

Monitor for any unexpected changes in altitude or velocity and log them.

 ## **Timestamps for Changes:**


  Include timestamps for each critical status change to provide a clear timeline of events.

  
## **Visual Milestone Tracker:**


  Detailed Milestone Information

  
  logging key milestones

  
  Integrate a visual tracker for mission milestones, updating in real-time.


  Highlight completed milestones and upcoming targets.

  
  Allow users to easily share or document completed milestones.

  
## **Health Assessment Dashboard:**


  Regularly assess the overall health and status of the rocket systems. (Scoring)

  
  Create a health assessment dashboard displaying an overview of all critical systems.

# **Action:**

Show a confirmation modal.

## **Confirmation Modal Enhancements:**


  Add detailed information about the nature of the critical status requiring action.

  
  Include a brief description of the issue or system that needs attention.

  
  Include potential consequences of not taking action.

  
  Allow users to input comments or notes when confirming or canceling an action.

## **Logging and Reporting:**

Provide a separate section or log where users can review past critical events and actions.

 ## **Comprehensive Logging:**


  Log not only critical status changes but also regular updates for thorough analysis.

  
  Include details such as system health, sensor readings, and user actions in the logs.

## **Search and Filter Functionality:**


  Implement search and filter options in the log section for easy retrieval of specific events.

  
  Allow users to filter logs by date, type of event, or severity.


