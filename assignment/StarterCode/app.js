function init(){
    d3.json("samples.json").then((x) => {
        var sampleNames = x.names
        var sampleId = d3.select("#selDataset")
        sampleNames.forEach((y) => {
            sampleId.append("option")
            .text(y)
            .property("value", y)
        })
        var firstId = sampleNames[0]
            demoTable(firstId)
        // charTable(firstId)
    })
}
init()

function demoTable(sampleId){
    d3.json("samples.json").then((x) => {
        var metaData = x.metadata
        var filterData = metaData.filter(x => x.id == sampleId)
        // console.log(filterData)
        var fiterData1 = filterData[0]
        // console.log(filterData1)
        var sampleData = d3.select("#sample-metadata")
        sampleData.html("")
        Object.entries(filterData1).forEach(function([key, value]){
            var row = sampleData.append("tr")
            row.append("td").html(`<strong><font size = '1'>${key}</font></strong>:`);
            // console.log(key,value);
            row.append('td').html(`<font size ='1'>${value}</font>`);
        })
    })    
}
function charTable(sampleId){
    d3.json("samples.json").then((x) => {
        var sample = x.samples
        var filterData = sample.filter(x => x.id == sampleId)
        var filterData1 = filterData[0]

        var otu_ids = filterData1.otu_ids
        var otu_labels = filterData1.otu_labels
        var sample_values = filterData1.sample_values



}




function optionChanged(Sample1) {
    // Fetch new data each time a new sample is selected "refer eg03 from day 3"
    demoTable(Sample1);
    charTable(Sample1);
  }