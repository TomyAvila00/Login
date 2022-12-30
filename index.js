function login(){
    let user = document.getElementById('user').value;
    let password = document.getElementById('password').value;

    if(user === 'login' && password === '1234'){
        return alert('Succesfully loged!');
    } else if(!user || !password){
        return alert('Username and password are required');
    } else {
        return alert('Wrong username or password')
    }
};