const doLogin = function(e) {
    e.preventDefault();
    const username = document.getElementById('LoginInputUsername').value;
    const password = document.getElementById('LoginInputPassword').value;

    login({
        username: username,
        password: password
    }).then(function(res) {
        window.location.href = 'home.html';
    });
};

const doRegister = function(e) {
    e.preventDefault();
    const username = document.getElementById('userUsername').value;
    const password = document.getElementById('userPassword').value;
    const firstName = document.getElementById('userFirstName').value;
    const middleName = document.getElementById('userMiddleName').value;
    const lastName = document.getElementById('userLastName').value;
    const emailAddress = document.getElementById('userPhoneNumber').value;
    const phoneNumber = document.getElementById('emailAddress').value;
    const activeUser = 1;

    register({
        username: username,
        password: password,
        firstName: firstName,
        middlename: middleName,
        lastName: lastName,
        emailAddress: emailAddress,
        phoneNumber: phoneNumber,
        activeUser: activeUser
    }).then(function(res) {
        window.location.href = 'home.html';
    });
};

const doLogout = function(e) {
    e.preventDefault();
};