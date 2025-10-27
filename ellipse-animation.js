// Elliptical Ball Animation
class EllipseAnimation {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) {
            console.log('Canvas not found:', canvasId);
            this.isValid = false;
            return;
        }
        
        this.ctx = this.canvas.getContext('2d');
        this.isValid = true;
        
        // Animation properties
        this.animationId = null;
        this.time = 0;
        this.trails = [[], [], []];
        
        // Bounds will be initialized after canvas check
        
        // Initialize three balls with different ellipse parameters
        this.balls = [
            {
                // White ball - REVERSE DIRECTION
                color: 'white',
                radius: 24, // 3x larger (was 8)
                centerX: 0, centerY: 0, // Will be set in resizeCanvas
                ellipseA: 0, // Will be calculated in resizeCanvas
                ellipseB: 0, // Will be calculated in resizeCanvas
                speed: -0.005,   // NEGATIVE speed for opposite direction
                tiltSpeed: 0.00125, // Oscillation speed (1/4 of original 0.005)
                tiltAmount: 0.3,  // Max tilt in radians
                phase: 0,      // Starting phase
                tiltPhase: 0   // Tilt oscillation phase
            },
            {
                // Light grey ball
                color: '#999999',
                radius: 30, // 3x larger (was 10)
                centerX: 0, centerY: 0,
                ellipseA: 0, // Will be calculated in resizeCanvas
                ellipseB: 0, // Will be calculated in resizeCanvas
                speed: 0.00375, // 1/4 of original 0.015
                tiltSpeed: 0.002, // 1/4 of original 0.008
                tiltAmount: 0.4,
                phase: Math.PI * 0.6, // Offset phase
                tiltPhase: Math.PI * 0.3
            },
            {
                // Dark grey ball
                color: '#333333',
                radius: 18, // 3x larger (was 6)
                centerX: 0, centerY: 0,
                ellipseA: 0, // Will be calculated in resizeCanvas
                ellipseB: 0, // Will be calculated in resizeCanvas
                speed: 0.00625, // 1/4 of original 0.025
                tiltSpeed: 0.00075, // 1/4 of original 0.003
                tiltAmount: 0.5,
                phase: Math.PI * 1.3, // Different offset
                tiltPhase: Math.PI * 0.8
            }
        ];
        
        // Initialize bounds object (will be properly set in resizeCanvas)
        this.bounds = {
            left: 320,   // Sidebar width
            right: 800,  // Will be updated in resizeCanvas
            top: 50,     // Top margin
            bottom: 600  // Will be updated in resizeCanvas
        };
        
        this.resizeCanvas();
        window.addEventListener('resize', () => this.resizeCanvas());
        console.log('EllipseAnimation initialized');
    }
    
    resizeCanvas() {
        if (!this.canvas || !this.isValid) return;
        
        const rect = this.canvas.getBoundingClientRect();
        this.canvas.width = rect.width;
        this.canvas.height = rect.height;
        
        // Update boundaries with proper margins
        this.bounds.left = 320;  // Sidebar width + margin
        this.bounds.right = this.canvas.width - 50;  // Right margin
        this.bounds.top = 50;    // Top margin  
        this.bounds.bottom = this.canvas.height - 50; // Bottom margin
        
        // Set ellipse centers to the TRUE center of the available background area
        const availableWidth = this.bounds.right - this.bounds.left;
        const availableHeight = this.bounds.bottom - this.bounds.top;
        const backgroundCenterX = this.bounds.left + (availableWidth / 2);
        const backgroundCenterY = this.bounds.top + (availableHeight / 2);
        
        // Calculate maximum ellipse dimensions to almost touch boundaries
        const maxWidth = availableWidth / 2 - 30; // Leave 30px margin from edges
        const maxHeight = availableHeight / 2 - 30; // Leave 30px margin from edges
        
        // Set ellipse dimensions to use most of the available space
        // Different sizes to prevent balls from touching
        this.balls[0].centerX = backgroundCenterX;
        this.balls[0].centerY = backgroundCenterY;
        this.balls[0].ellipseA = maxWidth * 0.9; // 90% of max width
        this.balls[0].ellipseB = maxHeight * 0.6; // 60% of max height
        
        this.balls[1].centerX = backgroundCenterX;
        this.balls[1].centerY = backgroundCenterY;
        this.balls[1].ellipseA = maxWidth * 0.7; // 70% of max width
        this.balls[1].ellipseB = maxHeight * 0.8; // 80% of max height
        
        this.balls[2].centerX = backgroundCenterX;
        this.balls[2].centerY = backgroundCenterY;
        this.balls[2].ellipseA = maxWidth * 0.5; // 50% of max width
        this.balls[2].ellipseB = maxHeight * 0.4; // 40% of max height
    }
    
    updateBalls() {
        this.time += 0.016; // Roughly 60fps
        
        for (let i = 0; i < this.balls.length; i++) {
            const ball = this.balls[i];
            
            // Update phases
            ball.phase += ball.speed;
            ball.tiltPhase += ball.tiltSpeed;
            
            // Calculate current tilt angle (oscillates)
            const currentTilt = Math.sin(ball.tiltPhase) * ball.tiltAmount;
            
            // Calculate position on ellipse
            const cos_phase = Math.cos(ball.phase);
            const sin_phase = Math.sin(ball.phase);
            const cos_tilt = Math.cos(currentTilt);
            const sin_tilt = Math.sin(currentTilt);
            
            // Ellipse equation with rotation
            const x_ellipse = ball.ellipseA * cos_phase;
            const y_ellipse = ball.ellipseB * sin_phase;
            
            // Apply tilt rotation
            ball.x = ball.centerX + (x_ellipse * cos_tilt - y_ellipse * sin_tilt);
            ball.y = ball.centerY + (x_ellipse * sin_tilt + y_ellipse * cos_tilt);
            
            // Calculate speed (faster at sides of ellipse, slower at top/bottom)
            // Speed is proportional to distance from center of ellipse
            const distanceFromCenter = Math.sqrt(x_ellipse * x_ellipse + y_ellipse * y_ellipse);
            const maxDistance = Math.max(ball.ellipseA, ball.ellipseB);
            ball.currentSpeed = (distanceFromCenter / maxDistance) * 2 + 0.5; // Range 0.5 to 2.5
            
            // Add current position to trail
            this.trails[i].push({ 
                x: ball.x, 
                y: ball.y,
                speed: ball.currentSpeed 
            });
            
            // Dynamic trail length based on speed (150-600 points) - 15x longer than original
            const trailLength = Math.floor(150 + ball.currentSpeed * 180);
            while (this.trails[i].length > trailLength) {
                this.trails[i].shift();
            }
        }
    }
    
    draw() {
        // Clear canvas
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Draw trails for each ball
        for (let i = 0; i < this.balls.length; i++) {
            const ball = this.balls[i];
            const trail = this.trails[i];
            
            if (trail.length < 2) continue;
            
            // Get RGB values for ball color
            let r, g, b;
            if (ball.color === 'white') {
                r = 255; g = 255; b = 255;
            } else if (ball.color === '#999999') {
                r = 153; g = 153; b = 153;
            } else if (ball.color === '#333333') {
                r = 51; g = 51; b = 51;
            }
            
            // Draw trail segments with fading opacity (reversed) and tapered width
            for (let j = 1; j < trail.length; j++) {
                // Opacity fades from tail end (1.0) to ball (0.1) - REVERSED
                const progress = j / (trail.length - 1);
                const opacity = 0.1 + (progress * 0.9); // 0.1 to 1.0
                
                // Uniform line width throughout the entire tail
                const lineWidth = 3; // Consistent thickness for entire trail
                
                this.ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
                this.ctx.lineWidth = lineWidth;
                this.ctx.lineCap = 'round';
                
                this.ctx.beginPath();
                this.ctx.moveTo(trail[j-1].x, trail[j-1].y);
                this.ctx.lineTo(trail[j].x, trail[j].y);
                this.ctx.stroke();
            }
        }
        
        // Draw balls on top of trails
        for (const ball of this.balls) {
            this.ctx.fillStyle = ball.color;
            this.ctx.beginPath();
            this.ctx.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI);
            this.ctx.fill();
        }
    }
    
    animate() {
        this.updateBalls();
        this.draw();
        this.animationId = requestAnimationFrame(() => this.animate());
    }
    
    start() {
        if (!this.isValid || !this.canvas) {
            console.log('Cannot start animation - canvas not valid');
            return;
        }
        if (!this.animationId) {
            console.log('Starting ellipse animation');
            this.animate();
        }
    }
    
    stop() {
        if (this.animationId) {
            console.log('Stopping ellipse animation');
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
    }
}

