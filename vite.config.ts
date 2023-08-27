import { defineConfig, Plugin } from 'vite';
import { resolve } from 'path';

import handlebars from 'vite-plugin-handlebars';
import checker from 'vite-plugin-checker';

import card from "./src/helpers/card";
import messenger from "./src/helpers/messenger";
import profile from "./src/helpers/profile";

import { isPasswordSame } from "./src/js/utils";

export default defineConfig({
    plugins: [
        handlebars({
            partialDirectory: resolve(__dirname, 'src/partials'),
            helpers: {
                card,
                messenger,

                profile,
                isPasswordSame,
            },
        }) as unknown as Plugin,
        checker({
            typescript: true,
        })
    ],

    build: {
        rollupOptions: {
            input: {
                index: resolve(__dirname, 'index.html'),
                
                // notLogged
                login: resolve(__dirname, 'src/pages/notLogged/signin.html'),
                signup: resolve(__dirname, 'src/pages/notLogged/signup.html'),

                // Profile
                'profile': resolve(__dirname, 'src/pages/profile/overview.html'),
                edit: resolve(__dirname, 'src/pages/profile/edit.html'),
                editPassword: resolve(__dirname, 'src/pages/profile/editPassword.html'),
                
                // Files
                uploadAvatar: resolve(__dirname, 'src/pages/files/uploadAvatar.html'),
                uploadAvatarError: resolve(__dirname, 'src/pages/files/uploadAvatarError.html'),
                uploadedAvatar: resolve(__dirname, 'src/pages/files/uploadedAvatar.html'),
                
                // Users
                addUser: resolve(__dirname, 'src/pages/users/addUser.html'),
                removeUser: resolve(__dirname, 'src/pages/users/removeUser.html'),
                
                // Errors
                error: resolve(__dirname, 'src/pages/errors/error.html'),
                forbidden: resolve(__dirname, 'src/pages/errors/forbidden.html'),
                
                // Pages
                chat: resolve(__dirname, 'src/pages/chat/messenger.html'),

            },
        }
    },
    server: {
        open: '/',
        host: '0.0.0.0'
    }
}); 
