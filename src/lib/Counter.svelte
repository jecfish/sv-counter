<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  let count: number = 0
  const increment = () => {
    count += 1;
    dispatch('update');
    console.trace();
  }
</script>

<button on:click={increment}>
  count is {count}
</button>
