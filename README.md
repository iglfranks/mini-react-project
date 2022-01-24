# Yu-Gi-Oh TCG Index - pair-coding project, 48 hours

[Link to deployed version](https://isaac-kumar-yugioh.netlify.app/)

## Overview

The task of my second project with General Assembly was to use a free API from the internet and use it to create an index page of its collection of data, along with other aspects of functionality. In a pair with my classmate Kumar, we were given 48 hours to create this, and were given a large selection of API’s to choose from.

![Home page](https://i.ibb.co/Fn7HyvW/Screenshot-2022-01-24-at-13-30-15.png)



The main learning point of this project was becoming comfortable with making separate API requests using axios, and being able to delve deep into the data and display and use the different values.

This was also the first project where I used React as a framework for creating the app, whilst also using Insomnia for testing API requests and observing the data.

## Brief

App must:
- Consume a public API
- Have multiple components
- Have a router
- Include wireframes
- Must be created within 48 hours

## Delegation of work

To split the work-load, Kumar and I decided on which aspects of the app we would work on. 

Isaac

- Index/show pages
- Wishlist functionality
- API requests
- Random card functionality 

Kumar

- Router functionality
- Navbar
- Home page
- Styling
- Error handling

## Technologies used

- React/JavaScript
- CSS
- Bulma
- Axios
- Insomnia
- Netlify (deployment)
- React-router-dom

## Getting started

- Press the 'code' button to fork and copy the code
- Use ‘yarn’ to install yarn and all packages
- ‘Yarn start’ to run the server
- In your browser, go to 'localhost:3000'

## Planning Process - Notes

The project was planned by creating a comprehensive list of all components that would have been created, allowing the project to form from the ground up in a coherent manner between myself and Kumar. 

![Planning notes](https://i.ibb.co/0qLnXd0/Screenshot-2022-01-24-at-13-33-26.png)

## Planning Process - Wireframes (created by Kumar)

![Wireframes](https://i.ibb.co/RSjbTzX/Screenshot-2022-01-24-at-13-38-32.png)
![Wireframes](https://i.ibb.co/SXtMhCm/Screenshot-2022-01-24-at-13-39-21.png)
![Wireframes](https://i.ibb.co/BzBh2pb/Screenshot-2022-01-24-at-13-40-01.png)


 










## Application

With the API database being so large, comprising of thousands of cards, we split the Index pages into 3 different types, meaning that each index page would have it’s own API request. 

```javascript

useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?type=spell%20card')
      setCards(data.data)
    }
    getData()

  }, [])

```










After looking through the API requests, we discovered each card had its own average pricing for multiple different market outlets. We decided to display this on the individual ‘card-show’ page and create an index for browsing cards to buy and/or sell.

![Cardshow](https://i.ibb.co/WG49HBV/Screenshot-2022-01-24-at-13-42-27.png)


The wishlist page was designed to include the total eBay price of all the cards added, to give the user a summary of their potential purchases.

![wishlist](https://i.ibb.co/C6MpLzK/Screenshot-2022-01-24-at-13-43-22.png)







## Featured sections of code

As we were creating an app purely in the front-end with a third-party API, I used the browser local storage to store the cards added to the wishlist by the user, adding the ID specifically. Through browsing the public API documentation, we saw the API requests had the ability to chain multiple ID’s in a single request, leading me to write a function that requests the data of all individual cards in the wishlist. 

The first function in the component loops through the items in local storage and joins each ID into a single string, separated by a comma as the API documentation describes. The second function calls an API request, with the ID parameter set to be the result of the first function, with a final function then adding up the total price to be displayed on the page.

```javascript
  const cardIds = []
  let joinCardIds = ''
  let totalPrice = 0

  const [cards, setCards] = useState([])
  const [total, setTotal] = useState()

  useEffect(() => {

    for (let i = 0; i < window.localStorage.length; i++) {
      const allCards = window.localStorage.getItem(`wishListCard${window.localStorage.length - (1 + i)}`)
      cardIds.push(allCards)
    }
    joinCardIds = cardIds.join(',')
  }, [])

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${joinCardIds}`)
      setCards(data.data)
    }
    getData()
  }, [joinCardIds])

  useEffect(() => {
    cards.map((card) => {
      for (let i = 0; i < (cards.length / cards.length); i++) {
        totalPrice += parseFloat(card.card_prices[0].ebay_price)
      }
      setTotal(totalPrice)
    })
  }, [cards])

```






## Known bugs

- On first click, the random button throws an error and doesn’t work, but then works on subsequent attempts.
- Removing items from the wishlist doesn’t work properly, but could have been refined with more time.

## Future features

- Adding functionality to the search bar.
- Refining the ‘remove from wishlist’ feature.
- Add mobile responsiveness.

## Challenges

A very short timeframe meant it was paramount to create a fundamentally working application and implement the major routing and features. This meant prevalent bugs, such as the random function not working on the first try, proved difficult to attempt to solve, and features such as the search bar were not added. 

## Key takeaways and wins

Gained a great understanding of:

- API requests
- Axios
- CSS framework styling (Bulma)

- Learned a lot from pair coding and its benefits. Two people looking at the same code allowed for a higher level of refinement and made bug-fixing and testing a lot more enjoyable with smaller errors being easier to identify. 
- Became much more comfortable with using Insomnia to test API requests and being able to delve into data to yield a more efficient writing of code. 


 

