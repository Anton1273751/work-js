// Урок с кодом

// DeepEqual

// Напишите функцию, которая проверяет на равенство два объекта, учитывая их вложенность.

// Два объекта считаются равными, если у них все свойства одинаковы.
// В случае, если одно из свойств - само объект, мы сравниваем на
// равенство эти объекты по тому же алгоритму.

// Пример:

const firstObject = {
  a: {
    b: {
      c: 1,
      d: "string",
      e: {
        num: 1,
      },
    },
  },
};

const secondObject = {
  a: {
    b: {
      e: {
        num: 1,
      },
      d: "string",
      c: 1,
    },
  },
};

const test1 = {
  b: "1",
  c: 2,
};

const test2 = {
  c: 2,
  b: "1",
};

const deepEqual = (obj1, obj2) => {
  if (typeof obj1 === "object" && typeof obj2 === "object") {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
      return false;
    }
    for (let key of keys1) {
      if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
        return false;
      }
    }
  } else {
    return obj1 === obj2;
  }
  return true;
};

console.log(deepEqual(firstObject, secondObject)); // true
// deepEqual({ a: 1, b: 3 }, { b: 2, a: 1 }); // false
// deepEqual(1, 2); // false
// deepEqual(true, false); // false
