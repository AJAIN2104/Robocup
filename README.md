# RoboCup India 2026 - Professional Website

A comprehensive, responsive website for RoboCup India 2026 competition. Built with modern web technologies and designed for easy customization.

## 🌟 Features

- **Fully Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX** - Beautiful gradient backgrounds and smooth animations
- **Multiple Pages** - Home, About, Events, Categories, Registration, and Contact
- **Registration System** - Multiple registration options and integration points
- **Social Media Integration** - Links to Instagram, YouTube, and Facebook
- **Contact Form** - Functional contact form with validation
- **FAQ Sections** - Comprehensive FAQs on multiple pages
- **Event Timeline** - Clear visualization of competition dates and locations
- **Category Showcase** - Detailed information about Rescue, Soccer, and OnStage categories

## 📋 Project Structure

```
robocup/
├── index.html              # Home page
├── about.html              # About RoboCup page
├── events.html             # Events and timeline page
├── categories.html         # Competition categories page
├── registration.html       # Team registration page
├── contact.html            # Contact and support page
├── css/
│   └── styles.css          # Main stylesheet with customizable variables
├── js/
│   └── main.js             # Main JavaScript file with utility functions
├── images/                 # TODO: Add your images here
├── assets/                 # TODO: Add additional assets here
└── README.md               # This file

```

## 🛠️ Technologies & Libraries Used

### Frontend Framework
- **Bootstrap 5.3.0** - Responsive CSS framework
  - Bootstrap Grid System for responsive layouts
  - Bootstrap Components (Navbar, Cards, Buttons, Forms, Alerts, etc.)
  - Bootstrap Utilities for spacing, display, and flexbox

### Icons
- **Font Awesome 6.4.0** - Icon library
  - Used for navigation icons, feature icons, and social media icons
  - https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css

### Core Technologies
- **HTML5** - Semantic markup
- **CSS3** - Custom styling with CSS variables and media queries
- **JavaScript (Vanilla)** - No framework dependencies (easy to integrate with frameworks)

### CDN Resources Used
- Bootstrap CSS: `https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css`
- Bootstrap JS: `https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js`
- Font Awesome CSS: `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css`

## 📦 Installation & Setup

### Option 1: Direct Use (No Installation Required)
1. All dependencies are loaded from CDN
2. Simply open `index.html` in a web browser
3. No build process needed

### Option 2: Local Development Server
```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (if http-server is installed)
http-server
```

Then open `http://localhost:8000` in your browser.

### Option 3: Using Live Server (VS Code Extension)
1. Install "Live Server" extension in VS Code
2. Right-click on `index.html` → "Open with Live Server"

## 🎨 Customization Guide

### 1. **Update Logo and Branding**
- Replace "RoboCup India 2026" text with your branding
- Update logo image in: `index.html`, `about.html`, etc.
- Search for: `<!-- TODO: Change logo and title as per your requirements -->`

### 2. **Update Contact Information**
Replace these placeholders with your actual details:
- **Phone**: `+919871663267` 
- **Email**: `info@rcjindia.com`
- **Website**: `www.rcjindia.com`
- **Address**: `Delhi NCR, India`

**Files to update:**
- `index.html` (lines: footer section)
- `about.html` (lines: footer section)
- `events.html` (lines: footer section)
- `registration.html` (lines: registration details)
- `contact.html` (lines: contact information, footer)

### 3. **Update Colors & Branding**
Edit `css/styles.css`:
```css
:root {
    --primary-color: #667eea;        /* Main brand color */
    --secondary-color: #764ba2;      /* Secondary color */
    --success-color: #28a745;
    --danger-color: #dc3545;
    --warning-color: #ffc107;
    --info-color: #17a2b8;
    --dark-color: #343a40;
    --light-color: #f8f9fa;
}
```

### 4. **Update Registration Links**
In `registration.html`, update these registration form links:
- Google Form 1: `https://forms.gle/sYBVUSkucXU8S7BJA`
- Google Form 2: `https://forms.gle/TV1VHVw91mhnEFsA8`
- Main website: `https://www.rcjindia.com`

### 5. **Update Event Dates**
Search for date placeholders and update:
- Registration Deadline: `September 28, 2026`
- North India Regional: `October 3-4, 2026`
- National Championship: `January 2027`
- International: `June 17-21, 2027`

### 6. **Update Images**
Replace placeholder images:
```html
<!-- Current placeholder (in multiple files) -->
<img src="https://via.placeholder.com/500x400?text=Your+Image" alt="Description">

<!-- Replace with your actual image -->
<img src="images/your-image.jpg" alt="Description">
```

### 7. **Update Social Media Links**
In footer and contact page, update:
- Instagram: `https://www.instagram.com/rcjindia`
- YouTube: `https://www.youtube.com/c/RoboCupIndia`
- Facebook: `https://www.facebook.com/rcjindia`

### 8. **Backend Integration (Contact Form)**
In `js/main.js`, find the `handleContactFormSubmit` function:

