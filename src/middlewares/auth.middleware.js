import { LocalStorage, Notify } from "quasar";
import { getProfile } from "src/services/auth.service";

export default async function auth({ to, from, next }) {
  const handleError = () => {
    Notify.create({
      message: "You are not logged in",
      color: "negative",
      position: "top",
      timeout: 3000,
      icon: "warning",
    });
    return next({ name: "login" });
  };

  if (!LocalStorage.has("auth_token")) {
    Notify.create({
      message: "You are not logged in",
      color: "negative",
      position: "top",
      timeout: 3000,
      icon: "warning",
    });
    LocalStorage.remove("auth_user");
    return next({ name: "login" });
  } else {
    await getProfile(LocalStorage.getItem("auth_token"))
      .then((response) => {
        if (response.status === 200) {
          LocalStorage.set("auth_user", response.data);
        } else {
          handleError();
        }
      })
      .catch(handleError);
  }

  return next();
}
