<script lang="ts">
  import { metadata } from "$lib/app/stores";
  export let data;
  $metadata.title = `Products / ${data.thai}`;
</script>

<table>
  <thead>
    <tr>
      <th>Name</th>
    </tr>
  </thead>
  <tbody>
    {#each data.json as product}
      <tr>
        <td>{product.name}</td>
      </tr>
    {/each}
  </tbody>
</table>
<pre><code>{JSON.stringify(data, null, 2)}</code></pre>

<style>
  pre {
    max-height: 300px;
    overflow: auto;
  }
</style>
