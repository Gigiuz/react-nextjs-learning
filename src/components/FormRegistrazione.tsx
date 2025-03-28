import { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function FormRegistrazione({
}) {
    return (

        <form className="flex flex-col gap-2 mt-4">
            <Label htmlFor="name">Nome</Label>
            <Input id="name" className="max-w-md" required />
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" className="max-w-md" required />
            <Button type="submit" variant="outline" className="max-w-32">
                Registrati
            </Button>
        </form>)
}