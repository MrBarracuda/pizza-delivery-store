import { MoonIcon, SunIcon } from '../assets/icons-svg'

export const ToggleTheme = () => (
  <input
    type="checkbox"
    className="toggle-primary toggle"
    data-toggle-theme="dark,light"
    data-act-class="ACTIVECLASS"
  />
)
