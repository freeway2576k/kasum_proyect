const API_BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:8080/kubera";


interface LoginPayload {
    email: string;
    password: string;
  }
  
  interface LoginResponse {
    token: string;
    user: {
      id: string;
      name: string;
      email: string;
    };
  }
  
export async function login(loginPayload: LoginPayload):Promise<LoginResponse> {
        const response = await fetch(`${API_BASE_URL}/auth/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginPayload),
        });
        
        if (!response.ok) {
          const errorBody = await response.json().catch(()=> null);
        const message = errorBody?.message || "Something went wrong";
        throw new Error(message);
        }
        
        return response.json();

}
