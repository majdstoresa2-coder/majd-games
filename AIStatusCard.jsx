import React from "react";

const statusColors = {
  online: "bg-green-500",
  offline: "bg-red-500",
  warning: "bg-yellow-500",
};

export default function AIStatusCard({
  title,
  status = "offline",
  description = "",
}) {
  return (
    <div className="rounded-xl bg-zinc-900 border border-zinc-700 p-4 shadow-lg">
      <div className="flex items-center justify-between">
        <h3 className="text-white text-lg font-bold">{title}</h3>

        <span
          className={`w-3 h-3 rounded-full ${
            statusColors[status] || statusColors.offline
          }`}
        />
      </div>

      <p className="text-gray-400 mt-3 text-sm">
        {description}
      </p>

      <div className="mt-4 text-sm text-white">
        الحالة:
        <span className="ml-2 font-bold capitalize">
          {status}
        </span>
      </div>
    </div>
  );
}
