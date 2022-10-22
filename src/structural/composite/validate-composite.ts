// COMPONENT
export abstract class ValidationComponent {
  abstract validate(value: unknown): boolean;
}

// LEAF
export class ValidateEmail extends ValidationComponent {
  validate(value: unknown): boolean {
    if (typeof value !== "string") return false;
    return /@/.test(value);
  }
}

export class ValidateString extends ValidationComponent {
  validate(value: unknown): boolean {
    return typeof value === "string";
  }
}

export class ValidateNumber extends ValidationComponent {
  validate(value: unknown): boolean {
    if (typeof value !== "string") return false;
    return /\d+/.test(value);
  }
}

// COMPOSITE
export class ValidateComposite extends ValidationComponent {
  private readonly children: ValidationComponent[] = [];

  validate(value: unknown): boolean {
    for (const child of this.children) {
      const validation = child.validate(value);
      if (!validation) return false;
    }
    return true;
  }

  add(...validations: ValidationComponent[]): void {
    validations.forEach((validation) => this.children.push(validation));
  }
}

// CLIENT
const validateEmail = new ValidateEmail();
const validateNumber = new ValidateNumber();
const validateString = new ValidateString();
const validationComposite = new ValidateComposite();
validationComposite.add(validateEmail, validateNumber, validateString);
console.log(validationComposite.validate("a@a2"));
