
$(function() {

    let name = $('#productName')
    let manuf = $('#manufacturer')
    let price = $('#price')

    $('#btn_add').click(function() {
        addProduct(name.val(), manuf.val(), price.val(), 
        function(addedProduct) {
            alert("Added " + addedProduct.name)
        })
    })
})