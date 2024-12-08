import './search-panel.css'

const SearchPanel = () => {
    return (
        <div className="search-panel">
            <input placeholder='Поиск' className='input-search-panel input-group-text' type="text" name="search-panel" id="search-panel" />
        </div>
    )
}

export default SearchPanel