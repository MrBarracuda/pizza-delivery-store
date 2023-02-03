import "./App.css";
import { useMutation, useQuery } from "@tanstack/react-query";

const wait = (duration: number) =>
  new Promise((resolve) => setTimeout(resolve, duration));

const POSTS = [
  { id: 1, title: "Post 1" },
  { id: 2, title: "Post 2" },
];

function App() {
  const postsQuery = useQuery({
    queryKey: ["posts"],
    queryFn: () => wait(1000).then(() => [...POSTS]),
  });

  const newPostMutation = useMutation({
    mutationFn: (title: string) =>
      wait(1000).then(() => POSTS.push({ id: Number(new Date()), title })),
  });

  if (postsQuery.isLoading) return <h1>Loading...</h1>;
  if (postsQuery.isError) return <pre>{JSON.stringify(postsQuery.error)}</pre>;

  return (
    <div>
      {postsQuery.data.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
      <button onClick={() => newPostMutation.mutate("New Post")}>
        Add New
      </button>
    </div>
  );
}

export default App;
