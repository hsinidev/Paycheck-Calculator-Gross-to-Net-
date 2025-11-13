import React, { useState } from 'react';

const JsonLdSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "url": "https://example.com/",
        "name": "Paycheck Calculator (Gross to Net)",
        "description": "A modern, responsive Paycheck Calculator to estimate your net take-home pay based on gross salary, tax rate, and deductions.",
        "publisher": {
          "@type": "Organization",
          "name": "HSINI MOHAMED",
          "logo": {
            "@type": "ImageObject",
            "url": "https://example.com/logo.png"
          }
        }
      },
      {
        "@type": "WebApplication",
        "name": "Paycheck Calculator (Gross to Net)",
        "operatingSystem": "All",
        "applicationCategory": "FinanceApplication",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "Article",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://example.com/#article"
        },
        "headline": "Demystifying Your Paycheck: A Comprehensive Guide from Gross to Net Income and Smart Budgeting",
        "description": "Unlock financial clarity by understanding your paycheck. This guide breaks down gross vs. net pay, taxes, deductions, and provides actionable tips for budgeting with your take-home income.",
        "image": "https://picsum.photos/1200/800",
        "author": {
          "@type": "Person",
          "name": "HSINI MOHAMED"
        },
        "publisher": {
          "@type": "Organization",
          "name": "HSINI MOHAMED",
          "logo": {
            "@type": "ImageObject",
            "url": "https://example.com/logo.png"
          }
        },
        "datePublished": "2023-10-27",
        "dateModified": "2023-10-27"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the difference between gross and net pay?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Gross pay is your total earnings before any taxes or deductions are taken out. Net pay, or take-home pay, is the amount you actually receive after all taxes, benefits, and other contributions have been subtracted."
            }
          },
          {
            "@type": "Question",
            "name": "Why is my take-home pay so much lower than my salary?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Your take-home pay is lower than your gross salary due to mandatory deductions like federal and state taxes, Social Security, and Medicare (FICA). Additionally, voluntary deductions such as health insurance premiums, 401(k) contributions, and other benefits further reduce your gross pay to arrive at your net pay."
            }
          },
          {
            "@type": "Question",
            "name": "How can I increase my take-home pay?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can potentially increase your take-home pay by adjusting your tax withholdings (W-4 form), though this might mean you owe more at tax time. Other ways include reducing pre-tax contributions (like 401k), but this has long-term financial implications. The most effective ways are often negotiating a raise or reducing post-tax expenses through budgeting."
            }
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};


