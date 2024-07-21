import React, { useState } from 'react';
import './Payslip.css'; // Import the CSS file
import jsPDF from 'jspdf';

const Payslip = () => {
  // State variables
  const [employeeId, setEmployeeId] = useState('');
  const [employeeName, setEmployeeName] = useState('');
  const [slipDate, setSlipDate] = useState('');
  const [grossIncome, setGrossIncome] = useState(0);
  const [payePercentage, setPayePercentage] = useState(0);
  const [pensionPercentage, setPensionPercentage] = useState(0);
  const [housingAllowancePercentage, setHousingAllowancePercentage] = useState(0);
  const [staffPurchasePercentage, setStaffPurchasePercentage] = useState(0);
  const [commissionPercentage, setCommissionPercentage] = useState(0);
  const [accrualPercentage, setAccrualPercentage] = useState(0);
  const [adjustmentRefundPercentage, setAdjustmentRefundPercentage] = useState(0);

  const calculateDeductions = () => {
    const monthlyPaye = (grossIncome * payePercentage) / 100;
    const monthlyPension = (grossIncome * pensionPercentage) / 100;
    
    // Calculate percentage-based deductions
    const monthlyHousingAllowance = (grossIncome * housingAllowancePercentage) / 100;
    const monthlyStaffPurchase = (grossIncome * staffPurchasePercentage) / 100;
    const monthlyCommission = (grossIncome * commissionPercentage) / 100;
    const monthlyAccrual = (grossIncome * accrualPercentage) / 100;
    const monthlyAdjustmentRefund = (grossIncome * adjustmentRefundPercentage) / 100;

    const totalMonthlyDeduction = monthlyPaye + monthlyPension;
    const monthlyTakeHome = grossIncome + monthlyHousingAllowance + monthlyStaffPurchase + monthlyCommission - totalMonthlyDeduction - monthlyAccrual - monthlyAdjustmentRefund;

    const yearlyGrossIncome = grossIncome * 12;
    const yearlyPaye = monthlyPaye * 12;
    const yearlyPension = monthlyPension * 12;
    const totalYearlyDeduction = yearlyPaye + yearlyPension + (monthlyAccrual * 12) + (monthlyAdjustmentRefund * 12);
    const yearlyTakeHome = yearlyGrossIncome + (monthlyHousingAllowance * 12) + (monthlyStaffPurchase * 12) + (monthlyCommission * 12) - totalYearlyDeduction;

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
      monthlyHousingAllowance,
      monthlyStaffPurchase,
      monthlyCommission,
      monthlyAccrual,
      monthlyAdjustmentRefund
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
    monthlyHousingAllowance,
    monthlyStaffPurchase,
    monthlyCommission,
    monthlyAccrual,
    monthlyAdjustmentRefund
  } = calculateDeductions();

  const generatePayslipPDF = () => {
    const doc = new jsPDF();
    // Add content to PDF
    doc.text(`Employee ID: ${employeeId}`, 10, 10);
    doc.text(`Employee Name: ${employeeName}`, 10, 20);
    doc.text(`Slip Date: ${slipDate}`, 10, 30);
    doc.text(`Gross Income: ₦${grossIncome.toFixed(2)}`, 10, 40);
    doc.text(`Monthly PAYE: ₦${monthlyPaye.toFixed(2)}`, 10, 50);
    doc.text(`Monthly Pension: ₦${monthlyPension.toFixed(2)}`, 10, 60);
    doc.text(`Monthly Housing Allowance: ₦${monthlyHousingAllowance.toFixed(2)}`, 10, 70);
    doc.text(`Monthly Staff Purchase: ₦${monthlyStaffPurchase.toFixed(2)}`, 10, 80);
    doc.text(`Monthly Commission: ₦${monthlyCommission.toFixed(2)}`, 10, 90);
    doc.text(`Monthly Accrual: ₦${monthlyAccrual.toFixed(2)}`, 10, 100);
    doc.text(`Monthly Adjustment/Refund: ₦${monthlyAdjustmentRefund.toFixed(2)}`, 10, 110);
    doc.text(`Total Monthly Deductions: ₦${totalMonthlyDeduction.toFixed(2)}`, 10, 120);
    doc.text(`Monthly Take Home: ₦${monthlyTakeHome.toFixed(2)}`, 10, 130);
    doc.text(`Yearly Gross Income: ₦${yearlyGrossIncome.toFixed(2)}`, 10, 140);
    doc.text(`Yearly PAYE: ₦${yearlyPaye.toFixed(2)}`, 10, 150);
    doc.text(`Yearly Pension: ₦${yearlyPension.toFixed(2)}`, 10, 160);
    doc.text(`Total Yearly Deductions: ₦${totalYearlyDeduction.toFixed(2)}`, 10, 170);
    doc.text(`Yearly Take Home: ₦${yearlyTakeHome.toFixed(2)}`, 10, 180);
    return doc.output('datauristring'); // Returns a data URI containing the PDF
  };

  const publishPayslip = async () => {
    const pdfDataUri = await generatePayslipPDF();
    const formData = new FormData();
    formData.append('to', 'employee@example.com');
    formData.append('subject', 'Your Payslip');
    formData.append('text', 'Please find your payslip attached.');
    formData.append('attachment', pdfDataUri);

    try {
      const response = await fetch('http://localhost:3000/send-payslip', {
        method: 'POST',
        body: JSON.stringify({
          to: 'employee@example.com',
          subject: 'Your Payslip',
          text: 'Please find your payslip attached.',
          attachment: pdfDataUri
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error('Error sending payslip:', error);
    }
  };

  return (
    <div className="payslip-container">
      <h1 className="title">Employee Payslip</h1>

      <div className="input-section">
        {/* Employee Details Section */}
        <div className="input-group">
          <label className="input-label">Employee ID</label>
          <input
            type="text"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
            className="input-field"
            placeholder="Enter employee ID"
          />
        </div>
        <div className="input-group">
          <label className="input-label">Employee Name</label>
          <input
            type="text"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
            className="input-field"
            placeholder="Enter employee name"
          />
        </div>
        <div className="input-group">
          <label className="input-label">Slip Date</label>
          <input
            type="date"
            value={slipDate}
            onChange={(e) => setSlipDate(e.target.value)}
            className="input-field"
          />
        </div>

        {/* Income and Deductions Inputs */}
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
        <div className="input-group">
          <label className="input-label">Housing Allowance (%)</label>
          <input
            type="number"
            value={housingAllowancePercentage}
            onChange={(e) => setHousingAllowancePercentage(parseFloat(e.target.value))}
            className="input-field"
            placeholder="Enter housing allowance percentage"
          />
        </div>
        <div className="input-group">
          <label className="input-label">Staff Purchase (%)</label>
          <input
            type="number"
            value={staffPurchasePercentage}
            onChange={(e) => setStaffPurchasePercentage(parseFloat(e.target.value))}
            className="input-field"
            placeholder="Enter staff purchase percentage"
          />
        </div>
        <div className="input-group">
          <label className="input-label">Commission (%)</label>
          <input
            type="number"
            value={commissionPercentage}
            onChange={(e) => setCommissionPercentage(parseFloat(e.target.value))}
            className="input-field"
            placeholder="Enter commission percentage"
          />
        </div>
        <div className="input-group">
          <label className="input-label">Accrual (%)</label>
          <input
            type="number"
            value={accrualPercentage}
            onChange={(e) => setAccrualPercentage(parseFloat(e.target.value))}
            className="input-field"
            placeholder="Enter accrual percentage"
          />
        </div>
        <div className="input-group">
          <label className="input-label">Adjustment/Refund (%)</label>
          <input
            type="number"
            value={adjustmentRefundPercentage}
            onChange={(e) => setAdjustmentRefundPercentage(parseFloat(e.target.value))}
            className="input-field"
            placeholder="Enter adjustment/refund percentage"
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
              <td className="table-cell">Housing Allowance</td>
              <td className="table-cell">₦{(monthlyHousingAllowance * 12).toFixed(2)}</td>
              <td className="table-cell">₦{monthlyHousingAllowance.toFixed(2)}</td>
            </tr>
            <tr>
              <td className="table-cell">Staff Purchase</td>
              <td className="table-cell">₦{(monthlyStaffPurchase * 12).toFixed(2)}</td>
              <td className="table-cell">₦{monthlyStaffPurchase.toFixed(2)}</td>
            </tr>
            <tr>
              <td className="table-cell">Commission</td>
              <td className="table-cell">₦{(monthlyCommission * 12).toFixed(2)}</td>
              <td className="table-cell">₦{monthlyCommission.toFixed(2)}</td>
            </tr>
            <tr>
              <td className="table-cell">Accrual</td>
              <td className="table-cell">₦{(monthlyAccrual * 12).toFixed(2)}</td>
              <td className="table-cell">₦{monthlyAccrual.toFixed(2)}</td>
            </tr>
            <tr>
              <td className="table-cell">Adjustment/Refund</td>
              <td className="table-cell">₦{(monthlyAdjustmentRefund * 12).toFixed(2)}</td>
              <td className="table-cell">₦{monthlyAdjustmentRefund.toFixed(2)}</td>
            </tr>
            <tr>
              <td className="table-cell">Total Deductions</td>
              <td className="table-cell">₦{totalYearlyDeduction.toFixed(2)}</td>
              <td className="table-cell">₦{totalMonthlyDeduction.toFixed(2)}</td>
            </tr>
            <tr>
              <td className="table-cell">Net Income</td>
              <td className="table-cell">₦{yearlyTakeHome.toFixed(2)}</td>
              <td className="table-cell">₦{monthlyTakeHome.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="action-buttons">
        <button className="publish-button" onClick={generatePayslipPDF}>Generate PDF</button>
        <button className="publish-button" onClick={publishPayslip}>Publish Payslip</button>
      </div>
    </div>
  );
};

export default Payslip;