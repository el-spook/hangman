// Import the useState hook and the Help component:
import { useState } from "react";
import Help from "./Help";

// Create a functional component to show the title, Help button, and Help component on toggle:
const Header = () => {
    // Use the useState hook to store a boolean which will show or hide the Help component:
    const [showHelp, setShowHelp] = useState(true);

    // An onClick function that toggles the true/false state of the button:
    const displayHelp = () => {
        setShowHelp(!showHelp);
    }
    /* The component returns a header containing an h1 and a "Help" button.
    The Help component is shown below the header when the state is "true" (on first load and when 
    the button is clicked). On a click the "Help" button calls the displayHelp function and also 
    toggles what the button text says. */
    return (
        <div>
            <header>
                <h1>Hangman</h1>
                <button className="btn" onClick={displayHelp}>{showHelp ? 'Hide Help' : 'Help'}</button>
            </header>
            {showHelp && <Help />}
        </div>
    );
}
// Export the header to be used in the App component:
export default Header;
