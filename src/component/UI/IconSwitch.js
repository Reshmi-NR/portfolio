import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import DarkSide from "../hooks/DarkSide";
 
export default function Switcher() {
    const [colorTheme, setTheme] = DarkSide();
    const [darkSide, setDarkSide] = useState(
        colorTheme === "light" ? true : false
    );
 
    const toggleDarkMode = (checked) => {
        setTheme(colorTheme);
        setDarkSide(checked);
    };
 
    return (
        <div>
            <DarkModeSwitch
                style={{ marginBottom: "9rem",
                position: "relative",
                right: "15",
                top: "9"
                }}
                checked={darkSide}
                onChange={toggleDarkMode}
                size={90}
            />
        </div>
    );
}