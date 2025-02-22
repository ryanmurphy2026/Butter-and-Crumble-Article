window.addEventListener("scroll", () => {
                        const article = document.querySelector("body");
                        const box = document.querySelector("#Scroll-Guy");
            
                        const articleHeight = article.scrollHeight; // Total height of article
                        const windowHeight = window.innerHeight; // Viewport height
                        const maxScroll = articleHeight - windowHeight; // Max scroll distance
            
                        const maxMove = window.innerWidth - 100; // Max horizontal movement (subtract box width)
                        const scrollPosition = window.scrollY; // Current scroll position
            
                        // Map scroll position to horizontal movement
                        const moveX = (scrollPosition / maxScroll) * maxMove;

                        // Pendulum effect using sine function
                        const swingAmplitude = 10; // How much it swings (degrees)
                        const swingSpeed = 0.02; // Adjust frequency of swing
                        const angle = Math.sin(scrollPosition * swingSpeed) * swingAmplitude;

                        // Apply movement and rotation
                        box.style.transform = `translateX(${moveX}px) rotate(${angle}deg)`;
            
                    }); 
                