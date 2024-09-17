## Requirements

* ReactJS
* Any CSS framework you like

## Steps

Before you start working, create a fork of this repo in your own Github account.

You will be submitting pull requests from your fork. Your PRs will not actually be merged and when the interview is complete, the PRs will be closed.

You may delete your fork after the interview, if you like.

### Part 1
Let's create a single page report:

* Styling doesn't need to be perfect - but should look presentable and easily readable
* Using a table view is fine: each row of the report uses a **\<tr\>** element
* Use the `data.json` file as your data source for the report.
    * Bonus (Optional): Use [axios-mock-adapter](https://www.npmjs.com/package/axios-mock-adapter) library to mock API calls to the `/reports/clients` endpoint and have it return the contents of `data.json`
* In report show:
    * Client name
    * Total customers
    * Total sales
    * Total returns
* Alternate background color on rows, for better visibilty
* Create a PR to merge your changes

### Part 2
Let's update the report so that you can click into a more detailed view.

* Make client name "clickable" that will take you to a detailed view in a new page/route

### Part 3
Create a new view that retrieves the detailed data from a specific client.

* Use the `data.json` file as your data source for the detailed report to return a random item/element from the data set.
    * Bonus (Optional): Find the matching client ID record in the `data.json` data set 
    * Bonus (Optional): Use [axios-mock-adapter](https://www.npmjs.com/package/axios-mock-adapter) library to mock API calls to the `/reports/clients/{id}` endpoint and have it return the matching client record from within the `data.json` data set
* Show MTD (month to date) numbers for:
    * Customers
    * Sales
    * Returns
* Show YTD (year to date) numbers for:
    * Customers
    * Sales
    * Returns
* Using [Chart.js](https://www.chartjs.org/docs/latest/samples/line/line.html) library , create line graphs for:
    * Customer history
    * Sales history
    * Returns history
* Create a PR to merge your changes