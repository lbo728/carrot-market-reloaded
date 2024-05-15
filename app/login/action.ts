"use server";

export async function handleForm(prevState: any, formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log(prevState);
  return {
    errors: ["wrong password", "password too short"],
  };
}
