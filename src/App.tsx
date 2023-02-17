import './App.css'
import { useTranslation } from 'react-i18next'
import { ChangeLanguageButtons } from './locales/ChangeLanguageButtons'
import { Image } from './common/Image'
import thumbnailPhoto from './assets/photo_small.webp'
import fullSizePhoto from './assets/photo.jpg'

// const wait = (duration: number) =>
//   new Promise((resolve) => setTimeout(resolve, duration));

// const POSTS = [
//   { id: 1, title: "Post 1" },
//   { id: 2, title: "Post 2" },
// ];
function App() {
  const { t } = useTranslation()

  // const postsQuery = useQuery({
  //   queryKey: ["posts"],
  //   queryFn: () => wait(1).then(() => [...POSTS]),
  // });

  // const newPostMutation = useMutation({
  //   mutationFn: (title: string) =>
  //     wait(1000).then(() => POSTS.push({ id: Number(new Date()), title })),
  // });

  // if (postsQuery.isLoading) return <h1>Loading...</h1>;
  // if (postsQuery.isError) return <pre>{JSON.stringify(postsQuery.error)}</pre>;

  return (
    <div>
      <div className="relative w-96 h-96">
        <Image src={{ thumbnail: thumbnailPhoto, fullSize: fullSizePhoto }} alt="photo" />
      </div>
      <ChangeLanguageButtons />

      {/*{postsQuery.data.map((post) => (*/}
      {/*  <div key={post.id}>{post.title}</div>*/}
      {/*))}*/}
      {/*<button onClick={() => newPostMutation.mutate("New Post")}>*/}
      {/*  Add New*/}
      {/*</button>*/}

      <div>{t('greetings')}</div>
    </div>
  )
}

export default App
