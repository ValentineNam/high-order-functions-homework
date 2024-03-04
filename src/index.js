const task1 = (arr) => {
    arr.array.forEach(element => {
        console.log(`Привет, ${element}`);
    });
}

const t1Array = ['Иван', 'Мария', 'Алексей', 'Ольга', 'Сергей', 'Анна'];

console.log('Task 1');
task1(t1Array);