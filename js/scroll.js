$('.header-secoes a').click(function(e){
    e.preventDefault();
    var id = $(this).attr('href'), 
        targetOffset = $(id).offset().top;
    $('html, body').animate({
        scrollTop: targetOffset
    }, 1000)
    setTimeout(function(){
        console.log("AAAAAAAAAA");
    }, 3000);
})

$('.header-projetos a').click(function(e){
    e.preventDefault();
    var id = $(this).attr('href');
    localStorage.setItem('praondeir', id);
    window.location.replace("index.html");  
})

var url_atualizada = window.location.pathname;

if(url_atualizada == "/index.html"){
    var id = localStorage.getItem('praondeir');
    if(id == "#section-projetos"){
        targetOffset = $(id).offset().top;
        $('html, body').animate({
            scrollTop: targetOffset
        }, 1000)
    }
    if(id == "#text-about"){
        targetOffset = $(id).offset().top;
        $('html, body').animate({
            scrollTop: targetOffset
        }, 1000)
    }
    if(id == "#section-contact"){
        targetOffset = $(id).offset().top;
        $('html, body').animate({
            scrollTop: targetOffset
        }, 1500)
    }
    localStorage.removeItem('praondeir');
}
