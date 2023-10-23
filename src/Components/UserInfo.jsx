const UserInfo = (props) => {
  return (
    <div className="userInfo">
      <ul>
        <li>name:{props.name}</li>
        <li>age:{props.age}</li>
        <button onClick={() => props.delete(props.id)}>Delete</button>
      </ul>
    </div>
  );
};

export default UserInfo