const API_URL =
  import.meta.env.VITE_AI_API_URL || "http://localhost:3000/api/ai";


export async function getAIStatus() {
  try {
    const response = await fetch(`${API_URL}/status`);

    if (!response.ok) {
      throw new Error("AI Status Error");
    }

    return await response.json();

  } catch (error) {

    console.error("AI Status Failed:", error);

    return {
      success: false,
      status: "offline",
      message: error.message
    };
  }
}


export async function startAI() {

  const response = await fetch(`${API_URL}/start`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  });

  return await response.json();
}


export async function restartAI() {

  const response = await fetch(`${API_URL}/restart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  });

  return await response.json();
}


export async function createGameAI(data = {}) {

  const response = await fetch(`${API_URL}/create-game`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  return await response.json();
}
