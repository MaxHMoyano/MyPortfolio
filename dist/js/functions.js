// Rest parameters
const restParameters = (...printableThings) => {
  printableThings.forEach( elem => console.log(elem));
}

// Destructuring arrays
const destructuringArrays = () => {
  const things = [1, 2 , 3, 4, 5];
  let [a1, a2, a3, a4, a5] = things;
  let [b1, ...remainingThings] = things;
  let [, ...remainingThings2] = things;
  console.log(a1, a2, a3, a4, a5);
  console.log(b1, remainingThings);
  console.log(remainingThings2);
}

// Destructuring objects
const destructuringObjects = () => {
  let thing = {
    id: 25,
    style: 'none'
  };
  // let { id, style } = thing;
  let id, style;
  ({ id, style } = thing);
  console.log(id, style);
}

// spreadSyntax
const printSpreadSyntax = (a1, a2, a3) => {
  console.log(a1, a2, a3);
}
const spreadSyntax = (a1, a2, a3) => {
  let things = [1, 2, 3];
  printSpreadSyntax(...things);
  let things2 = 'abc';
  printSpreadSyntax(...things2)
}

// typeOf()
const typeOfThings = () => {
  console.log(typeof(1));
  console.log(typeof(false));
  console.log(typeof('nothign'));
  console.log(typeof(() => {}));
  console.log(typeof({}));
  console.log(typeof(null));
  console.log(typeof(undefined));
  console.log(typeof(NaN));
}
