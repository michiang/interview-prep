/* 
class Node
  attr_accessor :val
  attr_accessor :left
  attr_accessor :right
  
  # Returns true if all the values in the tree are the same
  # False otherwise
  def is_unival(node)
  end
  
  def initialize(val, left, right)
    @val = val
    @left = left
    @right = right
  end
  
  leaf1 = Node.new(1, nil, nil)
  leaf2 = Node.new(2, nil, nil)
  root = Node.new(3, leaf1, leaf2)
  
      2  <-- root
    2   3 <-- leaf2
end
 */
 
function isUnival(node, value) {
  let leftIsUnival = false;
  let rightIsUnival = false;
  
  if (node === null) {
    return true;
  }
  
  if (node.value !== value) {
    return false;
  }
  
  return isUnival(node.left, node.value) && isUnival(node.right, node.value);
}
