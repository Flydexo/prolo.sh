<script lang="ts">
  import Terminal from "./components/Terminal.svelte";
  import Home from "./components/scenes/Home.svelte";

  let isTerminalClosed = true;
  const pressedKeys = new Set<string>();
  let terminalContent = "";

  function executeCommand(command: string) {
    if (command === "help") {
      alert("You seriously asked for help? Definetely not an original prolo");
    }
  }

  window.onkeydown = (e: KeyboardEvent) => {
    // if (e.key === "Shift") pressedKeys.add(e.key);
    if (e.key === ":" && isTerminalClosed) {
      isTerminalClosed = false;
      return;
    }
    if (e.key === "Escape" && !isTerminalClosed) {
      isTerminalClosed = true;
      return;
    }
    if (e.key === "Enter" && !isTerminalClosed) {
      isTerminalClosed = true;
      executeCommand(terminalContent);
      terminalContent = "";
      return;
    }
    if (!isTerminalClosed) {
      if (e.key === "Backspace") {
        terminalContent = terminalContent.slice(0, terminalContent.length - 1);
        return;
      }
      if (e.key.length > 1) return;
      e.key.replace(" ", " "); // replace space with invisible character
      terminalContent += e.key;
    }
  };

  window.onkeyup = (e: KeyboardEvent) => {
    pressedKeys.delete(e.key);
  };
</script>

<div class="h-screen w-screen overflow-y-scrollable p-2 overflow-x-hidden">
  <Home />
  {#if !isTerminalClosed}
    <Terminal content={terminalContent} />
  {/if}
</div>
