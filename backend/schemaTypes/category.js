const category = {
    name: "category",
    title: "Kategori",
    type: "document",
    fields: [
        { name: "categoryname", title: "Kategorinavn", type: "string" },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'categoryname',
                slugify: input => input
                                    .toLowerCase()
                                    .replace(/\s+/g, '-') // regular expresions to replace whitespace with dashes
                                    .slice(0, 100)
            }
        },
        { name: "categoryimage", title: "Kategoribillede", type: "image" }
    ]
}

export default category