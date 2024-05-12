# React Scatter Chart App

This project is a simple React application that displays a scatter chart using the `react-chartjs-2` and `chart.js` libraries. The data for the chart is fetched from external APIs and plotted as a scatter chart, showcasing the relationship between two datasets corresponding to the x-axis and y-axis.

## Live Demo

You can view a live version of the application deployed on Vercel at [chart-app-pink.vercel.app](https://chart-app-pink.vercel.app/).

## Features

- Fetches data dynamically from external APIs.
- Plots the first 50 data points from each dataset on a scatter chart.
- Utilizes `react-chartjs-2` and `chart.js` for rendering the chart.

## Data Sources

The application fetches data for the axes from the following URLs:
- Y-axis data: [Retool Y-axis API](https://retoolapi.dev/o5zMs5/data)
- X-axis data: [Retool X-axis API](https://retoolapi.dev/gDa8uC/data)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You will need `node` and `npm` installed on your computer to run this project.

### Installing

Clone the repository to your local machine:

```bash
git clone (https://github.com/RishabhSikka3/chart-app.git)
cd your-repo-name

### Install the dependencies
npm install

### Run the application:
npm start


