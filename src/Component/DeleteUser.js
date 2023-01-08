import React from "react";
import { useEffect} from "react";

function DeleteUser() {
    const clearStorage = window.localStorage.clear();
    
    if (clearStorage === undefined) {
      console.log("storage cleared");
      
      return (
            <>
              <h1>Data Deleted Successfully</h1>
            </>
          );
    }
  }
export default DeleteUser;