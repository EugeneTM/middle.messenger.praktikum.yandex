import { HomePage } from "#pages/Home";
import { LoginPage } from "#pages/Login";
import { ErrorPage } from "#pages/Error";
import { ForbiddenPage } from "#pages/Forbidden";
import { SigninPage } from "#pages/Signin";
import { SignupPage } from "#pages/Signup";

const ROUTES = {
  'home': HomePage,
  'login': LoginPage,
  'error': ErrorPage,
  'forbidden': ForbiddenPage,
  'signin': SigninPage,
  'signup': SignupPage,
}

export function render(name: keyof typeof ROUTES) {
  const root = document.querySelector('#app')!;

  root.innerHTML = '';
  
  const Page = ROUTES[name];

  const page = new Page();

  root.append(page.getContent()!);

  page.dispatchComponentDidMount();
}
