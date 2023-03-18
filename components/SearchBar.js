import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Form, FormControl } from 'react-bootstrap';

export default function SearchBar() {
  const [searchBar, setSearchBar] = useState('');

  const router = useRouter();

  const handleChange = (e) => {
    setSearchBar(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (setSearchBar !== '') router.push(`/searchbar/${searchBar}`);
    setSearchBar('');
  };

  return (
    <Form className="searchbar" onSubmit={handleSubmit}>
      <FormControl type="text" placeholder="Search Stories" onChange={handleChange} value={searchBar} style={{ width: '130px' }} />
    </Form>
  );
}
