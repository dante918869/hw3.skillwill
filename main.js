// dav. #1

const func1 = (a, b, c, d, e) => {
  n = a + b + c + d + e;
  n > 2;
  const arr1 = [(first = a + b), (second = c * d * e)];
  return arr1;
};

console.log(func1(1, 2, 3, 4, 5));

// #2

const func2 = () => {
  const user = {
    banks: {
      city: "Tbilisi",
      adress: "Tamarashvili 13",
    },
  };
  return user.banks.adress.city;
  //   return user.banks.adress.city.number;
};

console.log(func2);

// #3

function func3() {
  const obj = {
    name: "john",
    surname: "johnson",
    company: "Skilwill",
  };
  const { ...newObj } = obj;
  return newObj;
}

console.log(func3);
