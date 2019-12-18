// const soon = ( val ) => {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log('resolving promise - ', val);
//             resolve(val);
//         }, Math.random() * 2000)
//     })
// }
//
// const names = ['Sorax', 'Thomas', 'Johnson'];
//
// const promises = names.map(name => soon( name ));
//
// const result = Promise.all( promises );
//
// result.then( success => {
//     console.log('result success', success )
// }).catch( err => console.log('result error', err) )

const soon = ( val ) => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('resolving promise - ', val);
            resolve(val);
        }, Math.random() * 2000)
    })
}

const classOf = ( val ) => Object.prototype.toString.call(val).slice(8, -1);

const Promise_all = ( promises ) => {
    return new Promise((resolve, reject) => {
        if ( classOf( promises ) !== 'Array' ) throw Error('Expected an array')
        if ( !promises.length ) resolve('Everything OK!, no values');

        const noPromises = promises.every( value => classOf(value) !== 'Promise' );
        console.log('noPromises',noPromises);
        const onlyPromises = promises.every( value => classOf(value) === 'Promise' );
        console.log('onlyPromises', onlyPromises);

        const mixed = !noPromises && !onlyPromises;
        console.log('mixed', mixed);

        let pending = promises.length;
        const results = [];

        for ( let i = 0; i < promises.length; i++ ) {
            promises[i].then(s => {
                results[i] = s;
                pending--;
                if( pending === 0 ) resolve(results);
            }).catch(reject)
        }
    })
}

Promise_all([soon(1), soon(2)]).then(s => console.log('result',  s))

// promiseAll([soon(1), soon(2), soon(3)]).then(array => {
//     console.log("This should be [1, 2, 3]:", array);
// });
// promiseAll([soon(1), Promise.reject("X"), soon(3)])
//     .then(array => {
//         console.log("We should not get here");
//     })
//     .catch(error => {
//         if (error != "X") {
//             console.log("Unexpected failure:", error);
//         }
//     });