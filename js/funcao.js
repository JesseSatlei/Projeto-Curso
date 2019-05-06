/*
FILA
function calcular(){
    let fila = [], x;
    x = parseInt(prompt("Informe um número: "));
    fila.push(x);
    fila.push(1);
    fila.push(2);

    console.log("Fila: " + fila);

    x = fila.shift();
    //shift remove o primeiro elemento do vetor
    console.log("elemento: " + x);
    console.log("Fila: " + fila);

}
*/

function LinkedList(){
    let Node = function(element){
        this.element = element;
        this.next = null;
    };

    let length = 0;
    let head = null;
    
    this.append = function(element){
        let node = new Node(element), current;
        if(head === null){
            head = node;
        } else{
            current = head;
            while (current.next){
                current = current.next
            }
            current.next = node;
        }
        length++;
        this.size = function(){
            return length;
        }
    };

    this.mostrar = function(){
        let current = head;
        let string = "";
        while(current){
            string += current.element + (current.element ? ' => ' : '');
            current = current.next;
        }
        return string;
    };

    this.remover = function(){
        let x;
        if(head == null){
            return -1;
        } else{
            x = head.element;
            head = head.next;
            return x;
        }
    }

    

    this.inserir = function(element){
        let newmode = new Node(element);
        newmode.next = head;
        head = newmode;
        return head;
    }

    this.retornar = function(element){
        let aux = 0;
        let node = head;
        
        while(node){
            if(aux == element){
                return node;
            }
            aux++;
            node = node.next;
            
        }
        
    }
    
    this.removerPo = function(element){
        let x = 0;
        if(head === null){
            return -1;
        } 
        if(element === 0) {
            this.head = this.head.next;
            return 0;
        }
        const ant = this.retornar(element -1);
        if(ant == null || ant.next === null){
            return -1;
        }
        x = ant.next;
        ant.next = ant.next.next;
        return x;
        
    }
    
    /*
    this.removerPo = function(index){
        let current = head;
        let currentLast = head;
        let currentIndex = 1;
        while(current){
            if(currentIndex == index && currentIndex == head){
                head = current.next;
                return current;
            }
            else if(currentIndex == index){
                currentLast.next = current.next;
                return current;
            }
            else{
                currentLast = current;
                current = current.next;
                currentIndex++;
            }
        }
    }
    */
}

lista = new LinkedList();

lista.append(10);
lista.append(12);
lista.inserir(44);
//console.log(lista.size());//tamanho
console.log(lista.mostrar());
//console.log(lista.remover());
console.log(lista.removerPo(2));
console.log(lista.retornar(1));
console.log(lista.mostrar());