## Requirements
* ReactJS
* Any CSS framework you like

## Steps

Let's create a single page report:

* Doesn't need to be fancy - you can use default styling from any CSS framework you like.
* Table view is fine.
* Make an "API call" to the `GET#/reports/clients` endpoint to retrieve data
    * Just use the mock data provided in `data.json` file.
* In report show:
    * Client name
    * Total customers
    * Total sales
    * Total returns
* Alternate coloring on rows, for better visibilty

* Update the report to:
	* Make client name "clickable" that will take you to a detailed view

* Create a new view that retrieves the detailed data from a specific client:
	* Make an "API call" to `GET#/reports/clients/{client ID}`
		* Just use a single random item from the mock data in `data.json`
        * Bonus: match the client ID in `data.json`
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