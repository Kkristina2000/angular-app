angular-app(Angular+TypeScript+Bootstrap)

TEST TASK:

1.1. Requirements

You need to create an application in latest version of Angular using TypeScript.

The application will be started off the empty Angular’s project, which is created using Angular CLI.

The application will use Bootstrap 4 as CSS framework, to minimize the effort of writing your own SCSS.
The application will consist of 2 pages:

List page (“/navigator” URL)
Summary page (“/” URL)

1.2. Data structure
The application will be built around a list of rows which will be a JS array. Each row will be represented with an object stored inside this array. Each object will have the following properties:

    {

      "type": “income”|”outcome”|”loan”|”investment”

      "_id": string;

      "amount": number;

      "name": { // Nested object with it’s own properties

        "first": string;

        "last": string;

      },

      "company": string;

      "email": string;

      "phone": string;

      "address": string;

    }

You can just copy the following JSON into the TypeScript source file and use it anywhere in the code:

https://codebeautify.org/jsonviewer/cb1d6ce2


This is a test, so this object describes an abstract “transaction”. You’re free to modify, or use different data JSON, if you have a better idea of what data structure could be.

2.1. Project setup
Generate project using Angular CLI
Include Bootstrap 4 CDN: <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

2.2. List page
The “List” page is a tab set. Each tab has a simple table. It has 2 columns. First column is “Name” or some other object identity. Second column is some amount or quantity. Please use the image below for your guidance. It’s rows are objects from the JSON above, filtered by “type” property. The “Income” tab will display only those objects, which have “type” === “income”. Other 3 tabs have exactly same filtering logic.

The URL of the page should be: /navigator?tab=<0..3>, where tab query parameter corresponds to a currently selected tab, and the type by which the table is filtered.

2.3. Summary page
This page is displayed at the root URL (/). It has cards, please use Bootstrap 4 “card” SCSS classes. This page uses exactly the same JSON data, as the “List” page.

First card is “Heading” card - it displays total number of objects and text
Next 4 cards are very similar. They differ only by the Text and by the type of objects counted:
Income card: displays count of type=income , “See all” is a routerlink=/navigator?tab=0
Outcome, Loan, Investment : similar to the cards above.

