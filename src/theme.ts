export interface Theme {
  background: string;
  textColor: string;
}

const themes: Record<string, Theme> = {
  example1: {
    background: "bg-blue-500",
    textColor: "text-white",
  },
  example2: {
    background: "bg-green-500",
    textColor: "text-black",
  },
};

export default themes;
