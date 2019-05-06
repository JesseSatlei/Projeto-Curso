function LinkedList() {
    let Node = function (element) {
        this.element = element;
        this.next = null;
    };
    let length = 0
    let head = null;
    let elms = [];
    this.append = function (element) {
        let node = new Node(element), current;
        if (head == null) {
            head = node;
        }
        else {
            current = head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        length++;
        elms.push(node);
    };

    this.size = function () {
        return length;
    };
    this.print = function () {
        let current = head;
        string = "";
        while (current) {
            string += current.element + (current.next ? '=>' : '');
            current = current.next;
        }
        return string;
    };
    this.remove = function () {
        let x;
        if (head == null) {
            return -1
        }
        else {
            x = head.element;
            head = head.next;
            return x
        }
    };
    this.inserir = function (element) {
        let newnode = new Node(element)

        newnode.next = head
        head = newnode

        return head;
    }
    this.retornar = function (element) {
        let aux = 0;
        let node = head;
        let num = false;
        while (node) {
            if (node.element == element) {
                return aux;
            }
            else {
                node = node.next;
                aux++;
            }
        }
        if (num == false) {
            return -1
        }
    }
    this.tira = function(element){
        let x = 0;
        let node = head;
        let num = false;
        while (node) {
            if (node.element == element) {
                x = node.element;
                node = node.next
                return x
            }
            else {
                node = node.next;
                x++;
            }
        }
        if (num == false) {
            return -1
        }
    }



}
lista = new LinkedList();
lista.append(10);
lista.append(12);
lista.append(15);
lista.inserir(99);
//console.log(lista.remove());
console.log(lista.size());
console.log(lista.retornar(15));
console.log(lista.tira(99));
console.log(lista.print());