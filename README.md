# **R_BR_Football** ⚽

This project is a Single Page Application developed in React!

## How does it works?

The main goal for this application was to deliver some informations of the brazilian main football/soccer national competition, the 'Campeonato Brasileiro', also know as 'Brasileirão'.

Basically, it delivers to the user the actual table of the competition, all the 38 rounds of the 20 teams and the championship artillery.

The championship table includes the position of each team, the points, games played, wins, draws, losses, goals scored, goals suffered and goals difference.

The rounds table delivers to the user the 38 rounds with 10 matches each, giving the basic information of each match, like which team is going to face which, and if the match already finished, the final score.

The artillery list show the players with most goals scored in the championship.

## How was it developed? 

It was totally developed using React, but also has been contribuited by Chakra-UI. 

The application used the React Router configurations available in Chakra-UI, splitting the SPA into two parts, the homepage with a few text information and welcome message and the 'Brasileirão' page, where all the App funcionalities lay.

The 'Brasileirão' part is also splitted into three different section, the first one is the 'Tabela' section, where the championship table lays, the second one is the 'Rodadas' section, which show all the season matches divided in 38 rounds, and the third page shows the 'Artilharia' section, where the artillery list can be seen.

All the data in the three sections is provided by the API 'API-Futebol', which is found through the URL: https://www.api-futebol.com.br/. The data used in this SPA is available in the free version of the API. To get more data from other competitions, is necessary to pay for the whished competition package.

The API data was fetched in each of the three main React Components that includes the three funcionalities of the SPA. In each, the data is fetched, creating a JSON formated data stored by an Array in useState React Hook. Then, the data Array is copyed by a map() method, showing to the user the treated data with the information totally formated following the page styling.

Also, the Chakra-UI is responsible for most of the Application stilization and for some of components imported and used.
