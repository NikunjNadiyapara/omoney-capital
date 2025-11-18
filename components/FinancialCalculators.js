"use client";
import { useState, useEffect } from "react";
import { Calculator, TrendingUp, PiggyBank, Wallet } from "lucide-react";

export default function FinancialCalculators() {
  const [activeTab, setActiveTab] = useState("simple");
  const [isVisible, setIsVisible] = useState(false);
  const [result, setResult] = useState(null);

  // Form states
  const [principal, setPrincipal] = useState("10000");
  const [rate, setRate] = useState("8");
  const [time, setTime] = useState("5");
  const [monthlyInvestment, setMonthlyInvestment] = useState("5000");
  const [totalInvestment, setTotalInvestment] = useState("100000");
  const [withdrawalAmount, setWithdrawalAmount] = useState("5000");

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("financial-calculators");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.75) {
          setIsVisible(true);
          window.removeEventListener("scroll", handleScroll);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check visibility on mount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const tabs = [
    { id: "simple", name: "Simple Interest", icon: Calculator },
    { id: "compound", name: "Compound Interest", icon: TrendingUp },
    { id: "sip", name: "SIP Calculator", icon: PiggyBank },
    { id: "swp", name: "SWP Calculator", icon: Wallet },
  ];

  const calculateSimpleInterest = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate);
    const t = parseFloat(time);
    const interest = (p * r * t) / 100;
    const total = p + interest;
    setResult({ interest: interest.toFixed(2), total: total.toFixed(2) });
  };

  const calculateCompoundInterest = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(time);
    const amount = p * Math.pow(1 + r, t);
    const interest = amount - p;
    setResult({ interest: interest.toFixed(2), total: amount.toFixed(2) });
  };

  const calculateSIP = () => {
    const monthly = parseFloat(monthlyInvestment);
    const r = parseFloat(rate) / 100 / 12;
    const n = parseFloat(time) * 12;
    const futureValue = monthly * (((Math.pow(1 + r, n) - 1) / r) * (1 + r));
    const invested = monthly * n;
    const returns = futureValue - invested;
    setResult({
      invested: invested.toFixed(2),
      returns: returns.toFixed(2),
      total: futureValue.toFixed(2),
    });
  };

  const calculateSWP = () => {
    const investment = parseFloat(totalInvestment);
    const withdrawal = parseFloat(withdrawalAmount);
    const r = parseFloat(rate) / 100 / 12;
    const n = parseFloat(time) * 12;
    const totalWithdrawn = withdrawal * n;
    const finalValue =
      investment * Math.pow(1 + r, n) -
      withdrawal * ((Math.pow(1 + r, n) - 1) / r);
    setResult({
      totalWithdrawn: totalWithdrawn.toFixed(2),
      finalValue: Math.max(0, finalValue).toFixed(2),
    });
  };

  const handleCalculate = () => {
    switch (activeTab) {
      case "simple":
        calculateSimpleInterest();
        break;
      case "compound":
        calculateCompoundInterest();
        break;
      case "sip":
        calculateSIP();
        break;
      case "swp":
        calculateSWP();
        break;
    }
  };

  return (
    <section
      id="financial-calculators"
      className="bg-linear-to-b from-white to-gray-50 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-9xl px-4 sm:px-6 lg:px-30">
        {/* Header */}
        <div
          className={`mb-12 text-center transition-all duration-1000 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-10 opacity-0"
          }`}
        >
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-blue-500 to-blue-600 shadow-lg">
            <Calculator className="h-8 w-8 text-white" />
          </div>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Financial Calculators
          </h2>
          <p className="mx-auto max-w-2xl text-base text-gray-600 sm:text-lg">
            Plan your investments with our easy-to-use financial calculators
          </p>
        </div>

        {/* Calculator Card */}
        <div
          className={`mx-auto max-w-5xl transition-all duration-1000 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">
            {/* Tabs */}
            <div className="border-b border-gray-200 bg-gray-50 p-2">
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => {
                        setActiveTab(tab.id);
                        setResult(null);
                      }}
                      className={`group flex flex-col items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-300 sm:flex-row sm:justify-center ${
                        activeTab === tab.id
                          ? "bg-linear-to-r from-blue-600 to-blue-700 text-white shadow-lg"
                          : "bg-white text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <Icon
                        className={`h-5 w-5 transition-transform duration-300 ${
                          activeTab === tab.id
                            ? "scale-110"
                            : "group-hover:scale-110"
                        }`}
                      />
                      <span className="text-xs sm:text-sm">{tab.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Form Content */}
            <div className="p-6 sm:p-8 lg:p-10">
              {/* Simple & Compound Interest Forms */}
              {(activeTab === "simple" || activeTab === "compound") && (
                <div className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-3">
                    <div className="group">
                      <label className="mb-2 block text-sm font-semibold text-gray-700">
                        Principal Amount (₹)
                      </label>
                      <input
                        type="number"
                        value={principal}
                        onChange={(e) => setPrincipal(e.target.value)}
                        className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-gray-900 transition-all duration-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                        placeholder="10000"
                      />
                    </div>
                    <div className="group">
                      <label className="mb-2 block text-sm font-semibold text-gray-700">
                        Rate of Interest (%)
                      </label>
                      <input
                        type="number"
                        value={rate}
                        onChange={(e) => setRate(e.target.value)}
                        className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-gray-900 transition-all duration-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                        placeholder="8"
                      />
                    </div>
                    <div className="group">
                      <label className="mb-2 block text-sm font-semibold text-gray-700">
                        Time Period (Years)
                      </label>
                      <input
                        type="number"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-gray-900 transition-all duration-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                        placeholder="5"
                      />
                    </div>
                  </div>
                  <button
                    onClick={handleCalculate}
                    className="group w-full rounded-xl bg-linear-to-r from-blue-600 to-blue-700 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                  >
                    Calculate {activeTab === "simple" ? "Simple" : "Compound"}{" "}
                    Interest
                  </button>
                </div>
              )}

              {/* SIP Calculator Form */}
              {activeTab === "sip" && (
                <div className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-3">
                    <div className="group">
                      <label className="mb-2 block text-sm font-semibold text-gray-700">
                        Monthly Investment (₹)
                      </label>
                      <input
                        type="number"
                        value={monthlyInvestment}
                        onChange={(e) => setMonthlyInvestment(e.target.value)}
                        className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-gray-900 transition-all duration-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                        placeholder="5000"
                      />
                    </div>
                    <div className="group">
                      <label className="mb-2 block text-sm font-semibold text-gray-700">
                        Expected Return (% p.a.)
                      </label>
                      <input
                        type="number"
                        value={rate}
                        onChange={(e) => setRate(e.target.value)}
                        className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-gray-900 transition-all duration-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                        placeholder="12"
                      />
                    </div>
                    <div className="group">
                      <label className="mb-2 block text-sm font-semibold text-gray-700">
                        Time Period (Years)
                      </label>
                      <input
                        type="number"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-gray-900 transition-all duration-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                        placeholder="10"
                      />
                    </div>
                  </div>
                  <button
                    onClick={handleCalculate}
                    className="group w-full rounded-xl bg-linear-to-r from-green-600 to-green-700 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                  >
                    Calculate SIP Returns
                  </button>
                </div>
              )}

              {/* SWP Calculator Form */}
              {activeTab === "swp" && (
                <div className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-4">
                    <div className="group">
                      <label className="mb-2 block text-sm font-semibold text-gray-700">
                        Total Investment (₹)
                      </label>
                      <input
                        type="number"
                        value={totalInvestment}
                        onChange={(e) => setTotalInvestment(e.target.value)}
                        className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-gray-900 transition-all duration-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                        placeholder="100000"
                      />
                    </div>
                    <div className="group">
                      <label className="mb-2 block text-sm font-semibold text-gray-700">
                        Monthly Withdrawal (₹)
                      </label>
                      <input
                        type="number"
                        value={withdrawalAmount}
                        onChange={(e) => setWithdrawalAmount(e.target.value)}
                        className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-gray-900 transition-all duration-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                        placeholder="5000"
                      />
                    </div>
                    <div className="group">
                      <label className="mb-2 block text-sm font-semibold text-gray-700">
                        Expected Return (% p.a.)
                      </label>
                      <input
                        type="number"
                        value={rate}
                        onChange={(e) => setRate(e.target.value)}
                        className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-gray-900 transition-all duration-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                        placeholder="8"
                      />
                    </div>
                    <div className="group">
                      <label className="mb-2 block text-sm font-semibold text-gray-700">
                        Time Period (Years)
                      </label>
                      <input
                        type="number"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-gray-900 transition-all duration-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                        placeholder="5"
                      />
                    </div>
                  </div>
                  <button
                    onClick={handleCalculate}
                    className="group w-full rounded-xl bg-linear-to-r from-yellow-600 to-yellow-700 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                  >
                    Calculate SWP Returns
                  </button>
                </div>
              )}

              {/* Results Display */}
              {result && (
                <div className="mt-8 overflow-hidden rounded-2xl border-2 border-blue-100 bg-linear-to-br from-blue-50 via-white to-blue-50 p-6 shadow-inner transition-all duration-500 animate-in fade-in slide-in-from-bottom-4 sm:p-8">
                  {(activeTab === "simple" || activeTab === "compound") && (
                    <>
                      <p className="mb-2 text-center text-sm font-medium text-gray-600">
                        {activeTab === "simple"
                          ? "Simple Interest"
                          : "Compound Interest"}
                      </p>
                      <p className="mb-4 text-center text-4xl font-bold text-blue-600 sm:text-5xl">
                        ₹{result.interest}
                      </p>
                      <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                        <span className="font-medium">Total Amount:</span>
                        <span className="text-lg font-bold text-gray-900">
                          ₹{result.total}
                        </span>
                      </div>
                    </>
                  )}

                  {activeTab === "sip" && (
                    <div className="grid gap-4 sm:grid-cols-3">
                      <div className="rounded-xl bg-white p-4 text-center shadow-sm">
                        <p className="mb-1 text-xs font-medium text-gray-600">
                          Invested Amount
                        </p>
                        <p className="text-xl font-bold text-gray-900 sm:text-2xl">
                          ₹{result.invested}
                        </p>
                      </div>
                      <div className="rounded-xl bg-white p-4 text-center shadow-sm">
                        <p className="mb-1 text-xs font-medium text-gray-600">
                          Est. Returns
                        </p>
                        <p className="text-xl font-bold text-green-600 sm:text-2xl">
                          ₹{result.returns}
                        </p>
                      </div>
                      <div className="rounded-xl bg-linear-to-br from-blue-500 to-blue-600 p-4 text-center shadow-md">
                        <p className="mb-1 text-xs font-medium text-blue-100">
                          Total Value
                        </p>
                        <p className="text-xl font-bold text-white sm:text-2xl">
                          ₹{result.total}
                        </p>
                      </div>
                    </div>
                  )}

                  {activeTab === "swp" && (
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-xl bg-white p-4 text-center shadow-sm">
                        <p className="mb-1 text-xs font-medium text-gray-600">
                          Total Withdrawn
                        </p>
                        <p className="text-xl font-bold text-yellow-600 sm:text-2xl">
                          ₹{result.totalWithdrawn}
                        </p>
                      </div>
                      <div className="rounded-xl bg-linear-to-br from-blue-500 to-blue-600 p-4 text-center shadow-md">
                        <p className="mb-1 text-xs font-medium text-blue-100">
                          Final Value
                        </p>
                        <p className="text-xl font-bold text-white sm:text-2xl">
                          ₹{result.finalValue}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
