// Cool and Professional Portfolio JavaScript

// Custom Cursor
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    setTimeout(() => {
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
    }, 100);
});

// Cursor hover effects
document.querySelectorAll('a, button, .project-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(1.5)';
        cursorFollower.style.transform = 'scale(1.5)';
    });
    
    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursorFollower.style.transform = 'scale(1)';
    });
});

// Navigation
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active navigation highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Experience and Research tabs
function initTabs() {
    // Handle Experience section tabs
    const experienceSection = document.querySelector('#experience');
    if (experienceSection) {
        const expTabButtons = experienceSection.querySelectorAll('.tab-button');
        const expJobPanels = experienceSection.querySelectorAll('.job-panel');
        
        expTabButtons.forEach((button) => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons and panels in this section
                expTabButtons.forEach(btn => btn.classList.remove('active'));
                expJobPanels.forEach(panel => panel.classList.remove('active'));
                
                // Add active class to clicked button and corresponding panel
                button.classList.add('active');
                const targetPanel = experienceSection.querySelector(`[data-panel="${button.getAttribute('data-tab')}"]`);
                if (targetPanel) {
                    targetPanel.classList.add('active');
                }
            });
        });
    }
    
    // Handle Research section tabs
    const researchSection = document.querySelector('#research');
    if (researchSection) {
        const resTabButtons = researchSection.querySelectorAll('.tab-button');
        const resJobPanels = researchSection.querySelectorAll('.job-panel');
        
        resTabButtons.forEach((button) => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons and panels in this section
                resTabButtons.forEach(btn => btn.classList.remove('active'));
                resJobPanels.forEach(panel => panel.classList.remove('active'));
                
                // Add active class to clicked button and corresponding panel
                button.classList.add('active');
                const targetPanel = researchSection.querySelector(`[data-panel="${button.getAttribute('data-tab')}"]`);
                if (targetPanel) {
                    targetPanel.classList.add('active');
                }
            });
        });
    }
}

// Terminal typing animation
const terminalOutput = document.querySelector('.terminal-output');
const outputLines = [
    'Name: Trisha Gorusu',
    'Role: Software Engineer',
    'Focus: Research & Infrastructure',
    'Location: Remote',
    'Status: Available for opportunities'
];

function typeTerminalOutput() {
    terminalOutput.innerHTML = '';
    let lineIndex = 0;
    
    function typeLine() {
        if (lineIndex < outputLines.length) {
            const line = document.createElement('div');
            line.className = 'output-line';
            terminalOutput.appendChild(line);
            
            let charIndex = 0;
            const text = outputLines[lineIndex];
            
            function typeChar() {
                if (charIndex < text.length) {
                    line.textContent += text[charIndex];
                    charIndex++;
                    setTimeout(typeChar, 50);
                } else {
                    lineIndex++;
                    setTimeout(typeLine, 300);
                }
            }
            
            typeChar();
        }
    }
    
    setTimeout(typeLine, 1000);
}

// Start terminal animation when page loads
window.addEventListener('load', typeTerminalOutput);

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe sections for animations
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
    
    document.querySelectorAll('.project-card').forEach(card => {
        observer.observe(card);
    });
});

// Project card hover effects
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Parallax effect for hero grid
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroGrid = document.querySelector('.hero-grid');
    
    if (heroGrid) {
        heroGrid.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        animation: fadeInUp 0.6s ease forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .nav-link.active {
        color: var(--accent-primary);
    }
    
    .nav-toggle.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    
    .nav-toggle.active span:nth-child(2) {
        opacity: 0;
    }
    
    .nav-toggle.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }
    
    .project-card {
        transition: transform 0.3s ease;
    }
    
    @media (hover: hover) {
        .cursor,
        .cursor-follower {
            display: block;
        }
    }
    
    @media (hover: none) {
        .cursor,
        .cursor-follower {
            display: none;
        }
    }
