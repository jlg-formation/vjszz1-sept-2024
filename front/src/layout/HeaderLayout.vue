<template>
  <header>
    <RouterLink to="/">
      <img src="/logo.svg" alt="Logo" />
      <span>Gestion Stock</span>
    </RouterLink>
  </header>
</template>

<style scoped>
img {
  height: 2.5rem;
}

header {
  background: var(--light-gray);
  height: 3rem;
  display: flex;
  align-items: center;
  padding: 0 0.5rem;

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    color: inherit;
    text-decoration: inherit;

    &:hover {
      text-decoration: underline;
    }

    span {
      font-size: 1.3rem;
      font-weight: bold;
    }
  }
}
</style>
