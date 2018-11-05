$(function () {
    let inp_name = $('#name')
    let inp_age = $('#age')
    let inp_city = $('#city')
    let btn = $('#submit')
    let table = $('#persons')

    function refreshPersonTable(persons) {
        table.empty()
        table.append(
            `
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>City</th>
            </tr>
            `
        )
        for (person of persons) {
            table.append(
                `
                <tr>
                    <td>${person.name}</td>
                    <td>${person.age}</td>
                    <td>${person.city}</td>
                </tr>
                `
            )
        }
    }

    $.get('/api/persons', function(data) {
        refreshPersonTable(data)
    })

    btn.click(function () {
        $.post('/api/persons', 
        {
            name: inp_name.val(),
            age: inp_age.val(),
            city: inp_city.val()
        },
        function (data) {
            refreshPersonTable(data)
        })
    })
}) 