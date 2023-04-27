<script lang="ts">
  import { metadata } from "$lib/app/stores";
  export let data;
  $metadata.title = `Shops / ${data.thai}`;
</script>

<div><a href="/shop/{data.params.shop}/products">Products</a></div>
<div><a href="/shop/{data.params.shop}/forms">Forms</a></div>
<div><a href="/shop/{data.params.shop}/orders">Orders</a></div>

