# RoboCup India 2026 - Customization Guide

This guide provides detailed instructions on how to customize the RoboCup India website for your specific needs.

## 📋 Table of Contents
1. [Basic Customization](#basic-customization)
2. [Branding & Colors](#branding--colors)
3. [Contact Information](#contact-information)
4. [Event Details](#event-details)
5. [Images & Media](#images--media)
6. [Advanced Customization](#advanced-customization)
7. [Testing Checklist](#testing-checklist)

---

## 🎨 Basic Customization

### 1. Update Organization Name & Details

**File: `config.json`**
```json
"organization": {
  "name": "Your Organization Name",
  "phone": "Your Phone Number",
  "email": "Your Email",
  "website": "Your Website",
  "address": "Your Address"
}
```

**Files to Update in HTML:**
- `index.html` (line ~280)
- `about.html` (line ~150)
- `events.html` (line ~250)
- `contact.html` (line ~60)

Search for "TODO: Update with your actual" comments.

### 2. Change Website Title

**File: `index.html` (line 5)**
```html
<title>RoboCup India - Robotics Competition 2026</title>
```

Change to:
```html
<title>Your Organization - Competition Title</title>
```

Repeat for all HTML files.

### 3. Update Navigation Bar

**File: `index.html` (lines 15-25)**
```html
<a class="navbar-brand" href="index.html">
    <i class="fas fa-robot"></i> RoboCup India 2026
</a>
```

Change to:
```html
<a class="navbar-brand" href="index.html">
    <i class="fas fa-trophy"></i> Your Organization Name
</a>
```

---

## 🎨 Branding & Colors

### 1. Change Primary Colors

**File: `css/styles.css` (lines 8-16)**

```css
:root {
    --primary-color: #667eea;      /* Change this */
    --secondary-color: #764ba2;    /* Change this */
    --success-color: #28a745;
    --danger-color: #dc3545;
    --warning-color: #ffc107;
    --info-color: #17a2b8;
    --dark-color: #343a40;
    --light-color: #f8f9fa;
}
```

### 2. Use a Color Picker
Recommended tools:
- https://colorhexa.com
- https://htmlcolorcodes.com
- Explore gradient combinations at https://gradient.page

### 3. Update Hero Gradient

**File: `index.html` (line 56)**
```html
<section class="hero-section" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
```

Replace colors with your chosen colors.

### 4. Apply Brand Font (Optional)

Add to `css/styles.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

body {
    font-family: 'Poppins', sans-serif;
}
```

---

## 📞 Contact Information

### Update All Contact Details

Replace these values throughout the website:

| Placeholder | Your Value | Files |
|---|---|---|
| `+919871663267` | Your Phone | All HTML files |
| `info@rcjindia.com` | Your Email | All HTML files |
| `www.rcjindia.com` | Your Website | index.html, about.html |
| `Delhi NCR, India` | Your Location | contact.html |

### 1. Using Find & Replace

**In VS Code:**
1. Press `Ctrl+H` (or `Cmd+H` on Mac)
2. Find: `+919871663267`
3. Replace: Your Phone Number
4. Click "Replace All"

Repeat for each placeholder value.

### 2. Contact Form Setup

**File: `js/main.js` (lines 65-85)**

Replace the form submission code with your backend endpoint:

#### Option A: Using Formspree
```javascript
fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: formData,
    headers: {
        'Accept': 'application/json'
    }
})
.then(response => response.json())
.then(data => {
    showMessage('success', 'Thank you! Your message has been sent.');
})
.catch(error => {
    showMessage('error', 'There was an error sending your message.');
});
```

#### Option B: Using Firebase
```javascript
firebase.firestore().collection('messages').add({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
    timestamp: new Date()
})
.then(() => {
    showMessage('success', 'Thank you! Your message has been sent.');
})
.catch(error => {
    showMessage('error', 'Error: ' + error.message);
});
```

#### Option C: Using Your Backend
```javascript
fetch('https://your-domain.com/api/contact', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(Object.fromEntries(formData))
})
```

---

## 📅 Event Details

### 1. Update Event Dates

**File: `events.html`**

Find and replace:
- `October 3-4, 2026` → Your Regional Date
- `January 2027` → Your National Date
- `June 17-21, 2027` → Your International Date

**File: `index.html`**

Find and replace event dates in the "Quick Info" section (lines ~80-115)

### 2. Update Registration Deadline

**File: `registration.html` (line ~60)**
```html
<p class="text-warning"><i class="fas fa-exclamation-circle"></i> September 28, 2026</p>
```

Change to your deadline date.

### 3. Update Registration Fee

**File: `index.html` (lines ~105)**
```html
<p class="card-text">
    <strong>₹8,800 + taxes</strong><br>
    Per team (4 members max)
</p>
```

Change to your fee structure.

### 4. Update Registration Links

**File: `registration.html` (lines ~160-180)**
```html
<a href="https://forms.gle/sYBVUSkucXU8S7BJA" target="_blank">
```

Replace Google Form URLs with your registration forms:
1. Create Google Form
2. Get sharing link
3. Replace in HTML

---

## 🖼️ Images & Media

### 1. Add Your Logo

Create folder: `images/`

**File: `index.html` (line ~95)**
```html
<img src="https://via.placeholder.com/500x400?text=RoboCup+Logo" alt="RoboCup Logo">
```

Replace with:
```html
<img src="images/your-logo.png" alt="Your Organization Logo" class="img-fluid">
```

### 2. Add Team/Event Photos

Create these folders:
- `images/events/`
- `images/gallery/`
- `images/team/`

Add images to appropriate sections:

**File: `about.html`**
```html
<img src="images/team/founding-team.jpg" alt="Founding Team" class="img-fluid rounded">
```

### 3. Optimize Images

Before uploading:
1. Resize to appropriate dimensions (max 2MB)
2. Use online compressor: https://tinypng.com
3. Use modern formats (WebP)
4. Add descriptive alt text

### 4. Add Team Photos Gallery

Create new section in `index.html` or new file `gallery.html`:

```html
<section class="py-5">
    <div class="container">
        <h2 class="text-center mb-5">Competition Highlights</h2>
        <div class="row">
            <div class="col-md-4 mb-4">
                <img src="images/gallery/photo1.jpg" alt="Event Photo 1" class="img-fluid rounded">
            </div>
            <!-- Repeat for more photos -->
        </div>
    </div>
</section>
```

---

## 📱 Social Media Links

### Update All Social Media

**File: `index.html`, `about.html`, `contact.html` (Footer sections)**

Replace these URLs:
```html
<!-- Instagram -->
<a href="https://www.instagram.com/rcjindia">@rcjindia</a>

<!-- YouTube -->
<a href="https://www.youtube.com/c/RoboCupIndia">Channel</a>

<!-- Facebook -->
<a href="https://www.facebook.com/rcjindia">Page</a>
```

### Create Social Media Accounts

1. Create Instagram business account
2. Create YouTube channel
3. Create Facebook page
4. Add links to contact.html

---

## 🔧 Advanced Customization

### 1. Add Google Analytics

**Add to <head> in all HTML files:**
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

Replace `GA_MEASUREMENT_ID` with your Google Analytics ID.

### 2. Add Newsletter Signup

Add to footer or new section:
```html
<form id="newsletterForm" class="mb-3">
    <input type="email" placeholder="Enter your email" required class="form-control mb-2">
    <button type="submit" class="btn btn-primary w-100">Subscribe</button>
</form>
```

### 3. Add Countdown Timer

In `js/main.js`, uncomment:
```javascript
// Initialize countdown on page load
initializeCountdown();
```

### 4. Add Blog Section

Create `blog.html`:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Blog - RoboCup India 2026</title>
    <!-- Same head as other pages -->
</head>
<body>
    <!-- Navigation -->
    <!-- Blog content -->
    <!-- Footer -->
</body>
</html>
```

Add link to navbar:
```html
<li class="nav-item"><a class="nav-link" href="blog.html">Blog</a></li>
```

### 5. Add Sponsors Section

Create new section:
```html
<section class="py-5 bg-light">
    <div class="container">
        <h2 class="text-center mb-5">Our Sponsors</h2>
        <div class="row">
            <div class="col-md-3 mb-4 text-center">
                <img src="images/sponsors/sponsor1.png" alt="Sponsor 1" class="img-fluid" style="max-height: 100px;">
            </div>
            <!-- Add more sponsors -->
        </div>
    </div>
</section>
```

### 6. Add PDF Download

Add Rules PDF link:
```html
<a href="documents/rules.pdf" target="_blank" class="btn btn-primary">
    <i class="fas fa-download"></i> Download Rules PDF
</a>
```

---

## 🧪 Testing Checklist

### Before Publishing

- [ ] All links work correctly
- [ ] Contact form works
- [ ] All images load properly
- [ ] Mobile responsive (test on phone)
- [ ] Navigation works on all pages
- [ ] Spelling and grammar checked
- [ ] Phone numbers are clickable (tel:)
- [ ] Emails are clickable (mailto:)
- [ ] Social media links open correctly
- [ ] Registration links work
- [ ] No broken images (404 errors)
- [ ] Page loads quickly
- [ ] All fonts display correctly
- [ ] Colors match brand guidelines
- [ ] Footer appears on all pages

### Browser Testing

Test on:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Chrome
- [ ] Mobile Safari

### Mobile Testing

- [ ] Hamburger menu works
- [ ] Text is readable
- [ ] Buttons are easily clickable
- [ ] Images scale properly
- [ ] No horizontal scrolling
- [ ] Forms are usable

---

## 📝 Additional Resources

### Logo Design
- Canva: https://www.canva.com
- Looka: https://looka.com
- Adobe Express: https://www.adobe.com/express

### Free Images
- Unsplash: https://unsplash.com
- Pexels: https://www.pexels.com
- Pixabay: https://pixabay.com

### Color Tools
- Coolors: https://coolors.co
- Color Hunt: https://colorhunt.co
- Gradient Generator: https://gradient.page

### Icon Tools
- Font Awesome: https://fontawesome.com
- Feather Icons: https://feathericons.com
- Google Material Icons: https://fonts.google.com/icons

---

## 🆘 Troubleshooting

### Common Issues

**Problem: Changes not showing**
- Clear browser cache (Ctrl+Shift+Del)
- Hard refresh (Ctrl+F5)
- Try in private/incognito window

**Problem: Images broken**
- Check file path is correct
- Ensure file exists in images/ folder
- Use forward slashes in paths (/)
- Check image file name spelling

**Problem: Form not submitting**
- Check console for errors (F12)
- Verify email service is set up
- Test with valid email format
- Check CORS settings if using API

**Problem: Mobile layout broken**
- Test with browser dev tools (F12)
- Check media queries in CSS
- Verify Bootstrap grid classes
- Test on actual mobile device

---

## 📞 Getting Help

If you need help customizing:

1. Check the TODO comments in code
2. Review Bootstrap documentation: https://getbootstrap.com
3. Check Font Awesome docs: https://fontawesome.com
4. Review MDN: https://developer.mozilla.org

---

**Last Updated**: September 2026
**For RoboCup India 2026 Foundation**
