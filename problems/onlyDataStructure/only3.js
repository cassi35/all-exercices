console.clear()
function isBTS(){
    class Node{
        constructor(data){
            this.left = null 
            this.right = null 
            this.data = data
        }
    }
    class BTS{
        constructor(){
        this.root = null      
        }
        add(data){
            const node = this.root
            if(node === null){
                this.root = new Node(data)
                return
            }else{
                const searchTree = function(node){
                    if(data < node.data){
                        if(node.left === null){
                            node.left = new Node(data)
                            return
                        }else if(node.left != null){
                            return searchTree(node.left)
                        }
                    }else if(data > node.data){
                        if(node.right === null){
                            node.right = new Node(data)
                            return
                        }else if(node.right != null){
                            return searchTree(node.right)
                        }
                    }else{
                        return null
                    }
                }
                return searchTree(node)
            }
           }
        inorder(root){
            if(root){
                
            }
        }
        isbst(root){
            console.log(root)
        }
    }
    let bst = new BTS()
    bst.add(10)
    bst.add(30)
    bst.add(40)
    bst.inorder(bst.root)

}
isBTS()