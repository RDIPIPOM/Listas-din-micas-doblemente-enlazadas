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
                    if (aux != this._start) {
                        aux.previous.next = node;
                        node.previous = aux.previous;
                        node.next = aux;
                        aux.previous = node;
                    } else {//Bottom
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
        let objectFound = this.query(code);
        if (objectFound != null) {
            if (objectFound.next != null && objectFound.previous != null) { //Middle
                objectFound.previous.next = objectFound.next;
                objectFound.next.previous = objectFound.previous;
            } else if (objectFound.previous === null) { //Botton
                this._start = objectFound.next;
                objectFound.next.previous = null;
            } else { //top                    
                objectFound.previous.next = null;
            }
            return true;
        } else
            return false;
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
}