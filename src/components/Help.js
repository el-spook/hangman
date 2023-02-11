/* 
The function component Help gives instructions to the user on how to play the game.
It will display when the app is loaded, but can be hidden or shown using a button in the Header.
The component returns a div with an H3, two paragraphs, and a numbered list of instructions:
*/
const Help = () => {
    return (
        <div>
            <h3>Playing Hangman is Easy!</h3>
            <p>The aim of the game is to correctly guess the randomly generated word. Each blank space represents a letter, and it's your job to guess the right letters.</p>
            <p>How to play:</p>

            <div className="help-list">
                <ol>
                    <li>Click the green 'New Game' button at the bottom.</li>
                    <li>Guess a letter by clicking on it. Choose wisely, as you can only pick an incorrect letter ten times.</li>
                    <li>If you guess correctly, the letter is revealed. If you don't, you lose one of your chances, and the image changes.</li>
                    <li>If you get every letter in the word before the final image is displayed, you win!</li>
                    <li>But if the final image is displayed and you still have missing letters, you lose.</li>
                    <li>Click 'Hide Help' to hide this section. You can get it back any time.</li>
                    <li>Click the 'New Game' button at any time to start a new game.</li>
                </ol>
            </div>

        </div>
    ) 
};
// Export the component so it can be imported into the Header component:
export default Help;
