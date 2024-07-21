import React, { useState } from 'react';
import './Payslip.css'; // Import the CSS file

const Payslip = () => {
  const [grossIncome, setGrossIncome] = useState(0);
  const [payePercentage, setPayePercentage] = useState(0);
  const [pensionPercentage, setPensionPercentage] = useState(0);

  const calculateDeductions = () => {
    const monthlyPaye = (grossIncome * payePercentage) / 100;
    const monthlyPension = (grossIncome * pensionPercentage) / 100;
    const totalMonthlyDeduction = monthlyPaye + monthlyPension;
    const monthlyTakeHome = grossIncome - totalMonthlyDeduction;

    const yearlyGrossIncome = grossIncome * 12;
    const yearlyPaye = monthlyPaye * 12;
    const yearlyPension = monthlyPension * 12;
    const totalYearlyDeduction = yearlyPaye + yearlyPension;
    const yearlyTakeHome = yearlyGrossIncome - totalYearlyDeduction;

    return {
      monthlyPaye,
      monthlyPension,
      totalMonthlyDeduction,
      monthlyTakeHome,
      yearlyGrossIncome,
      yearlyPaye,
      yearlyPension,
      totalYearlyDeduction,
      yearlyTakeHome,
    };
  };

  const {
    monthlyPaye,
    monthlyPension,
    totalMonthlyDeduction,
    monthlyTakeHome,
    yearlyGrossIncome,
    yearlyPaye,
    yearlyPension,
    totalYearlyDeduction,
    yearlyTakeHome,
  } = calculateDeductions();

  return (
    <div className="payslip-container">
      <h1 className="title">Employee Payslip</h1>
      
      <div className="input-section">
        <div className="input-group">
          <label className="input-label">Gross Income</label>
          <input
            type="number"
            value={grossIncome}
            onChange={(e) => setGrossIncome(parseFloat(e.target.value))}
            className="input-field"
            placeholder="Enter gross income"
          />
        </div>
        <div className="input-group">
          <label className="input-label">PAYE (%)</label>
          <input
            type="number"
            value={payePercentage}
            onChange={(e) => setPayePercentage(parseFloat(e.target.value))}
            className="input-field"
            placeholder="Enter PAYE percentage"
          />
        </div>
        <div className="input-group">
          <label className="input-label">Pension (%)</label>
          <input
            type="number"
            value={pensionPercentage}
            onChange={(e) => setPensionPercentage(parseFloat(e.target.value))}
            className="input-field"
            placeholder="Enter pension percentage"
          />
        </div>
      </div>

      <div className="table-container">
        <table className="payslip-table">
          <thead>
            <tr>
              <th className="table-header">Salary Breakdown</th>
              <th className="table-header">Year to Date</th>
              <th className="table-header">Current Month</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="table-cell">Gross Income</td>
              <td className="table-cell">₦{yearlyGrossIncome.toFixed(2)}</td>
              <td className="table-cell">₦{grossIncome.toFixed(2)}</td>
            </tr>
            <tr>
              <td className="table-cell">PAYE</td>
              <td className="table-cell">₦{yearlyPaye.toFixed(2)}</td>
              <td className="table-cell">₦{monthlyPaye.toFixed(2)}</td>
            </tr>
            <tr>
              <td className="table-cell">Pension</td>
              <td className="table-cell">₦{yearlyPension.toFixed(2)}</td>
              <td className="table-cell">₦{monthlyPension.toFixed(2)}</td>
            </tr>
            <tr>
              <td className="table-cell">Total Deductions</td>
              <td className="table-cell">₦{totalYearlyDeduction.toFixed(2)}</td>
              <td className="table-cell">₦{totalMonthlyDeduction.toFixed(2)}</td>
            </tr>
            <tr className="table-summary">
              <td className="table-cell">Take-Home Pay</td>
              <td className="table-cell">₦{yearlyTakeHome.toFixed(2)}</td>
              <td className="table-cell">₦{monthlyTakeHome.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payslip;