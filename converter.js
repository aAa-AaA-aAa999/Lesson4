console.log("Задание 1")
let usdRub = 87
let euroRub = 190

let usdToRub = (usd)=>{
    return `${usd*usdRub} RUB`
}
let euroToRub= (eur)=>{
    return `${eur*euroRub} RUB`
}
console.log(usdToRub(389))
console.log(euroToRub(8))

console.log("\nЗадание 2")

const ages = [9, 10, 13, 18, 40, 99, 8, 105]
let checkAccess = (age) => {
    if(age >= 18){
        return `Возраст ${age}; Доступ разрешён:)`
    }
    else{
         return `Возраст ${age}; Доступ запрещён`
    }
   
}
for (let age of ages){
    console.log(checkAccess(age))
}