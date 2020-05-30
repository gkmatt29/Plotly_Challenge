
// function gaugeChart(name){

//   d3.json("./samples.json").then((z) => {
//     var sample = z.samples
//     var filterData = sample.filter(z => z.id == name)
//     var filterData1 = filterData[0]

//     var wfreq = filterData1.wfreq
//     // var sample_values = filterData1.sample_values


//     var trace3 = [
//       {
//         domain: { x: [0, 1], y: [0, 1] },
//         value: filterData1.wfreq,
//         title: { text: "Belly Button Washing Frequency" },
//         type: "indicator",
//         mode: "gauge",
//         gauge: {
//           axis: { range: [0, 10] },
//           steps: [
//             { range: [0, 5], color: "lightgray" },
//             { range: [5, 10], color: "green" }
//           ],
//         }
//       }
//     ];
      
//       var data = [trace3];
      
//       var layout = { width: 600, height: 450, margin: { t: 0, b: 0 } };
      
//       Plotly.newPlot("gauge", data, layout);
//   })
// }


function bubbleChart(name){

  d3.json("./samples.json").then((y) => {
      var sample = y.samples
      var filterData = sample.filter(y => y.id == name)
      var filterData1 = filterData[0]

      var otu_ids = filterData1.otu_ids
      var sample_values = filterData1.sample_values
      var otu_labels = filterData1.otu_labels

      // var otu_ids = otu_ids.map(l => "OTU "+ l)
      
      console.log(sample_values)
      var trace2 = {
        x: otu_ids,
        y: sample_values,
        text: otu_labels,
        mode: 'markers',
        marker: {    
          color: otu_ids,
          size: sample_values
        }
      };
      
      var data = [trace2];
      
      var layout = {
        title: ""
      };
      
      Plotly.newPlot("bubble", data, layout);
  })
}

function barChart(name){

  d3.json("./samples.json").then((x) => {
      var sample = x.samples
      var filterData = sample.filter(x => x.id == name)
      var filterData1 = filterData[0]

      var otu_ids = filterData1.otu_ids
      var otu_labels = filterData1.otu_labels
      var sample_values = filterData1.sample_values.slice(0, 10)

      var otu_ids = otu_ids.map(l => "OTU "+ l)
      
      console.log(sample_values)
      
      var trace1 = {
        x: sample_values,
        y: otu_ids,
        type: "bar",
        orientation: "h"
      };
      
      var data = [trace1];
      
      var layout = {
        title: ""
      };
      
      Plotly.newPlot("bar", data, layout);
  })
}




function loadCharts(){
  barChart(940)
  updateName(940)
  bubbleChart(940)
  gaugeChart(940)
}

function optionChanged(Sample1) {
  // Fetch new data each time a new sample is selected "refer eg03 from day 3"
    barChart(Sample1);
    updateName(Sample1)
    bubbleChart(Sample1)
    gaugeChart(Sample1);
}


function updateName(sampleId){
    d3.json("./samples.json").then((x) => {
        var metaData = x.metadata
        var filterData = metaData.filter(x => x.id == sampleId)
        // console.log(filterData)
        var person = filterData[0] 
        console.log("filterData", filterData)
        var personDiv = document.getElementById("sample-metadata")
        personDiv.innerHTML = `<div> <p> Id: ${person.id} </p>
        <p> Ethnicity: ${person.ethnicity} </p>
        <p> Gender: ${person.gender} </p>
        <p> Age: ${person.age} </p>
        <p> Location: ${person.location} </p>
        <p> Wfreq: ${person.wfreq} </p>
        </div>`})
    }       
        

        
