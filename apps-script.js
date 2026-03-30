/**
 * Furnshin - Lead Capture Google Apps Script Bridge
 * 
 * Instructions:
 * 1. Create a new Google Sheet.
 * 2. Create three tabs: "ContactLeads", "QuoteRequests", "Newsletter".
 * 3. Go to Extensions > Apps Script.
 * 4. Paste this code and click Save.
 * 5. Click "Deploy" > "New Deployment".
 * 6. Select "Web App".
 * 7. Set "Execute as" to "Me".
 * 8. Set "Who has access" to "Anyone" (crucial for form submissions).
 * 9. Copy the Web App URL and paste it into NEXT_PUBLIC_APPSCRIPT_URL in .env.local.
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000); // 10s lock

  try {
    var doc = SpreadsheetApp.getActiveSpreadsheet();
    var postData = JSON.parse(e.postData.contents);
    var type = postData.type || "unknown";
    var sheetName = "ContactLeads";
    
    if (type === "quote") sheetName = "QuoteRequests";
    if (type === "newsletter") sheetName = "Newsletter";
    
    var sheet = doc.getSheetByName(sheetName);
    
    // Create sheet if it doesn't exist
    if (!sheet) {
      sheet = doc.insertSheet(sheetName);
      var headers = [];
      if (type === "contact") headers = ["Timestamp", "Name", "Email", "Phone", "Service", "Message"];
      if (type === "quote") headers = ["Timestamp", "Name", "Phone", "Service"];
      if (type === "newsletter") headers = ["Timestamp", "Email"];
      sheet.appendRow(headers);
    }

    var row = [];
    if (type === "contact") {
      row = [
        new Date().toLocaleString(),
        postData.name || "",
        postData.email || "",
        postData.phone || "",
        postData.service || "",
        postData.message || ""
      ];
    } else if (type === "quote") {
      row = [
        new Date().toLocaleString(),
        postData.name || "",
        postData.phone || "",
        postData.service || ""
      ];
    } else if (type === "newsletter") {
      row = [
        new Date().toLocaleString(),
        postData.email || ""
      ];
    } else {
      // Fallback for unknown types
      row = [new Date().toLocaleString(), JSON.stringify(postData)];
    }

    sheet.appendRow(row);

    return ContentService
      .createTextOutput(JSON.stringify({ "success": true, "message": "Row added successfully" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (f) {
    return ContentService
      .createTextOutput(JSON.stringify({ "success": false, "error": f.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

// Handle preflight OPTIONS (CORS)
function doOptions(e) {
  return ContentService.createTextOutput("")
    .setMimeType(ContentService.MimeType.TEXT);
}
