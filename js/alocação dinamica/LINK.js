function LinkedList() {

    let Node = function (element) {
        this.element = element;
        this.next = null;
    };

    let length = 0;
    let head = null;
    let esc = [];
    let x = 0;
    let y = 0;

    this.append = function (element) {
        let node = new Node(element), current;
        if (head === null) {
            head = node;
        }
        else {
            current = head;
            while (current.next) {
                current = current.next
            }
            current.next = node;
        }
        length++
        esc.push(node);
    };
    this.size = function () {
        return length;
    };
    this.returnEsc = function () {
        return esc;
    }
    this.excHead = function () {
        if (head === null) {
            return -1;
        }
        else {
            x = head.element;
            head = head.next;
            return x
        }
        this.insereC = function (element) {
            let NewNode = new Node(element)
            NewNode.next = this.head;
            this.head = NewNode
        }
        this.Get = function (index) {
            let aux = 0;
            let node = this.head;
            while (node) {
                if (node === index) {
                    return index;
                }
                aux++;
                node = node.next;
            }
            return null;
        }
        this.insereL = function (element, index) {
            if (head === null) {
                return -1;
            }
            if (index === 0) {
                this.head = new Node(data, this.head);
                return;
            }
            const ant = this.Get(index - 1);
            NewNode = new Node(element);
            NewNode.next = ant.next;
            ant.next = NewNode;
            return this.head
        }
        this.excL = function (index) {
            if (head === null) {
                return -1;
            }
            if (index === 0) {
                this.head = this.head.next;
                return;
            }
            const ant = this.Get(index - 1);
            if (ant === null || ant.next === null) {
                return;
            }
            ant.next = ant.next.next;
            return this.head;
        }
    };
}

lista = new LinkedList();
lista.append(10);
lista.append(12);
lista.excHead();
lista.insereC(15);
lista.Get(2);
lista.insereL(17);
console.log(lista.size());
console.log(lista.returnEsc());