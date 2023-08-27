import { HelperOptions } from 'handlebars';

export default function profile(this: object, { fn }: HelperOptions): string {
  // language=hbs
  return `
        <main class="profile profile__main">
            ${fn(this)}
        </main>
    `;
}
