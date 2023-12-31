
import React, { useState, useEffect } from "react";
import { getUsers } from "../mock-api/apis";
import { UserContext } from "../App";

function UserTable() {
    const [page, setPage] = useState(0);

    const allUsers = React.useContext(UserContext);

    const pageSize = 5;
    const pageCount = Math.ceil(allUsers.length / pageSize);
    const pageUsers = allUsers.slice(page * pageSize, (page + 1) * pageSize);

    return (
        <div style={{justifyContent: "center"}}>
            <table style={{ width: "400px", border: "2px solid black", borderCollapse: "collapse", margin: "0 auto" }}>
                <thead style={{border: "1px solid black", margin: "0 auto"}}>
                    <tr>
                        <th>Name</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody style={{border: "1px solid black", margin: "0 auto"}}>
                    {pageUsers.map((user) => (
                        <tr key={user.name} style={{borderBottom: "1px dotted black"}}>
                            <td style={{borderRight: "1px solid black"}}>{user.name}</td>
                            <td>{user.location}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                {Array.from({ length: pageCount }, (_, i) => (
                    <button key={i} onClick={() => setPage(i)}>
                        {i + 1}
                    </button>
                ))}
            </div>
        </div>
        );
        }

        export default UserTable;
           