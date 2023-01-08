import React, { Component } from "react";
import './style.css';
import './Page.css';
class DetailUser extends Component{
    constructor(props){
        super(props)
        this.state={
            item:[],
            loading:false
        }
    }
    componentDidMount(){
        fetch("https://randomuser.me/api/?results=15")
        .then((response)=>response.json())
        .then((response)=>{
            this.setState({
                items:response.results,
                loading:true
            })
        })
    }
    render(){
       
        var {items,loading}=this.state
        if(!loading)
        {
            return(
                <div>Loading ...</div>
            )
        }
        else{

        }
         return(
           <div className="container">
                {items.map(item =>(
                    <>
                    <table>
                        <tbody>
                        <tr>
                            <th>Title</th>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Gender</th>
                            <th>Email</th>
                            <th>Profile</th>
                        </tr>
                    
                        <tr>
                            <td>{item.name.title}</td>
                            <td>{item.name.first} </td>
                            <td>{item.name.last}</td>
                            <td>{item.gender}</td>
                            <td>{item.email}</td>
                            <td><img src={item.picture.medium} alt={item.name.first}/></td>
                        </tr>
                        </tbody>
                       
                    </table>
                   </>
                ))}

                            <nav data-pagination>
                                <a href="#" disabled>
                                    <i className="ion-chevron-left"></i>
                                </a>
                                <ul>
                                    <li className="current">
                                        <a href="#1">1</a>
                                        <li> <a href="#2">2</a></li>
                                        <li> <a href="#3">3</a></li>
                                        <li> <a href="#4">4</a></li>
                                        <li> <a href="#5">5</a></li>
                                        <li> <a href="#6">6</a></li>
                                        <li> <a href="#7">7</a></li>
                                        <li> <a href="#8">8</a></li>
                                        <li> <a href="#9">9</a></li>
                                        <li> <a href="#10">-</a></li>
                                        <li> <a href="#41">41</a></li>
                                    </li>
                                </ul>
                                <a href="#2"><i className="ion-chevron-right"></i></a>
                            </nav>
            </div>

       
         )
    }
}

export default DetailUser;