<script lang="ts">
    let { 
        name,
        fakeName = null,
     }: {
        name: string,
        fakeName?: string | null,
    } = $props();
</script>


<h1>Hello {name}</h1>
<h2>{name.replaceAll("c", "x")}</h2>
<h3>{fakeName}</h3>


<style>
    h1 {
        color: blue;
        font-size: 2em;
        text-align: center;
        margin-top: 20px;
    }
</style>