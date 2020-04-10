let fruits = ['apple', 'Mango']

let todos = [
    {id: 1, text: 'task', completed: false},
    {id: 2, text: 'task2', completed: true}
]


//annotations

let Annotatedfruits: string[] = ['apple', 'Mango']

let Annotatedtodos : {id: number, text: string, completed: boolean}[] = [
    {id: 1, text: 'task', completed: false},
    {id: 2, text: 'task2', completed: true}
]

console.log('Fruits: ', Annotatedfruits)
console.log('todos', Annotatedtodos)