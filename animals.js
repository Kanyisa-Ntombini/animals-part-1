class Animal {
  constructor(name) {
    this._name = name;
  }

  eat() {
    console.log(`${this._name} eats`);
  }

  sound() {
    console.log('sound...');
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  sound() {
    console.log('Dog barks');
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
  }

  sound() {
    console.log('Cat meows');
  }
}

class Home {
  
}