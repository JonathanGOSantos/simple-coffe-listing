<script>
  import Card from './lib/components/Card.svelte';
  import { products, availableProducts } from './lib/scripts/products'

  let availableOnly = $state(false);
</script>

<main class="c-main">
  <img class="c-main__bg" src="/images/vector.svg" alt="">

  <header class="c-main__header">
    <h1 class="c-main__title">Our Collection</h1>

    <p class="c-main__description">
      Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.
    </p>
    <div class="c-filter">
      <label class={`c-filter__option ${availableOnly ? "" : "checked"}`}>
        <input type="radio" name="products_filter" value={false} bind:group={availableOnly}>
        All Products
      </label>
      <label class={`c-filter__option ${!availableOnly ? "" : "checked"}`}>
        <input type="radio" name="products_filter" value={true} bind:group={availableOnly}>
        Available Now
      </label>
    </div>
  </header>

  <section class="c-cards">
    {#if $products.length === 0}
      <p>No products available</p>
    {:else}
      {#if availableOnly}
        {#each $availableProducts as product}
          <Card {...product} />
        {/each}
      {:else}
        {#each $products as product}
          <Card {...product} />
        {/each}
      {/if}
    {/if}
  </section>
</main>

<style>

  .c-main {
    display: flex;
    flex-direction: column;
    align-items: center;

    position: relative;
    overflow: hidden;

    margin-block: 5rem;
    padding: 5rem 2.5rem;
    border-radius: 1rem;

    background-color: #1B1D1F;
  }

  .c-main__bg {
    position: absolute;
    top: 3rem;
    right: -4rem;
    z-index: 1;
  }

  .c-main__header {
    z-index: 2;
    max-width: 19.5rem;
    text-align: center;
  }

  .c-main__title {
    font-size: 2rem;
    color: #FEF7EE;
  }

  .c-main__description {
    margin: 1rem 0 1.5rem;

    font-size: 1rem;
    color: #6F757C;
  }

  .c-filter {
    display: flex;
    justify-content: center;
    gap: 1rem;
  
    margin-bottom: 2rem;
  }

  .c-filter__option {
    display: block;
    padding: .5rem .75rem;
    border-radius: .5rem;

    font-size: 1rem;
    color: #FEF7EE;

    transition: all .2s;
    
    input {
      display: none;
    }
  }

  .c-filter__option:hover {
    cursor: pointer;
  }

  .c-filter__option.checked {
    background-color: #6F757C;
  }

  .c-cards {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;

    p {
      color: #FEF7EE;
    }
  }

  @media screen and (width >= 1024px) {
    .c-main__bg {
      top: 3.5%;
      right: 12%;
    }
    
    .c-main__header {
      max-width: 30rem;
    }
    
    .c-cards {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (width >= 1280px) {
    .c-main__bg {
      top: 4.5%;
      right: 24.5%;
    }

    .c-cards {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>