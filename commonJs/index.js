console.log('script start', Date.now())

const apicall = function (cb) {
    setTimeout(cb, 3000)
}

apicall((data) => {
    throw new Error('err')
    console.log(13)
})



console.log('script end', Date.now())