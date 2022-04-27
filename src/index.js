import "./styles.css";

let str = "Suraj is a good boy.";

const findVowels = (str) => {
  let finalStr = [];

  finalStr.push(...str.match(/[aeiou]/gi));
  finalStr.push(...str.split(/[aeiou]/gi));

  return finalStr.join("").replace(/ /g, "");
};

const res = findVowels(str);

console.log(res);
