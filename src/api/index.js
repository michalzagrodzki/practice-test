import { httpClient } from "./../service/http";

const api = {
  check() {
    return httpClient.get("/")
  },
  register({email, password}) {
    httpClient.post("/auth/register")
  }
}

export default api;