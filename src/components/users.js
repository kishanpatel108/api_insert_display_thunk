import React from 'react'
import { useDispatch } from 'react-redux';
import { deletePost, editPost } from './../redux/action/userAction';


const Users = ({ users, setToggleUpdate }) => {
    const dispatch = useDispatch()


    const editValueData = (elem) => {
        const edit_post = {
            id: elem.id,
            title: elem.title,
            body: elem.body
        };
        dispatch(editPost(edit_post));
        setToggleUpdate(false)
    }



    return (
        <table style={{ margin: "70px" }}>
            <thead>
                <tr>
                    <th>Index</th>
                    <th>title</th>
                    <th>description</th>
                </tr>
            </thead>

            {
                users?.map((elem, index) => {
                    return (
                        <>
                            <tbody key={elem.id}>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{elem.title}</td>
                                    <td>{elem.body}</td>
                                    <td>
                                        <a type="button" href='#' className="update" onClick={() => editValueData(elem)}><i className="bi bi-pencil-square "></i></a>
                                    </td>


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