import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost, userAction } from './redux/action/userAction';
import { useEffect, useState } from 'react';
import Users from './components/users';

function App() {

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [toggleUpdate, setToggleUpdate] = useState(true)


  const dispatch = useDispatch()
  const userList = useSelector((state) => state.usersList)
  const editDataFetch = useSelector((state) => state.usersList.newEditData)
  const { list, loading, error } = userList

  useEffect(() => {
    dispatch(userAction())
  }, [dispatch]);

  const submitForm = (e) => {
    e.preventDefault();
    const new_post = {
      id: new Date().getTime().toString(),
      title: title,
      body: body,
    };
    // console.log("new_post", new_post);
    dispatch(createPost(new_post));
    setTitle("")
    setBody("")
  }

  const updateForm = (e) => {
    e.preventDefault()
    const update_post = {
      id: editDataFetch.id,
      title: title,
      body: body
    }
    console.log("update_post", update_post);
    dispatch(updatePost(update_post))
    setToggleUpdate(true)
    setTitle("")
    setBody("")
  }

  useEffect(() => {
    if (editDataFetch) {
      setTitle(editDataFetch.title)
      setBody(editDataFetch.body)
    }
  }, [editDataFetch])
  return (
    <div className="App">
      <div style={{ display: "inline-flex" }}>
        <form >
          <input type="text" className="form-control" onChange={(e) => setTitle(e.target.value)} value={title} />
          <br />
          <textarea
            rows="3"
            className="form-control"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          <br />
          {
            toggleUpdate ?
              <button className="btn btn-primary" onClick={submitForm}>submit</button>
              :
              <button className="btn btn-primary" onClick={updateForm}>update</button>
          }
        </form>
      </div>

      <h1>Api data display</h1>
      {
        loading ? <h1>Loading.....</h1>
          : error ?
            <h2>{error}</h2>
            :
            <Users users={list} setToggleUpdate={setToggleUpdate} />
      }
    </div>
  );
}

export default App;

