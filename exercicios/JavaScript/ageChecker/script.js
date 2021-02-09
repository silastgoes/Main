function checker() {
    var date = new Date()
    var year = date.getFullYear()
    var useryear = document.getElementById('txtyear')
    var res = document.querySelector('div#res')
    if (useryear.value.length == 0 || Number(useryear.value) > year) {
        window.alert('[Erro] Verufy your datas and try again!')
    } else {
        var usersex = document.getElementsByTagName('radsex')
        var age = year - Number(useryear.value)
        var genre = ''
            //var img = document.createElement('img')
            // img.setAttribute('id', 'foto')
        if (usersex[0].checked) {
            genre = 'Man'
        } else {
            genre = 'Woman'
        }
        res.innerHTML = `Detect ${genre} are ${age} years old.`
        res.style.textAlign = 'center'
    }
}