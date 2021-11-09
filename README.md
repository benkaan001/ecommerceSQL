
<h1 align="center">ecommerceSQL featuring Object Relational Mapping(ORM)</h1>
  
<p align="center">
    <img src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white"/>
    <img src="https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE"/>
    <img src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white" />
    <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"  />
    <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" />
    <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"  />
    <img src="https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white" />
    <img src="https://img.shields.io/badge/Made%20with-Markdown-1f425f.svg" />
</p>

  ## Table of Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Email](#email)
  * [GitHub](#GitHub)
  * [License](#license)

  ## Description
  
  The purpose of this project is to build the fundemental back end architecture of an e-commmerce application. Sequelize has been utilized to build the necessary server configuration to interact with a MySQL database.



  ## Installation

  Use the following url to clone the repository:

  `git clone https://github.com/benkaan001/ecommerceSQL`


  `npm install` to install all the production and development dependencies highlighted in `package.json` file.

  
  It is recommended that you create and update your `.env` file with the appropriate `DB_NAME=`'databasename' `DB_USER=`'usernameforSQL' `DB_PW=`'password' values.


  ## Usage

  To connect to the MySQL shell, run the following command on your terminal and enter user credentials for MySQL:

  `<mysql -u root -p>`


  To create the schema from the MySQL shell, then, run:

  `<source db/schema.sql>`


  To exit mySQL, run: 

  `<exit>`

  Then, seed the database with the following command:

  `<npm run seed>`


  Lastly, initate the server with:

  `<npm start>`

  Or, with recommended <nodemon> package:

  `<nodemon server.js>`


  To disconnect the server, press <command+C>

 

  ## Contributing
  
  Contributions are welcome!
  

  ## Tests

  ![Connecting to MySQL Shell and Seed the database](https://github.com/benkaan001/ecommerceSQL/blob/main/assets/Creating%20the%20schema%20from%20the%20MySQL%20shell.gif)


  ![Testing GET all GET by ID routes](https://github.com/benkaan001/ecommerceSQL/blob/main/assets/Testing%20GET%20ALL%20and%20GET%20by%20ID%20routes.gif)


  ![CRUD Operations for Tags](https://github.com/benkaan001/ecommerceSQL/blob/main/assets/CRUD%20Operations%20for%20Tags.gif)


  ![CRUD Operations for Categories](https://github.com/benkaan001/ecommerceSQL/blob/main/assets/CRUD%20Operations%20for%20Categories.gif)


  ![CRUD Operations for Products](https://github.com/benkaan001/ecommerceSQL/blob/main/assets/CRUD%20Operations%20for%20Products.gif)

  
  Check out the deployed application on 
  PART 1 -[screencastify](https://watch.screencastify.com/v/pJ8flw8PsZ2OwKheIfzx)
  PART 2 -[screencastify](https://watch.screencastify.com/v/M2Wxsq8plDzf5tQZYlI0)
 


  ## Email

  For questions and feedback, please contact me via [my email](mailto:benkaan001@gmail.com) or [my GitHub](https://www.github.com/benkaan001)
  

  ## GitHub

  :octocat: [Ben Kaan](https://www.github.com/benkaan001)
  

  ## License

  
  ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
