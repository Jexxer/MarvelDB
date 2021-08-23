# Interactive Marvel Comic Database

## Description

This project was used to develope my skills in using API GET requests. You can search any marvel character by name and it will display any comics that the character appears in. You can then view individual comics and see relevant information / series information about the comics.

## Deployed

https://marveldb-app.herokuapp.com/

## Technologies Used

1. axios for requesting data from apis

2. MD5 for creating hash of keys (required for marvel API)

3. BrowserRouter for using routes/links components in react

4. Select library to easily create a select dropdown.

## Getting Started

To run this site locally you will need to run do the following in order:

If you want to make changes for pull requests you will need to fork the repo first then run:
```
git clone [your-forked-url]
```

otherwise if you just want to view the code:
```
git clone https://github.com/Jexxer/MarvelDB.git
```

Move into the new directory with:
```
cd MarvelDB
```

install dependencies by running:
```
npm i
```

## Getting your own key

Head over to https://developer.marvel.com/ and click get started and follow instructions on creating and obtaining your own keys.

In the MarvelDB directory you will want to creat a new file called `.env.local` and put your keys in like so:
```
REACT_APP_PUB_KEY=YOUR_PUBLIC_KEY_HERE
REACT_APP_PRIV_KEY=YOUR_PRIVATE_KEY_HERE
```
note: do not change the name of the keys unless you know what you are doing.

Now you can start the server with:
```
npm run start
```

This should open a tab in your browser on localhost port 3000 by default.

## Contribution Guidelines
- Please create issues for bugs.
- Create pull requests for changes to my code if you think you have an improvement.

- Do NOT call api in a loop. Be mindful of the fact there is a 3000 call limit per day.
- Pagination could improve the comics display page and decrease the amount of calls per user.