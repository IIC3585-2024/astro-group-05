import type { APIRoute } from "astro";
import { supabase } from "../../../../lib/supabase";

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  const { data, error } = await supabase.from("reviews").insert({
    serieId: formData.get("serieId"),
    title: formData.get("title"),
    content: formData.get("content"),
    stars: Number(formData.get("stars")),
  });
  console.log(data);
  console.log(error);
  return redirect(`/series/${formData.get("serieId")}`);
};
