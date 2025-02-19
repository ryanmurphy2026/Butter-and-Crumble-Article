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
            
                        // Apply transformation
                        box.style.transform = `translateX(${moveX}px)`;
                    });                   