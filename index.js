import fs from 'fs'

const albumName = process.argv[2]

const subFolders = ["raw", "jpg"]

if (!albumName) {
    console.error("Album name required")
    process.exit()
}

try {
    if (!fs.existsSync(albumName)) {
        const from = fs.mkdirSync(albumName, { recursive: true });
        subFolders.forEach(subFolder => fs.mkdirSync(`${albumName}/${subFolder}`))
        console.log(`Created ${albumName} from ${from}`)

    }
} catch (err) {
    console.error(err)
}
