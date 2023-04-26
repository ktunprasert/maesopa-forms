<script lang="ts">
  import type { PBListResponse } from "$responses";
  import type { Product } from "$t";
  import type { PageData } from "./$types";
  export let data: PageData & { json: PBListResponse<Product> };
</script>

<h1>Maesopa Products</h1>
<pre>{JSON.stringify(data, null, 2)}</pre>
