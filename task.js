export class Task {
  constructor(message) {
    this.message = message;
  }

  run() {
    return this.message;
  }
}
