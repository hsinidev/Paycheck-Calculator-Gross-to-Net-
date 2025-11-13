
export enum PayFrequency {
  Weekly = 52,
  BiWeekly = 26,
  Monthly = 12,
}

export interface CalculatorInputs {
  grossAnnualSalary: number;
  payFrequency: PayFrequency;
  taxRate: number;
  preTaxDeduction: number;
}

export interface CalculationResults {
  grossPerPeriod: number;
  taxWithheldPerPeriod: number;
  netPayPerPeriod: number;
  annualTax: number;
}
