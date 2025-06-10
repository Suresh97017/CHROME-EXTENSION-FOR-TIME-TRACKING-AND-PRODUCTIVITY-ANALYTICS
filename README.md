# CHROME-EXTENSION-FOR-TIME-TRACKING-AND-PRODUCTIVITY-ANALYTICS

COMPANY : CODTECH IT SOLUTIONS

NAME : DAKAMARRI SURESH

INTERN ID : CT04DF2473

DOMAIN : FULL STACK WEB DEVELOPMENT

DURATION : 4 WEEKS

MENTOR : NEELA SANTOSH

DESCRIPTION :

The Time Tracker Chrome Extension is a powerful productivity tool that automatically tracks how much time a user spends on different websites. It helps users understand their browsing behavior by collecting and analyzing usage data. This data is not only shown in real time in the browser but also securely stored in the cloud using MongoDB Atlas, making it accessible for deeper analytics.

Key Features:

Real-Time Tracking: Actively monitors the user’s tab and window activity to calculate time spent per website.

Daily, Weekly, Monthly Reports: Offers filter toggles to show time usage by day, week, or month.

Live Timer Display: Displays time spent (in hours, minutes, seconds) for each site dynamically in the extension popup.

Modern UI: The popup is styled cleanly and includes website favicons for visual clarity.

Cloud Backend with MongoDB Atlas: All data is sent to a Node.js backend and stored in a MongoDB Atlas database for persistence, reporting, and future expansion.

User-Based Reports: Time tracking is tied to user IDs, allowing multi-user support and personalized reporting.

How It Works:

The Chrome Extension uses background scripts and Chrome APIs to detect when the user switches tabs or windows.

It calculates how long a website was active and sends this data (including domain, duration, and timestamp) to the Node.js server.

The backend server uses MongoDB Atlas to store this activity data under a structured schema (e.g., user ID, website domain, time spent).

When the popup is opened, the extension fetches this data using API calls and displays it.

Users can switch between daily, weekly, and monthly summaries using a toggle UI.

 Technology Stack:
 
Frontend (Extension):

HTML, CSS, JavaScript

Chrome APIs (tabs, windows, storage, scripting)

Backend:

Node.js with Express.js

MongoDB Atlas for cloud-based NoSQL database storage

Communication: HTTP fetch requests from the extension to the backend (/log, /report/:userId endpoints)

 Use Cases:
 
Tracking personal browsing habits

Analyzing time spent on productive vs unproductive websites

Helping users stay focused and improve time management

Providing employers or individuals with reports for accountability

OUTPUT:

![Image](https://github.com/user-attachments/assets/4001b5fb-4eda-47f3-b340-3772de7de6f2)
