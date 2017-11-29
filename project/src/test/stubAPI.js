// JavaScript source code
import _ from 'lodash';
//qimport Cages from '../Data';


class StubAPI {

    constructor() {
        this.cages = [];
          
    }

    initialize(cages) {    // NEW 
        this.cages = cages
        return null;
    }

    getAll() {
        return this.cages;
    }

    delete(k) {
        let elements = _.remove(this.cages,
            (cage) => cage._id === k
        );
        return elements;
    }
   
    add(id,p, n, i, s) {
        let len = this.cages.length;
        let newLen = this.cages.push({
         _id: id,   price:p, name: n, imageUrl: i, snippet: s
        });
        return newLen > len;
    }

    update(id, p, n, i, s) {
        var index = _.findIndex(this.cages,
            (cage) => cage._id === id
        );
        if (index !== -1) {
            this.cages.splice(index, 1,
                {_id: id, price: p, name: n, imageUrl: i, snippet: s });
            return true;
        }
        return false;
    }

}

export default (new StubAPI());