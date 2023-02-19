import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FooterLink } from "./footer-link.component";

export default {
  title: "Common/Footer link",
  component: FooterLink,
} as ComponentMeta<typeof FooterLink>;

const Template: ComponentStory<typeof FooterLink> = (args) => (
  <ul>
    <FooterLink {...args} />
  </ul>
);

export const View = Template.bind({});

View.args = {
  href: "tel:+380444564545",
  children: '044-456-45-45',
};
