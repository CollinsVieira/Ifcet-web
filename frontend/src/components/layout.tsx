import { FooterComponent } from "./footer";
import { Header } from "./header";
import { WhatsAppButton } from "./whatsapp-button";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <FooterComponent /> 
      <WhatsAppButton />
    </>
  );
}
