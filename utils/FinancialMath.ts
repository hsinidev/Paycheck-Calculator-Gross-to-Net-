
import { CalculatorInputs, CalculationResults } from '../types';

/**
 * Calculates the net paycheck amount based on gross salary, pay frequency, tax rate, and deductions.
 * This is a simplified calculation for demonstration purposes.
 * @param {CalculatorInputs} inputs - The user's financial inputs.
 * @returns {CalculationResults} - The calculated breakdown of the paycheck.
 */
export const calculateNetPay = (inputs: CalculatorInputs): CalculationResults => {
    const { grossAnnualSalary, payFrequency, taxRate, preTaxDeduction } = inputs;

    const periodsPerYear = payFrequency;

    // 1. Calculate Gross Pay per period
    const grossPerPeriod = grossAnnualSalary / periodsPerYear;

    // 2. Calculate Taxable Income per period. Ensure it doesn't go below zero.
    const taxableIncomePerPeriod = Math.max(0, grossPerPeriod - preTaxDeduction);

    // 3. Calculate Tax Withheld per period
    const taxWithheldPerPeriod = taxableIncomePerPeriod * (taxRate / 100);

    // 4. Calculate Net Pay per period
    const netPayPerPeriod = grossPerPeriod - taxWithheldPerPeriod - preTaxDeduction;

    // 5. Calculate Total Annual Tax Withheld
    const annualTax = taxWithheldPerPeriod * periodsPerYear;
    
    return {
        grossPerPeriod,
        taxWithheldPerPeriod,
        netPayPerPeriod: Math.max(0, netPayPerPeriod), // Net pay can't be negative
        annualTax,
    };
};
