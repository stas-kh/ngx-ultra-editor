export class SyntaxNode {
  constructor(
    public text: string,
    public isBold: boolean = false,
    public isItalic: boolean = false,
    public isUnderlined: boolean = false
  ) {}
}
