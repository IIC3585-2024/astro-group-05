import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request, redirect }) => {
    const formData = await request.formData();
    let url = "/series?"
    if (formData.get("search") != "") {
        url += `search=${formData.get("search")}&`
    }
    if (formData.get("platform") != "Plataforma") {
        url += `platform=${formData.get("platform")}&`
    }
    if (formData.get("category") != "Categoría") {
        url += `category=${formData.get("category")}&`
    }
    if (formData.get("stars") != "Calificación") {
        url += `stars=${formData.get("stars")}&`
    }
    return redirect(url);
};
