/*let passwordBox = document.querySelector('#password');
let button = document.querySelector('#btn');
button.addEventListener('change', function(hidePassword) {
    let typeAttribute = passwordBox.getAttribute('type');
    if (type === 'password') {
        passwordBox.setAttribute('type', 'text');
        button.style.color = 'blue';
    } else {
        passwordBox.setAttribute('type', 'password');
        button.style.color = 'grey';
    }

});*/
//  -------button---------
/*
function hidePassword() {
    var passwordBox = document.getElementById('password');
    var showPassword = document.getElementById('btn');
    if (passwordBox.type === 'password') {
        passwordBox.type = 'text';
        showPassword.style.color = 'lightBlue';
    } else {
        passwordBox.type = 'password';
        showPassword.style.color = 'black';
    }
}


// ---------icons-----------

function hidePassword() {
    var passwordBox = document.getElementById('password');
    var visibleOn = document.getElementById('hide2');
    var visibleOff = document.getElementById('hide1');
    if (passwordBox.type === 'password') {
        passwordBox.type = 'text';
        visibleOn.style.display = "none";
        visibleOff.style.display = "block";
    } else {
        passwordBox.type = 'password';
        visibleOn.style.display = "block";
        visibleOff.style.display = "none";
    }
}




// ------single-icons-color-change-----JS----

function hidePassword() {
    var passwordBox = document.getElementById('password');
    var visibleOn = document.getElementById('hide2');
    var visibleOff = document.getElementById('hide1');
    if (passwordBox.type === 'password') {
        passwordBox.type = 'text';
        visibleOn.style.color = "#2199F4";

    } else {
        passwordBox.type = 'password';
        visibleOn.style.color = "black";
    }
}
*/



// ...........jquery................

/*$(document).ready(function() {
    const passwordBox = $('#password');
    $('#hide2').click(function() {
        if (passwordBox.prop('type') == 'password') {
            $(this).addClass('far fa-eye-slash');
            passwordBox.attr('type', 'text');
        } else {
            $(this).removeClass('far fa-eye-slash');
            passwordBox.attr('type', 'password');
        }
    });
});
*/





// .......single..icon.color..change....jquery................

$(document).ready(function() {
    const passwordBox = $('#password');
    $('#hide2').click(function() {
        if (passwordBox.prop('type') == 'password') {
            passwordBox.attr('type', 'text');
            $('#hide2').css('color', '#2199F4');
        } else {
            passwordBox.attr('type', 'password');
            $('#hide2').css('color', 'black');
        }
    });
});