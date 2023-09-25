var lowestCommonAncestor = function(root, p, q) {
    if(!root) return null;
    if(root === p || root === q) return root;
    const left = lowestCommonAncestor(root.left,q,p);
    const right = lowestCommonAncestor(root.right,p,q);
    if(left && right) {
      return root;
    }else if(left) {
      return left;
    }else if(right) {
      return right;
    }
};