# Serverless & Databaseless Blog
Setup your blog in minutes without servers, database and storage.

Example API Endpoint: https://xwlspy0iw2.execute-api.us-east-1.amazonaws.com/Prod/
Example Google Sheetfile: https://docs.google.com/spreadsheets/d/1clAorA4e4F-4aUAqfupFDvicSIoqRNGznASQ9GWy6_c/edit#gid=0

1. git clone
2. Run `npm install`
3. Change s3 bucket names in `package.json`
4. Copy this file and create your own file for entries: https://docs.google.com/spreadsheets/d/1clAorA4e4F-4aUAqfupFDvicSIoqRNGznASQ9GWy6_c/edit#gid=0
5. Make your file publicly accessible **READ ACCESS ONLY** (click share > `On - public on the web`)
6. Get your Google spreadsheet Id from the URL (e.g. 1clAorA4e4F-4aUAqfupFDvicSIoqRNGznASQ9GWy6_c)
7. Change under parameters in `template.yaml` your spreadsheet Id
8. Run `npm run qd`
9. Get your API endpoints
10. Update your Google spreadsheet file


**Note** If you want to filter by urls, simply use the following schema `http://www.your-api-endpoint.com/url-from-the-file`. In the case above you would access a 3rd post by simply calling `http://www.your-api-endpoint.com/want-to-read-more-3`

![Flow](./images/database-serverless-blog.png)

