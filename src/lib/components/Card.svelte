<script>
  let { name, image, price, rating, votes, popular, available } = $props();
</script>

<article class="c-card">
  <div class="c-card__hero">
    <img src={image} alt={name} class="c-card__thumb">
  
    {#if popular}
      <span class="c-card__popular">Popular</span>
    {/if}
  </div>

  <header class="c-card__header">

    <h2 class="c-card__name">{name}</h2>
    <p class="c-card__price">{price}</p>

  </header>
  <footer class="c-card__footer">
    <div class="c-card__numbers">

      <img class="c-card__star" src={rating ? "/images/Star_fill.svg" : "/images/Star.svg"} alt={rating ? "A filled star" : "A star"}>

      {#if rating}
        <p class="c-card__rating">{rating}</p>
      {/if}

      <p class="c-card__votes">
        {#if votes}
          ({votes} votes)
        {:else}
          No ratings
        {/if}
      </p>

    </div>

    {#if !available}
      <p class="c-card__sold">Sold out</p>
    {/if}

  </footer>
</article>

<style>
  /* Card styles */
  .c-card {
    width: 260px;
  }

  .c-card:hover {
    cursor: pointer;
  }

  /* Card hero styles */
  .c-card__hero {
    display: flex;
    position: relative;
  }

  .c-card__thumb {
    border-radius: .5rem;
  }

  .c-card__popular {
    position: absolute;
    top: .5rem;
    left: .5rem;

    background-color: #F6C768;
    padding: .25rem .75rem;
    border-radius: 1rem;
    
    font-size: 0.625rem;
    font-weight: 700;
    color: #111315;
  }

  /* Card header styles */
  .c-card__header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-block: .75rem;
  }

  .c-card__name {
    font-size: 0.875rem;
    color: #FEF7EE;
  }

  .c-card__price {
    font-size: 0.75rem;
    color: #111315;
    background-color: #BEE3CC;
    padding: .25rem .5rem;
    border-radius: .25rem;
  }

  /* Card footer styles */
  .c-card__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .c-card__numbers {
    display: flex;
    gap: .25rem;
    align-items: center;
  }

  .c-card__rating {
    font-size: 0.75rem;
    font-weight: 700;
    color: #FEF7EE;
  }
  
  .c-card__votes {
    font-size: 0.75rem;
    font-weight: 700;
    color: #6F757C;
  }
  
  .c-card__sold {
    font-size: 0.75rem;
    font-weight: 700;
    color: #ED735D;
  }
</style>