interface setToLSProps {
  key: string;
  themeName: any;
}

interface getFromLSProps {
  key: string;
}

export const setToLS = ({ key, themeName }: setToLSProps) => {
  window.localStorage.setItem(key, JSON.stringify(themeName));
};

export const getFromLS = ({ key }: getFromLSProps) => {
  const themeName = window.localStorage.getItem(key);

  if (themeName) return JSON.parse(themeName);
};
