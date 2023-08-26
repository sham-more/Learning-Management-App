import { Link } from "react-router-dom";

import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

const AddEdit = () => {
  const [courseData, setCourseData] = useState([]);
  const [newCourse, setNewCourse] = useState("");
  const [description, setCourseDescription] = useState();
  const [url, setURL] = useState();

  useEffect(() => {
    fetchCourseData();
  }, []);

  const fetchCourseData = () => {
    axios
      .get("http://localhost:8080/courses/getCourses")
      .then((response) => {
        setCourseData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addCourse = () => {
    const newCourseData = {
      name: newCourse,
      description: description,
      url: url,
    };

    axios
      .post("http://localhost:8080/courses/addCourse", newCourseData)
      .then((response) => {
        console.log(response.data);
        fetchCourseData();
      })
      .catch((error) => {
        console.log(error);
      });

    alert("Successfully added New course ! ");
  };

  const deleteCourse = (courseId) => {
    axios
      .delete(`http://localhost:8080/courses/deleteCourse/${courseId}`)
      .then((response) => {
        console.log(response.data);
        fetchCourseData();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="header">
        <div
          className="container"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          {/* MOBILE HEADER */}
          <div className="mobile-header">
            <div className="container ">
              <div className="row ">
                <div className="col-6 d-flex align-items-center">
                  <Link className="navbar-brand" to="/">
                    <img alt="logo" src="/images/logo.png" />
                  </Link>
                </div>
                <div className="col-6 d-flex align-items-center justify-content-end Login-Register">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="name-button dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="fas fa-user"></i>
                    </button>
                    <div className="dropdown-menu">
                      <Link className="dropdown-item" to="/profile">
                        Profile
                      </Link>

                      <Link className="dropdown-item" to="#">
                        Logout
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-12 d-flex align-items-center">
                  <form className="input-group">
                    <input
                      type="search"
                      className="form-control rounded search"
                      placeholder="Search"
                    />
                    <button type="submit" className="search-button">
                      search
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* PC HEADER */}
          <div
            className="pc-header"
            style={{
              backgroundColor: "grey",
              borderRadius: "2px",
              width: "100%",
              marginBottom: "20px",
            }}
          >
            <div
              className="row"
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginLeft: "20px",
                padding: "5px",
              }}
            >
              <div
                className="col-md-3 col-4 d-flex align-items-center"
                style={{
                  width: "150px",
                }}
              >
                <Link className="navbar-brand" to="/">
                  <img
                    alt="logo"
                    src="/images/logo.png"
                    style={{ borderRadius: "50%" }}
                  />
                </Link>
                <div
                  className="col-md-2 col-2 d-flex align-items-center"
                  style={{ display: "flex", gap: "40px" }}
                >
                  <Link className="dropdown-item" to="/">
                    Home
                  </Link>
                  <Link className="dropdown-item" to="/add">
                    Add
                  </Link>
                </div>
              </div>

              <div className="col-md-2 d-flex align-items-center justify-content-end Login-Register">
                <div className="btn-group">
                  <button
                    id="header_add"
                    type="button"
                    className="name-button dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Admin
                  </button>
                  <div className="dropdown-menu">
                    <Link className="dropdown-item" to="/">
                      User
                    </Link>

                    <Link className="dropdown-item" to="/admin">
                      Admin
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="addCourse_main">
        <div className="addCourse" style={{ width: "60%" }}>
          <h2>Add Course </h2>

          <label htmlFor="courseNameInput">Course Name:</label>

          <input
            id="courseNameInput"
            type="text"
            placeholder="course name"
            value={newCourse}
            onChange={(event) => setNewCourse(event.target.value)}
            formNoValidate
          />

          <label htmlFor="descriptionhere">Description:</label>
          <input
            id="courseDescInput"
            type="text"
            placeholder="description"
            onChange={(event) => setCourseDescription(event.target.value)}
            formNoValidate
          />

          <label htmlFor="ratingSelect">Video Url:</label>

          <input
            id="VideoUrl"
            type="text"
            placeholder="URL here"
            onChange={(event) => setURL(event.target.value)}
            formNoValidate
          />

          <button className="add_course" onClick={addCourse}>
            Add course
          </button>
        </div>

        <div className="addedCourse">
          <table id="courses">
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Video Url</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {courseData.map((course) => (
                <tr key={course.id}>
                  <td>{course.name}</td>
                  <td>{course.description}</td>
                  <td>{course.url}</td>
                  <td style={{ display: "flex", justifyContent: "center" }}>
                    <button
                      className="del_btn"
                      onClick={() => deleteCourse(course.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default AddEdit;
