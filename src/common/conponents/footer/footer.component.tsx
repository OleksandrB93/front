import { FooterLink } from "../fotter-link/footer-link.component";

export const Footer = () => {
  return (
    <div className="bg-gray-900 pt-12 px-12 pb-8">
      <div>
        <div className="mb-4">
          <span className="uppercase font-bold text-sm text-zinc-500">
            Контакти
          </span>
        </div>
        <div className="mb-8">
          <ul>
            <FooterLink href="tel:+380444564545">044-456-45-45</FooterLink>
            <FooterLink href="mailto:info@gmail.com">info@gmail.com</FooterLink>
          </ul>
        </div>
      </div>
      <hr className="relative left-[-3rem] w-[calc(100%_+_6rem)] border-zinc-500 mb-8" />
      <div>
        <span className="text-xl font-semibold text-white">🍕 PizzaStack</span>
      </div>
    </div>
  );
};
