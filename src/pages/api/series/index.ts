import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  const { data, error } = await supabase.from("series").insert([
    {
      title: formData.get("title"),
    //   streamingService: formData.get("streamingService"),
    //   seasons: Number(formData.get("seasons")),
    //   episodesPerSeason: Number(formData.get("episodesPerSeason")),
      description: formData.get("description"),
    //   category: formData.get("category"),
      imageUrl: formData.get("imageUrl"),
    },
  ]);
  console.log(data);
  console.log(error);
  return redirect("/series");
};