const urlApi = "http://103.65.236.111:8000/api/posts";

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
