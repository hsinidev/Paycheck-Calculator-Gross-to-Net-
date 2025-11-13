import React, { useState, useCallback } from 'react';
import { PayFrequency, CalculatorInputs, CalculationResults } from '../types';
import { calculateNetPay } from '../utils/FinancialMath';

const InputField: React.FC<{ label: string; id: string; name: string; type?: string; value: number; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; placeholder?: string, step?: string }> = ({ label, id, name, type = "number", value, onChange, placeholder, step = "0.01" }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-300 mb-1">{label}</label>
        <input
            type={type}
            id={id}
            name={name}
            value={value || ''}
            onChange={onChange}
            placeholder={placeholder}
            step={step}
            className="w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
        />
    </div>
);

const PaycheckCalculatorTool: React.FC = () => {
    const [inputs, setInputs] = useState<CalculatorInputs>({
        grossAnnualSalary: 75000,
        payFrequency: PayFrequency.BiWeekly,
        taxRate: 22,
        preTaxDeduction: 200,
    });
    const [results, setResults] = useState<CalculationResults | null>(null);

    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setInputs(prev => ({
            ...prev,
            [name]: parseFloat(value) || 0
        }));
    }, []);

    const handleCalculate = useCallback(() => {
        const calculatedResults = calculateNetPay(inputs);
        setResults(calculatedResults);
    }, [inputs]);
    
    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
    };

    return (
        <div className="max-w-4xl mx-auto bg-gray-800 bg-opacity-80 backdrop-blur-md p-6 md:p-8 rounded-xl shadow-2xl border border-gray-700">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-6">Estimate Your Take-Home Pay</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <InputField 
                    label="Gross Annual Salary"
                    id="grossAnnualSalary"
                    name="grossAnnualSalary"
                    value={inputs.grossAnnualSalary}
                    onChange={handleInputChange}
                    placeholder="e.g., 75000"
                />

                <div>
                    <label htmlFor="payFrequency" className="block text-sm font-medium text-gray-300 mb-1">Pay Frequency</label>
                    <select
                        id="payFrequency"
                        name="payFrequency"
                        value={inputs.payFrequency}
                        onChange={handleInputChange}
                        className="w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                    >
                        <option value={PayFrequency.Weekly}>Weekly</option>
                        <option value={PayFrequency.BiWeekly}>Bi-Weekly</option>
                        <option value={PayFrequency.Monthly}>Monthly</option>
                    </select>
                </div>

                <InputField 
                    label="Estimated Total Tax Rate (%)"
                    id="taxRate"
                    name="taxRate"
                    value={inputs.taxRate}
                    onChange={handleInputChange}
                    placeholder="e.g., 22"
                />

                <InputField 
                    label="Pre-Tax Deduction (per paycheck)"
                    id="preTaxDeduction"
                    name="preTaxDeduction"
                    value={inputs.preTaxDeduction}
                    onChange={handleInputChange}
                    placeholder="e.g., 200"
                />
            </div>

            <div className="text-center mb-8">
                <button
                    onClick={handleCalculate}
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg text-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
                >
                    Calculate Take-Home Pay
                </button>
            </div>

            {results && (
                <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg border border-gray-700 animate-fade-in">
                    <h3 className="text-xl font-semibold text-center text-yellow-400 mb-6">Calculation Results</h3>
                    
                    <div className="text-center mb-8 p-6 rounded-lg bg-gradient-to-br from-green-900/30 to-gray-900/20">
                        <p className="text-lg text-gray-300">Estimated Net Paycheck Amount</p>
                        <p className="text-4xl md:text-5xl font-bold text-green-400 tracking-tight drop-shadow-lg">{formatCurrency(results.netPayPerPeriod)}</p>

                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center mb-6">
                        <div>
                            <p className="text-md text-gray-400">Tax Withheld (per paycheck)</p>
                            <p className="text-2xl font-semibold text-red-400">{formatCurrency(results.taxWithheldPerPeriod)}</p>
                        </div>
                        <div>
                            <p className="text-md text-gray-400">Total Annual Tax Withheld</p>
                            <p className="text-2xl font-semibold text-red-400">{formatCurrency(results.annualTax)}</p>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <caption className="text-lg font-medium text-white mb-2 sr-only">Paycheck Breakdown</caption>
                            <tbody className="divide-y divide-gray-700">
                                <tr className="hover:bg-gray-800/50 transition-colors">
                                    <td className="p-3 text-gray-300">Gross Paycheck</td>
                                    <td className="p-3 text-right font-mono text-white">{formatCurrency(results.grossPerPeriod)}</td>
                                </tr>
                                <tr className="hover:bg-gray-800/50 transition-colors">
                                    <td className="p-3 text-gray-300">Less: Taxes</td>
                                    <td className="p-3 text-right font-mono text-red-400">- {formatCurrency(results.taxWithheldPerPeriod)}</td>
                                </tr>
                                <tr className="hover:bg-gray-800/50 transition-colors">
                                    <td className="p-3 text-gray-300">Less: Deductions</td>
                                    <td className="p-3 text-right font-mono text-yellow-500">- {formatCurrency(inputs.preTaxDeduction)}</td>
                                </tr>
                                <tr className="border-t-2 border-green-500">
                                    <td className="p-3 font-bold text-white">Equals: Net Paycheck</td>
                                    <td className="p-3 text-right font-bold font-mono text-green-400">{formatCurrency(results.netPayPerPeriod)}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
            <style jsx>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 0.5s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

export default PaycheckCalculatorTool;