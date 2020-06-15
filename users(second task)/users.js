// Property 'id' of all array elements is always unique (id: 'as23').
// Transform this array into an object where object's property key is this id, and value is the array item itself.
// { 'as23' : {}}

const users = [
  {
    id: 'as23',
    nick: 'Octopus',
    firstName: 'John',
    LastName: 'Dou',
  },
  {
    id: 'as25',
    nick: 'Star',
    firstName: 'Andy',
    LastName: 'Lee',
  },
  {
    id: 'as77',
    nick: 'Wally',
    firstName: 'Liza',
    LastName: 'Corty',
  },
];

const object = {};
users.forEach(({ id, nick, firstName, LastName }) => (object[id] = { nick, firstName, LastName }));

console.log(object);
