## Required pre-installed apps
1. Visual Studio Code
2. PostgreSQL + pgAdmin
3. Postman
4. Any web browser (Google, Microsoft Edge, Firefox, Chrome)
5. Github
6. Docker

## Setup Instructions

To set up the backend of the project, follow these steps:
1. Clone the repository:

```bash
   git clone https://github.com/TonyVoo/Database-Security.git
   cd Shopping_Cart_API
```
   - Create a new database in pgAdmin 4 with the name `shopping_cart`
   - Change docker-compose.yml
```
   environment:
      POSTGRES_PASSWORD: to your database password
```
   - Change src/main/resources/application.yaml
```bash
   datasource:
      password: to your database password
```

2. Run the docker-compose file in a terminal

```bash
   docker-compose up
```
3. Install dependencies (assuming Maven is installed) in a second terminal:

```bash
   mvn clean install
```
4. Run the application in the second terminal

```bash
   java -jar target/shopping-cart-api-0.0.1-SNAPSHOT.jar
```
To set up the frontend of the project, follow these steps:
1. Run the frontend in a third terminal
   npm run serve
Warning: Because of CORS policies, we have to use this code to open chrome
"C:\Program Files\Google\Chrome\Application\chrome.exe" --disable-web-security --disable-gpu --user-data-dir=~/chromeTemp
