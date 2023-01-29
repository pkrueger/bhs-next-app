import Dog from "@/db/models/Dog";

export async function getAllDogs() {
  const allDogs = await Dog.find();
  return allDogs;
}

export async function createDog(body: { name: string }) {
  const dog = await Dog.create(body);
  return dog;
}
