export async function registerUser(data: {
  username: string;
  email: string;
  phone: string;
  full_name: string;
  region: string;
  birth_year: number;
  password: string;
}) {
  const res = await fetch("/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Register failed");
  }

  return res.json();
}
