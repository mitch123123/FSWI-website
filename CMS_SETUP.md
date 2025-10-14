# FSWI Calendar CMS Setup Guide

## 🎉 Netlify CMS Implementation Complete!

Your calendar is now fully manageable through a user-friendly admin interface.

## 📋 What's Been Set Up

### ✅ Files Created:
- `admin/index.html` - Admin interface
- `admin/config.yml` - CMS configuration
- `content/events/` - Directory for event files
- `scripts/build-events.js` - Build script
- `netlify.toml` - Netlify configuration
- `package.json` - Dependencies

### ✅ Features Added:
- **Admin Interface**: Access at `/admin` on your site
- **Event Management**: Add, edit, delete events through web interface
- **Automatic Deployment**: Changes auto-deploy via Git
- **Fallback System**: Site works even if CMS is down

## 🚀 Next Steps for Deployment

### 1. Install Dependencies
```bash
npm install
```

### 2. Enable Netlify Identity
1. Go to your Netlify dashboard
2. Navigate to **Site settings** → **Identity**
3. Click **Enable Identity**
4. Go to **Registration** → **Open registration** (or invite specific users)

### 3. Enable Git Gateway
1. In Netlify dashboard: **Site settings** → **Identity** → **Services**
2. Click **Enable Git Gateway**
3. This allows the CMS to commit changes to your repository

### 4. Deploy to Netlify
1. Push all changes to your Git repository
2. Netlify will automatically build and deploy
3. The build process will generate `events.json` from your CMS content

## 👥 User Management

### Adding Users:
1. **Option A**: Open registration (anyone can sign up)
2. **Option B**: Invite specific users via email
3. **Option C**: Use external authentication (Google, GitHub, etc.)

### Admin Access:
- Navigate to `yoursite.com/admin`
- Sign in with Netlify Identity
- Start managing events!

## 📝 How to Use the CMS

### Adding Events:
1. Go to `/admin`
2. Click **"New Event"**
3. Fill in the form:
   - **Title**: Event name
   - **Date**: When it happens
   - **Time**: Event duration
   - **Location**: Where it's held
   - **Instructor**: Who's teaching
   - **Description**: What it's about
   - **Additional Info**: Extra details
   - **Category**: Type of event
4. Click **"Save"**
5. Changes auto-deploy!

### Editing Events:
1. Go to `/admin`
2. Click on any existing event
3. Make changes
4. Click **"Save"**

### Deleting Events:
1. Go to `/admin`
2. Click on the event
3. Click **"Delete"**

## 🔧 Technical Details

### How It Works:
1. **CMS Interface**: Users manage events through `/admin`
2. **Git Storage**: Events stored as markdown files in `content/events/`
3. **Build Process**: Netlify runs `scripts/build-events.js` on deploy
4. **JSON Generation**: Creates `content/events.json` for the website
5. **Calendar Display**: Website reads from the generated JSON

### File Structure:
```
├── admin/
│   ├── index.html          # Admin interface
│   └── config.yml          # CMS configuration
├── content/
│   ├── events/             # Event markdown files
│   └── events.json         # Generated JSON (auto-created)
├── scripts/
│   └── build-events.js     # Build script
└── netlify.toml           # Netlify configuration
```

## 🆘 Troubleshooting

### If CMS doesn't work:
1. Check Netlify Identity is enabled
2. Verify Git Gateway is enabled
3. Ensure user has proper permissions

### If events don't appear:
1. Check `content/events.json` exists
2. Verify build process completed
3. Check browser console for errors

### If build fails:
1. Check `package.json` dependencies
2. Verify `scripts/build-events.js` syntax
3. Check Netlify build logs

## 💰 Cost Breakdown

- **Netlify CMS**: FREE
- **Netlify Identity**: FREE (up to 1,000 users)
- **Git Gateway**: FREE
- **Total Cost**: $0/month

## 🎯 Benefits

✅ **User-Friendly**: Non-technical users can manage events
✅ **Real-Time**: Changes appear immediately after deployment
✅ **Version Control**: All changes tracked in Git
✅ **Backup**: Content stored in your repository
✅ **Free**: No ongoing costs
✅ **Reliable**: Works even if external services are down

## 📞 Support

If you need help:
1. Check this guide first
2. Review Netlify CMS documentation
3. Contact your developer for technical issues

---

**🎉 Congratulations! Your calendar is now fully manageable!**
