"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { useState } from "react";

export default function ListaSpesa() {
  const [items, setItems] = useState<string[]>([]);
  const [newItem, setNewItem] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItem.trim()) return; //Impedisce l'inserimento di stringhe vuote
    if (items.includes(newItem)) return; //Impedisce i duplicati

    setItems([...items, newItem]); //Aggiorna lo state con un nuovo array che contiene sia i vecchi elementi che il nuovo elemento
    setNewItem(""); //Svuota il campo dopo l'inserimento
  };

  return (
    <div className="m-12">
      <h1 className="text-2xl font-medium mb-8">Gestione di Liste e Rendering Condizionale</h1>
      <p>Sviluppa un componente ListaSpesa che:</p>
      <ol className="list-decimal list-inside">
        <li className="ml-4">Permetta di aggiungere nuovi elementi tramite input</li>
        <li className="ml-4">Visualizzi la lista degli acquisti</li>
        <li className="ml-4">Consenta l'eliminazione di singoli elementi</li>
        <li className="ml-4">Mostri un messaggio "Lista vuota" se non ci sono elementi</li>
        <li className="ml-4">Impedisca l'inserimento di elementi duplicati</li>
        <li className="ml-4">Aggiunga un contatore degli elementi nella lista</li>
      </ol>

      {/* FORM PER INSERIRE ELEMENTO */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 mt-4">
        <Label htmlFor="element">Elemento da acquistare</Label>
        <Input
          id="element"
          className="max-w-md"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          required
        />
        <Button type="submit" variant="outline" className="max-w-32">
          Aggiungi
        </Button>
      </form>

      {/* LISTA DELLA SPESA */}
      {items.length === 0 ? (
        <p className="mt-4 text-gray-500">Lista vuota</p>
      ) : (
        <Table className="mt-4">
          <TableCaption>Elementi nella lista ({items.length})</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Elemento</TableHead>
              <TableHead>Azioni</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item}</TableCell>
                <TableCell>
                  <Button
                    variant="destructive"
                    onClick={() => setItems(items.filter((_, i) => i !== index))}
                  >
                    Elimina
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}
