export default function CreateBlog() {
    return(
        <>
            <form>
                <label htmlFor="title">Title</label>
                <input id="title" type="text" />
                <label htmlFor="slug">Slug</label>
                <input id="slug" type="text" />
                <label htmlFor="type">Type</label>
                <select id="type" name="type">
                    <option value="blanket">Blanket</option>
                    <option value="cardigan">Cardigan</option>
                    <option value="gloves">Gloves</option>
                    <option value="hat">Hat</option>
                    <option value="scarf">Scarf</option>
                    <option value="shawl">Shawl</option>
                    <option value="sock">Sock</option>
                    <option value="sweater">Sweater</option>
                </select>
                <label htmlFor="content">Content</label>
                <input id="content" type="text" />
            </form>
        </>
    )
}