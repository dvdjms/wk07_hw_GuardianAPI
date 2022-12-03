import React, {useState, useRef} from 'react';
import './NewsSearch.css';

const NewsSearch = ({ onNewSearch }) => {
    const [formData, setFormData] = useState('');

    const handleChange = (event) => {
        setFormData(event.target.value);
    }

    const ref = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        onNewSearch(formData);
        ref.current.value = '';
    }

    return ( 

        <form>
            <label htmlFor="search"></label>
            <input 
                // defaultValue=""
                ref={ref}
                autoFocus id="search" 
                name="search" 
                onChange={handleChange} 
                placeholder="Search Guardian Headlines" 
                type="text" />
            <input id="button" onClick={handleSubmit} type="submit" value="Submit" />
        </form>
    )
}

export default NewsSearch;