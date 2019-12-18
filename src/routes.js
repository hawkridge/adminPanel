const routes = [
    {
        path: '/',
        getTemplate: (params) => '<h1>Home</h1>'
    },
    {
        path: '/about',
        getTemplate: (params) => '<h1>About</h1>'
    },
    {
        path: '/contacts',
        getTemplate: (params) => '<h1>Contacts</h1>'
    },
    {
        path: '/products/:productId',
        getTemplate: (params) => `<h1>Product ${ params.productId }</h1>`
    }
];