console.clear()
// --- Day 1: Historian Hysteria ---

function distance_total(list1,list2){
    if(list1.length != list2.length){
        return null
    }
    function quick_sort(arr){
        if(arr.length < 2){
            return arr 
        }else{
            let pivot = arr[arr.length -1]
            let left = []
            let right = []
            for(let i = 0;i < arr.length-1;i++){
                if(arr[i] < pivot){
                    left.push(arr[i])
                }else{
                    right.push(arr[i])
                }
            }
            return [...quick_sort(left),pivot,...quick_sort(right)]
        }
    }
    list1 = quick_sort(list1)
    list2 = quick_sort(list2)
    let sum = 0
    let index1 = 0
    let index2 = 0
    while(index1 < list1.length -1 && index2 < list2.length -1){
        let diference = Math.max(list1[index1],list2[index2]) - Math.min(list1[index1],list2[index2])
        sum+=diference
        index1++
        index2++
    }
    return sum
}
function entrada_distance_total(){
    let list1 = [3,2,5,3,5,2]
    let list2 = [1,5,2,4,5,6]
    let distance = distance_total(list1,list2)
    console.log(distance)
}
// entrada_distance_total()
//--- Day 2: Red-Nosed Reports ---
function report_analysis(report){

    for(let i = 0;i < report.length;i++){
        if(report[i+1] != null){
            let diference = Math.max(report[i+1],report[i]) - Math.min(report[i+1],report[i])
            if(diference != 1 && diference != 2){
                return 'unsafe'
            }
        }
    }
    return 'safe'
}
function entrada_report_analysis(){
    let relatorio_list =[1 ,2, 7, 8 ,9]
    let report = report_analysis(relatorio_list)
    console.log(report)
}
// entrada_report_analysis()

//--- Day 3: Mull It Over ---
