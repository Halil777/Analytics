export interface ThemeOptions {
  background: string;
  textColor: string;
  activeColor: string;
  passiveColor: string;
}

export const lightTheme: ThemeOptions = {
  background: "#fff",
  textColor: "#000000",
  activeColor: "#f0f0f0",
  passiveColor: "#222222",
};

export const darkTheme: ThemeOptions = {
  background: "#333333",
  textColor: "#FFFFFF",
  activeColor: "#222222",
  passiveColor: "#999999",
};

export const customTheme: ThemeOptions = {
  background: "",
  textColor: "",
  activeColor: "",
  passiveColor: "",
};
