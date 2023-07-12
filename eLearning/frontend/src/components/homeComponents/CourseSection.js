import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pagination from "./pagination";
import axios from "axios";
const CourseSection = () => {

  const [courseData, setCourseData] = useState([]);

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

  return (
    <>

      <div className="container">

        <div className="section">
          <div className="row">
            <div className="col-lg-12 col-md-12 article">
              <div className="shopcontainer row">
                {courseData.map((course) => (
                  <div
                    className="shop col-lg-4 col-md-6 col-sm-6"
                    key={course.id}
                  >
                    <div className="border-product">
                      <Link to={`/products/${course.id}`}>
                        <div >
                          <iframe className="video" src={course.url} title={course.name} frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                        </div>
                      </Link>

                      <div className="shoptext">
                        <p>
                          <Link to={`/products/${course.id}`}>
                            {course.name}
                          </Link>
                        </p>

                        <p>
                          <Link to={`/products/${course.id}`}>
                            {course.description}
                          </Link>
                        </p>

                        <button className="round-black-btn">ENROLL</button>
                      </div>
                    </div>
                  </div>
                ))}
                {/* Pagination */}
                <Pagination />
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default CourseSection;
