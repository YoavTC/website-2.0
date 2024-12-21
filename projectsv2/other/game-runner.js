// Get build files path prefix
const buildFilesPathPrefix = document.querySelector('#build-files-path-prefix').getAttribute('value');

// Element references
const startButton = document.getElementById("start-button");
const inactiveBackgroundImage = document.querySelector(".inactive-game-img");
const gameContainer = document.querySelector(".game-container");

// Store original console
const originalConsoleLog = console.log;

// Add Unity's game script
const script = document.createElement('script');
script.src = 'Build/' + buildFilesPathPrefix + '.loader.js';
script.type = 'text/javascript';
script.async = true;
document.head.appendChild(script); 

// Add event listener to the start button
if (startButton) startButton.addEventListener("click", () => {
    // Hide the button
    startButton.style.display = "none";

    // Remove the inactive image
    if (inactiveBackgroundImage) {
        inactiveBackgroundImage.remove();
    }

    PlayGame();
});

function PlayGame() {
    // Create the Unity player
    createUnityInstance(document.querySelector("#unity-canvas"), {
        dataUrl: "Build/" + buildFilesPathPrefix + ".data",
        frameworkUrl: "Build/" + buildFilesPathPrefix +".framework.js",
        codeUrl: "Build/" + buildFilesPathPrefix +".wasm",
    });
}

// Override console.log
console.log = function (message, ...optionalParams) {
    // Call the original log function
    originalConsoleLog.apply(console, [message, ...optionalParams]);

    // Check for Unity quit message
    if (typeof message === "string" && message.includes("Quitting...")) {
        if (document.title == "Fullscreen Game Player") {
            window.close();
        } else {
            location.reload();
        }
    }
};

