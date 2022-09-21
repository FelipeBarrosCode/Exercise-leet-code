function nanana(Array1,Array2){
    let arraymax=[];
    for(let i of Array1){
        arraymax.push(i)
    }
    for(let f of Array2){
        arraymax.push(f)
    }
    arraymax=arraymax.sort(function(a,b){return a-b;})
    let Nova = arraymax.length
    if(Nova%2==0){
        let Soma=(arraymax[(Nova/2)])
        let soma2=(arraymax[((Nova/2)-1)])
        let total=((Soma+soma2)/2)
        return total
    }if(Nova%2!=0){
        Sooma1=(arraymax[((Nova/2)-0.5)])
        return Sooma1
    }
    else{console.log('Revise o Codigo')}
        
    
    
}   
t=[78,42,500]
m=[900,100,50,60]
let ciclone=nanana(t,m)
console.log(ciclone)



