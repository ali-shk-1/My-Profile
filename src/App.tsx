import { Toaster } from "sonner";
import { AuroraBackground } from "./components/AuroraBackground";
import { LinkHub } from "./components/LinkHub";

export default function App() {
  return (
    <>
      <AuroraBackground />
      <LinkHub />
      <Toaster theme="dark" position="bottom-center" />
    </>
  );
}
