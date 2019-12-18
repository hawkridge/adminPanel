const graph = {
    dima: ['vasya', 'kola'],
    jorj: ['kola', 'eugen', 'julia'],
    gloria: [],
    mari: ['petr', 'julia'],
    artem: ['dima', 'petr']
}

function search( name ) {
    let que = [];
    const alreadyChecked = [];

    que = [...que, ...graph[name]];

    while(que.length) {
        const person = que.shift();
        console.log('person = ', person)
        if ( !alreadyChecked.find(item => item === person) ) {
            if ( isItAppropriateSeller( person ) ) {
                console.log('found!', person);
                console.log('alreadyChecked',alreadyChecked);
                break;
            } else {
                que = [...que, ...graph[person]];
                alreadyChecked.push(person);
            }
        }
    }


    function isItAppropriateSeller( name ) {
        return name[name.length - 1] === 'n'
    }
}

search('dima')



function request(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data)
        }, 1000)
    })
}
//
// const users = [
//     {
//         name: 'John'
//     },{
//         name: 'Ben'
//     },{
//         name: 'Tom'
//     }
// ]
//
// async function iterateOverUsers() {
//     console.log('start', new Date().toLocaleTimeString())
//
//     const result = await request('Ben Johnson')
//
//     console.log('end', new Date().toLocaleTimeString())
//
//     return result
//
// }
//
// console.log('2', iterateOverUsers());

async function foo() {
  const res1 = await request('Ben').then(s => s);
  const res2 = await request('John').then(s => s);
  const res3 = await request('Karl').then(s => s);

  const result = Promise.all(res1, res2, res3).then(s => console.log('s', s))
  console.log(result)
}

console.log('end', foo())