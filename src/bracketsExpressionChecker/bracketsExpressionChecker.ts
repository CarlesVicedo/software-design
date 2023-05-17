// Extract stack to another class

class BracketsExpressionChecker {
  // TODO: Make all private
  #stack: string[];
  openCharacters = ['(', '[', '{'];
  closeCharacters = [')', ']', '}'];

  constructor() {
    this.#stack = [];
  }

  isOdd(expression: string): boolean {
    return expression.length % 2 === 0;
  }

  add(character: string): void {
    this.#stack.push(character);
  }

  extract(): string | undefined {
    return this.#stack.pop();
  }

  clean(): void {
    this.#stack = [];
  }

  handleClosingTag(character: string): boolean {
    const lastStackValue: string | undefined = this.extract();
    let result: boolean = true;

    if (
      lastStackValue &&
      this.closeCharacters.indexOf(character) !==
        this.openCharacters.indexOf(lastStackValue)
    ) {
      result = false;
      return result;
    }

    if (
      lastStackValue &&
      this.closeCharacters.indexOf(character) ===
        this.openCharacters.indexOf(lastStackValue)
    ) {
      result = true;
    }

    return result;
  }

  check(expression: string): void | boolean {
    if (!this.isOdd(expression)) {
      return false;
    }

    for (const character of expression) {
      if (this.openCharacters.includes(character)) {
        this.add(character);
      }

      if (
        this.closeCharacters.includes(character) &&
        !this.handleClosingTag(character)
      ) {
        return false;
      }
    }

    return this.#stack.length === 0;
  }
}

export default BracketsExpressionChecker;
