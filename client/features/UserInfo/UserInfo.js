import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useState } from "react";
import {fetchUsersAsync, selectUser} from "../../slices/userSlice";
import "./UserInfo.css";

const UserInfo = () => {
  const user = useSelector((state) => state.auth.me);
  const dispatch = useDispatch();

  const users = useSelector(selectUser);

  const [showInfo, setShowInfo] = useState(false);
  const [info, setInfo] = useState([]);
  const [showEditForm, setShowEditForm] = useState(false);
  const [currentUserId, setCurrentUserId] = useState(null);
  const [formValues , setFormValues] = useState({
    email: '',
    username : '',
  });

  useEffect(() => {
    console.log("use effect called setting uses");
    dispatch(fetchUsersAsync());
  }, []);

  const getInfo = async () => {
    try {
      const { data } = await axios.get(`/api/users/${user.id}`);  
      setInfo([data]);
      setShowInfo(true);
    } catch (error) {
      console.log(error)
    }
  };

  const handleEdit = (userId) => {
    setShowEditForm(true);
    setCurrentUserId(userId);
    // get the current user information and set it to the form
    const currentUser = users.find(user => user.id === userId);
    if (currentUser) {
      setFormValues({ email: formValues.email || currentUser.email, username: formValues.username || currentUser.username });
    }
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormValues(prevValues => ({
      ...prevValues,
      [name]: value
    }));
  };

  const handleEditSubmit = async (evt) => {
    evt.preventDefault();
    try {
      // send a patch request to the server to update the user information
      await axios.patch(`/api/users/${currentUserId}`, formValues);
      // update the local state to reflect the changes
      setUsers(prevUsers => prevUsers.map(user => 
        user.id === currentUserId ? { ...user, ...formValues } : user
      ));
      setShowEditForm(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="userInfoDiv">
      {user.isAdmin ? (
        <table id="adminTable">
          <thead id="adminHead">
          <h1 id="adminH1">Users Information</h1>
            <tr id="adminTR">
              <th>Email</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody id="adminBody">
            {users.map((user) => {
              return (
                <tr key={user.id} id="adminTR">
                  <td>{user.email}</td>
                  <td>{user.username}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : null}

      {!user.isAdmin ? (
        <button onClick={getInfo} id="userUpdateBtn">Update Info</button>
      ) : null}
      {showInfo ? (
        <table id="userTable">
          <thead>
            <tr id="userHead">
              <th>Email</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            {info.map((user) => (
              <tr key={user.id} id="userTR">
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td>
                  <button onClick={() => handleEdit(user.id)}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}

      {showEditForm ? (
        <form onSubmit={handleEditSubmit} id="userEditForm">
          <div id="userEditDiv1">
            <label htmlFor="email">
              <small>E-mail: </small>
            </label>
            <input
              name="email"
              type="text"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <div id="userEditDiv2">
            <label htmlFor="username">
              <small>Username: </small>
            </label>
            <input
              name="username"
              type="text"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <div id="userEditBtn">
            <button type="submit">Update Info</button>
          </div>
        </form>
      ) : null}
    </div>
  );
};

export default UserInfo;
