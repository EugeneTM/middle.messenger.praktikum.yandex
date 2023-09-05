import { PluginOption, TransformResult } from 'vite';
import Handlebars from 'handlebars';

export default function vitePluginHandlebarsPrecompile(): PluginOption {
  return {
    name: 'vite-plugin-handlebars-precompile',
    transform(code: string, id: string): TransformResult | null {
      if (id.endsWith('.hbs') || id.endsWith('.handlebars')) {
        return {
          code: `
            import Handlebars from 'handlebars';
            export default Handlebars.template(${Handlebars.precompile(code)});    
            `,
          map: null,
        }
      } else {
        return null;
      }
    }
  }
}
