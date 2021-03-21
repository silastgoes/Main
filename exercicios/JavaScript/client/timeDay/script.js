function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var date = new Date()
    var hour = date.getHours()
        //A message announciong the time and the conditional change the background-color and the image's src
    msg.innerHTML = `Agora são <strong> ${hour} horas. </strong>`
    if (hour >= 0 && hour < 12) {
        img.src = 'imagens/manha.jpg'
        document.body.style.backgroundColor = 'rgba(236, 223, 104, 0.3)'
    } else if (hour >= 12 && hour < 18) {
        img.src = 'imagens/tarde.jpg'
        document.body.style.backgroundColor = 'rgba(171, 228, 125, 0.4)'
    } else {
        img.src = 'imagens/noite.jpg'
        document.body.style.backgroundColor = 'rgba(154, 74, 161, 0.6)'
    }
}