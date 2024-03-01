// Invert
// Напишите функцию,
// которая создает объект, состоящий из инвертированных ключей и значений объекта.

// Если объект содержит повторяющиеся значения,
// последующие значения перезаписывают присвоения свойств предыдущих значений.

// Пример:
// invert({ a: 1, b: 2, c: 3 }) // { 1: a, 2: b, 3: c }

const Obj = { a: 1, b: 2, c: 3 };

const invert = (obj) => {
  let newObj = {};
  const entries = Object.entries(obj);
  entries.forEach(([key, value]) => {
    newObj[value] = key;
  });
  return console.log(newObj);
};

invert(Obj);
