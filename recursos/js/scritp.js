function enProceso(){
    alert('En  proceso')
}

function irMision() {
   alert('Los precios se estan actualizando')

}

function irMejorte() {
    document.querySelector('.content-img').style.display='inline';

    document.querySelector('.content-img').classList.add('animate__animated','animate__fadeInDownBig');

    document.querySelector('.tapa-tea').style.opacity='.0';
    document.querySelector('.content2-img').style.display='flex';
    
   
}