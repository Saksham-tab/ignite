// IGNITE - JavaScript Animation and Interaction Handler

// GSAP Registration and Preloader Animation
gsap.registerPlugin(ScrollTrigger);

/**
 * Initialize the blood drop preloader animation sequence
 */
function initPreloader() {
    const tl = gsap.timeline();
    
    // Blood drop appears and falls
    tl.to('#bloodDrop', {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out"
    })
    .to('#bloodDrop', {
        y: 200,
        duration: 2,
        ease: "power2.in"
    })
    // Create splash effect with veins
    .add(() => {
        createSplash();
    })
    // Show IGNITE text
    .to('#igniteText', {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        delay: 0.5
    })
    // Fade out preloader
    .to('#preloader', {
        opacity: 0,
        duration: 1,
        delay: 1,
        onComplete: () => {
            document.getElementById('preloader').style.display = 'none';
            showMainContent();
        }
    });
}

/**
 * Creates the blood splash effect with radiating veins
 */
function createSplash() {
    const container = document.getElementById('splashContainer');
    const numVeins = 12;
    
    for (let i = 0; i < numVeins; i++) {
        const vein = document.createElement('div');
        vein.className = 'vein';
        vein.style.width = Math.random() * 100 + 50 + 'px';
        vein.style.left = '50%';
        vein.style.top = '50%';
        vein.style.transformOrigin = '0 50%';
        vein.style.transform = `translate(-50%, -50%) rotate(${i * 30}deg)`;
        container.appendChild(vein);
        
        // Animate vein appearance
        gsap.to(vein, {
            opacity: 1,
            duration: 0.3,
            delay: i * 0.05,
            ease: "power2.out"
        });
        
        // Animate vein disappearance
        gsap.to(vein, {
            opacity: 0,
            duration: 0.5,
            delay: 1 + i * 0.02,
            ease: "power2.in"
        });
    }
}

/**
 * Show main content after preloader completes
 */
function showMainContent() {
    gsap.to('#mainContent', {
        opacity: 1,
        duration: 1,
        ease: "power2.out"
    });
    
    // Initialize scroll animations
    initScrollAnimations();
}

/**
 * Initialize scroll-triggered animations for content sections
 */
