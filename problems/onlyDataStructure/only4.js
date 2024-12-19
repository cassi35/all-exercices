class Sets{
    constructor(){
     this.set = new Set()
    }
    insert(value){ //inseri elementos
        if(this.find(value)){
            return null 
        }else{
           return this.set.add(value)
        }
    }
    remove(value){ // remove do conjunto
        if(this.find(value)){
            return null 
        }else{
          return  this.set.delete(value)
        }
    }
    find(value){ //testa ja existe para nao dulicar os elementos
        return this.set.has(value)
    }
    union(setB){ //uni os dois sets (A ∪ B)
        if(setB.set.size == 0){
            return null
        }else{
           let union = new Sets()
           for(let value of this.set.values()){
            if(!union.find(value)){
                union.insert(value)
            }
           }
           for(let value of setB.set.values()){
            if(union.find(value)){
                union.insert(value)
            }
           }
           return union
        }
    }
 
    intersection(setB){   //retorna um novo conjunto contento apenas elementos que estao dentro dos dois sets (A ∩ B)
        if(setB.set.size == 0){
            return null 
        }else{
            let intersection_set = new Sets()
            for(let value of setB.set.values()){
                if(this.find(value) && !intersection_set.find(value)){
                    intersection_set.insert(value)
                }
            }
            for(let value of this.set.values()){
                if(setB.find(value) && !intersection_set.find(value)){
                    intersection_set.insert(value)
                }
            }
            return  intersection_set
        }
    }
    
    diference(setB){ //retorna a diferenca entre os dois (A - B)
        if(setB.set.size == 0){
            return null
        }else{
            let diference = new Sets()
            for(let element of setB.set.values()){
                if(this.find(element) == false){
                    diference.insert(element)
                }
            }
            return diference
        }
    }
    subset(setB){ //teste se todos os elemetnos do conjunto b estao dentro do conjunto A (A ⊆ B)
        if(setB.set.size == 0){
            return null
        }else{
            for(let element of setB.set.values()){
                if(this.find(element) == false){
                    return false
                }
            }
            return true
        }
    }
    superset(setB){ //teste se todos os elemetnos do conjunto A estao dentro do conjunto B (A ⊇ B)
        if(setB.set.size == 0){
            return null
        }else{
            for(let element of this.set.values()){
                if(setB.find(element)== false){
                    return false
                }
            }
            return true
        }
    }

    clear(){
        return this.set.clear()
    }
    print(){
        return console.log(this.set)
    }
}
console.clear()
let setA = new Sets()
let setB = new Sets()
for(let i = 0;i < 5;i++){
    setA.insert(i)
    setB.insert(i)
}
setA.insert(11)

setA.print()
setB.print()
console.log(setA.intersection(setB))
console.log(setA.subset(setB))
console.log(setB.subset(setA))
