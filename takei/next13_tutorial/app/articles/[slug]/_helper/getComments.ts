export const getComments = async (slug: string) => {
  const res = await fetch(
    `http://localhost:3000/api/articles/${slug}/comments`,
    {
      cache: "no-store"
    }
  );

  if (!res.ok) {
    // throw new Error("Faild to fetch comments");
    console.error('response.ok:', res.ok);
    console.error('esponse.status:', res.status);
    console.error('esponse.statusText:', res.statusText);
    throw new Error(res.statusText);
  }

  const data = await res.json();
  return data as Comment[];
};
export default getComments;
