import { FooterComponent } from "./footer";
import { Header2 } from "./header2";
import { WhatsAppButton } from "./whatsapp-button";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header2 />
      <main>{children}</main>
      <FooterComponent /> 
      <WhatsAppButton />
    </>
  );
}
