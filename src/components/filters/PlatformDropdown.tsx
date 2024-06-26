export default function PlatformDropdown({platforms}: {platforms: any[] | null}){
    const value = new URL(window.location.href).searchParams.get('platform')

    return (
        <div className="flex items-center gap-2">
            <select
                className="p-2 rounded w-full text-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                defaultValue={ value || 'Plataforma'}
                name="platform"
                id="platform"
            >
            <option key={1}>
                Plataforma
            </option>
                {platforms?.map((platform) => (
                    <option key={platform.platform} value={platform.platform}>
                        {platform.platform}
                    </option>
                ))}
            </select>
        </div>
    );
}