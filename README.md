# Учебный проект мессенджера для Яндекс.Практикума.

Данный проект является учебным для 1 спринта курса и на настоящий момент не готов к использованию. В настоящее время готов скелет вёрстки без главной страницы со списком чатов, вместо которой используется заглушка.

В качестве макета использовался [предложенный курсом макет](https://www.figma.com/file/jF5fFFzgGOxQeB4CmKWTiE/Chat_external_link?type=design&node-id=20-236&mode=design&t=EA1tCTNwMyv6lzrj-0).
### Запуск проекта

* `npm install`: установка зависимостей;
* `npm run dev`: запуск в режиме разработки (при необходимости);
* `npm run build`: сборка проекта в директорию `dist`;

Для быстрого запуска проекта на порту 3000 используйте команду `npm run start`. После этого откройте проект по ссылке [http://localhost:3000/](http://localhost:3000/).

Развёрнутое приложение доступно на Netlify: [https://deploy--fancy-meringue-900cb3.netlify.app/](https://deploy--fancy-meringue-900cb3.netlify.app/).

### Список страниц проекта

[Страница-оглавление](http://localhost:3000/index.html)

[Войти](http://localhost:3000/src/pages/notLogged/signin.html)
[Зарегистрироваться](http://localhost:3000/src/pages/notLogged/signup.html)

[Просмотр профиля](http://localhost:3000/src/pages/profile/overview.html)
[Редактировать профиль](http://localhost:3000/src/pages/profile/edit.html)
[Редактировать пароль](http://localhost:3000/src/pages/profile/editPassword.html)

[Загрузить аватар](http://localhost:3000/src/pages/files/uploadAvatar.html)
[Ошибка загрузки аватара](http://localhost:3000/src/pages/files/uploadAvatarError.html)
[Аватар загружен](http://localhost:3000/src/pages/files/uploadedAvatar.html)

[Добавить пользователя](http://localhost:3000/src/pages/users/addUser.html)
[Удалить пользователя](http://localhost:3000/src/pages/users/removeUser.html)

[404](http://localhost:3000/src/pages/errors/forbidden.html)
[500](http://localhost:3000/src/pages/errors/error.html)

[Страница чатов (заглушка)](http://localhost:3000/src/pages/chat/messenger.html)

### TODO

* Сделать CSS более модульным;
* Placeholder при фокусе перемещать поверх поля ввода;
* Отдельная структура директорий для компонентов чата;
* Адаптивный flexbox. 
