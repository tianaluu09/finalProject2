<script>
  import { onMount } from 'svelte';

  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        entry.target.classList.toggle('active', entry.isIntersecting);
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('.step').forEach(el => observer.observe(el));
    console.log("Scroll observer active");
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
    justify-content: center;
    align-items: center;
    flex-direction: column;
    opacity: 0.4;
    transition: all 0.5s ease;
    padding: 2rem;
  }

  .step.active {
    background-color: #fef3c7;
    transform: scale(1.03);
    opacity: 1;
  }

  .graph-box {
    width: 80%;
    height: 300px;
    background: #dbeafe;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    font-weight: bold;
  }

  h1 {
    margin: 0;
  }

  p {
    text-align: center;
    max-width: 600px;
  }
</style>

<div class="step">
  <h1>Reproductive Care in the US</h1>
  <p>Scroll to see facts and figures about healthcare access.</p>
</div>

<div class="step">
  <h1>Mortality Rates</h1>
  <p>Maternal mortality remains high in the U.S. relative to peers.</p>
  <div class="graph-box">[Graph Here]</div>
</div>

<div class="step">
  <h1>Access Inequality</h1>
  <p>Rural and southern regions face severe gaps in care access.</p>
  <div class="graph-box">[Map Here]</div>
</div>

<div class="step">
  <h1>Policy Impact</h1>
  <p>Legislation continues to shape the healthcare landscape.</p>
  <div class="graph-box">[Timeline Here]</div>
</div>
