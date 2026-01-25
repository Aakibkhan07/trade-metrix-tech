"use client";
import React, { useState } from 'react';

export default function BehavioralCopilot() {
  // Logic States
  const [overrides, setOverrides] = useState(5);
  const [revenge, setRevenge] = useState(1);
  const [chaosData, setChaosData] = useState({ score: null, text: "Click to simulate worst-case" });

  // Calculated Score
  const rawScore = 20 + (overrides * 2) + (revenge * 8);
  const score = Math.min(100, rawScore);
  
  let statusText = "Stable";
  let statusColor = "#49e6a5"; // Green
  if (score >= 80) { statusText = "LOCKED (High Risk)"; statusColor = "#ff5b5b"; }
  else if (score >= 50) { statusText = "Warning"; statusColor = "#f4c542"; }

  // Chaos Logic
  const runChaos = () => {
    const rnd = Math.floor(Math.random() * (85 - 60 + 1) + 60);
    setChaosData({ score: rnd + "/100", text: "Strategy survived 2/3 crash scenarios." });
  };

  return (
    <section className="py-16 px-4 text-white max-w-6xl mx-auto font-sans">
      <div className="max-w-3xl mb-10">
        <span className="text-[#49e6a5] text-xs font-bold uppercase tracking-widest block mb-2">New Feature</span>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          Stop Fighting The Market.<br />Start Mastering Yourself.
        </h2>
        <p className="text-gray-300 text-lg">
          TradeMetrix isn't just an execution tool. It's a behavioral firewall that detects your emotional biases and enforces discipline.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1: Cognitive Guard */}
        <div className="border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-semibold text-lg">Cognitive Guard</h3>
            <span className="text-[10px] bg-[#49e6a5]/10 text-[#49e6a5] px-2 py-1 rounded border border-[#49e6a5]/20">Active Monitor</span>
          </div>
          
          <div className="flex gap-4 items-center mb-4">
            {/* Simple CSS Gauge Representation */}
            <div className="relative w-24 h-24 rounded-full flex items-center justify-center"
                 style={{ background: `conic-gradient(${statusColor} 0deg ${score * 3.6}deg, #333 0deg)` }}>
              <div className="w-20 h-20 bg-[#0a0a0a] rounded-full flex flex-col items-center justify-center">
                <span className="text-2xl font-bold">{score}</span>
                <span className="text-[9px] text-gray-400">Load %</span>
              </div>
            </div>
            
            <div className="flex-1 space-y-3">
              <label className="block text-xs text-gray-300">
                Manual Overrides
                <input type="range" min="0" max="30" value={overrides} onChange={(e) => setOverrides(Number(e.target.value))} className="w-full mt-1 accent-[#49e6a5]"/>
              </label>
              <label className="block text-xs text-gray-300">
                Revenge Trades
                <input type="range" min="0" max="10" value={revenge} onChange={(e) => setRevenge(Number(e.target.value))} className="w-full mt-1 accent-[#49e6a5]"/>
              </label>
            </div>
          </div>
          
          <div className="text-xs p-2 bg-white/5 rounded border border-white/10 mb-4">
            Status: <strong style={{color: statusColor}}>{statusText}</strong>
          </div>
        </div>

        {/* Card 2: Chaos Engine */}
        <div className="border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-semibold text-lg">Chaos Engine</h3>
            <span className="text-[10px] bg-[#49e6a5]/10 text-[#49e6a5] px-2 py-1 rounded border border-[#49e6a5]/20">Stress Test</span>
          </div>
          <div className="space-y-2 text-sm text-gray-300 mb-4">
            <div className="flex items-center gap-2"><input type="checkbox" defaultChecked /> VIX Spike (+30%)</div>
            <div className="flex items-center gap-2"><input type="checkbox" defaultChecked /> Broker API Outage</div>
            <div className="flex items-center gap-2"><input type="checkbox" /> Liquidity Crunch</div>
          </div>
          
          <button onClick={runChaos} className="w-full py-2 bg-[#49e6a5] hover:bg-[#3fdba0] text-black font-bold rounded-lg transition text-sm">
            Run Chaos Test
          </button>
          
          <div className="mt-4 text-center p-3 bg-white/5 rounded-lg border border-white/10">
             <div className="text-xl font-bold">{chaosData.score || "—"}</div>
             <div className="text-[10px] text-gray-400">{chaosData.text}</div>
          </div>
        </div>

        {/* Card 3: DQ Journal */}
        <div className="border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-lg">DQ Journal</h3>
            <span className="text-[10px] bg-[#49e6a5]/10 text-[#49e6a5] px-2 py-1 rounded border border-[#49e6a5]/20">Discipline Score</span>
          </div>
          
          <div className="text-center mb-6">
            <span className="text-3xl font-bold text-[#49e6a5]">78/100</span>
            <div className="text-[10px] text-gray-400">Decision Quality Score</div>
          </div>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs mb-1 text-gray-300"><span>Good Decisions</span> <span className="text-green-400">+$12k</span></div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden"><div className="h-full bg-[#49e6a5] w-[35%]"></div></div>
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1 text-gray-300"><span>Bad Impulses</span> <span className="text-red-400">-$31k</span></div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden"><div className="h-full bg-[#ff5b5b] w-[65%]"></div></div>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-4 leading-relaxed">
            Separates "Luck" from "Skill". Tracks the actual cost of your manual interference.
          </p>
        </div>

      </div>
    </section>
  );
}