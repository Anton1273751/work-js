// Merge

// Реализуйте функцию merge, которая будет принимать неограниченное количество объектов в качестве аргументов и возвращать новый
// объект, который должен содержать все поля со всех объектов. Если ключи в объектах повторяются, то каждый последующий объект при
// совпадении ключей должен иметь больший приоритет над предыдущим. Порядок полей в результирующем объекте не важен.

// Пример:

// {
//   name: 'John',
//   surname: 'Klein',
//   age: 20,
//   profession: 'frontend developer',
//   country: 'USA',
// }

const merge = (...Obj) => {
  return Obj.reduce((acc, obj) => Object.assign(acc, obj));
};

console.log(
  merge(
    {
      name: "John",
      age: 22,
    },
    {
      surname: "Klein",
      age: 10,
      profession: "student",
    },
    {
      profession: "frontend developer",
      country: "USA",
    }
  )
);
