try{
  console.log('hello');
  myName();
  console.log('world');
}
catch(error){
  console.log(`terjadi error(${error.name}) 
dikarenakan ${error.message}.
-------------------
detail nya sebagai berikut:

${error.stack}
-------------------`)
}
finally{
  console.log(`@program executed`);
}


let json = '{ "name": "Yoda", "age": 20 }';
 
try {
    let user = JSON.parse(json);
 
    console.log(user.name);
    console.log(user.age);
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}

let json2 = '{ this json sucks }';
 
try {
    let user = JSON.parse(json2);
 
    console.log(user.name);
    console.log(user.age);
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}

let json3 = '{ "age": 20 }';
 
try {
    let user = JSON.parse(json3);
 
    console.log(user.name); // undefined
    console.log(user.age);  // 20
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}



let json4 = '{ "age": 20 }';
 
try {
    let user = JSON.parse(json4);

    if(!user.name) {
      throw new SyntaxError('"name" key is required')
    }
    
    console.log(user.name); // undefined
    console.log(user.age);  // 20
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}

console.log(`---------------------------------`)

let json5 = '{ "name": "Yoda", "age": 20 }';
 
try {
    let user = JSON.parse(json5);
 
    if (!user.name) {
        throw new SyntaxError("'name' is required.");
    }
 
    errorCode;
 
    console.log(user.name); // Yoda
    console.log(user.age);  // 20
} catch (error) {
    console.log(`JSON Error: ${error.message}`);
}

console.log(`-=>`)

let json6 = '{ "name": "Yoda", "age": 20 }';

try {
    let user = JSON.parse(json6);
 
    if (!user.name) {
        throw new SyntaxError("'name' is required.");
    }
 
    errorCode;
 
    console.log(user.name); // Yoda
    console.log(user.age);  // 20
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log(`JSON Error: ${error.message}`);
    } else if (error instanceof ReferenceError) {
        console.log(error.message);
    } else {
        console.log(error.stack);
    }
}