// Global animation instance
let ellipseAnimation = null;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing ellipse animation');
    
    // Add a small delay to ensure everything is loaded
    setTimeout(() => {
        // Check if canvas exists first
        const testCanvas = document.getElementById('ellipse-canvas');
        console.log('Canvas found:', testCanvas ? 'Yes' : 'No');
        console.log('Canvas element:', testCanvas);
        
        if (!testCanvas) {
            console.log('Canvas not found, trying again in 500ms...');
            setTimeout(() => {
                initializeAnimation();
            }, 500);
        } else {
            initializeAnimation();
        }
    }, 100);
});

function initializeAnimation() {
    // Create animation
    ellipseAnimation = new EllipseAnimation('ellipse-canvas');
    
    if (ellipseAnimation && ellipseAnimation.isValid && ellipseAnimation.canvas) {
        ellipseAnimation.start();
        
        // Stop animation when any content tab is clicked
        const tabs = document.querySelectorAll('.tab:not(.home-tab)');
        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                console.log('Tab clicked, stopping ellipse animation');
                if (ellipseAnimation) {
                    ellipseAnimation.stop();
                }
                // Hide canvas
                const canvas = document.getElementById('ellipse-canvas');
                if (canvas) {
                    canvas.style.display = 'none';
                }
            });
        });
        
        // Show animation when page loads
        const canvas = document.getElementById('ellipse-canvas');
        if (canvas) {
            canvas.style.display = 'block';
        }
    } else {
        console.log('Failed to initialize ellipse animation');
        console.log('Animation object:', ellipseAnimation);
        console.log('Is valid:', ellipseAnimation ? ellipseAnimation.isValid : 'N/A');
    }
}