import { useBackgroundLogic } from "../hooks/BackgroundLogic";
import { backgroundOptions } from "./backgroundOptions";
import { useTheme } from "../Context/useTheme";
import "./styles.css";

const Background = () => {
  const { theme } = useTheme();
  const {
    selectedBackground,
    selectedColor,
    handleBackgroundChange,
    handleColorChange,
  } = useBackgroundLogic();

  const containerClassName = `${selectedBackground} ${selectedColor}`;
  return (
    <div className={`w-full h-screen ${containerClassName}`}>
      <h1
        className={`text-center font-bold text-3xl py-6 ${containerClassName}`}
      >
        customized theme
      </h1>
      <div className="flex flex-col justify-center items-center w-full gap-4">
        <div className="flex flex-col w-60 text-white mx-2">
          <label
            htmlFor="backgroundSelect"
            className={`py-2  ${containerClassName}`}
          >
            Select Background
          </label>
          <select
            id="backgroundSelect"
            value={selectedBackground}
            onChange={handleBackgroundChange}
            className="border border-gray-300 rounded-md p-2"
          >
            <option value={theme.background} className="bg-white text-black">
              Select Background
            </option>
            {backgroundOptions.map((color) => (
              <option
                key={color.id}
                value={color.background}
                className="bg-white text-black"
              >
                {color.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col w-60 text-white mx-2">
          <label
            htmlFor="colorSelect"
            className={`py-2  ${containerClassName}`}
          >
            Select Text Color
          </label>
          <select
            id="colorSelect"
            value={theme.background}
            onChange={handleColorChange}
            className="border border-gray-300 rounded-md p-2"
          >
            <option value={theme.color}>Select Text Color</option>
            <option value="text-white">White</option>
            <option value="text-black">Black</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Background;
