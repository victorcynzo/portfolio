# Portfolio Website

A developer portfolio website inspired by terminal aesthetics, using JetBrains Mono font. Features glowing hover effects, smooth navigation, and support for images and videos.

## ✨ Features

- Terminal-inspired design with glowing hover effects
- Sticky navigation with smooth scrolling
- Responsive layout for all devices
- Support for Imgur images and YouTube videos
- Easy to customize with CSS variables

## 🎨 Customization Guide

### 1. Colors
Edit the CSS variables in `styles.css` (lines 2-20):
```css
--bg-color: #000000;           /* Background color */
--text-color: #ffffff;         /* Main text color */
--text-secondary: #888888;     /* Secondary text color */
--accent-color: #00ff88;       /* Green accent (hover effects) */
--border-color: #333333;       /* Border color */
--border-hover: #ffffff;       /* Border color on hover */
```

### 2. Personal Information
Edit `index.html`:

**Navigation & Branding:**
- Line 13: Change `yourname.exe` to your name

**Hero Section (Home):**
- Line 26: Main title
- Line 27: Subtitle/tagline
- Line 28: Status message
- Lines 30-31: Button links

**Projects Section:**
- Lines 45-80: Edit project cards
- Add your project title, description, tags, and links
- See "Adding Images & Videos" below

**Experience Section:**
- Lines 90-105: Add your work experience
- Include company, role, dates, and description

**Skills Section:**
- Lines 115-145: List your skills by category
- Lines 152-167: Update debug stats (fun numbers)

**Research Section:**
- Lines 177-195: Add research papers or publications

**Blog Section:**
- Lines 205-215: Add blog posts

**Contact Section:**
- Lines 225-240: Update your contact links

### 3. Adding Images (Imgur)

To add an image to a project card, uncomment and edit this code in `index.html`:
```html
<img src="https://i.imgur.com/YOUR_IMAGE_ID.jpg" alt="Project screenshot" class="card-image">
```

**How to get Imgur link:**
1. Upload image to imgur.com
2. Right-click the image → "Copy image address"
3. Use the direct link (ends with .jpg, .png, etc.)

### 4. Adding YouTube Videos

To add a video to a project card, uncomment and edit this code in `index.html`:
```html
<div class="card-video">
    <iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
```

**How to get YouTube video ID:**
1. Go to your YouTube video
2. The URL looks like: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
3. Copy the part after `v=` (e.g., `dQw4w9WgXcQ`)
4. Replace `YOUR_VIDEO_ID` with it

### 5. Layout & Spacing
Edit CSS variables in `styles.css` (lines 12-24):
```css
--spacing-xs: 0.5rem;          /* Extra small spacing */
--spacing-sm: 1rem;            /* Small spacing */
--spacing-md: 1.5rem;          /* Medium spacing */
--spacing-lg: 2.5rem;          /* Large spacing */
--spacing-xl: 4rem;            /* Extra large spacing */
--font-size-*: ...;            /* Font sizes */
--container-width: 1200px;     /* Max page width */
```

### 6. Hover Effects
The glowing hover effect is controlled in `styles.css`:
- Border thickness increases from 1px to 2px
- Border color changes to green (`--border-hover`)
- Box shadow creates the glow effect
- Title color changes to green

To customize the glow:
```css
.project-card:hover {
    box-shadow: 0 0 20px rgba(0, 255, 136, 0.3); /* Adjust glow intensity */
}
```

## 🚀 Deploy to GitHub Pages

### Step 1: Create Repository
1. Go to GitHub and create a new repository
2. Name it `yourname.github.io` (replace `yourname` with your GitHub username)
   - OR use any name like `portfolio` (will be at `yourname.github.io/portfolio`)

### Step 2: Push Your Code
Open terminal in your project folder and run:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/yourrepo.git
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select **main** branch
4. Click **Save**
5. Wait 1-2 minutes for deployment

Your site will be live at:
- `https://yourusername.github.io/` (if repo name is `yourusername.github.io`)
- `https://yourusername.github.io/reponame/` (for other repo names)


## 📱 Mobile Responsive

The site automatically adapts to mobile devices:
- Navigation collapses
- Grid layouts become single column
- Font sizes adjust
- Spacing optimizes for smaller screens

## 🛠️ File Structure

```
portfolio/
├── index.html      # Main HTML structure
├── styles.css      # All styling and CSS variables
├── script.js       # Navigation and interactions
└── README.md       # This file
```

## 💡 Tips

- Keep project descriptions concise (2-3 sentences)
- Use consistent image sizes for better layout
- Test on mobile devices before deploying
- Update the page title in `index.html` for SEO
- Add a favicon for a professional touch
- Keep the terminal aesthetic with monospace fonts

## 🐛 Troubleshooting

**Images not showing:**
- Make sure you're using the direct Imgur link (ends with .jpg/.png)
- Check if the image is publicly accessible

**YouTube videos not playing:**
- Use the embed URL format: `youtube.com/embed/VIDEO_ID`
- Don't use the watch URL format

**Hover effects not working:**
- Clear browser cache
- Check if CSS is properly linked in HTML

**GitHub Pages not updating:**
- Wait 1-2 minutes after pushing changes
- Check the Actions tab for deployment status
- Hard refresh the page (Ctrl+Shift+R)

## 📄 License

Feel free to use this template for your own portfolio!
