import './App.css'
import { useTranslation } from 'react-i18next'

import fullSizePhoto from './assets/photo.jpg'
import thumbnailPhoto from './assets/photo_small.webp'
import { Image } from './common/Image'
import { ChangeLanguageButtons } from './locales/ChangeLanguageButtons'
import { RegistrationForm } from './components/Registration/RegistrationForm'

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
    <div className="mx-auto w-full max-w-xl">
      <div className="my-12 flex justify-center">
        <div className="w-full rounded-lg bg-white p-5 shadow-xl lg:w-11/12">
          <h3 className="pt-4 text-center text-2xl font-bold">Create New Account</h3>
          <RegistrationForm />
        </div>
      </div>
    </div>
  )
}

export default App
