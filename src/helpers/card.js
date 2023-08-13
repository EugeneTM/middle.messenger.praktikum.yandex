export default function card(context) {
    // language=hbs
    return `
        <div class="card">
            ${context.fn(this)}
        </div>
    `
}
