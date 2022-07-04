class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError"
  }
}
function validateNumberInput(para, para1, para2) {
  if (typeof para != 'number') {
    throw new ValidationError('Argumen pertama harus number')
  }
  if (typeof para1 != 'number') {
    throw new ValidationError('Argumen kedua harus number')
  }
  if (typeof para2 != 'number') {
    throw new ValidationError('Argumen ketiga harus number')
  }
}


const detectTriangle = (a, b, c) => {

  try{
    validateNumberInput(a, b, c);
    if (a === b && b === c) {
      return 'Segitiga sama sisi';
    }
    if (a === b || a === c || b === c) {
      return 'Segitiga sama kaki';
    }
    return 'Segitiga sembarang';
  }
  catch(err) {
    return err.message;
  }
};

console.log(detectTriangle(1,1,1));