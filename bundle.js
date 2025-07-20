(function () {
  'use strict';

  class Task {
    constructor(message) {
      this.message = message;
    }

    run() {
      return this.message;
    }
  }

  class User {
    constructor(task) {
      this.task = task;
    }

    do() {
      return this.task.run();
    }
  }

  const task = new Task("Писать код");
  const user = new User(task);

  console.log(user.do());

})();
