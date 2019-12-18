const classOf = instance => Object.prototype.toString.call( instance ).slice(8, -1);

class makeQueue {
    constructor( data ) {
        if ( !data ) this.val = [];
        else {
            if ( this.isDataHasExpectedType( data ) ) {
                this.val = this.isArray( data ) ? [...data] : [data];
            } else {
                throw Error('unexpected data type')
            }
        }
    }
    
    isArray( data ) {
        return classOf(data) === 'Array'
    }

    isDataHasExpectedType( data ) {
        const availableDataTypes = ['Number', 'String', 'Boolean', 'Array'];
        const currentType = classOf( data );
        return availableDataTypes.includes( currentType );
    }

    append( data ) {
        if ( !data ) throw Error('required data');
        if ( !this.isDataHasExpectedType( data ) ) throw Error('unexpected data type');

        this.val = this.isArray( data ) ? [...this.val, ...data] : [...this.val, data];
        return this.val;
    }
    
    popLeft() {
        if (!this.val.length) return undefined;
        return this.val.shift()
    }
}

const graph = {
    'Ben': ['Jorj', 'Thomas', 'Julia'],
    'Valentin': ['Gloria'],
    'Alisa': ['Nikolai', 'Jorj'],
    'Piter': [],
    'Pen': ['Piter', 'Thomas'],
    'Thomas': ['Anjey', 'Nikolai'],
    'Julia': ['Valentin', 'Piter'],
    'Anjey': []
}


const wideSearch = () => {
    const queue = new makeQueue(Object.keys( graph ));
    const checked = [];

    while ( queue.val.length ) {
        const personName = queue.popLeft();
        if ( !checked.find( person => person === personName ) ) {
            if ( findAppropriateSeller( personName ) ) {
                console.log('The appropriate seller is: ', personName);

                return personName;
            } else {
                checked.push( personName );
                if ( graph[personName] ) {
                    queue.append(graph[personName]);
                }
            }
        }
    }

    function findAppropriateSeller( name ) {
        if ( !name ) throw Error('Required name');
        return name[name.length - 1] === 'r'
    }
};

wideSearch();
