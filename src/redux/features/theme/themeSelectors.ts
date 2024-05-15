import { RootState } from "../../../app/store";


export const selectThemeMode = (state: RootState) => state.theme.mode;
export const selectCustomColors = (state: RootState) => state.theme.customColors;
