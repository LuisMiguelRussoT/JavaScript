function cambioColor(opc) {
    const titulos = document.getElementsByTagName("button");
    const fondos = document.getElementsByTagName("div")
    let colorBackground;
    let urlBackground;
    switch (opc) {

        case 1:
            colorBackground = 'green'
            urlBackground = "url('https://static.vecteezy.com/system/resources/previews/006/060/687/non_2x/technology-binary-background-binary-on-green-background-vector.jpg')";
            break;
        case 2:
            colorBackground = 'red'
            urlBackground = "url('https://p4.wallpaperbetter.com/wallpaper/857/967/624/movies-code-the-matrix-red-wallpaper-preview.jpg')";
            break;
        case 3:
            colorBackground = 'purple'
            urlBackground = "url('http://cdn30.us1.fansshare.com/image/backgroundforpictures/purple-matrix-wallpapers-backgrounds-for-powerpoint-953179409.jpg')";
            break;
    }

    document.getElementById('menuprincipal').style.backgroundColor = colorBackground;
    for (let i = 0; i < titulos.length; i++) {
        titulos[i].style.backgroundColor = colorBackground;
                 
               
    }
    document.getElementsByTagName("body")[0].style.backgroundImage = urlBackground;

    document.getElementsByTagName("input")[0].style.backgroundColor = colorBackground;
    document.getElementsByTagName("table")[0].style.backgroundColor = colorBackground;
    document.getElementsByTagName("button")[0].style.backgroundColor = colorBackground;
    //document.getElementsByTagName("h1")[0].style.backgroundColor = colorBackground;
    
   
      
    

    

}


function contraer(elemento) {
    if (document.getElementsByClassName("panel")[elemento].style.display == "none") {
        document.getElementsByClassName("panel")[elemento].style.display = "block";
    }
    else {
        document.getElementsByClassName("panel")[elemento].style.display = "none"
    }
}


