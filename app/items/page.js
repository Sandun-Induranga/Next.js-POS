import ItemsContainer from "@/components/ItemsContainer";
import SlideBar from "@/components/SlideBar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <SlideBar />
      <section className="pl-20 w-full">
        <ItemsContainer />
      </section>
    </main>
  );
}
