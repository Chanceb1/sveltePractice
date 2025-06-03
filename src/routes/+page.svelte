<script lang="ts">
    import Header from './Header.svelte';

    let formState = $state({
        name: "",
        birthday: "",
        step: 0,
        error: '',
    });

    const QUESTIONS = [
        {
            question: 'whats your name?',
            id: 'name',
            type: 'text'
        },
        {
            question: "whats your birthday",
            id: 'birthday',
            type: 'date'
        }
    ];
</script>

<Header name={formState.name} />


<main>
    <p>Step: {formState.step + 1}</p>

    {#each QUESTIONS as question, (question.id)}
        {@render formStep({question: question.question, id: question.id, type: question.type})}
    {/each}

    {@render formStep({
        question: "whats your name",
        id: 'name',
        type: 'text'
    })}
</main>

<style>
    
</style>