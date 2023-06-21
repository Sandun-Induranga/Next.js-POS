import PurchaseOrderContainer from "@/components/PurchaseOrderContainer";
import SlideBar from "@/components/SlideBar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <SlideBar />
      <section className="pl-20 w-full">
        <PurchaseOrderContainer />
      </section>
    </main>
  );
}
