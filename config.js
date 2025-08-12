// Configuration for Rezoort Website
const CONFIG = {
    // Replace this with your actual Google Apps Script URL after deployment
    GOOGLE_APPS_SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbz5bx4PAbBYUMnbQRm-CzkE3U8lXa7lVk05qb0SIb02Jfp16oIMyp7Gnn5kvMvDp5u3_g/exec',
    
    // Google Place ID for Rezoort
    PLACE_ID: 'ChIJ__-DoiZBw4URdYMkjBu2ykM'
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
