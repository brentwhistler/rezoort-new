// Configuration for Rezoort Website
const CONFIG = {
    // Replace this with your actual Google Apps Script URL after deployment
    GOOGLE_APPS_SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbxB8gyIBwkN3RAUb0aBpUJ8bNBfoDcsACFdciUdOnfx3TiXhVzo4FZ9K0mRlYXBsCgDOg/exec',
    
    // Google Place ID for Rezoort
    PLACE_ID: 'ChIJ__-DoiZBw4URdYMkjBu2ykM'
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