`;
document.head.appendChild(style);

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(10, 10, 10, 0.95)';
    } else {
        nav.style.background = 'rgba(10, 10, 10, 0.9)';
    }
});

// Add subtle animations to elements
const addHoverEffects = () => {
    // Tech list items
    document.querySelectorAll('.tech-list li').forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.color = 'var(--accent-primary)';
            item.style.transform = 'translateX(5px)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.color = 'var(--text-secondary)';
            item.style.transform = 'translateX(0)';
        });
    });
    
    // Job details
    document.querySelectorAll('.job-details li').forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.color = 'var(--text-primary)';
            item.style.transform = 'translateX(5px)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.color = 'var(--text-secondary)';
            item.style.transform = 'translateX(0)';
        });
    });
};

// Initialize hover effects
document.addEventListener('DOMContentLoaded', addHoverEffects);

// Performance optimization: Throttle scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply throttling to scroll events
const throttledScroll = throttle(() => {
    // Scroll-based animations here
}, 16);

window.addEventListener('scroll', throttledScroll);

// Project Image Slider
function initProjectSliders() {
    const sliders = document.querySelectorAll('.project-slider');
    
    sliders.forEach((slider, sliderIndex) => {
        const images = slider.querySelectorAll('.slider-img');
        const dots = slider.querySelectorAll('.dot');
        let currentSlide = 0;
        
        // Auto-slide functionality
        function nextSlide() {
            images[currentSlide].classList.remove('active');
            dots[currentSlide].classList.remove('active');
            
            currentSlide = (currentSlide + 1) % images.length;
            
            images[currentSlide].classList.add('active');
            dots[currentSlide].classList.add('active');
        }
        
        // Manual dot navigation
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                if (index === currentSlide) return;
                
                images[currentSlide].classList.remove('active');
                dots[currentSlide].classList.remove('active');
                
                currentSlide = index;
                
                images[currentSlide].classList.add('active');
                dots[currentSlide].classList.add('active');
            });
        });
        
        // Start auto-slide (every 4 seconds, staggered for multiple sliders)
        setTimeout(() => {
            setInterval(nextSlide, 4000);
        }, sliderIndex * 1000); // Stagger start times
    });
}

// Animated Pink Character
function initPinkCharacter() {
    const character = document.querySelector('.pink-character');
    const sections = document.querySelectorAll('section');
    let currentSection = 0;
    let isAnimating = false;
    let isDragging = false;
    let dragOffset = { x: 0, y: 0 };
    let returnTimeout;
    let idleTimeout;
    let lastInteraction = Date.now();
    let velocity = { x: 0, y: 0 };
    let lastPosition = { x: 0, y: 0 };
    let targetPosition = window.innerHeight - 150; // Default position
    
    // Smooth position interpolation
    function lerp(start, end, factor) {
        return start + (end - start) * factor;
    }
    
    function getSectionBottomPosition(sectionIndex) {
        if (sectionIndex >= 0 && sectionIndex < sections.length) {
            const section = sections[sectionIndex];
            // Simple calculation - bottom of section minus offset
            const sectionBottom = section.offsetTop + section.offsetHeight;
            const viewportBottom = window.scrollY + window.innerHeight;
            
            // If section is visible, position near its bottom
            if (sectionBottom > window.scrollY && section.offsetTop < viewportBottom) {
                return Math.min(sectionBottom - window.scrollY - 120, window.innerHeight - 150);
            }
        }
        return window.innerHeight - 150; // Default fallback
    }
    
    function updateCharacterPosition(animate = false) {
        if (isDragging) return;
        
        targetPosition = getSectionBottomPosition(currentSection);
        
        if (animate) {
            // Use CSS transition for smooth movement
            character.style.transition = 'top 0.8s cubic-bezier(0.23, 1, 0.32, 1)';
            character.style.top = `${targetPosition}px`;
            
            // Remove transition after animation
            setTimeout(() => {
                character.style.transition = '';
            }, 800);
        } else {
            character.style.top = `${targetPosition}px`;
        }
    }
    
    function triggerAnimation(animationType) {
        if (isAnimating || isDragging) return;
        
        isAnimating = true;
        character.classList.add(animationType);
        lastInteraction = Date.now();
        
        const durations = {
            'flipping': 1400,
            'jumping': 1200,
            'bouncing': 1800,
            'wiggling': 1800,
            'dancing': 1500
        };
        
        setTimeout(() => {
            character.classList.remove(animationType);
            isAnimating = false;
        }, durations[animationType] || 1200);
    }
    
    function getCurrentSection() {
        const scrollCenter = window.scrollY + window.innerHeight / 2;
        
        for (let i = 0; i < sections.length; i++) {
            const section = sections[i];
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            if (scrollCenter >= sectionTop && scrollCenter < sectionBottom) {
                return i;
            }
        }
        return Math.max(0, Math.min(sections.length - 1, currentSection));
    }
    
    // Throttled section change check
    let sectionCheckTimeout;
    function checkSectionChange() {
        if (isDragging || sectionCheckTimeout) return;
        
        sectionCheckTimeout = setTimeout(() => {
            const newSection = getCurrentSection();
            
            if (newSection !== currentSection) {
                const animations = ['flipping', 'jumping', 'bouncing', 'dancing'];
                const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
                
                triggerAnimation(randomAnimation);
                currentSection = newSection;
                updateCharacterPosition(true);
            }
            
            sectionCheckTimeout = null;
        }, 100);
    }
    
    // Random idle animations
    function triggerIdleAnimation() {
        if (isDragging || isAnimating) return;
        
        const timeSinceLastInteraction = Date.now() - lastInteraction;
        if (timeSinceLastInteraction > 8000) {
            const idleAnimations = ['wiggling', 'dancing'];
            const randomIdle = idleAnimations[Math.floor(Math.random() * idleAnimations.length)];
            triggerAnimation(randomIdle);
        }
        
        idleTimeout = setTimeout(triggerIdleAnimation, 10000 + Math.random() * 5000);
    }
    
    // Simplified drag functionality
    function startDrag(e) {
        isDragging = true;
        character.classList.add('dragging');
        lastInteraction = Date.now();
        
        const rect = character.getBoundingClientRect();
        const clientX = e.clientX || (e.touches && e.touches[0].clientX);
        const clientY = e.clientY || (e.touches && e.touches[0].clientY);
        
        dragOffset.x = clientX - rect.left;
        dragOffset.y = clientY - rect.top;
        
        clearTimeout(returnTimeout);
        clearTimeout(idleTimeout);
        
        e.preventDefault();
    }
    
    function drag(e) {
        if (!isDragging) return;
        
        const clientX = e.clientX || (e.touches && e.touches[0].clientX);
        const clientY = e.clientY || (e.touches && e.touches[0].clientY);
        
        const newX = clientX - dragOffset.x;
        const newY = clientY - dragOffset.y;
        
        // Simple viewport constraints
        const padding = 20;
        const maxX = window.innerWidth - character.offsetWidth - padding;
        const maxY = window.innerHeight - character.offsetHeight - padding;
        
        const constrainedX = Math.max(padding, Math.min(maxX, newX));
        const constrainedY = Math.max(padding, Math.min(maxY, newY));
        
        // Direct positioning for smooth dragging
        character.style.left = `${constrainedX}px`;
        character.style.top = `${constrainedY}px`;
        character.style.right = 'auto';
        
        e.preventDefault();
    }
    
    function endDrag() {
        if (!isDragging) return;
        
        isDragging = false;
        character.classList.remove('dragging');
        lastInteraction = Date.now();
        
        // Return to section position after delay
        returnTimeout = setTimeout(() => {
            character.classList.add('returning');
            character.style.left = 'auto';
            character.style.right = '50px';
            updateCharacterPosition(true);
            
            setTimeout(() => {
                character.classList.remove('returning');
                idleTimeout = setTimeout(triggerIdleAnimation, 5000);
            }, 1000);
        }, 2500);
    }
    
    // Event listeners
    character.addEventListener('mousedown', startDrag);
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', endDrag);
    
    character.addEventListener('touchstart', startDrag, { passive: false });
    document.addEventListener('touchmove', drag, { passive: false });
    document.addEventListener('touchend', endDrag);
    
    character.addEventListener('contextmenu', (e) => e.preventDefault());
    
    // Click for animations
    character.addEventListener('click', () => {
        if (!isDragging) {
            const clickAnimations = ['jumping', 'bouncing', 'wiggling'];
            const randomClick = clickAnimations[Math.floor(Math.random() * clickAnimations.length)];
            triggerAnimation(randomClick);
        }
    });
    
    // Simplified scroll handler
    let scrollTimeout;
    function handleScroll() {
        if (isDragging) return;
        
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            updateCharacterPosition(false);
            checkSectionChange();
        }, 50);
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Resize handler
    window.addEventListener('resize', () => {
        if (!isDragging) {
            updateCharacterPosition(false);
        }
    });
    
    // Initialize
    currentSection = getCurrentSection();
    updateCharacterPosition(false);
    idleTimeout = setTimeout(triggerIdleAnimation, 12000);
}

// Initialize sliders and character when page loads
document.addEventListener('DOMContentLoaded', () => {
    initTabs();
    initProjectSliders();
    initPinkCharacter();
});

// Console message
console.log('%c🚀 Portfolio loaded successfully!', 'color: #ff6b9d; font-size: 16px; font-weight: bold;');
console.log('%cBuilt with modern web technologies', 'color: #94a3b8; font-size: 12px;');