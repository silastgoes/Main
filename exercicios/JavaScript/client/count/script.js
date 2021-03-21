function count() {
    var start = document.getElementById('txt-start')
    var stop = document.getElementById('txt-stop')
    var step = document.getElementById('txt-step')
    var mesage = `Count: <br>`
    for (var c = Number(start.value); c <= Number(stop.value); c + Number(step.value)) {
        mesage = mesage + `${c} ->`
    }
    mesage = mesage + ` ${c} Fim!`
    var p = document.getElementById('res')
    p.innerHTML = mesage
}