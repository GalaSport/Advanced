function greet(greeting, punctuation) {
    console.log(greeting + ', ' + this.name + punctuation);
}

const person = { name: 'Alice' };

greet.call(person, 'Hello', '!');

const person2 =  {name: "Anna"};

greet.call(person2, "How are you", "?");
