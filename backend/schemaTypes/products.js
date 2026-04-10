import category from "./category"

const products = {
    name: "product",
    title: "Produkter",
    type: "document",
    fields: [
        { name: "productname", title: "Produktnavn", type: "string" },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'productname',
                slugify: input => input
                                    .toLowerCase()
                                    .replace(/\s+/g, '-') // regular expresions to replace whitespace with dashes
                                    .slice(0, 100)
            }
        },
        { name: "price", title: "Pris", type: "number" },
        { name: "quantity", title: "Antall på lager", type: "number" },
        { name: "productimage", title: "Produktbillede", type: "image" },
        { name: "productcategory", title: "Kategori", type: "reference", to: [{ type: "category" }] }
    ],
    preview: { // regelset på hvordan inhold skal vises i admin panelet
        select: {
            title: "productname",
            inCat: "productcategory.categoryname",
            image: "productimage"
        },
        prepare(selection) {
            const {title, inCat, image} = selection
            return {
                title: title,
                subtitle: `Kategori: ${inCat ? inCat : "Ukjent"}`,
                media: image
            }
        }
    }
}

export default products