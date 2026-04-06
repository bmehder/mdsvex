<script>
  import logo from '$lib/assets/logo.png'
</script>

<header>
  <div class="outer">
    <div class="inner flex flex-wrap space-between align-items-center gap-1">
      <div class="invert-1"><a href="/"><img src="{logo}" alt="logo"></a></div>
      <nav>
        <ul class="flex flex-wrap gap-1-5 padding-0 list-style-none">
          <li><a href="/">Home</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/portfolio">Portfolio</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  </div>
</header>

<style>
  .outer {
    background-color: dodgerblue;
    font-size: 1.2rem;
  }

  img {
    max-width: 12rem;
  }
  
  a {
    color: white;
  }
</style>