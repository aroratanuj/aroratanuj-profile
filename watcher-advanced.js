#!/usr/bin/env node

/**
 * Advanced Portfolio Auto-Updater with PDF Parsing
 * Monitors PDF resume changes and intelligently updates HTML portfolio
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
    checkInterval: 5000,
    enableAutoUpdate: true,
    verboseLogging: true
};

// Resume data structure (update this based on your actual resume structure)
const resumeTemplate = {
    personalInfo: {
        name: "Tanuj Arora",
        email: "tanuj.arora@email.com",
        phone: "+919999999999",
        linkedin: "https://linkedin.com/in/tanujarora",
        location: "India"
    },
    professional: {
        title: "Product Manager | B2B SaaS | Travel & Expense",
        experience: "16+ years",
        currentRole: "Product Manager",
        currentCompany: "SourceFuse Technologies"
    },
    skills: [
        "Product Management",
        "Agile & Scrum",
        "Leadership",
        "Technical Skills"
    ],
    certifications: [
        "Certified SAFe5 POPM",
        "Certified Scrum Master (CSM)",
        "Certified Product Owner (CSPO)",
        "ITIL v5 Foundation"
    ]
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
        logError('Error reading file:', error.message);
        return null;
    }
}

/**
 * Logging functions
 */
function log(message) {
    if (CONFIG.verboseLogging) {
        console.log(`[INFO] ${new Date().toLocaleTimeString()} - ${message}`);
    }
}

function logError(message) {
    console.error(`[ERROR] ${new Date().toLocaleTimeString()} - ${message}`);
}

function logSuccess(message) {
    console.log(`[SUCCESS] ${new Date().toLocaleTimeString()} - ${message}`);
}

/**
 * Create backup of current HTML file
 */
function createBackup() {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const backupFile = path.join(CONFIG.backupPath, `index-${timestamp}.html`);

    try {
        fs.copyFileSync(CONFIG.htmlPath, backupFile);
        logSuccess(`Backup created: ${path.basename(backupFile)}`);
        return true;
    } catch (error) {
        logError('Backup failed:', error.message);
        return false;
    }
}

/**
 * Parse PDF using system tools (macOS built-in textutil)
 */
function parsePDFSystemTool(pdfPath) {
    return new Promise((resolve, reject) => {
        const tempTxt = path.join(__dirname, 'temp-resume.txt');

        // Try using textutil on macOS
        const command = `textutil -convert txt "${pdfPath}" -output "${tempTxt}"`;

        exec(command, (error) => {
            if (error) {
                logError('PDF parsing failed, using template data');
                resolve(resumeTemplate);
                return;
            }

            try {
                const content = fs.readFileSync(tempTxt, 'utf8');
                fs.unlinkSync(tempTxt); // Clean up temp file

                // Extract information from PDF text
                const parsedData = extractInfoFromText(content);
                resolve(parsedData);
            } catch (parseError) {
                logError('Text extraction failed, using template');
                resolve(resumeTemplate);
            }
        });
    });
}

/**
 * Extract resume information from text content
 */
function extractInfoFromText(text) {
    const info = { ...resumeTemplate };

    try {
        // Extract email
        const emailMatch = text.match(/[\w.-]+@[\w.-]+\.\w+/);
        if (emailMatch) {
            info.personalInfo.email = emailMatch[0];
        }

        // Extract phone number
        const phoneMatch = text.match(/\+?\d{10,}/);
        if (phoneMatch) {
            info.personalInfo.phone = phoneMatch[0];
        }

        // Extract LinkedIn URL
        const linkedinMatch = text.match(/linkedin\.com\/in\/[\w-]+/);
        if (linkedinMatch) {
            info.personalInfo.linkedin = `https://${linkedinMatch[0]}`;
        }

        // Extract experience years
        const experienceMatch = text.match(/(\d+)\+?\s*years?/i);
        if (experienceMatch) {
            info.professional.experience = `${experienceMatch[1]}+ years`;
        }

        log('Successfully extracted info from PDF');
        return info;

    } catch (error) {
        logError('Text parsing failed, using defaults');
        return info;
    }
}

/**
 * Update HTML with new resume information
 */
