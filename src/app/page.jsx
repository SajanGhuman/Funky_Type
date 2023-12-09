import Text from "./text/page";
import TextDisplay from "./textDisplay/page";

export default function Home() {
  return (
    <main className="bg-monkey-gray scroll-smooth">
      <div className="flex justify-center items-center h-screen">
        <Text />
        {/* <TextDisplay /> */}
      </div>
    </main>
  );
}
