export default function profile(context) {
    // language=hbs
    return `
        <div class="profile">
            ${context.fn(this)}
        </div>
    `
} 
