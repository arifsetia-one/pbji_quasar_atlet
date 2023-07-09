import { LocalStorage, Notify } from "quasar";
import { getProfile } from "src/services/auth.service";

export default async function guest({ to, from, next }) {
  if (LocalStorage.has("auth_token")) {
    await getProfile(LocalStorage.getItem("auth_token")).then((response) => {
      if (response.status === 200) {
        LocalStorage.set("auth_user", response.data);
        Notify.create({
          message: "You are already logged in",
          color: "negative",
          position: "top",
          timeout: 3000,
          icon: "warning",
        });
        return next({ name: "login" });
      }
    });
  }
  return next();
}
