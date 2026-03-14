/**
 * services/api.js
 *
 * Base fetch wrapper. Automatically attaches the auth token from
 * localStorage to every request. Throws on non-2xx responses.
 *
 * Usage:
 *   import api from "../services/api";
 *   const borrowers = await api.get("/borrowers");
 *   const created   = await api.post("/borrowers", { name: "Alice" });
 */

const BASE_URL = import.meta.env.VITE_API_URL ?? "/api";
const TOKEN_KEY = "credaxis_token";

function getToken() {
  try {
    const raw = localStorage.getItem(TOKEN_KEY);
    return raw ? JSON.parse(raw)?.token ?? raw : null;
  } catch {
    return null;
  }
}

async function request(method, path, body) {
  const token   = getToken();
  const headers = { "Content-Type": "application/json" };
  if (token) headers["Authorization"] = `Bearer ${token}`;

  const res = await fetch(`${BASE_URL}${path}`, {
    method,
    headers,
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message ?? `HTTP ${res.status}`);
  }

  // 204 No Content
  if (res.status === 204) return null;
  return res.json();
}

const api = {
  get:    (path)         => request("GET",    path),
  post:   (path, body)   => request("POST",   path, body),
  patch:  (path, body)   => request("PATCH",  path, body),
  put:    (path, body)   => request("PUT",    path, body),
  delete: (path)         => request("DELETE", path),
};

export default api;
