import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MenuList } from "./menu-list.components"; 

export default {
  title: "Menu/Menu List",
  component: MenuList,
} as ComponentMeta<typeof MenuList>;

const Template: ComponentStory<typeof MenuList> = (args: any) => (
  <MenuList {...args} />
);

export const View = Template.bind({});

View.args = {
    imagePath: "/assets/pizza/manhattan.jpeg",
  weight: 555,
  title: "Pizza Manhattan",
  ingredients:
    "(подвійна порція грибів), Гриби, Моцарела, Пепероні, Соус Альфредо",
  price: 215,
}