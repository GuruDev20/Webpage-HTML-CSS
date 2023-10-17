import React from "react";
import PlaceList from '../components/PlaceList';
const DUMMY_PLACES=[
    {
        id:'p1',
        title:'Empire state Building',
        description:'Empire state Building',
        imageUrl:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        address:"20 W 34th St,New York,NY 10001",
        location:{
            lat:40.7484405,
            lng:-73.9878584
        },
        creator:"u1"
    },
    {
        id:'p2',
        title:'Empire state Building',
        description:'Empire state Building',
        imageUrl:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        address:"20 W 34th St,New York,NY 10001",
        location:{
            lat:40.7484405,
            lng:-73.9878584
        },
        creator:"u2"
    },
    {
        id:'p3',
        title:'Empire state Building',
        description:'Empire state Building',
        imageUrl:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        address:"20 W 34th St,New York,NY 10001",
        location:{
            lat:40.7484405,
            lng:-73.9878584
        },
        creator:"u3"
    }
]
const Userplaces=()=>{
    return <PlaceList items={DUMMY_PLACES}/>;
};
export default Userplaces;