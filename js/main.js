$(document).ready(function () {
            $('form').on('submit', function (e) {
                e.preventDefault();

                let username = $('#username').val();
                let password = $('#password').val();


                if (username === 'new_user' && password === '123456789') {
                    $('#username').removeClass('unsuccessful');
                    $('#username').addClass('successful');
                    $('#password').removeClass('unsuccessful');
                    $('#password').addClass('successful');
                    $('p').text('Successful login!');
                }
                
                if (username !== 'new_user' && password === '123456789') {
                    $('#username').removeClass('successful');
                    $('#username').addClass('unsuccessful');
                    $('p').text('please, enter valid username')
                    $('#password').removeClass('unsuccessful');
                    $('#password').addClass('successful');
                }

                if (username === '' && password === '123456789') {
                    $('#username').removeClass('successful');
                    $('#username').addClass('unsuccessful');
                    $('p').text('please, enter  username')
                    $('#password').removeClass('unsuccessful');
                    $('#password').addClass('successful');
                }

                if (username === 'new_user' && password !== '123456789') {
                    $('#username').removeClass('unsuccessful');
                    $('#username').addClass('successful');
                    $('p').text('please, enter valid password')
                    $('#password').removeClass('successful');
                    $('#password').addClass('unsuccessful');
                }

                if (username === 'new_user' && password === '') {
                    $('#username').removeClass('unsuccessful');
                    $('#username').addClass('successful');
                    $('p').text('please, enter  password')
                    $('#password').removeClass('successful');
                    $('#password').addClass('unsuccessful');
                }

                if (username !== 'new_user' && password !== '123456789') {
                    $('#username').removeClass('successful');
                    $('#username').addClass('unsuccessful');
                    $('p').html('please, enter valid username </br>please, enter valid password')
                    $('#password').removeClass('successful');
                    $('#password').addClass('unsuccessful');
                }

                if (username !== 'new_user' && password === '') {
                    $('#username').removeClass('successful');
                    $('#username').addClass('unsuccessful');
                    $('p').html('please, enter valid username </br>please, enter password')
                    $('#password').removeClass('successful');
                    $('#password').addClass('unsuccessful');
                }

                if (username === '' && password === '') {
                    $('#username').removeClass('successful');
                    $('#username').addClass('unsuccessful');
                    $('p').html('please, enter username </br>please, enter password')
                    $('#password').removeClass('successful');
                    $('#password').addClass('unsuccessful');
                }

                if (username === '' && password !== '123456789' && password !== '') {
                    $('#username').removeClass('successful');
                    $('#username').addClass('unsuccessful');
                    $('p').html('please, enter username </br>please, enter valid password')
                    $('#password').removeClass('successful');
                    $('#password').addClass('unsuccessful');
                }

                if (username === 'new_user') {
                    $('#username-check').removeClass('d-none')
                    $('#username-check').addClass('d-inline')
                    $('#username-xmark').addClass('d-none')
                    $('#username-xmark').removeClass('d-inline')
                } else {
                    $('#username-xmark').removeClass('d-none')
                    $('#username-xmark').addClass('d-inline')
                    $('#username-check').addClass('d-none')
                    $('#username-check').removeClass('d-inline')
                }

                if (password === '123456789') {
                    $('#password-check').removeClass('d-none')
                    $('#password-check').addClass('d-inline')
                    $('#password-xmark').addClass('d-none')
                    $('#password-xmark').removeClass('d-inline')
                } else {
                    $('#password-xmark').removeClass('d-none')
                    $('#password-xmark').addClass('d-inline')
                    $('#password-check').addClass('d-none')
                    $('#password-check').removeClass('d-inline')
                }
            });
        });