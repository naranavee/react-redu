import { useEffect } from "react";
import {fetchUsers} from "../redux";
import { connect } from "react-redux";


function UserContainer(userData, fetchUsers){
  function UserContainer({userData, fetchUsers}){
    useEffect(() => {
      fetchUsers();
    }, [])
  }
}