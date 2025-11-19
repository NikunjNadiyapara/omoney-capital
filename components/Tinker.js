"use client";
import React, { useEffect, useState } from "react";

const Tinker = () => {
  const mockStocks = [
    { symbol: "SENSEX", price: "65,245.50", change: "+1.2%", changeType: "up" },
    {
      symbol: "NIFTY 50",
      price: "19,435.25",
      change: "+0.8%",
      changeType: "up",
    },
    {
      symbol: "RELIANCE",
      price: "2,456.80",
      change: "-0.5%",
      changeType: "down",
    },
    { symbol: "TCS", price: "3,567.90", change: "+1.5%", changeType: "up" },
    {
      symbol: "HDFC BANK",
      price: "1,645.30",
      change: "+0.3%",
      changeType: "up",
    },
    { symbol: "INFY", price: "1,432.60", change: "-0.2%", changeType: "down" },
    {
      symbol: "ICICI BANK",
      price: "945.75",
      change: "+1.1%",
      changeType: "up",
    },
  ];

  const [tickerPosition, setTickerPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTickerPosition((prev) => prev - 1);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" bg-white">
      {/* Stock Ticker */}
      <div className="bg-linear-to-r from-blue-900 to-blue-800 text-white py-2 overflow-hidden">
        <div
          className="flex"
          style={{ transform: `translateX(${tickerPosition}px)` }}
        >
          {[...mockStocks, ...mockStocks, ...mockStocks].map((stock, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 mx-6 whitespace-nowrap"
            >
              <span className="font-semibold">{stock.symbol}</span>
              <span className="text-sm">₹{stock.price}</span>
              <span
                className={`text-xs ${
                  stock.changeType === "up" ? "text-green-400" : "text-red-400"
                }`}
              >
                {stock.change}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Tinker;
