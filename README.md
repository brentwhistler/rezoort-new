# Rezoort Website - Google Reviews Integration

## CORS Issue Resolution

The Google Reviews integration was encountering a CORS (Cross-Origin Resource Sharing) policy error when trying to fetch reviews from the Google Places API directly from the browser.

## Solutions

### Option 1: Use the Local Proxy Server (Recommended for Development)

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the proxy server:**
   ```bash
   npm start
   ```

3. **Access your website at:**
   ```
   http://localhost:3001
   ```

The proxy server will handle CORS issues by routing Google Places API requests through `/api/google` and serving your static files.

### Option 2: Use CORS Proxy Service (Quick Test)

If you don't want to set up the local server, the code will automatically fall back to using `https://cors-anywhere.herokuapp.com/` when not running on the proxy server.

**Note:** This service has rate limits and is not suitable for production.

### Option 3: Production Deployment

For production, you have several options:

1. **Deploy with a backend server** that handles the Google Places API calls
2. **Use serverless functions** (Vercel, Netlify, AWS Lambda)
3. **Configure your hosting provider** to handle CORS properly

## How It Works

The updated code automatically detects whether you're running on the local proxy server (port 3001) and routes API calls accordingly:

- **Local development (port 3001)**: Uses local proxy server
- **Other environments**: Falls back to CORS proxy service

## Testing

1. Open your browser's Developer Tools (F12)
2. Go to the Console tab
3. Type `testGoogleAPI()` and press Enter to test API connectivity
4. Check for any error messages

## Troubleshooting

- **CORS errors**: Make sure you're using the proxy server or CORS proxy
- **API key errors**: Verify your Google Places API key is valid and has the necessary permissions
- **No reviews**: The business might not have reviews yet, or the Place ID might be incorrect

## Files Modified

- `index.html` - Updated Google Reviews integration with CORS handling
- `proxy-server.js` - Local proxy server for development
- `package.json` - Dependencies for the proxy server
- `README.md` - This documentation file
