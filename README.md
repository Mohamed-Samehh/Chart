# Chart (Dynamic Data Chart)

This project is an Angular application that uses **DevExtreme** to create an interactive line chart displaying dynamic data. The chart dynamically fetches data from a local JSON file and visually represents the information over time.

## Live Demo

🚀 **Explore the live version of the Dynamic Data Chart on Netlify:** [Dynamic Data Chart on Netlify](https://data-chart.netlify.app/)

Netlify provides a convenient way to deploy Angular applications, ensuring that the live version is automatically updated whenever changes are pushed to the repository. This deployment allows users to interact with the chart and explore its features online.

## Table of Contents

- [Live Demo](#live-demo)
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)

## Overview

This project demonstrates how to use DevExtreme components within an Angular application. It specifically showcases a line chart that plots dynamic data over time, dynamically loading data from a JSON file through an Angular service.

## Features

- **Interactive Chart**: The chart is fully interactive, allowing users to hover over data points for detailed information.
- **Dynamic Data Rendering**: Data is fetched dynamically from a JSON file and rendered on the chart, demonstrating how to integrate real-time or static data into an Angular component.
- **Customizable Chart Appearance**: The chart uses custom colors and formatting options to visually enhance the data representation.
- **Responsive Design**: The chart adjusts to different screen sizes, providing a smooth user experience on both desktop and mobile devices.

## Technologies Used

- **Angular 10.2.4**: A powerful front-end framework for building single-page applications.
- **Node.js 12.22.12**: The runtime environment required for running Angular CLI and managing dependencies.
- **DevExtreme 19.2.7**: A versatile UI component library that provides a range of advanced data visualization tools, including charts.
- **RxJS**: A library for reactive programming using observables, used to handle asynchronous data streams in Angular.
- **TypeScript**: A strongly typed programming language that builds on JavaScript, used throughout the application.

## Installation

Follow these steps to install and run the Dynamic Data Chart project:

1. **Clone the Repository**:
    - First, clone the repository from GitHub:
    ```bash
    git clone https://github.com/Mohamed-Samehh/Chart
    cd Chart
    ```

2. **Install Dependencies**:
    - Install the required dependencies using npm:
    ```bash
    npm install
    ```

3. **Run the Application**:
    - After installing the dependencies, start the Angular development server:
    ```bash
    ng serve
    ```

4. **Access the Application**:
    - Open your browser and navigate to `http://localhost:4200/` to view the application.

## Usage

After launching the application:

- The chart will load automatically with data from the `chart.json` file located in the `assets` folder.
- The line chart visualizes the dynamic data over time.
- Hover over any data point on the chart to view detailed information about that point.

### Interactive Chart Features:

- **Tooltips**: Hover over any point on the chart to view the data value for that specific time period.
- **Legend**: The chart features a legend, indicating the data metric being visualized.

## Deployment

The project can be ready for deployment using the following steps:

1. **Build the Project**:
   ```bash
   ng build --prod --output-path docs --base-href /Chart/
