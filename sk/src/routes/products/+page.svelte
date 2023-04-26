<script lang="ts">
  import { metadata } from "$lib/app/stores";
  $metadata.title = "Products";
</script>

{#each ["maesopa", "ocha", "central"] as shop }
  <div><a href="/products/{shop}"> {shop} </a></div>
{/each}
