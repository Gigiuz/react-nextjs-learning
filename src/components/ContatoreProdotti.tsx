"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";

export default function ContatoreProdotti() {
  //Ripristina il valore salvato nel localStorage all'avvio
  const [count, setCount] = useState<number>(0);
  const [isMounted, setIsMounted] = useState(false);

  // ✅ Legge il valore dal localStorage dopo il montaggio
  useEffect(() => {
    setIsMounted(true); // Indica che il componente è montato
    const savedCount = Number(localStorage.getItem("count")) || 0;
    setCount(savedCount);
  }, []);

  // ✅ Salva il valore nel localStorage ogni volta che cambia `count`
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("count", count.toString());
    }
  }, [count, isMounted]);
    
  const handleClick = (increment: boolean) => {
    if (count == 0 && increment == false) return;
    increment == true ? setCount(count + 1) : setCount(count - 1);
    localStorage.setItem("count", count.toString());
  };

  return (
    <>
      <div className="m-12">
        <h1 className="text-2xl font-medium mb-8">
          Gestione dello State con useState
        </h1>
        <p>Crea un componente ContatoreProdotti che:</p>
        <ol className="list-decimal list-inside"> 
          <li className="ml-4">Mostri un conteggio iniziale di prodotti (0)</li>
          <li className="ml-4">Implementi due bottoni: "+1" e "-1"</li>
          <li className="ml-4">Impedisca di scendere sotto zero</li>
          <li className="ml-4">Cambi il colore del testo in rosso quando i prodotti sono 0</li>
          <li className="ml-4">Salvi il conteggio nel localStorage</li>
          <li className="ml-4">Ripristini il valore dal localStorage all'avvio</li>
        </ol>
        <Label className={`my-4 ${count == 0 ? "text-red-500" : ""}`}>
          Hai cliccato il bottone {count} volte!
        </Label>
        <div className="flex gap-4 mt-4">
          <Button
            className="bg-green-700 hover:bg-green-600 hover:cursor-pointer"
            onClick={() => handleClick(true)}
          >
            +1
          </Button>
          <Button
            className="hover:cursor-pointer"
            variant="destructive"
            onClick={() => handleClick(false)}
          >
            -1
          </Button>
        </div>
      </div>
    </>
  );
}
