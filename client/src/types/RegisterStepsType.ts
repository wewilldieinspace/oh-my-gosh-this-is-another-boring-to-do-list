export interface RegisterStepsType {
  component: () => JSX.Element,
  mainTitle: string,
  stepTitle: string
  failMessage: string,
  successMessage?: string,
}
