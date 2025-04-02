//COLAS (QUEUE)

class Queue{
    constructor(){
        this.queue = [];
    }

    Enqueue(data){
        this.queue = [data, ...this.queue];
    }

    Dequeue(){
        let frontElement =this.queue[this.queue.length-1];
        let newQueue = [];
        for(let i=0; i<this.queue.length-1;i++){
            newQueue = [...newQueue, this.queue[i]];
        }
        this.queue = newQueue;
        return frontElement;
    }

    Front(){
        return this.queue[this.queue.length-1];
    }

    isEmpty(){
        return this.queue.length === 0;
    }
}

const myQueue = new Queue();

myQueue.Enqueue(6);
myQueue.Enqueue(2);
myQueue.Enqueue(5);

console.log(myQueue.Front());
console.log(myQueue.Dequeue());
console.log(myQueue.isEmpty());

console.log(myQueue);
