import GestoreUtenti from "@/components/GestoreUtenti";
import ContatoreProdotti from "../components/ContatoreProdotti";
import ListaSpesa from "../components/ListaSpesa ";

export default function Home() {
  return (
    <>
      <ContatoreProdotti />
      <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
        <span className="relative z-10 bg-background px-2 text-muted-foreground">
          Termine esercizio 1
        </span>
      </div>
      <ListaSpesa />
      <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
        <span className="relative z-10 bg-background px-2 text-muted-foreground">
          Termine esercizio 2
        </span>
      </div>
      <GestoreUtenti />
    </>
  );
}
