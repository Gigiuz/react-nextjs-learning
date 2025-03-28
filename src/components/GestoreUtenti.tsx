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
import FormRegistrazione from "./FormRegistrazione";

export default function GestoreUtenti() {

  return (
    <div className="m-12">
      <h1 className="text-2xl font-medium mb-8">Comunicazione tra Componenti e Prop Drilling</h1>
      <p>Crea una mini-applicazione di gestione utenti con:</p>
      <ol className="list-decimal list-inside">
        <li className="ml-4">Un componente padre GestoreUtenti</li>
        <li className="ml-4">Un componente FormRegistrazione per inserire nuovi utenti</li>
        <li className="ml-4">Un componente ListaUtenti che mostri gli utenti registrati</li>
        <li className="ml-4">Implementa la logica di aggiunta e rimozione utenti</li>
        <li className="ml-4">Gestisci lo stato degli utenti nel componente padre</li>
        <li className="ml-4">Aggiungi validazione di base per nome e email</li>
      </ol>

<FormRegistrazione />

    </div>
  );
}