export const SeoArticle: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="bg-gray-800 bg-opacity-80 backdrop-blur-md p-6 md:p-10 rounded-xl border border-gray-700">
            <div className={`relative overflow-hidden transition-all duration-700 ease-in-out ${isExpanded ? 'max-h-[10000px]' : 'max-h-40'}`}>
                <article className="prose prose-invert lg:prose-xl max-w-none text-gray-300">
                    <JsonLdSchema />
                    <h2 className="text-yellow-400">Demystifying Your Paycheck: A Comprehensive Guide from Gross to Net Income and Smart Budgeting</h2>
                    <p className="lead">For many, a paycheck is the cornerstone of financial life. Yet, the document itself can often feel like a complex puzzle. You see the large 'gross pay' number and dream of what you could do with it, only to be brought back to reality by the smaller 'net pay' figure. What happens in between? This guide is designed to demystify every line on your pay stub, empowering you to understand where your money goes and how to build a powerful budget based on what you actually take home.</p>
                    
                    <h3>Table of Contents</h3>
                    <ul className="list-disc pl-5">
                        <li><a href="#gross-vs-net" className="text-indigo-400 hover:underline">Chapter 1: Gross Pay vs. Net Pay - The Fundamental Difference</a></li>
                        <li><a href="#taxes" className="text-indigo-400 hover:underline">Chapter 2: The Inevitable Deduction - Understanding Tax Withholding</a></li>
                        <li><a href="#deductions" className="text-indigo-400 hover:underline">Chapter 3: Common Payroll Deductions Explained</a></li>
                        <li><a href="#pay-stub" className="text-indigo-400 hover:underline">Chapter 4: How to Read and Understand Your Pay Stub</a></li>
                        <li><a href="#budgeting" className="text-indigo-400 hover:underline">Chapter 5: Building a Budget Based on Your Net Income</a></li>
                        <li><a href="#faq" className="text-indigo-400 hover:underline">Chapter 6: Frequently Asked Questions (FAQ)</a></li>
                    </ul>

                    <h3 id="gross-vs-net">Chapter 1: Gross Pay vs. Net Pay - The Fundamental Difference</h3>
                    <p>At the heart of personal finance is the crucial distinction between gross and net income. Grasping this concept is the first step toward financial literacy and effective money management.</p>
                    <h4 className="text-yellow-400">What is Gross Pay?</h4>
                    <p>Gross pay is the total amount of money you earn from your employer before any deductions are made. If your annual salary is $60,000, your gross monthly income is $5,000. This is the top-line number, the starting point for all paycheck calculations. It represents the full value of your labor for a given pay period.</p>
                    <h4 className="text-yellow-400">What is Net Pay?</h4>
                    <p>Net pay, often called 'take-home pay,' is the amount of money you actually receive in your bank account after all deductions have been subtracted from your gross pay. These deductions include mandatory taxes, contributions to retirement accounts, health insurance premiums, and other voluntary withholdings. This is the realistic figure you have available for your monthly expenses, savings, and investments.</p>
                    <p>The journey from gross to net is one of subtraction, and understanding those subtractions is key. Using a tool like the calculator on this page helps visualize this process instantly.</p>

                    <h3 id="taxes">Chapter 2: The Inevitable Deduction - Understanding Tax Withholding</h3>
                    <p>Taxes are the largest and most complex deduction for most people. The government requires employers to 'withhold' a portion of your income to pre-pay your estimated annual tax liability. This system is designed to prevent a massive tax bill at the end of the year.</p>
                    <h4 className="text-yellow-400">Key Taxes You'll See:</h4>
                    <ul className="list-disc pl-5">
                        <li><strong>Federal Income Tax:</strong> A progressive tax where higher income brackets are taxed at higher rates. The amount withheld is based on your W-4 form, which details your filing status and number of dependents.</li>
                        <li><strong>State and Local Income Tax:</strong> Most states and some cities levy their own income taxes, each with its own set of rules and rates.</li>
                        <li><strong>FICA Taxes (Federal Insurance Contributions Act):</strong> This is a flat-rate tax that funds two major programs:
                            <ul>
                                <li><strong>Social Security:</strong> A 6.2% tax on your income up to an annual limit.</li>
                                <li><strong>Medicare:</strong> A 1.45% tax on all of your earned income.</li>
                            </ul>
                            Your employer pays a matching amount for FICA taxes.
                        </li>
                    </ul>
                    <p>The goal of tax withholding is to pay close to your actual tax liability. Withholding too much results in a large refund (an interest-free loan to the government), while withholding too little can lead to a tax bill and potential penalties.</p>

                    <h3 id="deductions">Chapter 3: Common Payroll Deductions Explained</h3>
                    <p>Beyond taxes, your paycheck may include several other deductions, which can be categorized as pre-tax or post-tax.</p>
                    <h4 className="text-yellow-400">Pre-Tax Deductions</h4>
                    <p>These are subtracted from your gross pay *before* income taxes are calculated, which lowers your taxable income and, therefore, your tax bill. They are a powerful tool for saving money.</p>
                    <ul className="list-disc pl-5">
                        <li><strong>401(k) or 403(b) Contributions:</strong> Contributions to your employer-sponsored retirement plan are a common pre-tax deduction. This allows your retirement savings to grow tax-deferred.</li>
                        <li><strong>Health Insurance Premiums:</strong> The portion you pay for your medical, dental, or vision insurance is typically a pre-tax deduction.</li>
                        <li><strong>Flexible Spending Accounts (FSA) and Health Savings Accounts (HSA):</strong> Money set aside for qualified medical expenses, reducing your taxable income.</li>
                    </ul>
                    <h4 className="text-yellow-400">Post-Tax Deductions</h4>
                    <p>These are taken out of your paycheck *after* all taxes have been calculated. They don't reduce your taxable income.</p>
                    <ul className="list-disc pl-5">
                        <li><strong>Roth 401(k) Contributions:</strong> You pay taxes on these contributions now, but qualified withdrawals in retirement are tax-free.</li>
                        <li><strong>Disability Insurance:</strong> Premiums for short-term or long-term disability insurance may be post-tax.</li>
                        <li><strong>Charitable Contributions:</strong> Donations made through payroll deduction are typically post-tax.</li>
                    </ul>
                    
                    <h3 id="pay-stub">Chapter 4: How to Read and Understand Your Pay Stub</h3>
                    <p>Your pay stub is a detailed record of your earnings and deductions. While formats vary, they generally contain the same core information. Let's break down a typical pay stub.</p>
                    <ol className="list-decimal pl-5">
                        <li><strong>Employee Information:</strong> Your name, address, and employee ID.</li>
                        <li><strong>Pay Period:</strong> The start and end dates for which you are being paid.</li>
                        <li><strong>Gross Earnings:</strong> A breakdown of your earnings, including regular salary/wages, overtime, bonuses, etc. It will show the amount for the current period and a Year-to-Date (YTD) total.</li>
                        <li><strong>Pre-Tax Deductions:</strong> Each pre-tax deduction (401k, Health Insurance) will be listed with its current and YTD amounts.</li>
                        <li><strong>Taxes:</strong> Federal, State, Social Security, and Medicare taxes will be itemized, also with current and YTD figures.</li>
                        <li><strong>Post-Tax Deductions:</strong> Any deductions taken after taxes.</li>
                        <li><strong>Net Pay:</strong> The final amount deposited into your account.</li>
                    </ol>
                    <p>Regularly reviewing your pay stub is a good habit. Check for accuracy in your pay rate, hours worked, and deduction amounts. It's your official record, so understanding it is crucial.</p>

                    <h3 id="budgeting">Chapter 5: Building a Budget Based on Your Net Income</h3>
                    <p>A budget is not about restriction; it's about empowerment. It’s a plan for your money that ensures you can cover your needs, wants, and future goals. The most effective budgets are built using your net pay, not your gross pay, because that's the money you actually have.</p>
                    <h4 className="text-yellow-400">Step-by-Step Budgeting Guide:</h4>
                    <ol className="list-decimal pl-5">
                        <li><strong>Calculate Your Total Net Income:</strong> Add up all sources of take-home pay for the month.</li>
                        <li><strong>Track Your Expenses:</strong> For one month, track every single dollar you spend. Categorize your spending into fixed costs (rent, car payment), variable costs (groceries, gas), and discretionary spending (entertainment, dining out).</li>
                        <li><strong>Analyze and Create Your Budget:</strong> Compare your net income to your total expenses. A popular framework is the 50/30/20 rule:
                            <ul>
                                <li><strong>50% for Needs:</strong> Housing, utilities, transportation, groceries.</li>
                                <li><strong>30% for Wants:</strong> Hobbies, entertainment, travel.</li>
                                <li><strong>20% for Savings & Debt Repayment:</strong> Building an emergency fund, investing, paying off high-interest debt.</li>
                            </ul>
                        </li>
                        <li><strong>Implement and Adjust:</strong> Put your budget into action. Use apps or a simple spreadsheet. Review it monthly and make adjustments as your income or expenses change.</li>
                    </ol>
                    
                    <div className="overflow-x-auto my-8">
                        <table className="w-full text-left border-collapse">
                            <caption className="text-lg font-medium text-white p-3">Data Table: Gross vs. Net Pay Example</caption>
                            <thead>
                                <tr className="bg-gray-700">
                                    <th className="p-3 border border-gray-600">Metric</th>
                                    <th className="p-3 border border-gray-600">Monthly Calculation</th>
                                    <th className="p-3 border border-gray-600">Annual Calculation</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-600">
                                <tr><td className="p-3 border border-gray-600">Gross Salary</td><td className="p-3 border border-gray-600">$5,000.00</td><td className="p-3 border border-gray-600">$60,000.00</td></tr>
                                <tr><td className="p-3 border border-gray-600">Pre-Tax Deduction (401k)</td><td className="p-3 border border-gray-600">-$250.00</td><td className="p-3 border border-gray-600">-$3,000.00</td></tr>
                                <tr><td className="p-3 border border-gray-600 font-bold">Taxable Income</td><td className="p-3 border border-gray-600 font-bold">$4,750.00</td><td className="p-3 border border-gray-600 font-bold">$57,000.00</td></tr>
                                <tr><td className="p-3 border border-gray-600">Estimated Taxes (20%)</td><td className="p-3 border border-gray-600">-$950.00</td><td className="p-3 border border-gray-600">-$11,400.00</td></tr>
                                <tr><td className="p-3 border border-gray-600 font-bold text-green-400">Estimated Net Pay</td><td className="p-3 border border-gray-600 font-bold text-green-400">$3,800.00</td><td className="p-3 border border-gray-600 font-bold text-green-400">$45,600.00</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 id="faq">Chapter 6: Frequently Asked Questions (FAQ)</h3>
                    <h4 className="text-yellow-400">What is the difference between gross and net pay?</h4>
                    <p>Gross pay is your total earnings before any taxes or deductions are taken out. Net pay, or take-home pay, is the amount you actually receive after all taxes, benefits, and other contributions have been subtracted.</p>
                    <h4 className="text-yellow-400">Why is my take-home pay so much lower than my salary?</h4>
                    <p>Your take-home pay is lower than your gross salary due to mandatory deductions like federal and state taxes, Social Security, and Medicare (FICA). Additionally, voluntary deductions such as health insurance premiums, 401(k) contributions, and other benefits further reduce your gross pay to arrive at your net pay.</p>
                    <h4 className="text-yellow-400">How can I increase my take-home pay?</h4>
                    <p>You can potentially increase your take-home pay by adjusting your tax withholdings (W-4 form), though this might mean you owe more at tax time. Other ways include reducing pre-tax contributions (like 401k), but this has long-term financial implications. The most effective ways are often negotiating a raise or reducing post-tax expenses through budgeting.</p>
                    <h4 className="text-yellow-400">Are bonuses taxed differently than regular income?</h4>
                    <p>Bonuses are considered supplemental wages and are subject to the same taxes as regular income. However, they are often withheld at a higher flat rate (e.g., 22%) for federal taxes. You might get some of this back in your tax refund if your overall tax rate is lower.</p>
                </article>
                 {!isExpanded && (
                    <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-800 to-transparent pointer-events-none"></div>
                )}
            </div>
             <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-4 text-indigo-400 hover:text-indigo-300 font-semibold transition-colors duration-300 flex items-center"
            >
                {isExpanded ? 'Show Less' : 'Read Full Guide'}
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ml-1 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </button>
        </div>
    );
};