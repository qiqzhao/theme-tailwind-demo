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
    avatar: './public/images/light-avatar.jpg',
  },
  dark: {
    background: "bg-gray-800",
    textColor: "text-white",
    type: "dark",
    avatar: "./public/images/dark-avatar.png",
  },
};

export default themes;
