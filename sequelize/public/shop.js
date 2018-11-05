function fetchProducts (done) {
    $.get('/api/products', function(data) {
        done(data)
    })
}

function addProduct (name, manuf, price, done) {
    $.post('/api/products', {

        name: name,
        manufacturer: manuf,
        price: price
    }, function(data) {
        done(data)
    })
}
 
function createProductCard (product) {
    return $( 
        `
            <div class="col-4 card my-2 mx-2 p-2">
                ${product.name}
                <div class="row">
                    <div class="col">
                        ${product.manufacturer}
                    </div>
                    <div class="col font-weight-bold text-right">
                        Rs. ${product.price}
                    </div>
                </div>
                <button class="btn btn-primary">BUY</button>
            </div>
        `
    )
    
}