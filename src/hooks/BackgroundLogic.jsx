import { useState, useEffect } from "react";
import { useTheme } from "../Context/useTheme";

export const useBackgroundLogic = () => {
  const { theme, setTheme } = useTheme();
  const [selectedBackground, setSelectedBackground] = useState(
    theme.background
  );
  const [selectedColor, setSelectedColor] = useState(theme.color);

  useEffect(() => {
    const savedBackground = localStorage.getItem("selectedBackground");
    const savedColor = localStorage.getItem("selectedColor");

    if (savedBackground) {
      setSelectedBackground(savedBackground);
    }

    if (savedColor) {
      setSelectedColor(savedColor);
    }
  }, []);

  const handleBackgroundChange = (event) => {
    const background = event.target.value;
    setSelectedBackground(background);
    applySelectedStyles({ ...selectedColor, background });
    localStorage.setItem("selectedBackground", background);
  };

  const handleColorChange = (event) => {
    const color = event.target.value;
    setSelectedColor(color);
    applySelectedStyles({ ...selectedBackground, color });
    localStorage.setItem("selectedColor", color);
  };

  const applySelectedStyles = (background, color) => {
    const selectedTheme = {
      background: background || theme.background,
      color: color || theme.color,
    };
    setTheme(selectedTheme);
  };

  return {
    selectedBackground,
    selectedColor,
    handleBackgroundChange,
    handleColorChange,
  };
};
