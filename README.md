# How to run
****

### BackEnd Express
- cd backend -- (backend folder)
- npm install
- create .env in root directory project and set environment with your database detail with the template below 

DB_USER=  
DB_PASSWORD=  
DB_HOST=  
DB_PORT=  
DB_DATABASE=   
PORT=3000

- npm run migrate:latest
- npm run file ./databases/seeders/initial_seed.ts
- npm run dev
- try localhost:3000/api/transactions to get data transaction of customer

***
### Frontend React
***
- cd frontend (frontend folder)
- yarn install
- yarn run dev