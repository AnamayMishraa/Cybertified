


// Add the typing effect and letter-changing effect for dynamic text
document.addEventListener('DOMContentLoaded', () => {
    const changingText = document.querySelector('.changing-text');
    
    // Texts for the changing effect
    const texts = [
        'Empowering the Next Generation of Cyber Warriors...',
        'Unleashing Your Cybersecurity Potential...',
        'Hack, Secure, Innovate – Togethe...',
        'Building a Safer Digital Future...',
        'Learn, Compete, and Dominate in Cyber Defense...',
        'Crack the Code, Secure the World...',
        'Your Journey into Cybersecurity Starts Here...',
        'Master the Art of Cyber Protection...',
        'Tools, Projects, and Writeups for Cyber Enthusiasts...',
        'Where Knowledge Becomes Cyber Power...'
    ];

    let index = 0;

    // Function to change the text
    setInterval(() => {
        changingText.textContent = texts[index];
        index = (index + 1) % texts.length;
    }, 2000);
});

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


// Apply effect on hover for any element with the 'heffect' class or the heading
let interval; // Declare interval outside the function for broader scope

document.querySelectorAll(".red, .blue, .purple, .intro-writeup").forEach(element => {
    element.onmouseover = event => {  
        let iteration = 0;
        const target = event.target;

        // Store the original text in data-value if not already set
        if (!target.dataset.value) {
            target.dataset.value = target.innerText;
        }
        
        // Clear any existing interval to prevent multiple executions
        clearInterval(interval);
        
        interval = setInterval(() => {
            target.innerText = target.innerText
                .split("")
                .map((letter, index) => {
                    if (index < iteration) {
                        return target.dataset.value[index]; // Return correct letter if past the iteration
                    }
                    
                    // Random letters for the rest
                    return String.fromCharCode(65 + Math.floor(Math.random() * 26)); // Random uppercase letters (A-Z)
                })
                .join("");

            // Stop the effect once the full text is revealed
            if (iteration >= target.dataset.value.length) {
                clearInterval(interval);
                target.innerText = target.dataset.value; // Ensure the final text is correct
            }

            iteration += 1; // Increment iteration to reveal the next letter
        }, 80); // Adjust the interval timing for speed control
    };
    
    // Optional: Reset effect on mouse leave
    element.onmouseleave = event => {
        clearInterval(interval);
        const target = event.target;
        target.innerText = target.dataset.value; // Reset to original text
    };
});
