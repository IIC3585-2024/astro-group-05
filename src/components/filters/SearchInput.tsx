export default function SearchInput() {
    const value = new URL(window.location.href).searchParams.get('search')

    return (
        <div className="flex items-center gap-2">
            <input
                type="text"
                placeholder="Buscar serie..."
                className="p-2 rounded w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                defaultValue={ value || '' }
                name="search"
                id="search"
            />
        </div>
    );
}