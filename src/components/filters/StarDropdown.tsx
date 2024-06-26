export default function StarDropdown(){
    const stars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const value = new URL(window.location.href).searchParams.get('stars')

    return (
        <div className="flex items-center gap-2">
            <select
                className="p-2 rounded text-gray-400 w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                defaultValue={ value || 'Calificación'}
                name="stars"
                id="stars"
            >
            <option key={1}>
                Calificación
            </option>
                {stars.map((star) => (
                    <option key={star} value={star}>
                        {star}
                    </option>
                ))}
            </select>
        </div>
    );
}