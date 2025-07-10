const datapackOrder= [
    "Rain Temple",
    "Dynamic Light Sources",
    "Guinea Pigs",
    "Decorations+",
    "Upgrade Enchantments",
    "Watering Can",
    "Simple Baking",
    "Holiday Spirit: Christmas",
    "Holiday Spirit: Halloween",
    "Beer Brewing"
]

const modOrder = [
    "Quality of Life",
    "Example Mod"
]

const datapacks = 
[
    {
        name: "Guinea Pigs",
        image: "pig_spawn_egg.png",
        background_image: "guinea_pigs.webp",
        version: "1.21.7",
        downloads: "30",
        description: "Allows the player to turn a pig into a Guinea Pig",
        urls: [
            "https://www.planetminecraft.com/data-pack/guinea-pigs-1-21-5/",
        ]
    },
    {
        name: "Decorations+",
        image: "Armor_Stand.png",
        background_image: "decorations_plus.png",
        version: "1.21.7",
        downloads: "500",
        description: "Adds 25 placeable decorations to the game",
        urls: [
            "https://www.planetminecraft.com/data-pack/decorations-plus-6298249/",
            "https://modrinth.com/datapack/decorations-plus",
            "https://www.youtube.com/watch?v=dVdzepZIkdA",
            "https://github.com/YoavTC/deco-plus"
        ]
    },
    {
        name: "Upgrade Enchantments",
        image: "Enchanted_Book.png",
        background_image: "upgrade_enchantments.png",
        version: "1.20",
        downloads: "270",
        description: "Increase the level of an enchantment using the new Upgrade Rune",
        urls: [
            "https://www.planetminecraft.com/data-pack/upgrade-enchantments/",
            "https://www.youtube.com/watch?v=1dbRjyJPEUU"
        ]
    },
    {
        name: "Watering Can",
        image: "Water_Bucket.png",
        background_image: "watering_can.png",
        version: "1.20",
        downloads: "35",
        description: "Adds a craftable watering can that can keep soil moist",
        urls: [
            "https://www.planetminecraft.com/data-pack/watering-can-datapack/",
            "https://www.youtube.com/watch?v=KNAum1E4bYk"
        ]
    },
    {
        name: "Simple Baking",
        image: "Bread.png",
        background_image: "simple_baking.png",
        version: "1.20",
        downloads: "230",
        description: "Changes the way we bake bread in Minecraft.",
        urls: [
            "https://www.planetminecraft.com/data-pack/simple-baking-6119369/",
        ]
    },
    {
        name: "Holiday Spirit: Christmas",
        image: "snow_golem_spawn_egg.png",
        background_image: "christmas.png",
        version: "1.20",
        downloads: "160",
        description: "Adds Christmas holiday themed decorations",
        urls: [
            "https://www.planetminecraft.com/data-pack/holiday-spirit-christmas-edition/",
            "https://www.youtube.com/watch?v=4gg0Hi7kNdA"
        ]
    },
    {
        name: "Holiday Spirit: Halloween",
        image: "bat_spawn_egg.png",
        background_image: "halloween.png",
        version: "1.19",
        downloads: "100",
        description: "Adds Halloween holiday themed decorations as well as some candy",
        urls: [
            "https://www.planetminecraft.com/data-pack/holiday-spirit-halloween-edition/",
            "https://www.youtube.com/watch?v=8v1ppFlAGRk"
        ]
    },
    {
        name: "Rain Temple",
        image: "Lightning_Rod.png",
        background_image: "rain_temple.png",
        version: "1.21.7",
        downloads: "1.6k",
        description: "Control the weather!",
        urls: [
            "https://www.planetminecraft.com/data-pack/rain-temple/",
            "https://youtu.be/mYKDmj-XFrc?t=359",
            "https://www.planetminecraft.com/data-pack/rain-temple-6670034/",
            "https://www.youtube.com/watch?v=4vv7DCMIHPw"
        ]
    },
    {
        name: "Beer Brewing",
        image: "Potion_Long_Strength.png",
        background_image: "beer_brewing.webp",
        version: "1.20",
        downloads: "400",
        description: "Adds beer, and beer brewing to the game",
        urls: [
            "https://www.planetminecraft.com/data-pack/beer-brewing/",
            "https://www.youtube.com/watch?v=kyxF5bxvpOQ"
        ]
    },
    {
        name: "Dynamic Light Sources",
        image: "Light_15.png",
        background_image: "dynamic_light_sources.png",
        version: "1.21.7",
        downloads: "85",
        description: "Make campfires, candles and torchflowers react to the time of day",
        urls: [
            "https://www.planetminecraft.com/data-pack/dynamic-light-sources-1-21-7/",
            "https://modrinth.com/datapack/dynamic-light-sources",
            "https://www.youtube.com/watch?v=_SHG1zkCtkM"
        ]
    }
]

