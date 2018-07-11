# Serverless & Databaseless Blog
Setup your blog in minutes without servers, database and storage.

1. git clone
2. Change s3 bucket names in `package.json`
2. Copy this file and create your own file for entries: https://docs.google.com/spreadsheets/d/1clAorA4e4F-4aUAqfupFDvicSIoqRNGznASQ9GWy6_c/edit#gid=0
3. Make your file publicly accessible **READ ACCESS ONLY** (click share > `On - public on the web`)
4. Get your Google spreadsheet Id from the URL (e.g. 1clAorA4e4F-4aUAqfupFDvicSIoqRNGznASQ9GWy6_c)
3. Change under parameters in `template.yaml` your spreadsheet Id
4. Run `npm run qd`
5. Get your API endpoints
6. Update your Google spreadsheet file
7. Have fun
