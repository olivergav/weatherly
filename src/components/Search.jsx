function Search({searchValue, setSearchValue}) {

    function handleInput(event) {
        setSearchValue(event.target.value)
    }

    return (
        <div className="search">
            <label htmlFor="search" className="search__lbl">Type City</label>
            <input
                type="text"
                id="search"
                className="search__input"
                onChange={handleInput}
                value={searchValue}
            />
        </div>
    )
}

export default Search;