const mods = 
[
    {
        name: "Quality of Life",
        image: "Creeper_Banner_Pattern.png",
        background_image: "quality_of_life.png",
        version: "1.20.4",
        downloads: "4.2k",
        description: "Small improvements and conveniences for better gameplay",
        urls: [
            "https://www.curseforge.com/minecraft/mc-mods/quality-of-life",
            "https://modrinth.com/mod/quality-of-life",
            "https://github.com/user/quality-of-life-mod"
        ]
    },
    {
        name: "Example Mod",
        image: "Creeper_Banner_Pattern.png",
        background_image: "example_mod.png",
        version: "1.20.4",
        downloads: "100",
        description: "An example mod for demonstration purposes",
        urls: [
            "https://github.com/YoavTC/bamboo-flute"
        ]
    }
]


// Function to get site icon based on URL
function getSiteIcon(url) {
    if (url.includes('planetminecraft')) return 'assets/sites/planetminecraft.png';
    if (url.includes('modrinth')) return 'assets/sites/modrinth.png';
    if (url.includes('curseforge')) return 'assets/sites/curseforge.png';
    if (url.includes('github')) return 'assets/sites/github.png';
    if (url.includes('youtube')) return 'assets/sites/youtube.png';
    if (url.includes('youtu.be')) return 'assets/sites/youtube.png';
    return 'assets/sites/default.png'; // fallback icon
}

// Function to get site name based on URL
function getSiteName(url) {
    if (url.includes('planetminecraft')) return 'Planet Minecraft';
    if (url.includes('modrinth')) return 'Modrinth';
    if (url.includes('curseforge')) return 'CurseForge';
    if (url.includes('github')) return 'GitHub';
    if (url.includes('youtube')) return 'YouTube';
}

function createDatapackElement(datapack) {
    const urlButtons = datapack.urls.map(url => 
        `<img src="${getSiteIcon(url)}" alt="${getSiteName(url)}" 
              onclick="event.stopPropagation(); window.open('${url}', '_blank')" 
              style="cursor: pointer; width: auto; height: 32px; margin: 0 5px;"
              title="${getSiteName(url)}">`
    ).join('');

    return `
        <div class="datapack" data-name="${datapack.name}">
            <img class="background" src="assets/previews/${datapack.background_image}">
            <img class="icon" src="assets/${datapack.image}" alt="${datapack.name}">
            <h3>${datapack.name}</h3>
            <div class="datapack-overlay">
                <p>Version: ${datapack.version}</p>
                <p>Downloads: ${datapack.downloads}</p>
                <p class="description">${datapack.description}</p>
                ${datapack.urls.length > 0 ? `<div class="datapack-links">${urlButtons}</div>` : ''}
            </div>
        </div>
    `;
}

function loadDatapacks() {
    const container = document.querySelector('.datapacks');

    // Sort datapacks based on the predefined order
    const sortedDatapacks = datapackOrder.map(name => 
        datapacks.find(dp => dp.name === name)
    ).filter(dp => dp !== undefined);

    container.innerHTML = sortedDatapacks.map(createDatapackElement).join('');
}

function loadMods() {
    const container = document.querySelector('#mods');

    // Sort mods based on the predefined order
    const sortedMods = modOrder.map(name => 
        mods.find(mod => mod.name === name)
    ).filter(mod => mod !== undefined);

    container.innerHTML = sortedMods.map(createDatapackElement).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    loadDatapacks();
    // loadMods();
});