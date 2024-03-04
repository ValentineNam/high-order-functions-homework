const task1 = (arr) => {
    arr.forEach(element => {
        console.log(`Привет, ${element}`);
    });
};

const t1Array = ['Иван', 'Мария', 'Алексей', 'Ольга', 'Сергей', 'Анна'];

console.log('Task 1');
task1(t1Array);

const task2 = (arr) => {
    return arr.map(element => element * 10);
};

const t2Array = [1, 2, 3, 4, 5];
const t2ModifiedArray = task2(t2Array);

console.log('Task 2');
console.log(`Array:`);
console.log(t2Array);
console.log(`Modified array:`);
console.log(t2ModifiedArray);

const task3 = (arr) => {
    return arr.filter(element => element > 10);
};

const t3Array = [5, 12, 8, 130, 44];
const t3ModifiedArray = task3(t3Array);

console.log('Task 3');
console.log(`Array:`);
console.log(t3Array);
console.log(`Modified array:`);
console.log(t3ModifiedArray);