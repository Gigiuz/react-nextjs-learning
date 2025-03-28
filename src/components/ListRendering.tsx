import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function ListRendering() {
  // Define an array of people objects
  const people = [
    { id: 1, name: "Alice", age: 25, workout: "Cardio" },
    { id: 2, name: "Bob", age: 30, workout: "Strength Training" },
    { id: 3, name: "Charlie", age: 22, workout: "Yoga" },
    { id: 4, name: "Dana", age: 28, workout: "HIIT" },
  ];

  // Function to capitalize the first letter of a string
  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  return (
    <>
      <div className="m-12">
        <h1 className="text-2xl font-medium my-4">
          Rendering di Liste e Chiavi
        </h1>

        <Table>
          <TableCaption>Lista di prova come esercizio</TableCaption>
          <TableHeader>
            <TableRow>
              {Object.keys(people[0]).map((key) => (
                <TableHead key={key} className="w-[100px] text-center">
                  {capitalizeFirstLetter(key)}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {people.map((person) => (
              <TableRow key={person.id}>
                <TableCell>{person.id}</TableCell>
                <TableCell>{person.name}</TableCell>
                <TableCell>{person.age}</TableCell>
                <TableCell>{person.workout}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
