<script lang="ts">
  import { metadata } from "$lib/app/stores";
  export let data;
  $metadata.title = `Forms / ${data.thai}`;
</script>

{#each data.json as template}
  <div><a href="/forms/{data.shop}/{template.id}"> {template.name} </a></div>
{/each}

<pre><code>{JSON.stringify(data, null, 2)}</code></pre>
