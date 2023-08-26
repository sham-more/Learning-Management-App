import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pagination from "./pagination"; // Make sure the path to your Pagination component is correct
import axios from "axios";
import "../../App.css";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { useNavigate } from "react-router";

const CourseSection = () => {
  const [courseData, setCourseData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const itemsPerPage = 6;

  useEffect(() => {
    fetchCourseData();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

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

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedCourses = courseData
    .filter((course) => {
      return course.name.toLowerCase().includes(searchQuery.toLowerCase());
    })
    .slice(startIndex, endIndex);

  console.log("Search Query:", searchQuery);
  console.log("Filtered Courses:", displayedCourses);

  return (
    <>
      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col-lg-12 col-md-12 article">
              <div className="shopcontainer row">
                {displayedCourses.map((course) => (
                  <div
                    className="shop col-lg-4 col-md-6 col-sm-6 "
                    id="course"
                    key={course.id}
                  >
                    <Link to={`/products/${course.id}`}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          padding: "0 10px",
                        }}
                      >
                        <iframe
                          className="video"
                          src={course.url}
                          title={course.name}
                          frameBorder="0"
                          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                          style={{ width: "280px" }}
                        ></iframe>
                      </div>
                    </Link>
                    <div className="shoptext">
                      <p>
                        <Link to={`/products/${course.id}`}>{course.name}</Link>
                      </p>
                      <p>
                        <Link to={`/products/${course.id}`}>
                          {course.description}
                        </Link>
                      </p>
                      {/*<button src={course.url} className="round-black-btn">
                        ENROLL
                      </button>*/}
                    </div>
                  </div>
                ))}
                <Pagination
                  totalItems={courseData.length}
                  itemsPerPage={itemsPerPage}
                  currentPage={currentPage}
                  onPageChange={(page) => setCurrentPage(page)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default CourseSection;
