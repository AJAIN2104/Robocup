# RoboCup India 2026 - Quick Start Guide

Get your RoboCup website up and running in 5 minutes!

## 🚀 Quick Start (5 Minutes)

### Step 1: Extract Files (1 min)
All files are already created in: `c:\Users\mohit\OneDrive\Desktop\robocup\`

### Step 2: View Website (1 min)
1. Open `index.html` in your web browser
2. Or use a local server (see below)

### Step 3: Update Key Information (2 min)
Using Find & Replace (Ctrl+H):
- Replace `+919871663267` with your phone
- Replace `info@rcjindia.com` with your email
- Replace `www.rcjindia.com` with your website

### Step 4: Customize Colors (1 min)
1. Open `css/styles.css`
2. Find `:root` (around line 8)
3. Change `--primary-color: #667eea;`
4. Save file

### Step 5: View Changes
Refresh browser (Ctrl+F5)

---

## 🖥️ Run Local Server

### Option 1: Python (Windows)
```bash
# Open command prompt in robocup folder
cd c:\Users\mohit\OneDrive\Desktop\robocup

# Run server (Python 3)
python -m http.server 8000

# Open browser: http://localhost:8000
```

### Option 2: VS Code Live Server
1. Install "Live Server" extension
2. Right-click `index.html`
3. Select "Open with Live Server"

### Option 3: Python Simple Server
```bash
# Python 2
python -m SimpleHTTPServer 8000
```

---

## 📁 File Structure

```
robocup/
├── index.html           ← Home page (start here)
├── about.html           ← About section
├── events.html          ← Events & dates
├── categories.html      ← Competition categories
├── registration.html    ← Registration info
├── contact.html         ← Contact page
├── css/
│   └── styles.css       ← Styling (customize colors here)
├── js/
│   └── main.js          ← JavaScript functionality
├── images/              ← Add your images here
├── config.json          ← Configuration file
├── package.json         ← Node.js metadata
├── README.md            ← Full documentation
├── CUSTOMIZATION.md     ← Detailed customization guide
├── DEPLOYMENT.md        ← How to deploy
└── .gitignore           ← Git ignore file
```

---

## 📝 Essential Customizations

### 1. Organization Info
**File: All HTML files**

Find and replace:
```
OLD: RoboCup India
NEW: Your Organization Name

OLD: +919871663267
NEW: Your Phone

OLD: info@rcjindia.com
NEW: Your Email
```

### 2. Event Dates
**File: events.html & index.html**

Update:
- `October 3-4, 2026` → Your date
- `September 28, 2026` → Your deadline
- `January 2027` → Your national date

### 3. Colors
**File: css/styles.css (lines 8-16)**

Change:
```css
--primary-color: #667eea;      /* Your brand color */
--secondary-color: #764ba2;    /* Your secondary */
```

### 4. Logo/Images
**File: index.html (line ~95)**

Add your logo:
```html
<img src="images/your-logo.png" alt="Your Logo">
```

### 5. Registration Links
**File: registration.html (line ~160)**

Update Google Form links to yours

---

## 🎨 Customization Checklist

Quick customization checklist:

- [ ] Update phone number (all files)
- [ ] Update email address (all files)
- [ ] Update website URL
- [ ] Update organization name
- [ ] Add your logo
- [ ] Change colors in css/styles.css
- [ ] Update event dates
- [ ] Update registration deadline
- [ ] Update registration links
- [ ] Update social media links
- [ ] Test all pages work
- [ ] Test on mobile device

---

## 🌐 Deploy in 2 Minutes

### Option 1: Netlify (Recommended)
1. Go to https://netlify.com
2. Drag and drop `robocup` folder
3. Done! Your site is live

### Option 2: GitHub Pages
1. Create GitHub repo
2. Upload files via git
3. Enable GitHub Pages
4. Live at username.github.io

### Option 3: Traditional Hosting
1. Upload files via FTP
2. Keep folder structure intact
3. Ensure index.html in public_html
4. Visit your domain

---

## 📱 Test on Mobile

1. Open website on phone
2. Verify responsive design
3. Test navigation menu
4. Test all buttons clickable
5. Check image display
6. Test contact form

---

## 🐛 Troubleshooting

### Pages not loading?
- Make sure all HTML files in root folder
- Check browser console (F12) for errors
- Clear cache (Ctrl+Shift+Del)

### Images not showing?
- Create `images/` folder
- Add images there
- Update image paths in HTML

### Styling broken?
- Check `css/` folder exists
- Verify styles.css is there
- Check CSS path in HTML

### Mobile not working?
- Test with browser developer tools (F12)
- Use responsive design mode
- Test on actual phone

---

## 📚 Full Documentation

For detailed guides, see:
- **README.md** - Complete documentation
- **CUSTOMIZATION.md** - Step-by-step customization
- **DEPLOYMENT.md** - Deployment instructions

---

## 💡 Pro Tips

1. **Use Find & Replace** (Ctrl+H) for bulk changes
2. **Screenshot your colors** before changes
3. **Backup original** before major edits
4. **Test frequently** during development
5. **Clear cache** when testing (Ctrl+Shift+Del)
6. **Use browser dev tools** (F12) to debug
7. **Keep folder structure** intact for working links

---

## 🎯 What's Next?

1. ✅ View the website
2. ✅ Customize information
3. ✅ Add your images
4. ✅ Test on mobile
5. ✅ Deploy online
6. ✅ Setup email for contact form
7. ✅ Setup analytics (optional)
8. ✅ Add social media content

---

## 📞 Need Help?

Check these resources:
- Bootstrap Docs: https://getbootstrap.com
- Font Awesome Icons: https://fontawesome.com
- MDN Web Docs: https://developer.mozilla.org
- Stack Overflow: https://stackoverflow.com

---

## 🎉 Ready to Launch!

Your professional RoboCup website is ready to customize and deploy!

**Questions?** See detailed docs in the repository.

**Ready to deploy?** Follow DEPLOYMENT.md guide.

**Need customization help?** Check CUSTOMIZATION.md guide.

---

**Start by opening index.html in your browser! 🚀**
