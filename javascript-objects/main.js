var student = {
  firstName: 'Ray',
  lastName: 'Le',
  age: '23'
};

var fullName = student.firstName + ' ' + student.lastName;

student.livesInIrvine = false;
student.previousOccupation = 'student';

console.log('value of fullName: ' + fullName);
console.log('value of student.livesInIrvine: ' + student.livesInIrvine);
console.log('value of student.previousOccupation: ' + student.previousOccupation);

var vehicle = {
  make: 'Honda',
  model: 'Civic',
  year: 2009
};

vehicle['color'] = 'blue';
vehicle['isConvertible'] = false;

console.log('value of vehicle[\'color\']: ' + vehicle['color']);
console.log('value of vehicle[\'isConvertible\']: ' + vehicle['isConvertible']);
console.log('value of vehicle: ' + vehicle);

var pet = {
  name: 'Dusty',
  type: 'cat'
};

delete pet.name;
delete pet.type;

console.log('value of pet: ' + pet);
