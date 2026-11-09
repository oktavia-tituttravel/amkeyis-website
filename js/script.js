const categories = [
	{ id: "tote", name: "Tote Bag" },
	{ id: "pouch", name: "Pouch" },
	{ id: "hijab", name: "Hijab" },
	{ id: "bundle-bag", name: "Bundling Bag" },
	{ id: "bundle-hijab-bag", name: "Bundling Hijab + Bag" }
];

const bundleHijabColors = [
	{ name: "Mahogany", color: "#573b3d" },
	{ name: "Dark Grey", color: "#85818d" },
	{ name: "Dusty Rose", color: "#c98e91" },
	{ name: "Blush", color: "#ddbbc2" },
	{ name: "Silver", color: "#b3b4ba" },
	{ name: "Navy", color: "#1c2d4d" },
	{ name: "Black", color: "#252426" },
	{ name: "Oat", color: "#d4c6b7" },
	{ name: "Taupe", color: "#b8a69e" },
	{ name: "Sand", color: "#dfd2c3" }
];

const hijabColors = [
	{ name: "Mahogany", image: null },
	{ name: "Dark Silver", image: null },
	{ name: "Dusty pink", image: null },
	{ name: "Blush", image: null },
	{ name: "Silver", image: null },
	{ name: "Navy", image: null },
	{ name: "Black", image: null },
	{ name: "Oat", image: null },
	{ name: "Taupe", image: null },
	{ name: "Sand", image: null }
];

const parisPremiumCatalogs = [
	{
		name: "Katalog Warna",
		image: "images/kataloghijab.jpeg",
		colors: [
			{ name: "Katalog 1" },
			{ name: "Katalog 2" },
			{ name: "Katalog 3" },
			{ name: "Katalog 4" },
			{ name: "Katalog 5" },
			{ name: "Katalog 6" },
			{ name: "Katalog 7" },
			{ name: "Katalog 8" },
			{ name: "Katalog 9" },
			{ name: "Katalog 10" }
		]
	}
];

