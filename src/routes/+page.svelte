<script lang="ts">
    import Header from './Header.svelte';

    let formState = $state({
        name: "",
        birthday: "",
        step: 0,
        error: '',
    });
</script>

{#snippet formStep({question, id, type}: {
    question: string;
    id: string;
    type: string;
})}
    <article>
        <div>
            <label for={id}>{question}</label>
            <input type={type} id={id} bind:value={formState[id]} />
        </div>
    </article>
{/snippet}

<Header name={formState.name} />

<main>
    <p>Step: {formState.step + 1}</p>

    {@render formStep({
        question: "whats your name",
        id: 'name',
        type: 'text'
    })}
</main>

<style>
    
</style>