$(document).ready(() => {
    var token = sessionStorage.getItem("Authorization");
    if(token !== null){
        showPage('reservar');
        $('#loginLink').addClass('hidden');
        $('#logout').removeClass('hidden');
        $('#reservaLink').removeClass('disabled');

    } else {
        showPage('inicio');
        $('#loginLink').removeClass('hidden');
        $('#logout').addClass('hidden');
        $('#reservaLink').addClass('disabled');
    }
});
function showPage (page){
    $('section').each((i, element) => {
        $(element).attr('id') === page 
            ? $(element).removeClass('hidden') 
            : $(element).addClass('hidden');  
    });
};

function login(){
    const  API_USERS_LOGIN = 'http://fenw.etsisi.upm.es:5555/users/login/';
    let username = $('#userLogin').val();
    let password = $('#passwordLogin').val();
    let login = {"username": username, "password": password};
    let isValid = false;
    if (username !== '' && password !== '') {
        $.getJSON(API_USERS_LOGIN, login)
            .done((data, textStatus, jqXHR) => {
                let token = jqXHR.getResponseHeader('Authorization');
                sessionStorage.setItem("Authorization", token);
                $('#invalidUser').addClass('hidden');
                loginHandler();
                $('#userLogin').val('');
                $('#passwordLogin').val('');

            })
            .fail((jqXHR, textStatus, errorThrown) => {
                console.log(jqXHR, textStatus, errorThrown);
               $('#invalidUser').removeClass('hidden');
            });
    }
};

function logout(){
    sessionStorage.clear();
    logoutHandler();
}

function logoutHandler(){
    $('#logout').addClass('hidden');
    $('#loginLink').removeClass('hidden');
    $('#reservar').addClass('hidden'); 
    $('#reservaLink').addClass('disabled');
    $('#login').removeClass('hidden');
}

function loginHandler(){
    $('#reservaLink').removeClass('disabled');
    $('#login').addClass('hidden'); 
    $('#reservar').removeClass('hidden');
    $('#loginLink').addClass('hidden');
    $('#logout').removeClass('hidden');
}



