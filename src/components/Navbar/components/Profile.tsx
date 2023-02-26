import { ProfileIcon } from '../../../assets/icons-svg'

interface AvatarPlaceholderProps {
  isLoggedIn: boolean
  firstLetter: string
}
const AvatarPlaceholder = ({ isLoggedIn, firstLetter }: AvatarPlaceholderProps) => (
  <div className="placeholder btn-ghost btn-circle avatar btn">
    <div className="w-11 rounded-full bg-neutral-focus text-neutral-content">
      {isLoggedIn ? <span className="text-lg">{firstLetter}</span> : <ProfileIcon />}
    </div>
  </div>
)

interface ProfileProps {
  userName: string
  isLoggedIn: boolean
}

export const Profile = ({ userName, isLoggedIn }: ProfileProps) => {
  const firstLetter = userName.charAt(0)
  return <AvatarPlaceholder isLoggedIn={isLoggedIn} firstLetter={firstLetter} />
}
