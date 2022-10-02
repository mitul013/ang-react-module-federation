# ang-react-module-federation

| React_Webpack ( shell )  | angular-mfe-1    | angular-mfe-2 |
| ------------------------ | -------------    | ------------- |
|    cd React_Webpack/     | cd angular-mfe-1 |   cd angular-mfe-2            |
| npm i            | npm i    |       npm i        |
|npm start| npm start|npm start|
|Run on 3000|Run on 4100| Run on 4200|


# Error
#### GET http://localhost:4100/src_bootloader2_js.js net::ERR_ABORTED 404 (Not Found)
Explanation --> bootloader2/js file for the angular-mfe-2 and angular-mfe-2 is running on PORT 4200 but code is finding into PORT 4100, they are correclty running on standalone, I think this is issue of publicpath ( webpack configuration ) i have set **publicPath:"auto"** for both angular-mfe. 
