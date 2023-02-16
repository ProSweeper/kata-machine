export default function bfs(head: BinaryNode<number>, needle: number): boolean {
  // type can either be null, or an array of Binary nodes
  const q: (BinaryNode<number> | null)[] = [head];

  while (q.length) {
    const curr = q.shift() as BinaryNode<number>;
    
    // search
    if (curr.value === needle) {
      return true;
    }

    if (curr.left) {
      q.push(curr.left);
    }
    if (curr.right) {
      q.push(curr.right);
    }
  }
  return false;
}