import React from "react";

function Header({handleMode, isDarkMode}) {
    return (
        <header>
            <h2>Shopster</h2>
            <button onClick={handleMode}>
            {isDarkMode ? "Dark" : "Light"} Mode
            </button>
         </header>
    )
}

export default Header;