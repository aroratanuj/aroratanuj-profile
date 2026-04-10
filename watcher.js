#!/usr/bin/env node

/**
 * Resume Portfolio Auto-Updater
 * Monitors PDF resume changes and updates HTML portfolio automatically
 */

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const crypto = require('crypto');

// Configuration
const CONFIG = {
    pdfPath: path.join(__dirname, 'Tanuj Arora_PM_V1.docx (1).pdf'),
    htmlPath: path.join(__dirname, 'index.html'),
    backupPath: path.join(__dirname, 'backups'),
    checkInterval: 5000, // Check every 5 seconds
    enableAutoUpdate: true
};

// Ensure backup directory exists
if (!fs.existsSync(CONFIG.backupPath)) {
    fs.mkdirSync(CONFIG.backupPath, { recursive: true });
}

/**
 * Calculate file hash to detect changes
 */
function getFileHash(filePath) {
    try {
        const fileContent = fs.readFileSync(filePath);
        return crypto.createHash('md5').update(fileContent).digest('hex');
    } catch (error) {
        console.error('Error reading file:', error.message);
        return null;
    }
}

/**
 * Create backup of current HTML file
 */
function createBackup() {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const backupFile = path.join(CONFIG.backupPath, `index-${timestamp}.html`);

    try {
        fs.copyFileSync(CONFIG.htmlPath, backupFile);
        console.log(`✅ Backup created: ${backupFile}`);
        return true;
    } catch (error) {
        console.error('❌ Backup failed:', error.message);
        return false;
    }
}

/**
 * Extract key information from PDF filename and content
 * This is a simplified version - you may want to use PDF parsing libraries
 */
function extractResumeInfo() {
    // For now, return the current information structure
    // You can enhance this with actual PDF parsing libraries like pdf-parse

    const resumeInfo = {
        name: "Tanuj Arora",
        title: "Product Manager | B2B SaaS | Travel & Expense",
        experience: "16+ years",
        currentRole: "Product Manager",
        currentCompany: "SourceFuse Technologies",
        email: "tanuj.arora@email.com",
        phone: "+919999999999",
        linkedin: "https://linkedin.com/in/tanujarora"
    };

    return resumeInfo;
}

/**
 * Update HTML with new resume information
 */
function updateHTML(resumeInfo) {
    try {
        let htmlContent = fs.readFileSync(CONFIG.htmlPath, 'utf8');

        // Update meta description
        htmlContent = htmlContent.replace(
            /<meta name="description" content="[^"]*">/,
            `<meta name="description" content="${resumeInfo.name} - Product Manager with ${resumeInfo.experience} of experience delivering impactful B2B SaaS products.">`
        );

        // Update title
        htmlContent = htmlContent.replace(
            /<title>[^<]*<\/title>/,
            `<title>${resumeInfo.name} – ${resumeInfo.title}</title>`
        );

        // Update hero name
        htmlContent = htmlContent.replace(
            /<h1 class="hero-name">[^<]*<\/h1>/,
            `<h1 class="hero-name">I build B2B SaaS products<br>that drive business value.</h1>`
        );

        // Update contact information
        htmlContent = htmlContent.replace(
            /href="mailto:tanuj\.arora@email\.com"/g,
            `href="mailto:${resumeInfo.email}"`
        );

        htmlContent = htmlContent.replace(
            /href="tel:\+919999999999"/g,
            `href="tel:${resumeInfo.phone.replace(/\s/g, '')}"`
        );

        // Write updated HTML
        fs.writeFileSync(CONFIG.htmlPath, htmlContent, 'utf8');
        console.log('✅ HTML portfolio updated successfully!');
        return true;

    } catch (error) {
        console.error('❌ HTML update failed:', error.message);
        return false;
    }
}

/**
 * Send notification about the update
 */
function sendNotification(message) {
    console.log('\n🔔 ' + message);

    // On macOS, send a system notification
    if (process.platform === 'darwin') {
        exec(`osascript -e 'display notification "${message}" with title "Portfolio Watcher"'`, (error) => {
            if (error) console.error('Notification failed:', error);
        });
    }
}

/**
 * Process PDF changes
 */
function processPDFChange() {
    console.log('\n📄 PDF file changed! Processing update...');

    // Create backup before making changes
    if (createBackup()) {
        // Extract resume information
        const resumeInfo = extractResumeInfo();

        // Update HTML
        if (updateHTML(resumeInfo)) {
            sendNotification('Portfolio updated successfully!');
            console.log('✨ Update complete!\n');
        } else {
            console.log('⚠️  HTML update failed, but backup was created.\n');
        }
    }
}

/**
 * Main file watcher function
 */
function startWatcher() {
    console.log('🚀 Portfolio Watcher Started');
    console.log('📁 Watching:', CONFIG.pdfPath);
    console.log('📝 Target:', CONFIG.htmlPath);
    console.log('⏱️  Checking every', CONFIG.checkInterval / 1000, 'seconds\n');
    console.log('Press Ctrl+C to stop...\n');

    let lastHash = getFileHash(CONFIG.pdfPath);

    if (!lastHash) {
        console.error('❌ Cannot read PDF file. Exiting...');
        process.exit(1);
    }

    console.log('✅ Initial hash computed:', lastHash, '\n');

    const checkInterval = setInterval(() => {
        try {
            const currentHash = getFileHash(CONFIG.pdfPath);

            if (currentHash && currentHash !== lastHash) {
                console.log('🔄 Change detected!');
                console.log('   Old hash:', lastHash);
                console.log('   New hash:', currentHash);

                if (CONFIG.enableAutoUpdate) {
                    processPDFChange();
                } else {
                    console.log('⏸️  Auto-update disabled. Change detected but not processed.');
                }

                lastHash = currentHash;
            }

        } catch (error) {
            console.error('❌ Error checking file:', error.message);
        }
    }, CONFIG.checkInterval);

    // Handle graceful shutdown
    process.on('SIGINT', () => {
        console.log('\n\n👋 Stopping Portfolio Watcher...');
        clearInterval(checkInterval);
        console.log('✅ Watcher stopped gracefully.');
        process.exit(0);
    });
}

// Start the watcher
startWatcher();