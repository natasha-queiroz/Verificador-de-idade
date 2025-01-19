function verificar() {
    var data = new Date()
    var ano = data.getFullYear() // ano atual com 4 digitos
    var fano = document.getElementById('txtano') // formulario que veio quando quando preencheu(txtano)
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] verifique os dados e tente novamente ')
    } else {
        var fsex = document.getElementsByName('radsex') //sexo
        var idade = ano - fano.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        //dados do formulario preenchido

        if(fsex[0].checked) { // se o que tiver marcado (checado) for o fsex[0], sera masculino
            genero = 'Homem'
            if(idade >=0 && idade < 10) {
                //crianca
                img.setAttribute('src', 'bbhomem.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'homemjovem.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'homemadulto.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idosohomem.jpg')
            }
        } else if (fsex[1].checked) { // se o que tiver marcado (checado) for o fsex[1], sera feminino
            genero = 'Mulher'
            if(idade >=0 && idade < 10) {
                //crianca
                img.setAttribute('src', 'bbmulher.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'mulherjovem.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'mulheradulta.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idosamulher.jpg')
            }
        }
        res.style.textAlign = 'center' //stilo pra centralizar 
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}