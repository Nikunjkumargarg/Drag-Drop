type a = {
  ab: string;
  bc: number;
};

type b = {
  ba: string;
  bb: number;
};

type abc = a & b;

const hello: abc = {
  ab: "nikunj",
  bc: 23,
  ba: "asdf",
  bb: 54,
};

console.log(hello);
