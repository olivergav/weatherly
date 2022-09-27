import {useRef} from "react";

function Search({searchValue, setSearchValue}) {
    const searchRef = useRef(null);

    function handleInput(event) {
        setSearchValue(event.target.value)
    }

    function handleFocus() {
        searchRef.current.classList.add('focus')
    }

    function handleBlur() {
        if (searchRef.current.value === "") {
            searchRef.current.classList.remove('focus')
        }
    }

    return (
        <div className="search"
             ref={searchRef}
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
        </div>
    )
}

export default Search;