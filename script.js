function toggleMode(){
    // alert("Funcionou!");
    const html = document.documentElement
    html.classList.toggle('light')
    // if(html.classList.contains('light')){
    //     html.classList.remove('light');
    // }else{
    //     html.classList.add('ligt')
    // }

    // //Pega TAG img
    // const img = document.querySelector('#profile img')
    // if(html.classList.contains('light')){
    //     //se tiver light mode. Substituir imagem light
    //     img.setAttribute('src', './assets/avatar-light.png')
    // }else{
    //     //se tiver sem light mode. Manter imagem.
    //     img.setAttribute('src','./assets/avatar-rikegc.jpeg')
    // }
}