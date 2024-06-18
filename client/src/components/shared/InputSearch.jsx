import SearchResult from '@components/SearchBox';
import { useState } from 'react';
import { IoMdSearch } from 'react-icons/io';

function InputSearch() {
  const [searchValue, setSearchValue] = useState('');
  return (
    <div className="relative">
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-300 rounded-md px-2 py-1 text-[#333] font-normal"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <IoMdSearch
          className="absolute right-0 top-2/4 -translate-y-2/4"
          color="#000"
          size={20}
        />
      </div>
      <div className="absolute right-0 top-12">
        {' '}
        {searchValue && <SearchResult searchValue={searchValue} />}
      </div>
    </div>
  );
}

export default InputSearch;
