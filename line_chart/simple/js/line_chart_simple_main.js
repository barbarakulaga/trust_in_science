
let parseDate = d3.timeParse("%Y-%m-%d");

let formatDate = d3.timeFormat("%V");

let bisectDate = d3.bisector(d=>d.date).left;

const Week_format = d3.timeFormat("%V");

number_format = d3.format(".2d")

d3.csv("line_chart_simple_data/line_chart_simple.csv", (row,i) => {

    row.Age_adjusted_unvax_IR = number_format(+row.Age_adjusted_unvax_IR);
    row.Age_adjusted_vax_IR = number_format(+row.Age_adjusted_vax_IR);
    row.Max_Week_Date = parseDate(row.Max_Week_Date);
    //row.Max_Week_Date = formatDate(row.Max_Week_Date);
    row.Week_no = +row.Week_no;
    row.Week = formatDate(+row.Max_Week_Date)
    row.date = row.Max_Week_Date;

    row.date2 = Week_format(row.Max_Week_Date);

    return row;

})


    .then(data => {
     console.log(new LineChart(data))
        //new LineChart(data)
    });