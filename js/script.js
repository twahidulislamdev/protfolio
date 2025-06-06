let counterUp = document.querySelectorAll(".counterUp")
let arr = Array.from(counterUp)
arr.map((items)=>{
    let count = 0
    function counterJs(){
        count++
        items.innerHTML = count
        if(count == items.dataset.number){
            clearInterval(stop)
        }
    }

    let stop = setInterval(function(){
        counterJs()
    },5500/items.dataset.number)
})