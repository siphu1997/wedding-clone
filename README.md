Hình ảnh cần chuẩn bị
1. chu-re.jpg // Hình của chú rể
2. co-dau.jpg // Hình của cô dâu
3. cong.jpg // Ảnh cổng
4. gallery1.jpg .... gallery10.jpg // 10 ảnh gallery ở cuối web
5. trong src/components/Form/index.tsx => thêm endpoint BE url deploy vào  (deploy vercel)




## 🚀 Submit Form Data to Google Sheets (via Apps Script)

This project uses a **Google Apps Script web app** to save form submissions directly into a Google Sheet.

### Steps

1. **Create a Google Sheet**
   - Go to [Google Sheets](https://sheets.google.com/) and create a new sheet.
   - Copy its ID from the URL (`https://docs.google.com/spreadsheets/d/<SPREADSHEET_ID>/edit`).

2. **Create Apps Script**
   - In the Sheet: `Extensions → Apps Script`.
   - Paste the Apps Script code (below)

    ```javascript
    function doGet(e) {
        var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
        var data = e.parameter;
        
        // Change according to your column headers

        sheet.appendRow([
                data.name || '',
                data.phone || '-',
                data.email || '-',
                data.join || '',
                data.partyType || '',
                data.related || '',
                data.wish || '',
                new Date()
                ]);

        return ContentService.createTextOutput("Tks")
            .setMimeType(ContentService.MimeType.TEXT);
    }


     

3. **Deploy as Web App**

- Click Deploy → New Deployment.
- Select Web App.
- Set:
  - Execute as: Me
  - Who has access: Anyone
  - Click Deploy → Authorize the script.
  - Copy the Web App URL (something like https://script.google.com/macros/s/.../exec).