import { writable } from 'svelte/store';

export const products = writable([]);
export const availableProducts = writable([]);

fetch(
  'https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json'
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    products.set(data);
    availableProducts.set(data.filter((product) => product.available));
  })
  .catch((error) => {
    console.log(error);
  });
