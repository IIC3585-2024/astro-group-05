import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();

  const imgFile = formData.get("imageUrl");
  const title = formData.get("title");
  const description = formData.get("description");

  const baseUrl = import.meta.env.SUPABASE_URL;
  const storageUrl = baseUrl + import.meta.env.SUPABASE_STORAGE;
  
  let imgUrl = null;

  if (imgFile instanceof File && imgFile.size > 0) {
    const file = imgFile as File;
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    
    imgUrl = title + Date.now().toString() + ".png";

    const { data, error } = await supabase.storage
      .from("images")
      .upload(imgUrl, buffer, {
        contentType: "image/png",
      });

      imgUrl = storageUrl + imgUrl;

      if (error) {
        imgUrl = null;
      }
    }


  const { data, error } = await supabase.from("series").insert([
    {
      title: title,
    //   streamingService: formData.get("streamingService"),
    //   seasons: Number(formData.get("seasons")),
    //   episodesPerSeason: Number(formData.get("episodesPerSeason")),
      description: description,
    //   category: formData.get("category"),
      imageUrl: imgUrl,
    },
  ]);
  console.log(data);
  console.log(error);
  return redirect("/series");
};