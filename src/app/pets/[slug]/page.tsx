import PetCard from "@/components/PetCard";
import { getPets, findPetBySlug } from "@/lib/petsLib";
import { notFound } from "next/navigation";

type paramsType = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  const pets = getPets()
  return pets.map((pet) => {
    return {slug: pet.slug}
  })}


export default function Page({ params }: paramsType) {
  const pet = findPetBySlug(params.slug);

  if (!pet) {
    notFound();
  }

  return <PetCard petProp={pet} />;
}

// let WeirdEsotericNextObject = {
//   params : {
//     slug: 'puff'
//   }
// }

// function CardPage({name}) {
//   return <h1>{name}</h1>
// }

// <CardPage name='Kara'/>
