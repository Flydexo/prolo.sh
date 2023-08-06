<script>
  import ProloLogo from "../../assets/images/logo.png";
  import Link from "../ui/Link.svelte";
</script>

<div class="w-screen h-full flex flex-col justify-center items-center gap-16">
  <img src={ProloLogo} width={250} height={250} alt="Prolo logo" />
  <div class="w-max flex flex-col items-center gap-4">
    <h1 class="font-bold text-2xl">PROLO.SH</h1>
    <p class="text-md">The crypto terminal for original prolos</p>
    <div class="flex flex-col w-full gap-2">
      <h2 class="text-lg underline font-semibold">Integrations</h2>
      <ul>
        <li>🦙 DefiLlama</li>
        <li>🦅 DexScreener</li>
        <li>⚡️ Snapshot</li>
        <li>🌿 Lens Protocol</li>
      </ul>
    </div>
    <p>type <span class="font-medium">:help</span> for help</p>
  </div>
</div>
