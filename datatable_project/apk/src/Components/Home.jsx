import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
function Home() {
    const [data, setData] = useState([])
    const [filter, setFilter] = useState(null)
    const [sort, setShort] = useState(null)
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState("")
    const fetch = () => {
        axios.get("http://localhost:8080/data", {
            params:
            {
                category: filter,
                _sort: "price",
                _order: sort,
                _limit: "4",
                _page: page,
                q: search

            }
        })
            .then((res) => setData(res.data))
            .catch((err) => console.log(err))
    }
    useEffect(() => {
        fetch()
    }, [filter, sort, page, search,data])
    // handleDelete Function
    const handledelete = (id) => {
       
        axios.delete(`http://localhost:8080/data/${id}`)
            .then(res =>
                {
                    console.log('Data deleted:', res.data)
                    alert("Data is Deleted")
                })
            .catch(error => console.error('Error deleting data:', error));

    }
    // update
    return (
        <div >
        <Link className='linkto' to="/post" >Post Data</Link>
        <br />
            <div>
                {/* filter */}
                <select className='op' onChange={(e) => setFilter(e.target.value)}>
                    <option value="" hidden>Select</option>
                    <option value="men's clothing">men's clothing</option>
                    <option value="women's clothing">women's clothing</option>
                    <option value="jewelery">jewelery</option>
                    <option value="electronics">electronics</option>
                </select>
                {/* Sort */}
                <button className='op' onClick={(e) => setShort("asc")} >Low To Hight</button>
                <button className='op' onClick={(e) => setShort("desc")}>Hight To Low</button>
                {/* Pagination */}
                <button className='op' disabled={page == 1} onClick={() => setPage(page - 1)}>Pre</button>
                <button className='op' disabled>{page}</button>
                <button className='op' disabled={page == 4} onClick={() => setPage(page + 1)}>Next</button>
                {/* Search */}
                <input className='op' type="text" onChange={(e) => setSearch(e.target.value)} placeholder='Search Here' />
            </div>
            <div className='maindiv'>
                {data.map((el) => (<div className='scDiv' key={el.id}>
                <p>{el.id}</p>
                    <img src={el.image} alt="" className='img' />
                    <h3>{el.title}</h3>
                    <h3>Price $ {el.price}</h3>
                    <p className='para'>{el.description}</p>
                    <h4>{el.category}</h4>
                    <button onClick={() => handledelete(el.id)}>Delete</button>
                    <Link className='linkto' to={`/put/${el.id}`}>
                    <button>Update</button>
                    </Link>
                    
                </div>))}
            </div>
        </div>
    )
}

export default Home