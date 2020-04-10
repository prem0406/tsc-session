function sum(x, y) {
    return x + y
}

function createTodo(){
    return {
        id: 1,
        text: 'Task',
        completed: false
    }
}

console.log('Sum: ', sum(10,20))
console.log('todos', createTodo())

function Annotatedsum(x: number, y : number) : number {
    return x + y
}

function AnnotatedcreateTodo() : {id: number, text: string, completed: boolean}{
    return {
        id: 1,
        text: 'Task',
        completed: false
    }
}

console.log('AnnotatedSum: ', Annotatedsum(10,20))
console.log('Annotatedtodos', AnnotatedcreateTodo())

// signature of callback:
// 1. paramater: {data: string}
// 2. return type: string
let callback: (x: string, y: {data: string}) => string;
// after some lines of code....
// structure of repsonse is:
//    response = string and  { data: 'hello' }
callback = function (message, response): string {
    return message + ' ' + response.data;
};

console.log('callback("hello", {data: "world"}): ', callback('hello', { data: 'world'}));