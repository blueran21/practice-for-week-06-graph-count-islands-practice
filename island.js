function getNeighbors(row, col, matrix) {

  // Check top
  // Check top right
  // Check right
  // Check bottom right
  // Check bottom
  // Check bottom left
  // Check left
  // Check top left
  // Return neighbors

  // Your code here
  const neighbors = [];
  const directions = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];

  for (const direction of directions) {
    let curRow = row + direction[0];
    let curCol = col + direction[1];

    if (curRow >= 0 && curRow < matrix.length && curCol >= 0 && curCol < matrix[0].length && matrix[curRow][curCol] === 1) {
      neighbors.push([curRow, curCol]);
    }
  }

  return neighbors;
}

function countIslands(matrix) {

  // Create a visited set to store visited nodes
  let visited = new Set();
  // Initialize count to 0
  let count = 0;
  // Iterate through all indices in matrix
  for (let r = 0; r < matrix.length; r += 1) {
    for (let c = 0; c < matrix[0].length; c += 1) {
      if (matrix[r][c] === 1 && (!(visited.has([r, c].join(','))))) {
        count += 1;
        let stack = [[r, c]];
        visited.add([r, c].join(','));

        while (stack.length > 0) {
          let curNode = stack.pop();
          let curRow = curNode[0];
          let curCol = curNode[1];
          let neighbors = getNeighbors(curRow, curCol, matrix);

          for (const neighbor of neighbors) {
            if (!(visited.has(neighbor.join(',')))) {
              visited.add(neighbor.join(','));
              stack.push(neighbor);
            }
          }
        }
      }
    }
  }

  return count;
    // If an index contains a 1 and has not been visited,
    // increment island count and start traversing neighbors
      // DO THE THING (increment island count by 1)
      // Initialize a stack with current index
      // Add stringified version of current index to the visited set
      // While stack contains elements
        // Pop element from stack
        // Get valid neighbors of current element
        // Iterate over neigbors
          // If neighbor has not been visited
            // Add neighbor to stack
            // Mark neighbor as visited
  // Return island count

  // Your code here
}

// Uncomment the lines below for local testing
// const matrix = [
//                 [1,1,1,0,0],
//                 [0,1,1,0,1],
//                 [0,1,1,0,1]
//               ]

// console.log(getNeighbors(1, 1, matrix)); // [[0, 0], [0, 1], [0, 2], [1, 2], [2, 1], [2, 2]]
// console.log(getNeighbors(2,4, matrix)) // [[1,4]]

// const matrix2 = [
//                     [1,1,1,0,1],
//                     [0,0,0,0,1],
//                     [1,0,0,1,0],
//                 ]

// console.log(countIslands(matrix)) // 2
// console.log(countIslands(matrix2)); // 3

module.exports = [countIslands, getNeighbors];
