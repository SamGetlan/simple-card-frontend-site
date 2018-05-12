[Example] (https://samgetlan.github.io/simple-card-frontend-site)

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

A simple site template I built to create a Mother's Day Card. 

Data to be displayed should be inputted into src/inputs.js

SubCards can accept either a frontImage or frontText property and a backImage or backText property.

```
{
  frontImage: 'randomPicture.jpg',
  backImage: 'randomPicture2.jpg',
}
```

Images need to be added to the public folder in order to be referenced correctly.


If not using images on both sides of subCards you need to change the props being passed into the subCards in app.js

```
{inputs.subCards.map(card => (
- <Card frontImage={card.frontImage} backImage={card.backImage}/>
+ <Card frontText={card.frontText} backText={card.backText}/>>
))}
```

When ready to deploy follow these steps:

1. Navigate to package.json and change homepage field
```
-  "homepage": "https://<gitHubUsernameHere>.github.io/<siteNameHere>",

+  "homepage": "https://samgetlan.github.io/simple-card-frontend-site",
```


2. In terminal, run `npm run predeploy` then `npm run deploy`

3. Navigate to URL and see your site! Send the link to the recipient!




DISCLAIMER: This site is not fully responsive and does not look very good on mobile. Feel free to make a pull request!

