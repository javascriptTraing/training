interface Human {name: string, age: number}
interface Worker extends Human {job: string}
interface Manager extends Worker {bonus: number}