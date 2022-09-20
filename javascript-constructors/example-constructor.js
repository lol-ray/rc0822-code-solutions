function ExampleConstructor() {

}

console.log('ExampleConstructor prototype property:', Object.getPrototypeOf(ExampleConstructor));
console.log('ExampleConstructor typeof:', typeof ExampleConstructor);

var newConstructor = new ExampleConstructor();

console.log('newConstructor value:', newConstructor);

var constructorInstance = newConstructor instanceof ExampleConstructor;

console.log('constructorInstance:', constructorInstance);
