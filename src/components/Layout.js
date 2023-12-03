import FootersPages from "./footer/Footers";
import Navbar from "./navbar/Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <FootersPages/>
    </>
  );
}
