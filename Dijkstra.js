function WeightedGraph() {
    this.edges = {};
}
function _isEmpty(obj) {
    return Object.keys(obj).length === 0;
}
function _extractMin(queue, distance) {
    var shortestDistance = Infinity,
        shortestVertex = null;

    for (var vertex in queue) {
        if (distance[vertex] <= shortestDistance) {
            shortestDistance = distance[vertex];
            shortestVertex = vertex;
        }
    }
    return shortestVertex;
}
WeightedGraph.prototype.addVertex = function (vertex) {
    this.edges[vertex] = {};
}
WeightedGraph.prototype.addEdge = function (vertex1, vertex2, weight) {
    if (weight === undefined) weight = 0;
    this.edges[vertex1][vertex2] = weight;
    this.edges[vertex2][vertex1] = weight;
}
WeightedGraph.prototype.dijkstra = function(source) {
    var queue = {},
        distance = {};
    
    for (var vertex in this.edges) {
        distance[vertex] = Infinity;
        queue[vertex] = this.edges[vertex];
        
    }
    distance[source] = 0;

    while (!_isEmpty(queue)) {
        var shortest = _extractMin(queue, distance);

        delete queue[shortest];

        for (var adjacent in this.edges[shortest]) {
            var shortestDistance = distance[shortest] + this.edges[shortest][adjacent];
            if ( distance[adjacent] > shortestDistance) {
                distance[adjacent] = shortestDistance;
            }
        }
    }
    return distance;
}

var weightedGraph = new WeightedGraph();

weightedGraph.addVertex("1");
weightedGraph.addVertex("2");
weightedGraph.addVertex("3");
weightedGraph.addVertex("4");
weightedGraph.addVertex("5");
weightedGraph.addVertex("6");
/* 
DirectedGraph {
  edges: { '1': {}, '2': {}, '3': {}, '4': {}, '5': {}, '6': {} }
}
 */
weightedGraph.addEdge('1','2',7);
weightedGraph.addEdge('1','3',9);
weightedGraph.addEdge('1','6',14);
weightedGraph.addEdge('2','4',15);
weightedGraph.addEdge('2','3',10);
weightedGraph.addEdge('3','6',2);
weightedGraph.addEdge('3','4',11);
weightedGraph.addEdge('4','5',6);
weightedGraph.addEdge('6','5',9);
/* 
DirectedGraph {
  edges: {
    '1': { '2': 7, '3': 9, '6': 14 },
    '2': { '3': 10, '4': 15 },
    '3': { '4': 11, '6': 2 },
    '4': { '5': 6 },
    '5': {},
    '6': { '5': 9 }
  }
}
 */


console.log(weightedGraph.dijkstra("1"));
// { '1': 0, '2': 7, '3': 9, '4': 20, '5': 20, '6': 11 }