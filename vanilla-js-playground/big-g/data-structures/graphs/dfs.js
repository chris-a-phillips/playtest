class Graph {
	constructor() {
		this.adjacencyList = {};
	}

	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) {
			this.adjacencyList[vertex] = [];
		} else return false;
	}

	addEdge(v1, v2) {
		if (!this.adjacencyList[v1].includes(v2)) {
			this.adjacencyList[v1].push(v2);
		}
		if (!this.adjacencyList[v2].includes(v1)) {
			this.adjacencyList[v2].push(v1);
		}
	}

    depthFirstRecursive(start) {
        const result = []
        const visited = {}
        const adjacencyList = this.adjacencyList

        function dfs(vertex) {
            if(!vertex) return null
            visited[vertex] = true
            result.push(vertex)
            adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]) {
                    return dfs(neighbor)
                }
            })
        }

        dfs(start)

        return result
    }
}

const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('E', 'F');

console.log(graph.depthFirstRecursive('A'));
