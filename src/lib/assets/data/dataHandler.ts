export function getModpacks() {
    type Modpack = {
        name: string
        path: string
        data: any
        image: string
        banner: string
        group: string
        sortTime: number
        portfolio: string[]
    }

    type GroupedModpacks = Record<string, Modpack[]>

    const files = import.meta.glob("./**/*", { eager: true }) as Record<string, any>

    const grouped: GroupedModpacks = {}
    const byFolder: Record<string, Partial<Modpack> & { group: string }> = {}

    function parseTimeRange(time: { start?: string | null; end?: string | null } | null): number {
        if (!time) return 0
        if (time.end) {
            const [year, month] = time.end.split("-")
            return new Date(`${year}-${month}-01`).getTime()
        } else if (time.start) {
            return Date.now()
        } else {
            return 0
        }
    }

    for (const [path, mod] of Object.entries(files)) {
        const parts = path.split("/")
        const group = parts[1]
        const folder = parts.slice(0, 3).join("/")
        const filename = parts[parts.length - 1]

        if (!byFolder[folder]) {
            byFolder[folder] = { name: parts[2], path: folder, group, portfolio: [] }
        }

        if (filename === "data.json") {
            const data = (mod as any).default
            byFolder[folder].data = data
            byFolder[folder].sortTime = parseTimeRange(data.modpack?.time ?? null)
        } else if (filename.endsWith("_banner.png")) {
            byFolder[folder].banner = (mod as any).default
        } else if (filename.endsWith(".png") || filename.endsWith(".jpg") || filename.endsWith(".webp")) {
            if (parts.includes("Portfolio")) {
                byFolder[folder].portfolio!.push((mod as any).default)
            } else {
                byFolder[folder].image = (mod as any).default
            }
        }
    }

    for (const folder of Object.values(byFolder)) {
        if (folder.data && folder.image && folder.banner && folder.group) {
            if (!grouped[folder.group]) {
                grouped[folder.group] = []
            }
            grouped[folder.group].push(folder as Modpack)
        }
    }

    for (const group in grouped) {
        grouped[group].sort((a, b) => b.sortTime - a.sortTime)
    }

    return grouped
}

export function getModpack(id: string) {
    const modpacks = getModpacks()
    for (const group of Object.values(modpacks)) {
        for (const modpack of group) {
            if (modpack.data.modpack.id === id) {
                return modpack
            }
        }
    }
    return null
}
