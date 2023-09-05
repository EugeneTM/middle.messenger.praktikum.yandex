import { HomePage } from "#pages/Home";
import { ErrorPage } from "#pages/Error";
import { ForbiddenPage } from "#pages/Forbidden";
import { SigninPage } from "#pages/Signin";
import { SignupPage } from "#pages/Signup";
import { ProfileOverviewPage } from "#pages/ProfileOverview";
import { ProfileEditPage } from "#pages/ProfileEdit";
import { ProfileEditPasswordPage } from "#pages/ProfileEditPassword";

const ROUTES = {
  'home': HomePage,
  'error': ErrorPage,
  'forbidden': ForbiddenPage,
  'signin': SigninPage,
  'signup': SignupPage,
  'profile-overview': ProfileOverviewPage,
  'profile-edit': ProfileEditPage,
  'profile-edit-password': ProfileEditPasswordPage,
}

export function render(name: keyof typeof ROUTES) {
  const root = document.querySelector('#app')!;

  root.innerHTML = '';
  
  const Page = ROUTES[name];

  const page = new Page();

  root.append(page.getContent()!);

  page.dispatchComponentDidMount();
}
