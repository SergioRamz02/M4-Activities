//PILAS (STACKS)
class Stack {
    constructor(){
        this.stack = [];
    }

    Push(data){
        this.stack = [...this.stack, data];
    }

    Pop(){
        let topElement =this.stack[this.stack.length-1];
        let newStack = [];
        for(let i=0; i<this.stack.length-1;i++){
            newStack = [...newStack, this.stack[i]];

        }
        this.stack = newStack;
        return topElement;
    }

    Peek(){
        return this.stack[this.stack.length-1];
    }

    isEmpty(){
        return this.stack.length === 0;
    }
}

const myStack = new Stack();

myStack.Push(5);
myStack.Push(8);
myStack.Push(3);
myStack.Push(9);

console.log(myStack.Peek());
console.log(myStack.Pop());
console.log(myStack.isEmpty());


console.log(myStack);

const secondStack = new Stack();

console.log(secondStack.isEmpty());

