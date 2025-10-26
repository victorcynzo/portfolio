# Victor Cornbert IJnzonides - Portfolio Website

A personal portfolio website built with HTML, CSS, and JavaScript, designed to be hosted on GitHub Pages.

## Features

- **Responsive Design**: Works on desktop and mobile devices
- **JetBrains Mono Font**: Clean, modern monospace typography
- **Interactive Navigation**: Smooth hover animations and tab switching
- **Dark Theme**: Black background with dark grey accents
- **Three Main Sections**: Academics, Art, and Me pages with tabbed content

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

## Customization

### Adjusting Hover Animation Size
In `styles.css`, find the `.tab:hover` and `.nav-box:hover` sections and modify the `transform: scale()` values:
- `scale(1.05)` = 5% larger
- `scale(1.1)` = 10% larger  
- `scale(1.15)` = 15% larger

### Adding Content
Replace the placeholder text in each HTML file with your actual content:
- Education details in `academics.html`
- Art projects in `art.html` 
- Personal information in `me.html`

### Color Customization
Main colors used:
- Background: `black`
- Borders: `#333` (dark grey)
- Hover states: `#555` (lighter grey)
- Text: `white`

## Browser Compatibility

This website works in all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

## License

This project is open source and available under the MIT License.