console.clear()
//--- Day 1: The Tyranny of the Rocket Equation ---
function calcular_combustivel(massas){
    let soma = 0
    for(let massa of massas){
        soma+=Math.floor((massa / 3)-2)
    }
    return soma
}
console.log(calcular_combustivel([12,14,1969,100756]))
