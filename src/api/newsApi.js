const urlApi = import.meta.env.VITE_API_BERITA;

export async function getAllNews() {
  try {
    const response = await fetch(urlApi);
    if (!response.ok) {
      throw new Error("Gagal mengambil data berita");
    }
    return await response.json();
  } catch (error) {
    console.error("Error API:", error);
    throw error;
  }
}
