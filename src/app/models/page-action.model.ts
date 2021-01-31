export class PageActionModel {
  constructor(
    public readonly icon: string,
    public readonly onClick: () => void
  ) { }
}