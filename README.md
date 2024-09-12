## Requirements
* ReactJS
* Any CSS framework you like

## Steps

Before you start working, create a fork of this repo in your own Github account.

You will be submitting pull requests from your fork. Your PRs will not actually be merged and when the interview is complete, the PRs will be closed.

You may delete your fork after the interview, if you like.

### Part 1
Let's create a single page report:

* Doesn't need to be fancy - you can use default styling from any CSS framework you like.
* Table view is fine.
* Make an "API call" to the `GET#/reports/clients` endpoint to retrieve data
    * Just use the mock data provided in `data.json` file.
    * Bonus: Use `axios-mock-adapter` library to make API calls to: `https://api.example.com/reports/clients` and have it return the contents of `data.json`
* In report show:
    * Client name
    * Total customers
    * Total sales
    * Total returns
* Alternate background color on rows, for better visibilty
* Create a PR to merge your changes

### Part 2
Let's update the report so that you can click into a more detailed view.

* Make client name "clickable" that will take you to a detailed view

### Part 3
Create a new view that retrieves the detailed data from a specific client.

* Make an "API call" to `GET#/reports/clients/{client ID}`
    * Just use a single random item from the mock data in `data.json`
    * Bonus: Use `axios-mock-adapter` library to make API calls to: `https://api.example.com/reports/clients/{id}` and have it return the matching client record from `data.json`
* Show MTD (month to date) numbers for:
    * Customers
    * Sales
    * Returns
* Show YTD (year to date) numbers for:
    * Customers
    * Sales
    * Returns
* Using Chart.js library (https://www.chartjs.org/docs/latest/samples/line/line.html), create line graphs for:
    * Customer history
    * Sales history
    * Returns history
* Create a PR to merge your changes