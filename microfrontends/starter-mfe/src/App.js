import { useContext } from "react";
import KeycloakContext from "./auth/KeycloakContext";
import { Button } from "@carbon/react";
import { useTranslation } from "react-i18next";

function App() {
  const keycloak = useContext(KeycloakContext);
  const { t } = useTranslation();
  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <h1> {t("hello")}</h1>
        <Button>Button</Button>
      </main>
    </div>
  );
}

export default App;
