function showPage (page){
    $('section').each((i, element) => {
        $(element).attr('id') == page 
            ? $(element).removeClass('hidden') 
            : $(element).addClass('hidden');  
    });
};

function login(){
    const  API_URL = 'http://fenw.etsisi.upm.es:1723';
    const USERS_LOGIN = '/users/login/';
    let username = $('#userLogin').val();
    let password = $('#passwordLogin').val();
    let login = {username: username, password: password};
    $.get(API_URL+USERS_LOGIN, login, (data, status, response) => {
        let token = response.getResponseHeader('Authorization');
        
    });
};