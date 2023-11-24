import Link from "next/link";
import { Metadata } from "next";

export const metadata:Metadata = {
  title: 'Paws & Claws Adoption Emporium',
  description: 'An adoption page'
}


export default function Home() {
 
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-lg">Paws & Claws Adoption Emporium!</h1>
      <br />
      <Link href='/pets'>View animals up for adoption</Link>
    </div>
  );
}
