/*
 * Write a function to find the second largest element in a binary search tree.
 */
const getSecondLargestInBST = (treeRoot) => {
	let node = treeRoot;
	while (true) {
		//if left child but no right child, second largest is largest in left tree 
		if ( node.leftChild && !node.rightChild ) {
			return getLargestInBST( node.leftChild );
		}
		else if ( node.rightChild && !node.rightChild.leftChild && !node.rightChild.rightChild ) {
			return node.value;
		}
    //recurse
    else {
			return getSecondLargestInBST( node.rightChild );
		}
	}
}

//Helper function

const getLargestInBST = (treeRoot) => {
	let node = treeRoot;
	while (true) {
		if ( !node.rightChild ) {
			return node.value;
		}
		else {
			node = node.rightChild;
		}
	}
}
