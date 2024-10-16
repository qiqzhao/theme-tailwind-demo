export interface Theme {
  background: string;
  textColor: string;
}

const themes: Record<string, Theme> = {
  light: {
    background: 'bg-gray-100',
    textColor: 'text-black',
  },
  dark: {
    background: 'bg-gray-800',
    textColor: 'text-white',
  },
};

export default themes;