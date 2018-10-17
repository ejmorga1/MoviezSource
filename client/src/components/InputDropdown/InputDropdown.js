import React from "react";

export const InputDropdown = props => (
    <div className="form-group">
        <label htmlFor="exampleInputEmail1">{props.label}</label>
        <select onChange={props.onChange} type={props.type} name={props.name} className="form-control" placeholder={props.placeholder} >
            <option disabled selected>Select Your Favorite Movie Genre (Optional)</option>
            <option>Action</option>
            <option>Adventure</option>
            <option>Animation</option>
            <option>Comedy</option>
            <option>Crime</option>
            <option>Documentary</option>
            <option>Drama</option>
            <option>Family</option>
            <option>Fantasy</option>
            <option>History</option>
            <option>Horror</option>
            <option>Music</option>
            <option>Mystery</option>
            <option>Romance</option>
            <option>Science Fiction</option>
            <option>TV Movie</option>
            <option>Thriller</option>
            <option>War</option>
            <option>Western</option>
        </select>
    </div>
)