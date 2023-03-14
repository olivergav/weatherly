import {useRef} from "react";

function Search({searchValue, setSearchValue, handleSearch}) {
    const searchRef = useRef(null);

    function handleInput(event) {
        setSearchValue(event.target.value)
    }

    function handleFocus() {
        searchRef.current.classList.add('focus')
    }

    function handleBlur() {
        if (searchValue === "") {
            searchRef.current.classList.remove('focus')
        }
    }

    return (
        <form className="search"
              ref={searchRef}
              onSubmit={(event) => handleSearch(event)}
        >
            <label htmlFor="search" className="search__lbl">Type City</label>
            <input
                type="text"
                id="search"
                className="search__input"
                value={searchValue}
                onChange={handleInput}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />

            <button className="search__btn"
                    onClick={handleSearch}
                    disabled={!searchValue.length}
            >
                Search
            </button>
        </form>
    )
}

export default Search;