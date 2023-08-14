export default function profile(context) {
    // language=hbs
    return `
        <main class="profile profile__main">
            ${context.fn(this)}
        </main>
    `
} 
