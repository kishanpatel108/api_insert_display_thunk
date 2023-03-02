import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, userAction } from './redux/action/userAction';
import { useEffect, useState } from 'react';
import Users from './components/users';

function App() {

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const dispatch = useDispatch()
  const userList = useSelector((state) => state.usersList)
  console.log("userList", userList);
  const { users, loading, error } = userList

  useEffect(() => {
    dispatch(userAction())
  }, [dispatch]);

  const  submitForm = (e) =>{
    e.preventDefault();
    const new_post = {
      title: title,
      body: body,
    };
    dispatch(createPost(new_post));
  }
  return (
    <div className="App">
      <div>
        <form onSubmit={submitForm}>
          <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
          <br/>
          <textarea
            rows="5"
            className="form-control form-control-lg"
            placeholder="Enter Post Body Text"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            ></textarea>
            <br/>
          <button>submit</button>
        </form>
      </div>

      <h1>Api data display</h1>
      {
        loading ? <h1>Loading.....</h1>
          : error ?
            <h2>{error}</h2>
            :
            <Users users={users} />
      }
    </div>
  );
}

export default App;

