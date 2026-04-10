# 📄 Portfolio Auto-Watcher

Automatically updates your HTML portfolio when your PDF resume changes.

## 🚀 Quick Start

### Option 1: Run Manually
```bash
cd "/Users/tanuj/Desktop/AI Folder/aroratanuj-profile"
node watcher.js
```

### Option 2: Run in Background
```bash
cd "/Users/tanuj/Desktop/AI Folder/aroratanuj-profile"
node watcher.js &
```

### Option 3: Run Automatically on Startup (macOS)

1. **Create a launch agent:**
```bash
nano ~/Library/LaunchAgents/com.tanuj.portfolio-watcher.plist
```

2. **Add this content:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>com.tanuj.portfolio-watcher</string>
    <key>ProgramArguments</key>
    <array>
        <string>/usr/local/bin/node</string>
        <string>/Users/tanuj/Desktop/AI Folder/aroratanuj-profile/watcher.js</string>
    </array>
    <key>RunAtLoad</key>
    <true/>
    <key>KeepAlive</key>
    <true/>
    <key>WorkingDirectory</key>
    <string>/Users/tanuj/Desktop/AI Folder/aroratanuj-profile</string>
</dict>
</plist>
```

3. **Load the service:**
```bash
launchctl load ~/Library/LaunchAgents/com.tanuj.portfolio-watcher.plist
```

4. **Control the service:**
```bash
# Start
launchctl start com.tanuj.portfolio-watcher

# Stop
launchctl stop com.tanuj.portfolio-watcher

# Unload
launchctl unload ~/Library/LaunchAgents/com.tanuj.portfolio-watcher.plist
```

## 📋 How It Works

1. **Monitors** your PDF resume file for changes
2. **Detects** when the file is modified (using MD5 hash)
3. **Backups** your current HTML file
4. **Updates** the portfolio with new information
5. **Notifies** you when updates are complete

## ⚙️ Configuration

Edit the `CONFIG` object in `watcher.js`:

```javascript
const CONFIG = {
    pdfPath: path.join(__dirname, 'Tanuj Arora_PM_V1.docx (1).pdf'),
    htmlPath: path.join(__dirname, 'index.html'),
    backupPath: path.join(__dirname, 'backups'),
    checkInterval: 5000, // Check every 5 seconds
    enableAutoUpdate: true
};
```

## 🔔 Notifications

- **macOS**: Native system notifications
- **Console**: Real-time status updates

## 💾 Backups

All backups are stored in the `backups/` directory with timestamps:
```
backups/
├── index-2024-04-10T14-30-45-123Z.html
├── index-2024-04-10T15-22-10-456Z.html
└── ...
```

## 🛠️ Advanced: PDF Content Parsing

To parse actual PDF content, install additional dependencies:

```bash
npm install pdf-parse
```

Then update the `extractResumeInfo()` function in `watcher.js` to extract real data from your PDF.

## 📝 Notes

- The watcher creates a backup before every update
- Check interval: 5 seconds (configurable)
- Press `Ctrl+C` to stop the watcher
- Previous versions are always backed up

## 🐛 Troubleshooting

**Watcher not detecting changes?**
- Check file paths in CONFIG
- Ensure PDF file exists and is readable
- Check file permissions

**HTML not updating correctly?**
- Restore from backup: `cp backups/index-[timestamp].html index.html`
- Check console for error messages
- Verify HTML structure matches expected format

## 🎯 Best Practices

1. **Test updates** by making small changes to your PDF first
2. **Check backups** regularly to ensure they're being created
3. **Monitor logs** for any errors or warnings
4. **Keep the watcher running** in the background for automatic updates