type Person ={
  name: string;
  age: number;
  isStudent: boolean;
  scores: number[];
  address: {
    street: string;
    city: string;
  };
  hobbies: string[];
};

const arrayOfObjects: Person[] = [
  {
    name: 'Poorna',
    age: 21,
    isStudent: true,
    scores: [85, 92, 78],
    address: {
      street: '123 Main St',
      city: 'Salem',
    },
    hobbies: ['reading', 'music'],
  },
  {
    name: 'Vaishu',
    age: 20,
    isStudent: true,
    scores: [90, 88, 76],
    address: {
      street: '456 Elm St',
      city: 'Chennai',
    },
    hobbies: ['sports', 'painting'],
  },
 
];


for (const person of arrayOfObjects) {

  console.log(person.name, person.age, person.isStudent);
  console.log('Scores:', person.scores);
  console.log('Address:', person.address.street, person.address.city);
  console.log('Hobbies:', person.hobbies.join(', '));
}
