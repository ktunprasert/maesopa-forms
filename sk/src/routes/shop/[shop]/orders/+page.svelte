<script lang="ts">
  import { metadata } from "$lib/app/stores";
  export let data;
  $metadata.title = `Shops / ${data.thai} / Orders`;
</script>

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Unit</th>
      <th>Source</th>
      <th>Category</th>
      <th>Templates</th>
    </tr>
  </thead>
  <tbody>
    {#each data.json as product}
      <tr>
        <td>{product.name}</td>
        <td>{product.unit}</td>
        <td>{product.source}</td>
        <td>{product.expand.category.name}</td>
        <td>{product.expand.templates.map(x => x.name).join(",")}</td>
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
