const categories = [
	{ id: "tote", name: "Tote Bag" },
	{ id: "pouch", name: "Pouch" },
	{ id: "hijab", name: "Hijab" },
	{ id: "bundle-bag", name: "Bundling Bag" },
	{ id: "bundle-hijab-bag", name: "Bundling Hijab + Bag" }
];

const hijabColors = [
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

const products = [
	{
		id: "tote-holiday",
		category: "tote",
		name: "Capybara Holiday Tote",
		price: 89000,
		image: "images/Holiday Capybara.jpeg",
		description: "Tote bag kanvas dengan ilustrasi Capybara yang ceria untuk menemani aktivitas harian.",
		variants: [{ name: "Capybara Holiday", image: "images/capybara orange.jpeg" }]
	},
	{
		id: "tote-holiday-collection",
		category: "tote",
		name: "Capybara Holiday Collection Tote",
		price: 89000,
		image: "images/holiday.jpeg",
		description: "Tote bag kanvas dengan ilustrasi Capybara untuk menemani aktivitas harian.",
		variants: [{ name: "Capybara Holiday Collection" }]
	},
	{
		id: "tote-capybara-shower",
		category: "tote",
		name: "Capybara Shower Tote",
		price: 89000,
		image: "images/capybara shower.jpeg",
		description: "Tote bag kanvas dengan ilustrasi Capybara yang ceria untuk menemani aktivitas harian.",
		variants: [{ name: "Capybara Shower" }]
	},
	{
		id: "pouch-character",
		category: "pouch",
		name: "Pouch Character Collection",
		price: 39000,
		image: "images/bench_bear.jpeg",
		description: "Pouch praktis dengan pilihan ilustrasi karakter yang ditampilkan pada foto koleksi.",
		variants: [
			{ name: "Bench Bear", image: "images/bench_bear.jpeg" },
			{ name: "Miao Cat", image: "images/miao_cat.jpeg" },
			{ name: "Panda Friend", image: "images/panda_friend.jpeg" },
			{ name: "Love Couple", image: "images/love_couple.jpeg" },
			{ name: "Tired Study", image: "images/tired_study.jpeg" },
			{ name: "Hug Bear", image: "images/hug_bear.jpeg" }
		]
	},
	{
		id: "hijab-everyday",
		category: "hijab",
		name: "Hijab Paris Premium (PO)",
		price: 20000,
		image: "images/kataloghijab.jpeg",
		description: "PRE-ORDER • 7–10 HARI",
		variants: Array.from({ length: 10 }, (_, index) => ({
			name: `Katalog ${index + 1}`,
			image: `images/katalog_${index + 1}.jpeg`
		}))
	},
	{
		id: "bundle-bag-set",
		category: "bundle-bag",
		name: "Tote Bag + Pouch Set",
		price: 119000,
		image: "images/bundlingbag.jpeg",
		description: "Satu tote bag dan satu pouch dalam satu set serasi, sesuai foto katalog bundling.",
		variants: [{ name: "Set Tote Bag + Pouch" }]
	},
	{
		id: "bundle-hijab-bag-set",
		category: "bundle-hijab-bag",
		name: "Hijab + Bag Set",
		price: 159000,
		image: "images/hijabbundling.jpeg",
		description: "Set berisi tote bag, pouch, dan hijab segi empat. Foto menampilkan contoh warna hijab.",
		variants: Array.from({ length: 10 }, (_, index) => ({
			name: `Katalog ${index + 1}`
		}))
	}
];

const catalog = document.querySelector("#product-catalog");
const categoryCards = document.querySelectorAll(".category-card[data-category]");
const selectedVariants = new Map();
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
	return product.variants[selectedIndex] ?? product.variants[0];
}

function getProductImage(product, variant) {
	return variant.image || product.image;
}

function createWhatsAppUrl(product, variant) {
	const nomorWA = "6289666370064";
    const message = `Hii MIMIN MANIZ! 💗🎀

    Aku mau order nih!

    🛍️ Produk: ${product.name}
   🌷 Pilihan: ${variant.name}


    Plizz bales Mimin manizz! 🥹💕

    Thank you, AMKEYIS! ♡`; 
	return `https://wa.me/${nomorWA}?text=${encodeURIComponent(message)}`;
}

function renderVariantOptions(product, compact = false) {
	const variants = compact ? product.variants.slice(0, 3) : product.variants;
	const selectedIndex = selectedVariants.get(product.id) ?? 0;

	return `
		<div class="variant-list" aria-label="Pilihan ${product.name}">
			${variants.map((variant, index) => {
				const actualIndex = product.variants.indexOf(variant);
				const swatch = variant.color
					? `<span class="variant-swatch" style="background-color: ${variant.color}" aria-hidden="true"></span>`
					: "";
				return `<button class="variant-option" type="button" data-action="variant" data-product-id="${product.id}" data-variant-index="${actualIndex}" aria-pressed="${selectedIndex === actualIndex}">${swatch}${variant.name}</button>`;
			}).join("")}
			${compact && product.variants.length > variants.length ? `<span class="variant-option" aria-hidden="true">+${product.variants.length - variants.length} warna</span>` : ""}
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
			<div class="product-card-content">
				${isHijab ? `
					<span class="variant-label">Pilih warna</span>
					${renderVariantOptions(product)}
					<h3>${product.name}</h3>
					<p class="product-price">${formatPrice(product.price)}</p>
					<p class="product-description product-description--preorder">${product.description}</p>
				` : `
					<h3>${product.name}</h3>
					<p class="product-price">${formatPrice(product.price)}</p>
					${product.description ? `<p class="product-description">${product.description}</p>` : ""}
					${product.category !== "tote" ? `
						<span class="variant-label">${product.id === "bundle-hijab-bag-set" ? "Pilih Warna (Sesuai PO Katalog Hijab)" : product.category === "bundle-hijab-bag" ? "Pilih warna" : "Pilih motif"}</span>
						${renderVariantOptions(product, product.id !== "pouch-character" && product.id !== "bundle-hijab-bag-set")}
					` : ""}
				`}
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
		<div class="product-grid${currentCategory === "tote" ? " product-grid--tote" : ""}${currentCategory === "hijab" ? " product-grid--hijab" : ""}">
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
});
