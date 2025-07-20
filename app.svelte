<script>
  import { onMount } from "svelte";

  let sections;

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            entry.target.classList.remove("active");
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((section) => observer.observe(section));
  });
</script>

<style>
  body {
    margin: 0;
    font-family: sans-serif;
  }

  .step {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    transition: background 0.5s ease;
  }

  .step:nth-child(even) {
    background: #f6f6f6;
  }

  .step:nth-child(odd) {
    background: #d0d0d0;
  }

  .step.active {
    background: #a0d8ef !important;
  }
</style>

<div bind:this={sections} class="scrolly">
  <section class="step">Reproductive Care in the US</section>
  <section class="step">jk vj jfw</section>
  <section class="step">P3gfrgrgrgrg</section>
</div>
