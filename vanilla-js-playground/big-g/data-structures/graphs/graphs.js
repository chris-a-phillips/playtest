// edges list + vertices list

const vertices = ['A', 'B', 'C', 'D', 'E']

const edges = [
    ['A', 'B'],
    ['A', 'D'],
    ['B', 'C'],
    ['C', 'D'],
    ['C', 'E'],
    ['D', 'E']
]

// findAdjacentNodes
const findAdjacentNodes = function (node) {
    // Loop through edges array
    // Is my node in the connection
    // If yes, push the other node in pair, into adjacentNodes (res) array
    // If no, keep looping
    const adjacentNodes = []

    for(let edge of edges) {
        const nodeIdx = edge.indexOf(node)
        if(nodeIdx > -1) {
            adjacentNode = nodeIdx === 0 ? edge[1] : edge[0]
            adjacentNodes.push(adjacentNode)
        }
    }

    return adjacentNodes
}


const isConnected = function (nodeOne, nodeTwo) {
    return edges.some((edge) => {
        return edge.indexOf(nodeOne) > -1 && edge.indexOf(nodeTwo) > -1
    })
}



class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = []
        } else return false
    }

    addEdge(v1, v2) {
        if (!this.adjacencyList[v1].includes(v2)) {
            this.adjacencyList[v1].push(v2)
        }
        if (!this.adjacencyList[v2].includes(v1)) {
            this.adjacencyList[v2].push(v1)
        }
    }

    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2)
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1)
    }

    removeVertex(vertex) {
        while(this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop()
            this.removeEdge(vertex, adjacentVertex)
        }
        delete this.adjacencyList[vertex]
    }
}

const graph = new Graph

graph.addVertex('Tokyo')
graph.addVertex('San Francisco')
graph.addVertex('San Diego')
graph.addEdge('San Francisco', 'San Diego')
graph.addEdge('San Diego', 'San Francisco')
graph.addEdge('Tokyo', 'San Francisco')
graph.removeEdge('Tokyo', 'San Francisco')
graph.removeVertex('San Diego')


console.log(graph)