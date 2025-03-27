import React, { useState } from "react";

export default function MortgageLoan() {
  const [loanAmount, setLoanAmount] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [showCalculatedField, setShowCalculatedField] = useState(false);

  const [monthlyPaymentAmount, setMonthlyPaymentAmount] = useState("");
  const [totalPaymentAmount, setTotalPaymentAmount] = useState("");
  const [totalInterestPaid, setTotalInterestPaid] = useState("");

  const calculateMortgageLoan = (e) => {
    e.preventDefault();

    const principal = parseFloat(loanAmount);
    const years = parseInt(loanTerm);
    const rate = parseFloat(interestRate) / 100;

    const monthlyRate = rate / 12;
    const totalPayments = years * 12;

    // Monthly Payment Calculation
    const monthlyPayment = 
      principal * monthlyRate * Math.pow(1 + monthlyRate, totalPayments) /
      (Math.pow(1 + monthlyRate, totalPayments) - 1);

    const totalPayment = monthlyPayment * totalPayments;
    const interestPaid = totalPayment - principal;

    setMonthlyPaymentAmount(monthlyPayment.toFixed(2));
    setTotalPaymentAmount(totalPayment.toFixed(2));
    setTotalInterestPaid(interestPaid.toFixed(2));
    setShowCalculatedField(true);
  };

  return (
    <>
      <form>
        <label>
          Loan Amount:&nbsp;
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
          />
        </label>
        <br /><br />
        <label>
          Loan Term (Years):&nbsp;
          <input
            type="number"
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
          />
        </label>
        <br /><br />
        <label>
          Interest Rate (%):&nbsp;
          <input
            type="number"
            step="0.01"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
          />
        </label>
        <br /><br />
        <button onClick={calculateMortgageLoan}>Calculate</button>
        <br /><br />
        {showCalculatedField && (
          <>
            <div>Monthly Payment Amount: <strong>${monthlyPaymentAmount}</strong></div>
            <div>Total Payment Amount: <strong>${totalPaymentAmount}</strong></div>
            <div>Total Interest Paid: <strong>${totalInterestPaid}</strong></div>
          </>
        )}
      </form>
    </>
  );
}