function updateHTML(resumeInfo) {
    try {
        let htmlContent = fs.readFileSync(CONFIG.htmlPath, 'utf8');

        // Update meta description
        const metaDesc = `${resumeInfo.personalInfo.name} - Product Manager with ${resumeInfo.professional.experience} of experience delivering impactful B2B SaaS products.`;
        htmlContent = htmlContent.replace(
            /<meta name="description" content="[^"]*">/,
            `<meta name="description" content="${metaDesc}">`
        );

        // Update title
        htmlContent = htmlContent.replace(
            /<title>[^<]*<\/title>/,
            `<title>${resumeInfo.personalInfo.name} – ${resumeInfo.professional.title}</title>`
        );

        // Update contact email
        htmlContent = htmlContent.replace(
            /href="mailto:[^"]*"/g,
            `href="mailto:${resumeInfo.personalInfo.email}"`
        );

        // Update contact phone
        const cleanPhone = resumeInfo.personalInfo.phone.replace(/\s/g, '');
        htmlContent = htmlContent.replace(
            /href="tel:\+?\d*"/g,
            `href="tel:${cleanPhone}"`
        );

        // Update LinkedIn URL
        htmlContent = htmlContent.replace(
            /href="https:\/\/linkedin\.com\/in\/[^"]*"/g,
            `href="${resumeInfo.personalInfo.linkedin}"`
        );

        // Update footer name
        htmlContent = htmlContent.replace(
            /&copy; \d+ [^<]+\. /,
            `&copy; ${new Date().getFullYear()} ${resumeInfo.personalInfo.name}. `
        );

        // Write updated HTML
        fs.writeFileSync(CONFIG.htmlPath, htmlContent, 'utf8');

        logSuccess('HTML portfolio updated!');
        log(`Updated email: ${resumeInfo.personalInfo.email}`);
        log(`Updated phone: ${resumeInfo.personalInfo.phone}`);
        log(`Updated LinkedIn: ${resumeInfo.personalInfo.linkedin}`);

        return true;

    } catch (error) {
        logError('HTML update failed:', error.message);
        return false;
    }
}

/**
 * Send notification about the update
 */
function sendNotification(message) {
    console.log('\n🔔 ' + message);

    // macOS system notification
    if (process.platform === 'darwin') {
        exec(`osascript -e 'display notification "${message}" with title "Portfolio Watcher"'`, (error) => {
            if (error) logError('Notification failed');
        });
    }
}

/**
 * Process PDF changes
 */
async function processPDFChange() {
    log('PDF file changed! Processing update...');

    // Create backup
    if (!createBackup()) {
        logError('Backup creation failed, aborting update');
        return;
    }

    try {
        // Parse PDF to extract information
        log('Parsing PDF content...');
        const resumeInfo = await parsePDFSystemTool(CONFIG.pdfPath);

        // Update HTML
        if (updateHTML(resumeInfo)) {
            sendNotification('Portfolio updated successfully!');
            log('Update complete!\n');
        } else {
            logError('HTML update failed, but backup was created');
        }
    } catch (error) {
        logError('Update process failed:', error.message);
    }
}

/**
 * Main file watcher function
 */
function startWatcher() {
    console.log('╔══════════════════════════════════════════════╗');
    console.log('║   🚀 Advanced Portfolio Watcher Started       ║');
    console.log('╚══════════════════════════════════════════════╝');
    console.log('\n📁  Watching:', path.basename(CONFIG.pdfPath));
    console.log('📝  Target:', path.basename(CONFIG.htmlPath));
    console.log('⏱️  Check Interval:', CONFIG.checkInterval / 1000, 'seconds');
    console.log('🔄  Auto-Update:', CONFIG.enableAutoUpdate ? 'Enabled' : 'Disabled');
    console.log('\nPress Ctrl+C to stop...\n');

    let lastHash = getFileHash(CONFIG.pdfPath);

    if (!lastHash) {
        logError('Cannot read PDF file. Exiting...');
        process.exit(1);
    }

    log('Initial hash computed');
    log('Watcher is running...\n');

    const checkInterval = setInterval(() => {
        try {
            const currentHash = getFileHash(CONFIG.pdfPath);

            if (currentHash && currentHash !== lastHash) {
                console.log('\n' + '─'.repeat(50));
                log('Change detected!');
                log(`Old hash: ${lastHash.substring(0, 8)}...`);
                log(`New hash: ${currentHash.substring(0, 8)}...`);

                if (CONFIG.enableAutoUpdate) {
                    processPDFChange();
                } else {
                    log('Auto-update disabled. Change detected but not processed.');
                }

                lastHash = currentHash;
                console.log('─'.repeat(50) + '\n');
            }

        } catch (error) {
            logError('Error checking file:', error.message);
        }
    }, CONFIG.checkInterval);

    // Handle graceful shutdown
    process.on('SIGINT', () => {
        console.log('\n\n👋 Stopping Portfolio Watcher...');
        clearInterval(checkInterval);
        console.log('✅ Watcher stopped gracefully.');
        console.log('👋 Have a great day!\n');
        process.exit(0);
    });
}

// Start the watcher
startWatcher();