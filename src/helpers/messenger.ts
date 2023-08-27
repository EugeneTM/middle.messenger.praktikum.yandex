import { HelperOptions } from 'handlebars';

export default function messenger(this: object, { fn }: HelperOptions): string {
    // language=hbs
    return `
        <main class="messenger messenger__main">
            ${fn(this)}
        </main>
    `
} 
