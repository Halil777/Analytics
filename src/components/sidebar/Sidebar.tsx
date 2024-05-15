import { FC } from "react";
import { sidebarItems } from "../../data/data";
import { useThemeOptions } from "../../hooks/useThemeOptions";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar: FC = () => {
  const themeOptions = useThemeOptions();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="w-[300px] bg-gray-500 h-screen">
      <div className="p-3 flex flex-col gap-2">
        <p
          className="text-3xl text-center mb-2"
          style={{ color: themeOptions.activeColor }}
        >
          GeekSpace
        </p>
        <hr />
        <div className="flex flex-col gap-3 mt-10">
          {sidebarItems.map((item, i) => {
            const path = item === "Dashboard" ? "/" : `/${item.toLowerCase()}`;
            const isActive = location.pathname === path;

            return (
              <div
                style={{
                  background: isActive
                    ? themeOptions.activeColor
                    : themeOptions.background,
                  color: isActive
                    ? themeOptions.textColor
                    : themeOptions.passiveColor,
                }}
                onClick={() => navigate(path)}
                className="pl-5 shadow-lg py-2 rounded hover:bg-gray-200 cursor-pointer"
                key={`sidebar_items_key${i}`}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
