import React from "react";
import AIStatusCard from "../components/AIStatusCard";
import AIControlButtons from "../components/AIControlButtons";

export default function MajdAIControlCenter() {

  const handleStart = () => {
    console.log("Starting AI...");
  };

  const handleStop = () => {
    console.log("Stopping AI...");
  };

  const handleRestart = () => {
    console.log("Restarting AI...");
  };

  const handleCreateGame = () => {
    console.log("Creating New Game...");
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-8">

      <h1 className="text-4xl font-bold mb-8">
        🤖 Majd AI Control Center
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        <AIStatusCard
          title="Majd AI Brain"
          status="online"
          description="Main AI Brain Running"
        />

        <AIStatusCard
          title="Game Factory"
          status="online"
          description="Automatic Game Generator"
        />

        <AIStatusCard
          title="AI Orchestrator"
          status="online"
          description="Managing AI Services"
        />

      </div>

      <div className="mt-10">

        <AIControlButtons
          onStart={handleStart}
          onStop={handleStop}
          onRestart={handleRestart}
          onCreateGame={handleCreateGame}
        />

      </div>

    </div>
  );
}
