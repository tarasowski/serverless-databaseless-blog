# Serverless & Databaseless Blog
Setup your blog in minutes without servers, database and storage.

1. git clone
2. Change s3 bucket names in `package.json`
3. Create a new Google spreadsheet file and make it accessible for everyone (click share > `On - public on the web`)
4. Get your Google spreadsheet Id from the URL (example: https://docs.google.com/`spreadsheets/d/1clAorA4e4F-4aUAqfupFDvicSIoqRNGznASQ9GWy6_c`/
3. Change under parameters in `template.yaml` your spreadsheet Id
4. Run `npm run qd`
5. Get your API endpoints
6. Update your Google spreadsheet file
7. Have fun