const products = [
	{
		id: "tote-orange",
		category: "tote",
		name: "Tote Bag Capybara Orange ",
		price: 10000,
		image: "images/capybara orange.jpeg",
		description: "Tote bag dengan desain Capybara lucu minum es jeruk. terbuat dari bahan Spunbond,multifungsi dan anti air. Cocok untuk sourvenir di acara tertentu.",
		variants: [{ name: "Capybara orange", image: "images/capybara orange.jpeg" }]
	},

	{
    id: "tote-baru-1",
    category: "tote",
    name: "Tote Bag Capybara Shower",
    price: 10000,
    image: "images/capybara shower.jpeg",
    description: "Tote Bag dengan desain Capybara lucu mandi busa. terbuat dari bahan Spunbond,multifungsi dan anti air. Cocok untuk sourvenir di acara tertentu.",
    variants: [
        { name: "Capybara Shower", image: "images/capybara shower.jpeg" }
    ]
},
{
    id: "tote-baru-2",
    category: "tote",
    name: "Tote Bag Capybara Holiday",
    price: 10000,
    image: "images/holiday.jpeg",
    description: "Tote Bag dengan desain Capybara lucu sedang healing. terbuat dari bahan Spunbond,multifungsi dan anti air. Cocok untuk sourvenir di acara tertentu.",
    variants: [
        { name: "Capybara Holiday", image: "images/holiday.jpeg" }
    ]
},
	{
		id: "pouch-character",
		category: "pouch",
		name: "Pouch Bear Wake Up",
		price: 10000,
		image: "images/katalogpouch1.jpeg",
		description: "Cocok untuk menyimpan perlengkapan makeup, aksesoris, uang, dan barang-barang kecil lainnya.Small pouch, big cuteness! ♡",
			variants: [
			{ name: "Panda Friend" }
		]
	},
	{
		id: "pouch-daily",
		category: "pouch",
		name: "Pouch Daily Miaou",
		price: 10000,
		image: "images/katalogpouch.jpeg",
		description: "Cocok untuk menyimpan perlengkapan makeup, aksesoris, uang, dan barang-barang kecil lainnya.Small pouch, big cuteness! ♡",
		variants: [ 
			{ name: "Pouch Daily Miaou" }
			
		]
	},

	{
		id: "pouch-tired",
		category: "pouch",
		name: "Pouch Bear Tired",
		price: 10000,
		image: "images/katalogpouch.jpeg",
		description: "Cocok untuk menyimpan perlengkapan makeup, aksesoris, uang, dan barang-barang kecil lainnya.Small pouch, big cuteness! ♡",
		variants: [ 
			{ name: "Pouch Bear Tired" }
			
		]
	},

	{
		id: "pouch-panda",
		category: "pouch",
		name: "Pouch Bear and Panda",
		price: 10000,
		image: "images/katalogpouch.jpeg",
		description: "Cocok untuk menyimpan perlengkapan makeup, aksesoris, uang, dan barang-barang kecil lainnya.Small pouch, big cuteness! ♡",
		variants: [ 
			{ name: "Pouch Bear and Panda" }
			
		]
	},

	{
		id: "pouch-beruang",
		category: "pouch",
		name: "Pouch Bear PU",
		price: 10000,
		image: "images/katalogpouch.jpeg",
		description: "Cocok untuk menyimpan perlengkapan makeup, aksesoris, uang, dan barang-barang kecil lainnya.Small pouch, big cuteness! ♡",
		variants: [ 
			{ name: "Pouch Bear PU" }
			
		]
	},

	{
		id: "pouch-tired",
		category: "pouch",
		name: "Pouch Bear kecapean tugas",
		price: 10000,
		image: "images/katalogpouch.jpeg",
		description: "Cocok untuk menyimpan perlengkapan makeup, aksesoris, uang, dan barang-barang kecil lainnya.Small pouch, big cuteness! ♡",
		variants: [ 
			{ name: "Pouch Bear kecapean tugas" }
			
		]
	},

	{
		id: "pouch-enjoy",
		category: "pouch",
		name: "Pouch Bear Enjoy Life",
		price: 10000,
		image: "images/katalogpouch.jpeg",
		description: "Cocok untuk menyimpan perlengkapan makeup, aksesoris, uang, dan barang-barang kecil lainnya.Small pouch, big cuteness! ♡",
		variants: [ 
			{ name: "Pouch Bear Enjoy Life" }
			
		]
	},
	{
		id: "pouch-love",
		category: "pouch",
		name: "Pouch Bear Love",
		price: 10000,
		image: "images/katalogpouch.jpeg",
		description: "Cocok untuk menyimpan perlengkapan makeup, aksesoris, uang, dan barang-barang kecil lainnya.Small pouch, big cuteness! ♡",
		variants: [ 
			{ name: "Pouch Bear Love" }
			
		]
	},
	{
		id: "hijab-everyday",
		category: "hijab",
		name: "Hijab Segi Empat Everyday",
		price: 20000,
		image: "images/kataloghijab.jpeg",
		description: "Hijab segi empat Paris PREMIUM dengan warna yang aestetic membuat yang pakai merasa cantik sekali seperti syahrini.",
		variants: hijabColors.map((color) => ({ ...color }))
	},
	{
		id: "hijab-paris-premium",
		category: "hijab",
		name: "Hijab Paris Premium (PO)",
		price: 20000,
		image: "images/kataloghijab.jpeg",
		description: "Hijab Paris Premium. Foto menampilkan panduan pilihan warna.",
		preOrder: true,
		catalogs: parisPremiumCatalogs
	},
	{
		id: "bundle-bag-set",
		category: "bundle-bag",
		name: "Tote Bag + Pouch Set",
		price: 15000,
		image: "images/bundlingbags.jpeg",
		description: "Satu tote bag dan satu pouch dalam satu set serasi, sesuai foto katalog bundling.",
		variants: [{ name: "Set Tote Bag + Pouch" }]
	},
	{
		id: "bundle-hijab-bag-set",
		category: "bundle-hijab-bag",
		name: "Hijab + Bag Set",
		price: 25000,
		image: "images/bundlinghijab.jpeg",
		description: "Set berisi tote bag, pouch, dan hijab segi empat. Foto menampilkan contoh warna hijab.",
		variants: bundleHijabColors.map((color) => ({ ...color }))
	}
];

const catalog = document.querySelector("#product-catalog");
const categoryCards = document.querySelectorAll(".category-card[data-category]");
const selectedVariants = new Map();
const selectedCatalogs = new Map();
let currentCategory = categories[0].id;

function formatPrice(price) {
	return new Intl.NumberFormat("id-ID", {
		style: "currency",
		currency: "IDR",
		maximumFractionDigits: 0
	}).format(price);
}

function getCategoryName(categoryId) {
	return categories.find((category) => category.id === categoryId)?.name ?? "Koleksi";
}

function getSelectedVariant(product) {
	const selectedIndex = selectedVariants.get(product.id) ?? 0;
	if (product.catalogs) {
		const selectedCatalog = getSelectedCatalog(product);
		return selectedCatalog.colors[selectedIndex] ?? selectedCatalog.colors[0];
	}
	return product.variants[selectedIndex] ?? product.variants[0];
}

function getSelectedCatalog(product) {
	const selectedIndex = selectedCatalogs.get(product.id) ?? 0;
	return product.catalogs[selectedIndex] ?? product.catalogs[0];
}

function getProductImage(product, variant) {
	if (product.catalogs) return getSelectedCatalog(product).image;
	return variant.image || product.image;
}

