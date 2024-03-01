// Languages Statistic

// Реализуйте функцию getLanguagesStatistic, которая поможет IT журналу подвести итоги 2019 года по популярности использования языков
// программирования. На входе функция получает массив отзывов пользователей. Необходимо вернуть объект в формате { languageName: count, anotherLanguageName: anotherCount, ... },
// где languageName - название языка в строке, а count - число отзывов, которые оставили программисты,
// использующие этот язык. При этом следует учитывать только те отзывы пользователей, которые были оставлены в 2019 году.
// Год отзыва хранится в поле year, язык - в поле language.

// Отзыв предоставлен в следующем формате:

// { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', year: 2019 }

// Данные на входе:
const data = [
  {
    firstName: "Noah",
    lastName: "M.",
    country: "Switzerland",
    continent: "Europe",
    age: 19,
    language: "C",
    year: 2019,
  },
  {
    firstName: "Anna",
    lastName: "R.",
    country: "Liechtenstein",
    continent: "Europe",
    age: 52,
    language: "JavaScript",
    year: 2019,
  },
  {
    firstName: "Piter",
    lastName: "G.",
    country: "Sweden",
    continent: "Europe",
    age: 30,
    language: "JavaScript",
    year: 2019,
  },
  {
    firstName: "Ramon",
    lastName: "R.",
    country: "Paraguay",
    continent: "Americas",
    age: 29,
    language: "Ruby",
    year: 2014,
  },
  {
    firstName: "George",
    lastName: "B.",
    country: "England",
    continent: "Europe",
    age: 81,
    language: "C",
    year: 2016,
  },
  {
    firstName: "Noah",
    lastName: "M.",
    country: "Switzerland",
    continent: "Europe",
    age: 19,
    language: "C",
    year: 2019,
  },
  {
    firstName: "Noah",
    lastName: "M.",
    country: "Switzerland",
    continent: "Europe",
    age: 19,
    language: "C",
    year: 2019,
  },
  {
    firstName: "Noah",
    lastName: "M.",
    country: "Switzerland",
    continent: "Europe",
    age: 19,
    language: "C",
    year: 2019,
  },
  {
    firstName: "Noah",
    lastName: "M.",
    country: "Switzerland",
    continent: "Europe",
    age: 19,
    language: "C",
    year: 2019,
  },
  {
    firstName: "Piter",
    lastName: "G.",
    country: "Sweden",
    continent: "Europe",
    age: 30,
    language: "JavaScript",
    year: 2019,
  },
  {
    firstName: "Piter",
    lastName: "G.",
    country: "Sweden",
    continent: "Europe",
    age: 30,
    language: "JavaScript",
    year: 2019,
  },
  {
    firstName: "Piter",
    lastName: "G.",
    country: "Sweden",
    continent: "Europe",
    age: 30,
    language: "JavaScript",
    year: 2019,
  },
  {
    firstName: "Piter",
    lastName: "G.",
    country: "Sweden",
    continent: "Europe",
    age: 30,
    language: "JavaScript",
    year: 2019,
  },
];

// Данные на выходе:
// console.log(result);
// {
//   C: 1,
//   JavaScript: 2
// }

// const result = data.filter((elem) => elem.year === 2019);
// console.log(result);

const getLanguagesStatistic = (arr) => {
  const result_2019 = arr.filter(({ year }) => year === 2019);
  const result_Js = result_2019.filter(
    ({ language }) => language === "JavaScript"
  ).length;
  const result_C = result_2019.filter(
    ({ language }) => language === "C"
  ).length;

  const result = { C: result_C, JavaScript: result_Js };
  return console.log(result);
};

getLanguagesStatistic(data);