```javascript
// TODO: Send form data to backend/email service
// Replace the placeholder with your actual backend endpoint
fetch('/api/contact', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(Object.fromEntries(formData))
})
.then(response => response.json())
.then(data => {
    showMessage('success', 'Thank you! Your message has been sent.');
})
```

## 📝 Important Configuration Points

### Key TODO Items in Code:
1. **Logo/Title Changes** - Search for `<!-- TODO: Change logo -->`
2. **Phone Number** - Update `+919871663267`
3. **Email Address** - Update `info@rcjindia.com`
4. **Website URL** - Update `www.rcjindia.com`
5. **Social Media Handles** - Update Instagram, YouTube, Facebook links
6. **Images** - Replace placeholder images with real images
7. **Colors** - Customize in `css/styles.css`
8. **Backend Integration** - Setup email/form submission in `js/main.js`

## 🚀 Deployment Options

### 1. **Netlify (Recommended)**
```bash
# Drag and drop the robocup folder to Netlify
# Or use Netlify CLI
netlify deploy --prod --dir=robocup
```

### 2. **GitHub Pages**
1. Create GitHub repository
2. Upload files
3. Go to Settings → Pages
4. Select main branch as source
5. Your site will be available at `https://yourusername.github.io`

### 3. **Firebase Hosting**
```bash
npm install -g firebase-tools
firebase init
firebase deploy
```

### 4. **Traditional Web Hosting**
- Upload files via FTP to your hosting provider
- Make sure to upload all files: HTML, CSS, JS, and images

### 5. **Docker Deployment**
Create a `Dockerfile`:
```dockerfile
FROM nginx:alpine
COPY . /usr/share/nginx/html
EXPOSE 80
```

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚙️ Additional Setup (Optional)

### Adding SSL Certificate
When deploying:
1. Use HTTPS URL for your domain
2. Netlify and Firebase provide free SSL certificates
3. For traditional hosting, purchase SSL certificate

### Email Integration (for Contact Form)
Options:
1. **Formspree** - `https://formspree.io/`
2. **Basin** - `https://basin.co/`
3. **SendGrid** - `https://sendgrid.com/`
4. **Mailgun** - `https://www.mailgun.com/`

Example using Formspree:
```javascript
fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: formData,
    headers: {
        'Accept': 'application/json'
    }
})
```

## 📊 Analytics (Optional)

Add Google Analytics tracking:
```html
<!-- Add to <head> in all HTML files -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🎯 Performance Tips

1. **Optimize Images**
   - Use modern formats (WebP)
   - Compress images
   - Use appropriate sizes

2. **Lazy Loading**
   - Add `loading="lazy"` to images

3. **Caching**
   - Enable browser caching on server
   - Use CDN for static assets

4. **Minification**
   - Minify CSS and JS in production

## 🔒 Security Considerations

1. Keep sensitive information out of client-side code
2. Use HTTPS for all connections
3. Validate form inputs on server-side
4. Implement CORS policies if needed
5. Keep dependencies updated

## 📞 Support & Maintenance

### File Structure for Maintenance
- Keep all HTML files in root
- Keep all CSS in `css/` folder
- Keep all JS in `js/` folder
- Keep images in `images/` folder

### Regular Updates Needed
- Update event dates as competitions progress
- Update registration links
- Refresh social media content
- Update contact information if it changes

## 🐛 Troubleshooting

### Images not loading?
- Check file paths
- Ensure images are in `images/` folder
- Use absolute paths for CDN images

### Styling not applying?
- Clear browser cache (Ctrl+Shift+Del)
- Check if CSS file path is correct
- Verify Bootstrap CDN is loading

### Form not working?
- Check browser console for errors (F12)
- Verify form action/endpoint
- Test with browser developer tools

### Navigation not working?
- Ensure all HTML files are in correct location
- Check href paths
- Verify no typos in file names

## 📚 Resources

- **Bootstrap Documentation**: https://getbootstrap.com/docs/
- **Font Awesome Icons**: https://fontawesome.com/icons
- **MDN Web Docs**: https://developer.mozilla.org/
- **W3Schools**: https://www.w3schools.com/
- **RoboCup Official**: https://www.robocup.org/

## 📄 License

This website template is provided for RoboCup India 2026. Feel free to customize and use for your competition.

## ✨ Credits

- Built with Bootstrap 5.3.0
- Icons by Font Awesome
- Hosted on modern web infrastructure

---

## 🎓 Quick Start Checklist

- [ ] Update all contact information (phone, email)
- [ ] Update all event dates
- [ ] Add your logo and images
- [ ] Update registration links
- [ ] Update social media links
- [ ] Customize colors in CSS
- [ ] Test all pages on mobile
- [ ] Test contact form
- [ ] Deploy to hosting provider
- [ ] Set up domain name
- [ ] Enable SSL certificate
- [ ] Setup analytics (optional)

---

**Last Updated**: September 2026
**Website Version**: 1.0
**Compatibility**: All modern browsers

For questions or support regarding RoboCup India 2026, contact us at info@rcjindia.com or call +91-9871663267.