function createWhatsAppUrl(product, variant) {
	const message = product.category === "hijab"
		? `Halo AMKEYIS, saya ingin memesan ${product.name}${product.catalogs ? ` katalog ${getSelectedCatalog(product).name}` : ""} warna ${variant.name}${product.preOrder ? " (PRE-ORDER • 7–10 HARI)" : ""}.`
		: `Halo AMKEYIS, saya ingin memesan ${product.name} dengan pilihan ${variant.name}.`;
	return `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
}

function renderCatalogOptions(product) {
	if (!product.catalogs || product.catalogs.length < 2) return "";

	const selectedIndex = selectedCatalogs.get(product.id) ?? 0;
	return `
		<p class="variant-label">Pilih katalog</p>
		<div class="variant-list" aria-label="Pilihan katalog ${product.name}">
			${product.catalogs.map((catalogOption, index) => `
				<button class="variant-option" type="button" data-action="catalog-variant" data-product-id="${product.id}" data-catalog-index="${index}" aria-pressed="${selectedIndex === index}">${catalogOption.name}</button>
			`).join("")}
		</div>
	`;
}

function renderVariantOptions(product) {
	const variants = product.catalogs ? getSelectedCatalog(product).colors : product.variants;
	const selectedIndex = selectedVariants.get(product.id) ?? 0;

	return `
		<div class="variant-list" aria-label="Pilihan ${product.name}">
			${variants.map((variant, index) => {
				const swatch = variant.color
					? `<span class="variant-swatch" style="background-color: ${variant.color}" aria-hidden="true"></span>`
					: "";
				return `<button class="variant-option" type="button" data-action="variant" data-product-id="${product.id}" data-variant-index="${index}" aria-pressed="${selectedIndex === index}">${swatch}${variant.name}</button>`;
			}).join("")}
		</div>
	`;
}

function renderProductCard(product) {
	const variant = getSelectedVariant(product);
	const isHijab = product.category === "hijab";
	return `
		<article class="product-card${isHijab ? " product-card--hijab" : ""}">
			<div class="product-card-image">
				<img src="${getProductImage(product, variant)}" alt="${product.name}" loading="lazy">
			</div>
			${isHijab ? `${renderCatalogOptions(product)}<p class="variant-label">Pilih warna</p>${renderVariantOptions(product)}` : ""}
			<div class="product-card-content">
				<h3>${product.name}</h3>
				<p class="product-price">${formatPrice(product.price)}</p>
				${product.preOrder ? '<p class="preorder-note">PRE-ORDER • 7–10 HARI</p>' : ""}
				<p class="product-description">${product.description}</p>

				<div class="product-actions">
					<a class="product-action" href="${createWhatsAppUrl(product, variant)}" target="_blank" rel="noopener noreferrer">Pesan via WhatsApp</a>
				</div>
			</div>
		</article>
	`;
}

function renderCatalog() {
	catalog.hidden = false;
	catalog.innerHTML = `
		<div class="catalog-heading">
			<p class="subtitle">AMKEYIS COLLECTION</p>
			<h2>${getCategoryName(currentCategory)}</h2>
			<p>Pilih koleksi favoritmu dan pesan langsung produk pilihanmu.</p>
		</div>
		<div class="catalog-tabs" role="group" aria-label="Kategori produk">
			${categories.map((category) => `
				<button class="catalog-tab" type="button" data-action="category" data-category="${category.id}" aria-pressed="${currentCategory === category.id}">${category.name}</button>
			`).join("")}
		</div>
		<div class="product-grid${currentCategory === "tote" ? " product-grid--tote" : ""}">
			${products.filter((product) => product.category === currentCategory).map(renderProductCard).join("")}
		</div>
		<p class="price-note">Harga katalog merupakan harga awal dan dapat dikonfirmasi kembali saat pemesanan.</p>
	`;
}

function openCategory(categoryId) {
	currentCategory = categories.some((category) => category.id === categoryId)
		? categoryId
		: categories[0].id;
	renderCatalog();
	catalog.scrollIntoView({ behavior: "smooth", block: "start" });
}

categoryCards.forEach((card) => {
	card.addEventListener("click", () => openCategory(card.dataset.category));
	card.addEventListener("keydown", (event) => {
		if (event.key === "Enter" || event.key === " ") {
			event.preventDefault();
			openCategory(card.dataset.category);
		}
	});
});

catalog.addEventListener("click", (event) => {
	const target = event.target.closest("[data-action]");
	if (!target) return;

	const { action, productId, variantIndex, category } = target.dataset;

	if (action === "category") {
		currentCategory = category;
		renderCatalog();
	}

	if (action === "variant") {
		selectedVariants.set(productId, Number(variantIndex));
		renderCatalog();
	}

	if (action === "catalog-variant") {
		selectedCatalogs.set(productId, Number(target.dataset.catalogIndex));
		selectedVariants.set(productId, 0);
		renderCatalog();
	}
});
