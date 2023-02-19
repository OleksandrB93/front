import { FC } from "react";
import { MenuItem } from "@app/module/menu/components/menu-item/menu-item.component";
import { Pizza } from "@app/module/menu/components/types/pizza";
interface MenuListProps {
  items: Pizza[];
}

export const MenuList: FC<MenuListProps> = ({ items }) => {
  return (
    <div className="flex justify-center flex-wrap gap-10">
      {items.map(({ image, ...pizza }) => (
        <MenuItem
          {...pizza}
          imagePath={"/assets/pizza/" + image}
          key={`pizza-${pizza.id}`}
        />
      ))}
    </div>
  );
};
