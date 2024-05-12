export async function getPosts(userId) {
  console.log(userId);
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}/posts`
  );
  const data = await response.json();

  return data;
}
