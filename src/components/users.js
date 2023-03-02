import React from 'react'

const Users = ({users}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Index</th>
                    <th>title</th>
                    <th>description</th>
                </tr>
            </thead>

            {
                users?.map((elem,index) => {
                    return (
                        <>
                            <tbody>
                                <tr>
                                    <td>{index+1}</td>
                                    <td>{elem.title}</td>
                                    <td>{elem.body}</td>
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