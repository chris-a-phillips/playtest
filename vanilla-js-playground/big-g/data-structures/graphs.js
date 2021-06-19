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

console.log(isConnected('A', 'B'))