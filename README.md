##Book Hunter

- Simple book search app created with Node.js, React, React-Redux, Express, and Semantic-UI. Users can search Open Library for books and details on those books.
- Users can either do a normal search or advanced search.
- Using advanced search allows user to search for a book by title, author, and/or year.
- Advanced search also lets user decide how results will be sorted.
- Pro-tip: Sort functionality on advanecd search still works after results are returned. 
- Once results are returned, user can click on title work to see a more detailed view.

##Access

- GitHub: https://github.com/mdworkin21/bookHunter
- Deployed Site: https://bookhunterapp.herokuapp.com/



##Installation:
To run this project locally, install using npm:

``` 
 $ git clone https://github.com/mdworkin21/bookHunter.git
 $ cd [into the project]
 $ npm i
 $ npm run start-dev
```

##For Tests
$ npm run test

##Features for the future
1. Set up log-in/authentication so users can save books to a db, mark them as favorites, will read, have read, wish list, etc. (Scaffolding for interaction with a postgreSQL db is already set up)
2. Add server-side pagination so only 9-12 results are provided at a time. Helps user experience, especially on smaller devices. 
3. Hook into Amazon (or equivalent) API to let users navigate to a place to buy the book.
4. Where possible, provide users with links to free versiojns of the book (without violating copyright laws. Might work best for public domain.)
5. Add social feature that allows users to suggest books to other users, have reading challenges, and leave reviews.

## Known Bugs/Issues
 1. If a user is viewing the details of a single book and then hits refresh, the page will turn blank. 
  - Cause: The reason this happens is because on refresh the Redux store gets dumped. Because the url relies on an id provided by the store, the page has no data to load. 
  - Solution: One solution is to use redux-persist to tap into local storage. Using the redux-persist autorehydrate function should help solve this issue. 
  2. Some images do not display.
    -Cause: Some of the cover-image identifiers provided by the OpenLibrary API result in a blank image. 
    - Solution: Figure out way to identify times when an image is blank, and either (i) check other image identifiers provided by the API, or provide user with message/stock imafge.

