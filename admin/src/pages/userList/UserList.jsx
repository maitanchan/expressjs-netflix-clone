import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { useEffect, useState } from "react";
import newRequest from "../../utils/newRequest";

export default function UserList() {

  const [users, setUsers] = useState([])

  useEffect(() => {

    const fetchUsers = async () => {

      try {

       const res = await newRequest.get(`/users`, 
         {
           headers:{
            token: "bear eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NmFhYzBiZDcxZmFmMzc5NjVjMjc3NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NDg5NTY1NCwiZXhwIjoxNjg1MzI3NjU0fQ.5fCAj2cu9uDQL98U1RabdAsi_aMbJXwEC2FKEq1NG60"
           }
         })

         setUsers(res.data)
        
      } catch (err) {

        console.log(err)
        
      }

    }

    fetchUsers()

  },[])

  console.log(users)
  
  const columns = [
    { field: "_id", headerName: "ID", width: 300 },
    {
      field: "username",
      headerName: "Name",
      width: 300,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.profilePic || "/img/noavatar.jpg"} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 300 }
   
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={users}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={r=> r._id}
      />
    </div>
  );
}
