import { useEffect } from 'react';

function DarkModeDetection() {
    useEffect(() => {
        // Function to detect system color scheme and add corresponding class to body
        const detectSystemColorScheme = () => {
            const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

            if (prefersDarkMode) {
                document.body.classList.add('dark-mode');
            } else {
                document.body.classList.add('light-mode');
            }
        };

        // Call the function when the component mounts
        detectSystemColorScheme();

        // Clean up function to remove event listener when component unmounts
        return () => {
            // Remove the classes if needed
            document.body.classList.remove('dark-mode');
            document.body.classList.remove('light-mode');
        };
    }, []); // Empty dependency array to run effect only once when component mounts

    return null; // This component doesn't render anything to the DOM
}

export default DarkModeDetection;
