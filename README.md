I bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

To run the app simply run `npm start` from the collection-o-dogs directory.

## Thought process

There is still a lot that needs to be done to this app, but hopefully this gives you an idea of my thought process about how to handle something like this. I tried to seperate state managment as much as I could from individual components, through use of custom hooks.

## Where I would go from here.

I spent about 3-4 hour on this app, it isn't 100% complete, but I feel I have gotten it to a good point in that amount of time. If I was going to spend more time on this app there are a few thigns I would tackle.

First I would obviously set up the breeds to actually have the fuctionality to be added to the collection.

I would also creat a delete button on breeds that have been added to the collection.

Some of the custom hooks and state management got a little hairy during this initial process (there was more state that needed handling that I thought there would be), I would definitely go in and clean those things up and try to make it a little more organized. Add in a store to hold all of state, that can be accessed easily throughout the app.

I also would love to add in some unit tests, to make sure that when the add to collection button is pressed it actually adds an element to the collection and maybe test to make sure that it can't add duplicates.

Lastly I would clean up some of the UI elements and make them more visually appealing.
