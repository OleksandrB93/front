import { Header } from "./common/conponents/header/Header.components";
import { MenuList } from "./module/menu/components/menu-list/menu-list.components";
import pizzaMenu from "@app/mocks/pizza.json";
import { Footer } from "./common/conponents/footer/footer.component";

export const App = () => {
  return (
    <div>
      <Header />
      <div className="mx-12 mb-24">
        <MenuList items={pizzaMenu} />
      </div>
      <Footer />
    </div>
  );
};
