let samplePromise = new Promise(function (onSuccess, onFailure){
    // code for fetching date from the server
    onSuccess()
    onFailure()
})

samplePromise.then(function(value){
    console.log('this will be called on success.')
}, function(error) {
    console.log('this will be called on failure.')
})