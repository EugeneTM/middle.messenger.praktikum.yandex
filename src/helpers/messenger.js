export default function messenger(context) {
    // language=hbs
    return `
        <main class="messenger messenger__main">
            ${context.fn(this)}
        </main>
    `
} 
