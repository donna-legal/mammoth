import { StringToken } from "../tokens";

export abstract class Keyword {
  abstract toString(): string;

  toTokens() {
    return [
      new StringToken(this.toString()),
    ];
  }
}

export * from './current-timestamp';
export * from './default';
export * from './now';
export * from './uuid-generate-v4';