function initScrollAnimations() {
    // Animate sections that fade up on scroll
    gsap.utils.toArray('.fade-up').forEach(element => {
        gsap.fromTo(element, 
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: element,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });

    // Hero section text animations
    gsap.fromTo('.hero h1', 
        { opacity: 0, scale: 0.8 },
        {
            opacity: 1,
            scale: 1,
            duration: 1.5,
            ease: "power2.out",
            delay: 0.5
        }
    );

    gsap.fromTo('.hero p', 
        { opacity: 0, y: 30 },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            delay: 1
        }
    );

    gsap.fromTo('.cta-button', 
        { opacity: 0, y: 30 },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            delay: 1.3
        }
    );

    // Animate timeline items
    gsap.utils.toArray('.timeline-item').forEach((item, index) => {
        gsap.fromTo(item,
            { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
            {
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: item,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });

    // Animate cards
    gsap.utils.toArray('.card').forEach((card, index) => {
        gsap.fromTo(card,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                delay: index * 0.1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });
}

/**
 * Handle email signup with mystical effects
 */
function joinIgnite() {
    const email = document.getElementById('emailInput').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (email && emailRegex.test(email)) {
        // Create mystical effect on successful signup
        gsap.to('.join-section', {
            background: 'linear-gradient(135deg, #7B1E1E, #E25822)',
            duration: 2,
            ease: "power2.inOut"
        });
        
        // Add glow effect to the entire section
        gsap.to('.join-section', {
            boxShadow: '0 0 100px rgba(226, 88, 34, 0.3)',
            duration: 1,
            ease: "power2.out"
        });
        
        // Animate the input field
        gsap.to('.email-input', {
            borderColor: '#CFA849',
            boxShadow: '0 0 30px rgba(207, 168, 73, 0.5)',
            duration: 0.5,
            ease: "power2.out"
        });
        
        setTimeout(() => {
            alert('Welcome to the Circle. Your awakening begins now...');
            // Reset form
            document.getElementById('emailInput').value = '';
            
            // Reset styles after delay
            setTimeout(() => {
                gsap.to('.join-section', {
                    background: 'linear-gradient(135deg, var(--ash-gray), var(--ritual-black))',
                    boxShadow: 'none',
                    duration: 1,
                    ease: "power2.out"
                });
                
                gsap.to('.email-input', {
                    borderColor: 'var(--blood-red)',
                    boxShadow: 'none',
                    duration: 0.5,
                    ease: "power2.out"
                });
            }, 2000);
        }, 1000);
    } else {
        // Error animation
        gsap.to('.email-input', {
            borderColor: '#ff4444',
            duration: 0.3,
            ease: "power2.out",
            yoyo: true,
            repeat: 1
        });
        
        gsap.to('.email-input', {
            x: -10,
            duration: 0.1,
            ease: "power2.out",
            yoyo: true,
            repeat: 5
        });
        
        setTimeout(() => {
            alert('The flame requires a valid email to kindle...');
        }, 500);
    }
}

// Page flicker effect on scroll (mystical ambiance)
let flickerTimeout;
window.addEventListener('scroll', () => {
    clearTimeout(flickerTimeout);
    flickerTimeout = setTimeout(() => {
        if (Math.random() < 0.05) { // 5% chance to flicker
            document.body.style.filter = 'brightness(0.3) contrast(1.2)';
            setTimeout(() => {
                document.body.style.filter = 'brightness(1) contrast(1)';
            }, 50);
            
            // Additional flicker variations
            setTimeout(() => {
                if (Math.random() < 0.3) {
                    document.body.style.filter = 'brightness(0.7) hue-rotate(10deg)';
                    setTimeout(() => {
                        document.body.style.filter = 'brightness(1) contrast(1)';
                    }, 30);
                }
            }, 100);
        }
    }, 150);
});

// Ambient particle system for mystical atmosphere
function createAmbientParticles() {
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particle-container';
    particleContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
    `;
    document.body.appendChild(particleContainer);
    
    // Create floating particles
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            createParticle(particleContainer);
        }, i * 200);
    }
}

/**
 * Create individual ambient particle
 */
function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'ambient-particle';
    
    // Random positioning and styling
    const size = Math.random() * 4 + 2;
    const startX = Math.random() * window.innerWidth;
    const startY = window.innerHeight + 50;
    const opacity = Math.random() * 0.3 + 0.1;
    
    particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: radial-gradient(circle, rgba(226, 88, 34, ${opacity}) 0%, transparent 70%);
        border-radius: 50%;
        left: ${startX}px;
        top: ${startY}px;
        pointer-events: none;
    `;
    
    container.appendChild(particle);
    
    // Animate particle floating upward
    gsap.to(particle, {
        y: -window.innerHeight - 100,
        x: startX + (Math.random() - 0.5) * 200,
        duration: Math.random() * 15 + 10,
        ease: "none",
        opacity: 0,
        onComplete: () => {
            particle.remove();
            // Create new particle to maintain count
            setTimeout(() => {
                createParticle(container);
            }, Math.random() * 5000);
        }
    });
}

// Blood moon effect (rare occurrence)
let bloodMoonActive = false;
function triggerBloodMoon() {
    if (bloodMoonActive) return;
    
    bloodMoonActive = true;
    const overlay = document.createElement('div');
    overlay.className = 'blood-moon-overlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle at 80% 20%, rgba(139, 69, 19, 0.3) 0%, rgba(178, 34, 34, 0.2) 40%, transparent 70%);
        pointer-events: none;
        z-index: 999;
        opacity: 0;
    `;
    document.body.appendChild(overlay);
    
    // Animate blood moon appearance
    gsap.to(overlay, {
        opacity: 1,
        duration: 3,
        ease: "power2.inOut"
    });
    
    // Fade out after duration
    setTimeout(() => {
        gsap.to(overlay, {
            opacity: 0,
            duration: 3,
            ease: "power2.inOut",
            onComplete: () => {
                overlay.remove();
                bloodMoonActive = false;
            }
        });
    }, 8000);
}

// Randomly trigger blood moon (very rare)
setInterval(() => {
    if (Math.random() < 100) { // 100% chance every 0.5 seconds
        triggerBloodMoon();
    }
}, 500);

// Thunder/lightning effect for dramatic moments
function createLightningEffect() {
    const flash = document.createElement('div');
    flash.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: white;
        opacity: 0;
        pointer-events: none;
        z-index: 9999;
        mix-blend-mode: screen;
    `;
    document.body.appendChild(flash);
    
    // Lightning flash sequence
    const tl = gsap.timeline({
        onComplete: () => flash.remove()
    });
    
    tl.to(flash, { opacity: 0.8, duration: 0.05 })
      .to(flash, { opacity: 0, duration: 0.1 })
      .to(flash, { opacity: 0.6, duration: 0.03, delay: 0.1 })
      .to(flash, { opacity: 0, duration: 0.2 });
}
// Dropdown toggle on click (for mobile support)
document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        e.preventDefault();
        const menu = toggle.nextElementSibling;
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    });
});


// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Start preloader if elements exist
    if (document.getElementById('preloader')) {
        initPreloader();
    } else {
        // If no preloader, initialize animations directly
        showMainContent();
    }
    
    // Initialize ambient effects
    createAmbientParticles();
    
    // Random lightning (very rare)
    setInterval(() => {
        if (Math.random() < 0.02) { // 0.2% chance every 10 seconds
            createLightningEffect();
        }
    }, 10000);
});

// Enhanced scroll effects
// Enhanced scroll effects
let lastScrollY = window.scrollY;
window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    const scrollDelta = Math.abs(currentScrollY - lastScrollY);

    // Intense scroll creates mystical effects
    if (scrollDelta > 50) {
        if (Math.random() < 0.1) {
            // Quick screen distortion
            gsap.to(document.body, {
                filter: 'hue-rotate(180deg) saturate(1.5)', // 🚨 causes green/blue shift
                duration: 0.1,
                yoyo: true,
                repeat: 1,
                ease: "power2.inOut"
            });
        }
    }

    lastScrollY = currentScrollY;
});

// Open login panel on "Join" button click
// Only trigger login panel when user clicks the Profile button
document.getElementById('openProfile').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('loginPanel').classList.add('active');
});

window.addEventListener('DOMContentLoaded', () => {
  if (!localStorage.getItem('popupShown')) {
    setTimeout(() => {
      document.getElementById('discountPopup').classList.add('active');
      localStorage.setItem('popupShown', 'true');
    }, 5000); // 5-second delay
    
  }
   // Close Login Panel
  const closeLoginBtn = document.getElementById('closeLogin');
  if (closeLoginBtn && loginPanel) {
    closeLoginBtn.addEventListener('click', () => {
      loginPanel.classList.remove('active');
    });
  }
});

const toggleSearchBtn = document.getElementById('toggleSearch');
const searchContainer = document.getElementById('searchContainer');
const closeSearchBarBtn = document.getElementById('closeSearchBar');

// Show search bar on click
toggleSearchBtn.addEventListener('click', (e) => {
  e.preventDefault();
  searchContainer.style.display = 'flex';
});

// Close search bar
closeSearchBarBtn.addEventListener('click', () => {
  searchContainer.style.display = 'none';
});



// Toggle between login and signup forms
document.getElementById('showSignup').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('loginFormSection').style.display = 'none';
    document.getElementById('signupFormSection').style.display = 'block';
});

document.getElementById('showLogin').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('signupFormSection').style.display = 'none';
    document.getElementById('loginFormSection').style.display = 'block';
});


// Export functions for potential external use
window.IGNITE = {
    initPreloader,
    joinIgnite,
    createLightningEffect,
    triggerBloodMoon
};