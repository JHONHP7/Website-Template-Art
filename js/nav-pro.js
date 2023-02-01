
$('.nav-projetos img').click(function(e){
    var id = $(this).attr('src');
    
    
    if(id=="assets/1.png"){
        $('#projeto1').css("opacity", "1");
    }else{
        $('#projeto1').css("opacity", "0");
    }

    if(id=="assets/2.png"){
        $('#projeto2').css("opacity", "1");
    }else{
        $('#projeto2').css("opacity", "0");
    }

    if(id=="assets/3.png"){
        $('#projeto3').css("opacity", "1");
    }else{
        $('#projeto3').css("opacity", "0");
    }
    
    if(id=="assets/4.png"){
        $('#projeto4').css("opacity", "1");
    }else{
        $('#projeto4').css("opacity", "0");
    }
    
    if(id=="assets/5.png"){
        $('#projeto5').css("opacity", "1");
    }else{
        $('#projeto5').css("opacity", "0");
    }
    
    if(id=="assets/6.png"){
        $('#projeto6').css("opacity", "1");
    }else{
        $('#projeto6').css("opacity", "0");
    }
    
    if(id=="assets/7.png"){
        $('#projeto7').css("opacity", "1");
    }else{
        $('#projeto7').css("opacity", "0");
    }
    
    if(id=="assets/8.png"){
        $('#projeto8').css("opacity", "1");
    }else{
        $('#projeto8').css("opacity", "0");
    }
    
    if(id=="assets/9.png"){
        $('#projeto9').css("opacity", "1");
    }else{
        $('#projeto9').css("opacity", "0");
    }
    
})

$('.projetos-content-img .div-segura-projetos').click(function(e){
    var id = $(this).find(">:first-child").attr('src');
    localStorage.setItem('algumaDataEspecial', id);
})

var url_atual = window.location.pathname;

if(url_atual == "/projetos.html"){
    var id = localStorage.getItem('algumaDataEspecial');
    if(id =="assets/1.png"){
        $('#projeto1').css("opacity", "1");
    }
    if(id =="assets/2.png"){
        $('#projeto2').css("opacity", "1");
    }
    if(id =="assets/3.png"){
        $('#projeto3').css("opacity", "1");
    }
    if(id =="assets/4.png"){
        $('#projeto4').css("opacity", "1");
    }
    if(id =="assets/5.png"){
        $('#projeto5').css("opacity", "1");
    }
    if(id =="assets/6.png"){
        $('#projeto6').css("opacity", "1");
    }
    if(id =="assets/7.png"){
        $('#projeto7').css("opacity", "1");
    }
    if(id =="assets/8.png"){
        $('#projeto8').css("opacity", "1");
    
    }

    if(id =="assets/9.png"){
        $('#projeto9').css("opacity", "1");
    }
}
