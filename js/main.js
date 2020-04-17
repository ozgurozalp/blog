particlesJS.load('particles-js', 'js/config.json');
$(function(){

    $("#loginForm, #contactForm, #commentForm, #registerForm").submit(function(e){
        e.preventDefault();
    });

    $('[data-toggle="tooltip"]').tooltip();

    $(".switch").on('click', (e) => {
        if(e.target.id == "login"){
            $("#loginForm").removeClass("d-block");
            $("#loginForm").addClass("d-none");
            $("#registerForm").removeClass("d-none");
            $("#registerForm").addClass("d-block");
        } else if(e.target.id == "register") {
            $("#loginForm").removeClass("d-none");
            $("#loginForm").addClass("d-block");
            $("#registerForm").removeClass("d-block");
            $("#registerForm").addClass("d-none");
        }
    });

    $("#fiyatlar div.fiyat").addClass("animated");

    $(".form-control").addClass("animated");

});

setInterval(() => {
    console.log("%cI Love Eda", "color : #c54fa7; font-size: 3vw; font-family: 'Comic Sans MS';");
    console.log("");
},2500);



