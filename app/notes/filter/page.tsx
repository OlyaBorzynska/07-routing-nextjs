import { redirect } from "next/navigation";

export default async function Filter() {
  redirect("/notes/filter/all");

  return <></>;
}
