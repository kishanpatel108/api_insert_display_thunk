import React from 'react'

const Users = ({users}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Index</th>
                    <th>title</th>
                    {/* <th>brand</th>
                    <th>category</th>
                    <th>description</th>
                    <th>discountPercentage</th>
                    <th>price</th>
                    <th>rating</th>
                    <th>stock</th> */}
                </tr>
            </thead>

            {
                users?.map((elem) => {
                    return (
                        <>
                            <tbody>
                                <tr>
                                    <td>{elem.id}</td>
                                    <td>{elem.title}</td>
                                    {/* <td>{elem.brand}</td>
                                    <td>{elem.category}</td>
                                    <td>{elem.description}</td>
                                    <td>{elem.discountPercentage}</td>
                                    <td>{elem.price}</td>
                                    <td>{elem.rating}</td>
                                    <td>{elem.stock}</td> */}
                                </tr>
                            </tbody>

                        </>
                    )
                })
            }
        </table>
    )
}

export default Users