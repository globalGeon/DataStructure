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
DirectedGraph.prototype.traverseBFS = function (current) {
    var queue = [],
        visited = {};

    queue.push(current);

    while (queue.length) {
        current = queue.shift();
        if (!visited[current]) {
            visited[current] = true;
            console.log(current);
            for (var adjacent in this.edges[current]) {
                queue.push(adjacent);
            }
        }
    }
}
DirectedGraph.prototype.traverseDFS = function (current) {
    var visited = {};
    this._traverseDFS(current, visited);
}
DirectedGraph.prototype._traverseDFS = function (current, visited) {
    visited[current] = true;
    console.log(current);
    for (var adjacent in this.edges[current]) {
        if (!visited[adjacent])
            this._traverseDFS(adjacent, visited);
    }
}

var directedGraph = new DirectedGraph();

directedGraph.addVertex("A");
directedGraph.addVertex("B");
directedGraph.addVertex("C");
directedGraph.addVertex("D");
directedGraph.addVertex("E");
directedGraph.addVertex("F");
/* 
DirectedGraph {
  edges: { '1': {}, '2': {}, '3': {}, '4': {}, '5': {}, '6': {} }
}
 */
directedGraph.addEdge("A","B");
directedGraph.addEdge("A","B");
directedGraph.addEdge("B","C");
directedGraph.addEdge("B","D");
directedGraph.addEdge("C","E");
directedGraph.addEdge("C","F");
/* 
DirectedGraph {
  edges: {
    A: { B: 0 },
    B: { C: 0, D: 0 },
    C: { E: 0, F: 0 },
    D: {},
    E: {},
    F: {}
  }
}
 */
directedGraph.traverseBFS("A"); // A-B-C-D-E-F
directedGraph.traverseDFS("A"); // A-B-C-E-F-D
