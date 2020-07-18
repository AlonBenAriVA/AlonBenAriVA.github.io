
fetch('cytograph.json').then(response => {
  
  return response.json();
}).then(data => {
  // Work with JSON data here
 var diamond = data.nodes.filter(function(x){return x.data.shape == 'diamond'}).map(node => ({ 'name':node.data.name, 'dollar': node.data.balance, 'OPEID':node.data.id}));

 
 diamond = diamond.sort((a, b) => (a.dollar > b.dollar) ? 1 : -1)
 console.log(diamond);
 var diamond_data = [
   {
     y: diamond.map(function(x){ return x.name}),
     x: diamond.map(function(x) { return x.dollar}),
     type:'bar',
     orientation:'h'
   }
 ];

 Plotly.newPlot('InflowBar', diamond_data)

})