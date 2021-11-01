import React, { useState } from 'react'

export const Search = ( { getQuery } ) => {

    const [text, setText] = useState({
        search: ''
    })
    const {search} = text;

    const handleInputChange = (e) => {
        getQuery( e.target.value )
        setText({
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="form w-9/12 mt-12 ml-auto mr-auto">
            <form className="w-full">
                <input
                    className="w-full h-8 rounded placeholder-green-800"
                    type="text"
                    name="search"
                    value={search}
                    onChange={handleInputChange}
                    placeholder="Search Characters Ex: Walter"
                />
            </form>
        </div>
    )
}
