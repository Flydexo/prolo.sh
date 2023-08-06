<script>
  import User from "./User.svelte";
  import Cursor from "./ui/Cursor.svelte";

  export let content = "";
</script>

<div class="fixed bottom-0 w-screen h-max p-2 flex items-center">
  <User />
  {#if content.length > 0}
    <textarea
      class="w-max bg-transparent h-6 p-0 resize-none outline-none cursor-none caret-transparent"
      style={`width: ${content.length}ch`}
      cols={content.length}
      rows={1}
      value={content}
    />
  {/if}
  <Cursor />
</div>
