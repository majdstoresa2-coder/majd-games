import React from "react";

export default function AIControlButtons({
  onStart,
  onStop,
  onRestart,
  onCreateGame,
}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

      <button
        onClick={onStart}
        className="bg-green-600 hover:bg-green-700 text-white rounded-lg p-3 font-bold transition"
      >
        ▶ تشغيل AI
      </button>

      <button
        onClick={onStop}
        className="bg-red-600 hover:bg-red-700 text-white rounded-lg p-3 font-bold transition"
      >
        ■ إيقاف AI
      </button>

      <button
        onClick={onRestart}
        className="bg-yellow-500 hover:bg-yellow-600 text-black rounded-lg p-3 font-bold transition"
      >
        ↻ إعادة التشغيل
      </button>

      <button
        onClick={onCreateGame}
        className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg p-3 font-bold transition"
      >
        🎮 إنشاء لعبة
      </button>

    </div>
  );
}
