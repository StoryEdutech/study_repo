export async function getCsrfToken() {
  const res = await fetch("http://localhost:8000/sanctum/csrf-cookie", {
    cache: "no-store",
    credentials: "include",
  });
  return res;
}

export async function getCookie(key: string) {
  const cookies = document.cookie.split("; ");
  const check = async (key: string, str: string) => {
    const arr = str.split("=");
    const res = key == arr[0] ? decodeURIComponent(arr[1]) : false;
    return res;
  };
  let ans = "";
  const res = await Promise.all(
    cookies.map(async (cookie) => {
      const found = await check(key, cookie);
      if (found != false) ans = found;
    })
  );
  return ans;
}
