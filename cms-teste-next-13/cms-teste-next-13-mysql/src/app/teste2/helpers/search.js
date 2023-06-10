export const Search = (data, searchQuery) => {

    const searchData = data?.filter(item => {
        return item.id.toString().includes(searchQuery)
            || item.username.includes(searchQuery)
            || item.email.includes(searchQuery);
    });

    return searchData;
}
