# RoboCup India 2026 - Deployment Guide

Complete guide for deploying your website to various hosting platforms.

## 📋 Table of Contents
1. [Pre-Deployment Checklist](#pre-deployment-checklist)
2. [Netlify Deployment](#netlify-deployment)
3. [GitHub Pages](#github-pages)
4. [Firebase Hosting](#firebase-hosting)
5. [Traditional Web Hosting](#traditional-web-hosting)
6. [Domain Configuration](#domain-configuration)
7. [SSL Certificates](#ssl-certificates)
8. [Post-Deployment](#post-deployment)

---

## ✅ Pre-Deployment Checklist

Before deploying, verify:

- [ ] All HTML files are properly formatted
- [ ] All CSS and JS files are in correct folders
- [ ] All images are optimized and in images/ folder
- [ ] All links are relative paths (not absolute)
- [ ] Contact form is configured
- [ ] All TODO comments are addressed
- [ ] Website tested on desktop and mobile
- [ ] All pages load without errors
- [ ] Performance is acceptable
- [ ] Security settings are configured

---

## 🚀 Netlify Deployment (Recommended)

**Why Netlify?**
- Free tier available
- Automatic SSL certificate
- Easy drag-and-drop deployment
- GitHub integration
- Good performance

### Method 1: Drag & Drop

1. Go to https://netlify.com
2. Create free account
3. Drag and drop the `robocup` folder
4. Your site goes live instantly!
5. Get a free subdomain: `yoursite.netlify.app`

### Method 2: GitHub Integration

1. Create GitHub repository
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/robocup.git
git push -u origin main
```

2. Connect to Netlify:
   - Go to netlify.com/teams
   - Click "Sites"
   - Click "New site from Git"
   - Choose GitHub
   - Select your repository
   - Deploy

3. Automatic deployments:
   - Any push to main branch auto-deploys
   - Changes live in seconds

### Method 3: Netlify CLI

```bash
# Install CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod --dir=robocup
```

### Configure Custom Domain on Netlify

1. In Netlify dashboard, go to "Domain settings"
2. Click "Add custom domain"
3. Enter your domain name
4. Follow DNS configuration instructions
5. Wait for DNS propagation (up to 24 hours)

---

## 🐙 GitHub Pages

**Best for:** Open source projects, community hosting

### Setup Steps

1. Create GitHub repository named `yourusername.github.io`

2. Upload files:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git push -u origin main
```

3. Website automatically available at:
   - https://yourusername.github.io

### Custom Domain with GitHub Pages

1. Create `CNAME` file in root directory:
```
yourdomain.com
```

2. Add to GitHub

3. Configure DNS:
   - Go to domain registrar
   - Update DNS records to point to GitHub:
     ```
     A record: 185.199.108.153
     A record: 185.199.109.153
     A record: 185.199.110.153
     A record: 185.199.111.153
     ```

4. Update GitHub Pages settings:
   - Repository Settings → Pages
   - Custom domain → enter yourdomain.com
   - Enable "Enforce HTTPS"

---

## 🔥 Firebase Hosting

**Best for:** Projects requiring backend services

### Setup Steps

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Initialize Firebase:
```bash
firebase login
firebase init hosting
```

3. Select project or create new one

4. When asked "What do you want to use as your public directory?", enter `.` (current directory)

5. Deploy:
```bash
firebase deploy --only hosting
```

6. Your site available at:
   - https://your-project.firebaseapp.com

### Firebase Console Setup

1. Go to https://console.firebase.google.com
2. Create new project
3. Register web app
4. Configure hosting:
   - Go to Hosting section
   - Connect domain (if you have one)
   - Complete DNS setup

---

## 🌐 Traditional Web Hosting (cPanel, Plesk, etc.)

**Best for:** Custom backends, business hosting

### Using FTP/SFTP

1. Get FTP credentials from hosting provider

2. Download FTP client:
   - FileZilla (free): https://filezilla-project.org
   - WinSCP (Windows)
   - Cyberduck (Mac)

3. Connect to server:
   - Host: ftp.yourdomain.com
   - Username: your username
   - Password: your password

4. Upload files:
   - Navigate to public_html folder
   - Upload all files and folders
   - Maintain folder structure:
     ```
     public_html/
     ├── index.html
     ├── about.html
     ├── css/
     ├── js/
     ├── images/
     └── README.md
     ```

5. Make sure index.html is in public_html root

### Using cPanel File Manager

1. Login to cPanel
2. Go to File Manager
3. Navigate to public_html
4. Upload files using "Upload" button
5. Verify all files are uploaded

### Using SSH

```bash
# Connect to server
ssh username@yourdomain.com

# Navigate to public directory
cd public_html

# Upload files (from your local machine)
scp -r ./robocup/* username@yourdomain.com:~/public_html/
```

---

## 🔗 Domain Configuration

### Registering a Domain

Popular registrars:
- GoDaddy: https://www.godaddy.com
- Namecheap: https://www.namecheap.com
- Google Domains: https://domains.google
- Bluehost: https://www.bluehost.com

### Pointing Domain to Website

**For Netlify:**
1. In Netlify dashboard → Domain settings → Add custom domain
2. Follow their DNS instructions
3. Update registrar's DNS settings

**For GitHub Pages:**
1. Create CNAME file
2. Update registrar's A records

**For Firebase:**
1. Firebase console → Hosting → Connect domain
2. Follow setup wizard
3. Add DNS records

### DNS Records Example

For most hosts, you'll need to add A records:
```
Type: A
Name: @
Value: [IP provided by host]
TTL: 3600
```

For www subdomain:
```
Type: CNAME
Name: www
Value: yourdomain.com
TTL: 3600
```

---

## 🔒 SSL Certificates (HTTPS)

### Automatic SSL (Recommended)

- Netlify: Automatic (free)
- GitHub Pages: Automatic (free)
- Firebase: Automatic (free)
- cPanel: Go to "AutoSSL" section, install automatically

### Manual SSL Setup

If not automatic:

1. Get certificate from:
   - Let's Encrypt (free): https://letsencrypt.org
   - Comodo SSL (free): https://ssl.comodo.com
   - Paid from registrar

2. Install in hosting control panel
3. Update .htaccess to force HTTPS:

```apache
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
</IfModule>
```

### Verify HTTPS Working

1. Visit https://yourdomain.com
2. Check for green lock icon
3. Test with: https://www.sslshopper.com/ssl-checker.html

---

## ⚙️ Post-Deployment

### Verify Website

1. Open in multiple browsers
2. Test all links work
3. Test contact form
4. Check on mobile device
5. Check page speed: https://pagespeed.web.dev
6. Check SSL: https://www.ssllabs.com/ssltest

### Setup Analytics

Add Google Analytics:

1. Go to https://analytics.google.com
2. Create new property
3. Copy tracking ID
4. Add to all HTML files:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Setup Email Notifications

For contact form responses:

**Option 1: Formspree**
1. Go to https://formspree.io
2. Create account
3. Add your form to website
4. Emails sent directly to your inbox

**Option 2: SendGrid**
1. Create account at https://sendgrid.com
2. Get API key
3. Configure in backend

**Option 3: Firebase Functions**
1. Setup Cloud Functions
2. Trigger on form submission
3. Send email via SendGrid/Gmail

### Setup Monitoring

Monitor your site:
- Uptime: https://uptimerobot.com
- Performance: https://www.speedtest.net
- SEO: https://www.ubersuggest.com

### Backup Strategy

1. Regular backups (daily/weekly)
2. Store locally
3. Keep version history
4. Test restore process

---

## 🚨 Common Deployment Issues

### Issue: Site Not Loading

**Solution:**
- Check DNS records propagated (24-48 hours)
- Clear browser cache (Ctrl+Shift+Del)
- Verify files uploaded correctly
- Check server error logs

### Issue: 404 Errors

**Solution:**
- Verify all files uploaded
- Check file permissions
- Verify index.html in correct directory
- Check for typos in URLs

### Issue: Images Not Loading

**Solution:**
- Verify images/ folder uploaded
- Check image paths use forward slashes
- Verify image file names match code
- Check image file permissions

### Issue: Slow Website

**Solution:**
- Compress images further
- Enable caching
- Use CDN for static files
- Minify CSS and JavaScript
- Check server response time

### Issue: Contact Form Not Working

**Solution:**
- Verify backend configured
- Check email settings
- Test form manually
- Check server logs for errors
- Verify API endpoint is correct

---

## 📊 Performance Optimization

After deployment:

1. **Image Optimization**
   - Use WebP format
   - Compress with tinypng.com
   - Lazy load images

2. **Caching**
   - Set cache headers
   - Use browser caching
   - Set expiration dates

3. **Minification**
   - Minify CSS
   - Minify JavaScript
   - Use uglify-js or similar

4. **CDN Usage**
   - Use CloudFlare (free)
   - Use CloudFront (AWS)
   - Use Cloudinary for images

---

## 🔄 Continuous Deployment

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Netlify
on:
  push:
    branches:
      - main
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to Netlify
        uses: netlify/actions/cli@master
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

---

## 📞 Support Resources

- Netlify Support: https://support.netlify.com
- GitHub Pages Docs: https://docs.github.com/en/pages
- Firebase Docs: https://firebase.google.com/docs/hosting
- cPanel Support: https://support.cpanel.net

---

**Last Updated**: September 2026
**For RoboCup India 2026 Foundation**
