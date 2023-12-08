import api from "../commons/api";

export const getAllBooks = async () => {
  const result = api.get("/book");
  return result;
};

export const addBook = async (data) => {
  const result = api.post("/book", data);
  return result;
};

export const deleteBook = async (id) => {
  const result = await api.delete(`/book/${id}`);
  return result;
};
