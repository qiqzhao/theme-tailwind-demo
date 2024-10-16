import Light from './images/light-avatar.jpg'
import Dark from './images/dark-avatar.png'

export interface Theme {
  background: string;
  textColor: string;
  type: "light" | "dark";
  avatar: string;
}

const themes: Record<string, Theme> = {
  light: {
    background: "bg-gray-100",
    textColor: "text-black",
    type: "light",
    avatar: Light
  },
  dark: {
    background: "bg-gray-800",
    textColor: "text-white",
    type: "dark",
    avatar: Dark
  },
};

export default themes;
