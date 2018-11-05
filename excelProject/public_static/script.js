$(function () {
    let username = $('#username')
    let password = $('#password')
    let btn = $('#submit')

    btn.click(function () {
        $.post('/api/accounts', {
            username: username.val(),
            password: password.val()
        }, function(data, status) {
                console.log(data.msg)
                if (data.msg === "OK") {
                    window.location.replace("main.html")
                }
        })
    })
})