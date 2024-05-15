import { useSelector } from 'react-redux';
import { selectCustomColors, selectThemeMode } from '../redux/features/theme/themeSelectors';
import { darkTheme, lightTheme } from '../style/themeColors';
// import { lightTheme, darkTheme } from '../redux/features/theme/themeOptions';

export const useThemeOptions = () => {
  const themeMode = useSelector(selectThemeMode);
  const customColors = useSelector(selectCustomColors);

  const themeOptions = () => {
    switch (themeMode) {
      case 'light':
        return lightTheme;
      case 'dark':
        return darkTheme;
      case 'custom':
        return {
          background: customColors.background,
          textColor: customColors.text,
          activeColor: customColors.active,
          passiveColor: customColors.passive,
        };
      default:
        return lightTheme;
    }
  };

  return themeOptions();
};
