import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Student extends Component {
  constructor() {
    super();
    this.state = {
      studentInfo: {}
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:3005/students/${this.props.match.params.id}`)
      .then(res => {
        this.setState({
          studentInfo: res.data
        });
      });
  }

  render() {
    return (
      console.log(this.state.studentInfo),
      (
        <div className="box">
          <h1>Student</h1>
          <h1>
            {this.state.studentInfo.first_name}{" "}
            {this.state.studentInfo.last_name}
          </h1>
          <h3>Grade: {this.state.studentInfo.grade}</h3>
          <h3>Email:{this.state.studentInfo.email}</h3>
          <Link to={`/classlist/${this.state.studentInfo.class}`}>
            <button>Back</button>
          </Link>
        </div>
      )
    );
  }
}
