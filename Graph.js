function DirectedGraph() {
    this.edges = {};
}
DirectedGraph.prototype.addVertex = function (vertex) {
    this.edges[vertex] = {};
}
DirectedGraph.prototype.addEdge = function (departure, destination, weight) {
    if (weight === undefined) weight = 0;
    this.edges[departure][destination] = weight;
}
DirectedGraph.prototype.removeEdge = function (departure, destination) {
    if (this.edges[departure] && this.edges[departure][destination] != undefined) {
        delete this.edges[departure][destination];
    }
}
DirectedGraph.prototype.removeVertex = function (departure) {
    for (var adjacent in this.edges[departure]) {
        this.removeEdge(departure, adjacent);
    }
    delete this.edges[departure];
}

var directedGraph = new DirectedGraph();

directedGraph.addVertex(1);
directedGraph.addVertex(2);
directedGraph.addVertex(3);
/* 
DirectedGraph { edges: { '1': {}, '2': {}, '3': {} } } 
*/

directedGraph.addEdge(1, 2, 100);
directedGraph.addEdge(2, 3, 200);
directedGraph.addEdge(3, 2, 300);
/*
DirectedGraph {
    edges: { '1': { '2': 100 }, '2': { '3': 200 }, '3': { '2': 300 } }
} 
*/

directedGraph.removeEdge(2, 3);
/* DirectedGraph { 
    edges: { '1': { '2': 100 }, '2': {}, '3': { '2': 300 } } 
} */

directedGraph.removeVertex(3);
/*  DirectedGraph { 
     edges: { '1': { '2': 100 }, '2': {} }
 } */



function UndirectedGraph() {
    this.edges = {};
}
UndirectedGraph.prototype.addVertex = function (vertex) {
    this.edges[vertex] = {};
}
UndirectedGraph.prototype.addEdge = function (vertex1, vertex2, weight) {
    if (weight === undefined) weight = 0;
    this.edges[vertex1][vertex2] = weight;
    this.edges[vertex2][vertex1] = weight;
}
UndirectedGraph.prototype.removeEdge = function (vertex1, vertex2) {
    if (this.edges[vertex1] && this.edges[vertex1][vertex2] !== undefined) {
        delete this.edges[vertex1][vertex2];
    }
    if (this.edges[vertex2] && this.edges[vertex2][vertex1] !== undefined) {
        delete this.edges[vertex2][vertex1];
    }
}
UndirectedGraph.prototype.removeVertex = function (vertex) {
    for (var adjacent in this.edges[vertex]) {
        this.removeEdge(vertex, adjavent);
    }
    delete this.edges[vertex];
}

var UndirectedGraph = new UndirectedGraph();

UndirectedGraph.addVertex("A");
UndirectedGraph.addVertex("B");
UndirectedGraph.addVertex("C");
UndirectedGraph.addVertex("D");
/* 
UndirectedGraph {
  edges: { A: {}, B: {}, C: {}, D: {} } 
} */
console.log(UndirectedGraph);
UndirectedGraph.addEdge("A", "B", 102);
UndirectedGraph.addEdge("A", "C", 103);
UndirectedGraph.addEdge("A", "D", 104);
UndirectedGraph.addEdge("B", "C", 203);
UndirectedGraph.addEdge("B", "D", 204);
/*
UndirectedGraph {
  edges: {
    A: { B: 102, C: 103, D: 104 },
    B: { A: 102, C: 203, D: 204 },
    C: { A: 103, B: 203 },
    D: { A: 104, B: 204 }
  }
}
 */
