$(document).ready(function() {
    var $upload = $('#upload');
    var $uploadPopup = $('#uploaderPopup');
    var $uploadCancel = $('#cancel');
    var $submit = $('#submit');
    var $success = $('#success');
    var $signUpButton = $('#signUpButton');
    var $signUpOk = $('#signUpOk');
    var $signUpCancel = $('#signUpCancel');
    var $signUpForm = $('#signUpForm');
    var $logInButton = $('#logInButton');
    var $logInOk = $('#logInOk');
    var $logInCancel = $('#logInCancel');
    var $logInForm = $('#logInForm');
    var $user = $('#user');
    var $userEnter = $('#userEnter');
    var $formBackground = $('#formBackground');

    //upload
    $upload.on('click', function(e) {
        $uploadPopup.show(400);
        $formBackground.show('fast');
    });
    $uploadCancel.on('click', function(e) {
        $uploadPopup.hide(200);
        $formBackground.hide('fast');
    });
    $submit.on('click', function(e) {
        $uploadPopup.hide(400);
        $success.show(200);
        $formBackground.hide('fast');
        console.log(Date());
    });

    $success.on('click', function(e){
        $success.hide(200);
    });

    //sign up form
    $signUpButton.on('click', function(e){
        $signUpForm.show(400);
        $logInForm.hide(200);
        $formBackground.show('fast');

    });
    $signUpOk.on('click', function(e){
        $signUpForm.hide(400);
        $user.show(400);
        $userEnter.hide(400);
        $formBackground.hide('fast');
    });
    $signUpCancel.on('click', function(e){
        $signUpForm.hide(400);
        $formBackground.hide('fast');
    });

    //log in form
    $logInButton.on('click', function(e){
        $logInForm.show(400);
        $signUpForm.hide(400);
        $formBackground.show('fast');
    });
    $logInOk.on('click', function(e){
        $logInForm.hide(400);
        $user.show(400);
        $userEnter.hide(400);
        $formBackground.hide('fast');
    });
    $logInCancel.on('click', function(e){
        $logInForm.hide(400);
        $formBackground.hide('fast');
    });


} );