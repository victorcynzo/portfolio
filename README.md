# Victor Cornbert IJnzonides - Portfolio Website

A personal portfolio website built with HTML, CSS, and JavaScript, designed to be hosted on GitHub Pages. Features a modern, minimalist design with sharp geometric elements and smooth animations.

## Features

- **Responsive Design**: Optimized for desktop browsers with mobile compatibility
- **JetBrains Mono Font**: Clean, modern monospace typography throughout
- **Interactive Navigation**: Smooth hover animations with 10% scaling effects
- **Modern Dark Theme**: Black background with crisp white borders and accents
- **Three Main Sections**: Academics, Art, and Me pages with tabbed content
- **Geometric Design**: Sharp 90-degree edges and consistent rectangular elements
- **Dynamic Tab System**: Left-side navigation tabs with hover enlargement and spacing
- **Embedded Content**: Each tab includes links, images, and playable YouTube videos
- **Home Navigation**: Easy return to homepage from any section

## File Structure

```
├── index.html          # Homepage with main navigation
├── academics.html      # Academic achievements and education
├── art.html           # Art portfolio and creative work
├── me.html            # Personal information and contact
├── styles.css         # All styling and animations
├── script.js          # Interactive functionality
└── README.md          # This file
```

## Deployment to GitHub Pages

1. Create a new repository on GitHub
2. Upload all files to the repository
3. Go to repository Settings > Pages
4. Select "Deploy from a branch" as source
5. Choose "main" branch and "/ (root)" folder
6. Your site will be available at: `https://yourusername.github.io/repository-name`

## Design Elements

### Homepage
- **Main Container**: Large black square with thick white border (2px)
- **Navigation Boxes**: Three equal-sized rectangular buttons with white borders
- **Typography**: Large centered name with 1.2rem navigation text
- **Disclaimer**: Subtle text below main container for desktop optimization

### Content Pages
- **Left Sidebar**: Vertical tab navigation with no left borders
- **Tab Design**: Rectangular tabs with white borders, 80px minimum height
- **Hover Effects**: 10% uniform scaling with smooth transitions
- **Home Tab**: Special navigation tab with extra spacing to return to homepage
- **Content Area**: Scrollable main content with embedded media

### Interactive Features
- **Tab Animations**: Smooth scaling with dynamic spacing adjustment
- **Embedded Media**: Google links, Reddit images, and playable YouTube videos
- **Responsive Spacing**: Tabs below hovered elements move down to maintain visual balance

## Customization

### Adjusting Hover Animation Size
In `styles.css`, find the `.tab:hover` and `.nav-box:hover` sections and modify the `transform: scale()` values:
- `scale(1.05)` = 5% larger
- `scale(1.1)` = 10% larger (current setting)
- `scale(1.15)` = 15% larger

### Adding Content
Replace the placeholder text in each HTML file with your actual content:
- Education, research, publications, awards, and courses in `academics.html`
- Digital art, traditional art, photography, design, and exhibitions in `art.html`
- About, interests, skills, experience, and contact information in `me.html`

### Color Customization
Main colors used:
- Background: `black`
- Borders: `white` (2px thickness throughout)
- Hover background: `#111` (subtle lightening)
- Text: `white`
- Links: `white` with `#ccc` hover state
- Disclaimer text: `white` with 80% opacity

## Technical Specifications

### Fonts
- **Primary**: JetBrains Mono (Google Fonts)
- **Weights**: 300 (light), 400 (normal), 500 (medium), 700 (bold)
- **Sizes**: 2.5rem (name), 1.2rem (navigation/tabs), 0.9rem (disclaimer)

### Animations
- **Duration**: 0.3s for navigation elements, 0.4s for tab spacing
- **Easing**: `ease` for navigation, `cubic-bezier(0.25, 0.46, 0.45, 0.94)` for tabs
- **Scaling**: 10% uniform enlargement on hover
- **Dynamic Spacing**: 8px vertical adjustment for tab positioning

### Layout
- **Viewport**: 100vh/100vw full-screen design
- **Flexbox**: Extensive use for centering and responsive layout
- **Sidebar Width**: 300px fixed (250px on mobile)
- **Tab Height**: 80px minimum for consistency
- **Border Thickness**: 2px white borders throughout

## Browser Compatibility

**Best viewed on desktop browsers**. Fully compatible with:
- Chrome (recommended)
- Firefox
- Safari
- Edge

Mobile compatibility included with responsive breakpoints at 768px.

## Performance Notes

- **Font Loading**: Preconnected to Google Fonts for faster loading
- **Animations**: Hardware-accelerated transforms for smooth performance
- **Media**: YouTube videos use responsive embed containers
- **Images**: Responsive sizing with automatic aspect ratio maintenance

## License

This project is open source and available under the MIT License.