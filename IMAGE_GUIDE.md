# Image Guide for RoboCup Website

## Adding the RoboCup 2027 Nuremberg Image

The website now references the RoboCup 2027 Nuremberg image in the hero section. To complete the setup:

### Step 1: Save the Image
1. You have received the RoboCup 2027 Nuremberg promotional image (the one showing the robot with the Bavarian hat)
2. Save it as: `robocup-2027-nuremberg.jpg` 
3. Place it in the `images/` folder

### Step 2: File Location
```
robocup/
└── images/
    └── robocup-2027-nuremberg.jpg  ← Save your image here
```

### Step 3: Verify
- Open `index.html` in your browser
- The hero section should now display the RoboCup 2027 image instead of the placeholder

## Video Thumbnails

The website automatically pulls video thumbnails from YouTube:
- Video 1: RoboCup 2027 Nuremberg (ID: 4ww0UqLBaLE)
- Video 2: RoboCup 2026 Incheon (ID: 2KF54qaN-Cw)
- Video 3: RoboCup Highlights (ID: gfkekHWqJN4)

Thumbnails are loaded from: `https://img.youtube.com/vi/[VIDEO_ID]/hqdefault.jpg`

## Features Added

✅ **Hero Section**: Now displays RoboCup 2027 Nuremberg promotional image
✅ **Videos Section**: Three video cards with professional thumbnails
✅ **Play Button**: Interactive hover effects on video thumbnails
✅ **YouTube Links**: Direct links to watch videos
✅ **Subscribe Section**: Call-to-action for YouTube channel subscription
✅ **Responsive Design**: Works on mobile, tablet, and desktop
✅ **Video Card Styling**: Professional card design with hover effects

## How It Works

### Video Card Features:
1. **YouTube Thumbnail**: Automatically fetched from YouTube
2. **Play Button Icon**: Centered over the thumbnail
3. **Hover Animation**: Image scales and button grows on hover
4. **Direct Link**: Click thumbnail or button to watch on YouTube
5. **Responsive**: Automatically scales on different screen sizes

### Styling Details:
- Video cards have shadow effects
- Smooth transitions on hover
- Play button with semi-transparent background
- Professional card elevation effect

## Customization

### Add More Videos:
To add another video, duplicate one video card and update:
1. YouTube Video ID (in both img src and link href)
2. Title
3. Description
4. Date/Info

Example:
```html
<div class="col-md-4 mb-4">
    <div class="card h-100 video-card">
        <div class="video-thumbnail position-relative overflow-hidden" style="height: 250px;">
            <img src="https://img.youtube.com/vi/NEW_VIDEO_ID/hqdefault.jpg" alt="Title">
            <a href="https://www.youtube.com/watch?v=NEW_VIDEO_ID" target="_blank" class="play-button">
                <i class="fas fa-play-circle fa-4x text-white"></i>
            </a>
        </div>
        <div class="card-body">
            <h5 class="card-title">Video Title</h5>
            <p class="card-text">Description</p>
            <a href="https://www.youtube.com/watch?v=NEW_VIDEO_ID" target="_blank" class="btn btn-primary btn-sm w-100">
                <i class="fab fa-youtube"></i> Watch on YouTube
            </a>
        </div>
    </div>
</div>
```

## File Structure
```
robocup/
├── index.html                    ← Updated with video section
├── css/
│   └── styles.css               ← Updated with video card styling
└── images/
    └── robocup-2027-nuremberg.jpg ← Add your image here
```

---

**Ready to use!** Just add the image file to the images folder and your website will be complete.
