<template>
  <footer>
    <RouterLink to="/legal"> Mentions Légales </RouterLink>
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
