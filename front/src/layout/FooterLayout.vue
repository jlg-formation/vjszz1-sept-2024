<template>
  <footer>
    <a href="#"> Mentions Légales </a>
  </footer>
</template>

<style scoped>
footer {
  background: var(--light-gray);
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: inherit;
    color: inherit;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
