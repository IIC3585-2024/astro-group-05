export default function CategoryDropdown({genres}: {genres: any[] | null}){
    const value = new URL(window.location.href).searchParams.get('category')

    return (
        <div className="flex items-center gap-2">
            <select
                className="p-2 rounded w-full text-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                defaultValue={ value || 'Categoría'}
                name="category"
                id="category"
            >
            <option key={1}>
                Categoría
            </option>
                {genres?.map((category) => (
                    <option key={category.genre} value={category.genre}>
                        {category.genre}
                    </option>
                ))}
            </select>
        </div>
    )
}