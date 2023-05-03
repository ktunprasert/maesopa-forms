<script lang="ts">
  import { metadata } from "$lib/app/stores";
  $metadata.title = "Forms";
</script>

{#each ["maesopa", "ocha", "central"] as shop }
  <div><a href="/forms/{shop}"> {shop} </a></div>
{/each}
