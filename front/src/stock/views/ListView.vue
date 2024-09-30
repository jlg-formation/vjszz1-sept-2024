<script setup lang="ts"></script>

<template>
  <main>
    <h1>Liste des articles</h1>
    <div class="content">
      <nav>
        <button>Rafraîchir</button>
        <RouterLink to="/stock/add" class="button">Ajouter</RouterLink>
        <button>Supprimer</button>
      </nav>
      <table>
        <thead>
          <tr>
            <th class="name">Nom</th>
            <th class="price">Prix</th>
            <th class="qty">Quantité</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="name">Tournevis</td>
            <td class="price text-right">3.45 €</td>
            <td class="qty text-right">123</td>
          </tr>
          <tr>
            <td class="name">Pelle</td>
            <td class="price text-right">13.45 €</td>
            <td class="qty text-right">6</td>
          </tr>
          <tr class="selected">
            <td class="name">Arrosoir</td>
            <td class="price text-right">5.00 €</td>
            <td class="qty text-right">12</td>
          </tr>
          <tr>
            <td class="name">Marteau</td>
            <td class="price text-right">34.00 €</td>
            <td class="qty text-right">8</td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<style scoped>
div.content {
  display: flex;
  flex-flow: column;
  gap: 3em;

  nav {
    display: flex;
    gap: 0.25rem;
  }
}
</style>
