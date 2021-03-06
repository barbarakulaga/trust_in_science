
let parseDate = d3.timeParse("%Y-%m-%d");
//let formatDate = d3.timeFormat("%Y-%M");

let formatDecimal = d3.format(",.2f");
let formatDecimal2 = d3.format(",.4f");

const p = Math.max(0, d3.precisionFixed(0.05) - 2);
const percentFormat = d3.format("." + p + "%");

let promises = [
    d3.csv("bubble_chart_complex_data/bubble_chart_complex.csv", (row,i) => {

        row.New_Case_per_100 = formatDecimal(+row.New_Case_per_100);
        row.New_Death_per_100 = formatDecimal2(+row.New_Death_per_100);
        row.Share_Vaccination = +row.Share_Vaccination;
        row.State = row.State;
        return row;

        }),
    d3.csv("bubble_chart_complex_data/legend.csv", (row,i) => {
    //   row.size = +row.size;
        row.size = +row.size;
        row.position = +row.position;

        return row;

    })];


Promise.all(promises)
    .then(function(data) { initMainPage(data) })
    .catch(function(err) { console.log(err) });

// initMainPage
function initMainPage(dataArray) {
    // log data
    console.debug("check out the data", dataArray);

    // init table
    let Bubble_Chart = new BubbleChart("#Bubble_Chart_Div", dataArray[0]);

    // init map
    let Legend_Chart = new Bubble_chart_complex_legend(dataArray[1]);

}



