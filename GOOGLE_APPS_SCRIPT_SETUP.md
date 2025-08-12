# Google Apps Script Setup for Rezoort Reviews

## Step 1: Create Google Apps Script

1. Go to [script.google.com](https://script.google.com)
2. Click "New Project"
3. Name it "Rezoort Reviews API"

## Step 2: Replace the Code

Replace everything in the editor with this code:

```javascript
function doGet(e) {
  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  };
  
  // Handle preflight OPTIONS request
  if (e.parameter.method === 'OPTIONS') {
    return ContentService.createTextOutput('')
      .setMimeType(ContentService.MimeType.TEXT)
      .setHeaders(headers);
  }
  
  try {
    const placeId = e.parameter.placeId || 'ChIJ__-DoiZBw4URdYMkjBu2ykM';
    const apiKey = 'AIzaSyBN2MxWMQiHCZ-qno_evfBBsCf1Y2wKTZA';
    
    // Fetch place details from Google Places API
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total,name,formatted_address&key=${apiKey}`;
    
    const response = UrlFetchApp.fetch(url);
    const data = JSON.parse(response.getContentText());
    
    // Return the data with CORS headers
    return ContentService.createTextOutput(JSON.stringify(data))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders(headers);
      
  } catch (error) {
    // Return error response
    const errorResponse = {
      status: 'ERROR',
      error: error.toString(),
      message: 'Failed to fetch reviews'
    };
    
    return ContentService.createTextOutput(JSON.stringify(errorResponse))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders(headers);
  }
}

function doPost(e) {
  // Handle POST requests if needed in the future
  return doGet(e);
}
```

## Step 3: Deploy the Script

1. Click "Deploy" → "New deployment"
2. Choose "Web app"
3. Set these options:
   - **Execute as**: "Me"
   - **Who has access**: "Anyone"
4. Click "Deploy"
5. **Copy the Web App URL** (it will look like: `https://script.google.com/macros/s/.../exec`)

## Step 4: Update Your Website

1. Open `config.js`
2. Replace `YOUR_GOOGLE_APPS_SCRIPT_URL_HERE` with your actual Web App URL
3. Save the file

## Step 5: Test

1. Open your website
2. Go to the Google Reviews section
3. Open browser console (F12)
4. Type `testGoogleAPI()` and press Enter
5. Check for any error messages

## How It Works

- Your website calls the Google Apps Script instead of Google's API directly
- The script fetches the reviews from Google Places API (server-side)
- The script returns the data with proper CORS headers
- No more CORS errors!

## Troubleshooting

- **"Script not found"**: Make sure you copied the correct Web App URL
- **"Access denied"**: Make sure "Who has access" is set to "Anyone"
- **No reviews**: Check if the Place ID is correct
- **API errors**: Verify your Google Places API key is valid

## Security Notes

- The API key is now hidden in the Google Apps Script (server-side)
- Only the script URL is exposed to the client
- Google Apps Script has built-in rate limiting
- The script only returns public review data
