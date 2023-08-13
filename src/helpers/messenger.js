export default function messenger(context) {
    // language=hbs
    return `
        <div class="messenger">
            ${context.fn(this)}
        </div>
    `
}
