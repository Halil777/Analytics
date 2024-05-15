import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCustomMode, setDarkMode, setLightMode } from './themeSlice';
import { selectCustomColors,  } from './themeSelectors';
import { CiDark, CiLight } from 'react-icons/ci';
import { IoSettingsOutline } from 'react-icons/io5';

const ThemeSelector: React.FC = () => {
  const dispatch = useDispatch();
  // const themeMode = useSelector(selectThemeMode);
  const customColors = useSelector(selectCustomColors);

  const [background, setBackground] = useState(customColors.background);
  const [text, setText] = useState(customColors.text);
  const [active, setActive] = useState(customColors.active);
  const [passive, setPassive] = useState(customColors.passive);
  const [isCardOpen, setIsCardOpen] = useState(false);

  const handleSetCustomMode = () => {
    dispatch(setCustomMode({ background, text, active, passive }));
    setIsCardOpen(false);
  };

  return (
    <div>
      <div className='flex gap-6 items-center justify-end pr-10 '>
        <button className='text-2xl' onClick={() => dispatch(setLightMode())}>
          <CiLight />
        </button>
        <button className='text-2xl' onClick={() => dispatch(setDarkMode())}>
          <CiDark />
        </button>
        <button className='text-xl' onClick={() => setIsCardOpen(!isCardOpen)}>
          <IoSettingsOutline />
        </button>
      </div>
      {isCardOpen && (
        <div className='flex justify-end pr-10 mt-5'>
          <div className='w-[200px] bg-gray-300 p-5 gap-5 rounded-xl flex flex-col'>
            <label className='flex flex-col gap-2'>
              Background Color:
              <input
                className='h-10 w-24'
                type="color"
                value={background}
                onChange={(e) => setBackground(e.target.value)}
              />
            </label>
            <label className='flex flex-col gap-2'>
              Text Color:
              <input
                className='h-10 w-24'
                type="color"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </label>
              <label className='flex flex-col gap-2'>
              Active Color:
              <input
                className='h-10 w-24'
                type="color"
                value={active}
                onChange={(e) => setActive(e.target.value)}
              />
            </label>
              <label className='flex flex-col gap-2'>
              Passive Color:
              <input
                className='h-10 w-24'
                type="color"
                value={passive}
                onChange={(e) => setPassive(e.target.value)}
              />
            </label>
            <button className='bg-gray-700 text-white py-2 rounded' onClick={handleSetCustomMode}>
              Change Theme
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeSelector;
