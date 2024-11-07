const jsonServerUrl = import.meta.env.VITE_JSON_SERVER_URL;

export const addFavoriteCity = async (city) => {
  try {
    const response = await fetch(`${jsonServerUrl}/favorites`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(city),
    });
    return response.ok ? await response.json() : null;
  } catch (error) {
    console.error("Error adding favorite city:", error);
    return null;
  }
};

export const getFavoriteCities = async () => {
  try {
    const response = await fetch(`${jsonServerUrl}/favorites`);
    return response.ok ? await response.json() : [];
  } catch (error) {
    console.error("Error fetching favorite cities:", error);
    return [];
  }
};

export const removeFavoriteCity = async (id) => {
  try {
    const response = await fetch(`${jsonServerUrl}/favorites/${id}`, {
      method: "DELETE",
    });
    return response.ok;
  } catch (error) {
    console.error("Error removing favorite city:", error);
    return false;
  }
};
