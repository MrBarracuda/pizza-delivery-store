import { Dispatch, SetStateAction, useCallback, useState } from 'react'

type UseToggle = [boolean, () => void, Dispatch<SetStateAction<boolean>>]
export const useToggle = (defaultValue?: boolean): UseToggle => {
  const [value, setValue] = useState(!!defaultValue)

  const toggle = useCallback(() => setValue((state) => !state), [])

  return [value, toggle, setValue]
}
