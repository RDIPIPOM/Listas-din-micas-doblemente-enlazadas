export default class LinkedList {
    constructor() {
        this._start = null;
    }

    add(node) {
        if (this.query(node.code) === null) {
            if (this._start != null) {
                let aux = this._start;
                while (aux.next != null && node.code > aux.code)
                    aux = aux.next;
                if (node.code < aux.code) { //Middle
                    if(aux != this._start){
                        aux.previous.next = node;
                        node.previous = aux.previous;
                        node.next = aux;
                        aux.previous = node;
                    }else{//Bottom
                        this._start = node;
                        node.next = aux;
                        aux.previous = node;
                    }
                } else { //Top
                    aux.next = node;
                    node.previous = aux;
                }
            } else //set start
                this._start = node;
            return true;
        } else
            return false;
    }

    query(code) {
        let aux = this._start;
        let objectFound = null;
        while (aux != null && objectFound === null) {
            if (aux.code === code)
                objectFound = aux;
            aux = aux.next;
        }

        return objectFound;
    }

    delete(code) {

    }

    report() {
        let aux = this._start;
        let string = '';
        while (aux != null) {
            string = string + '<br>' + aux.toString();
            aux = aux.next;
        }
        return string;
    }

    reverseReport() {
        let aux = this._start;
        let string = '';
        while (aux != null) {
            string = aux.toString() + '<br>' + string;
            aux = aux.next;
        }
        return '<br>' + string;
    }

    _isAValidPosition(position) {
        if (position >= 0) {
            if (position <= this._totalNodes() + 1)
                return true;
            else
                return false;
        } else
            return false;
    }

    _totalNodes() {
        let totalNodes = 0;
        let aux = this._start;
        while (aux != null) {
            totalNodes++;
            aux = aux.next;
        }

        return totalNodes;
    }
}