export const tabs = {
    image: {
        title: "Image",
        render(item) {
            const source = item.url;
            return `<img src="${ source }" width="50" height="50">`;
        },
        sorter: null
    },
    name: {
        title: "Name",
        render(text) {
            return text;
        },
        reverse: false,
        sorter(value1, value2) {
            return value1.name > value2.name ? 1 :
                value1.name == value2.name ? 0 : -1;
        }
    },
    price: {
        title: "Price",
        render(value) {
            return value;
        },
        reverse: false,
        // sorter: (a, b) => this.reverse ? (b.price - a.price) : (a.price - b.price)
    },
    quantity: {
        title: "Quantity",
        render( value ) {
            return value;
        },
        reverse: false,
        sorter(value1, value2) {
            return value1.quantity > value2.quantity ? 1 :
                value1.quantity == value2.quantity ? 0 : -1;
        }
    },

};