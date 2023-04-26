<script lang="ts">
  import { metadata } from "$lib/app/stores";
  $metadata.title = "Shops";
</script>

{#each ["maesopa", "ocha", "central"] as shop }
  <div><a href="/shop/{shop}"> {shop} </a></div>
{/each}
