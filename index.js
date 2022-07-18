window.addEventListener("DOMContentLoaded",()=>{
    const btn = document.querySelector(".keys"),
    display = document.querySelector(".display > input")

    btn.addEventListener("click", function (e) {
        calc.value1 += e.target.id 
        
        if(e.target.value == "C"){
            calc.value1 = " "
        }
        
        if(e.target.value == "-"){
            vv =  calc.value1
            calc.value1 = " "
            function name() {
                gg =  calc.value1
                n = vv - gg
            } setTimeout(name, 1500)

            
        }
        if(e.target.value == "m+"){
            
            cr.innerText =  "m";
            calc.value2 = n }
            if(e.target.value == "m-"){
            
                cr.innerText =  "m";
                calc.value2 = n }
        if(e.target.value == "mrc"){
            alert(`Збережене число = ${calc.value2}`) 
            sumTwo += 1
        if(sumTwo == 2){
            confirm("Ви точно хочете видалити збережений елемент ?")
            calc.value2 = "Немає збереженого числа!!!"
                sumTwo = 0
                cr.innerText = ""

            
        }
        }
        if(e.target.value == "/"){
            vv =  calc.value1
            calc.value1 = " "
            function name() {
                gg =  calc.value1
                n = vv / gg
            } setTimeout(name, 2000)}
            if(e.target.value == "*"){
                vv =  calc.value1
                calc.value1 = " "
                function name() {
                    gg =  calc.value1
                    n = vv*gg
                } setTimeout(name, 2000)}
        if(e.target.value == "+"){
                vv =  Number(calc.value1)
                calc.value1 = ""
                function name() {
                    gg =  Number(calc.value1)
                    n = Number(vv+gg)
                } setTimeout(name, 2000)}
        if(e.target.value == "="){
            
            calc.value1 = n}


        show(calc.value1, display)
    })
})
let i
let mm
let ff = true
let f
const calc = {
    value1 : "",
    value2 : "",
}
let dom = document.querySelector(".display")
let cr = document.createElement('span')
cr.id = "span"

dom.prepend(cr)
let sum
let sumOne
let sumTwo = 0
let n = 0
let min 
let gg 

let vv



function show (value, el) {
 el.value = value
}
