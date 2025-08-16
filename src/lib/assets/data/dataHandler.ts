type Modpack = {
    modpackType: string
    json: string
}

export function wut() {
    type Modpack = {
        name: string
        path: string
        data: any
        image: string
        banner: string
    }

    const files = import.meta.glob("./**/*", { eager: true }) as Record<string, any>

    const modpacks: Modpack[] = []

    const byFolder: Record<string, Partial<Modpack>> = {}

    for (const [path, mod] of Object.entries(files)) {
        const parts = path.split("/")
        const folder = parts.slice(0, 3).join("/")
        const filename = parts[parts.length - 1]

        if (!byFolder[folder]) {
            byFolder[folder] = { name: parts[2], path: folder }
        }

        if (filename === "data.json") {
            byFolder[folder].data = (mod as any).default
        } else if (filename.endsWith("_banner.png")) {
            byFolder[folder].banner = (mod as any).default
        } else if (filename.endsWith(".png")) {
            byFolder[folder].image = (mod as any).default
        }
    }

    for (const folder of Object.values(byFolder)) {
        if (folder.data && folder.image && folder.banner) {
            modpacks.push(folder as Modpack)
        }
    }

    return modpacks
}