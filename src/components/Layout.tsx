import { ReactNode } from "react";
import Sidebar from "../components/Sidebar";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <Sidebar>
      <main>{children}</main>
    </Sidebar>
  );
}
