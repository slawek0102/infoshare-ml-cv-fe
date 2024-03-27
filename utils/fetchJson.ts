export async function postData(url = "", data = {}) {
  const requestOptions = {
    // method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json(); // Parsowanie i zwrócenie danych JSON
  } catch (error) {
    console.error("There was a problem with your fetch operation:", error);
  }
}
