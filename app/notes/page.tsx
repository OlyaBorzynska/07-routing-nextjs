// import {
//   QueryClient,
//   HydrationBoundary,
//   dehydrate,
// } from "@tanstack/react-query";
// import NotesClient from "./Notes.client";
// import { fetchNotes } from "@/lib/api";

import { redirect } from "next/navigation";

export default async function Notes() {
  // const queryClient = new QueryClient();

  // await queryClient.prefetchQuery({
  //   queryKey: ["notes", "", 1],
  //   queryFn: () => fetchNotes("", 1),
  // });

  redirect("/notes/filter/all");

  return (
    // <HydrationBoundary state={dehydrate(queryClient)}>
    //   <NotesClient />
    // </HydrationBoundary>

    <></>
  );
}
