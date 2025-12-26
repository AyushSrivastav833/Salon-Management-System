export const API_BASE =
  import.meta.env.MODE === "development"
    ? "http://localhost:4000"
    : "https://salon-backend-dtum.onrender.com"
