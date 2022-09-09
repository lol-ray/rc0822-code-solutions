var books = [
  {
    isbn: '978-0307588371',
    title: 'Gone Girl',
    author: 'Gillian Flynn'
  },
  {
    isbn: '978-0679734529',
    title: 'Notes from Underground',
    author: 'Fyodor Dostoevsky'
  },
  {
    isbn: '978-0440226192',
    title: 'The Gift of Fear',
    author: 'Gavin de Becker'
  }
];

console.log('books array:', books);
console.log('books typeof:', typeof books);

var booksJSON = JSON.stringify(books);

console.log('books JSON:', booksJSON);

var studentJSON = '{"id": 1,"name": "Jeff Jefferson"}';

console.log('student JSON:', studentJSON);
console.log('student JSON typeof:', typeof studentJSON);

var student = JSON.parse(studentJSON);

console.log('student:', student);
console.log('student typeof:', typeof student);
