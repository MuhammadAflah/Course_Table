// import React, { useEffect, useState } from 'react';
// // import './CourseTable.scss';

// function CourseTable() {
//   const [courses, setCourses] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:3001/courses')
//       .then(response => response.json())
//       .then(data => setCourses(data));
//   }, []);

//   return (
//     <table className="course-table">
//       <thead>
//         <tr>
//           <th>ID</th>
//           <th>Name</th>
//           <th>Instructor</th>
//           <th>Price</th>
//         </tr>
//       </thead>
//       <tbody>
//         {courses.map(course => (
//           <tr key={course.id}>
//             <td>{course.id}</td>
//             <td>{course.name}</td>
//             <td>{course.instructor}</td>
//             <td>${course.price.toFixed(2)}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// }

// export default CourseTable;

import "../component/CourseTable.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState, useEffect } from "react";

function CourseTable() {

  const [courses, setCourses] = useState([]);

    useEffect(() => {
    fetch('http://localhost:3001/courses')
      .then(response => response.json())
      .then(data => setCourses(data));
  }, []);

  const rows = [
    {
        img: "https://t3.ftcdn.net/jpg/03/11/57/42/360_F_311574223_046B9KfEpnBEeM7mkxwdTNmDIERvsodj.jpg",
    },
    {
        img: "https://cdn-icons-png.flaticon.com/512/7784/7784482.png",
    },
    {
        img: "https://png.pngtree.com/png-vector/20190505/ourlarge/pngtree-vector-apps-icon-png-image_1023269.jpg",
    },
    {
        img: "https://www.seekpng.com/png/detail/882-8823048_web-design-icon-ui-ux-designer-icon.png",
    },
    {
        img: "https://www.pngitem.com/pimgs/m/202-2021188_aligned-programs-projects-project-management-office-icon-png.png",
    },
  ]

  
  return (
    <>
    <div className="heading">
        <h3 className="text">My Courses</h3>
        <div><h5 className="view">View all</h5></div>
    </div>
    <TableContainer  className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableHead">Course Name</TableCell>
            <TableCell className="tableHead">Start date</TableCell>
            <TableCell className="tableHead">Lesson Completed</TableCell>
            <TableCell className="tableHead">Duration</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {courses.map(course => (
            <TableRow>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={rows.img} alt="" className="image" />
                  {course.name}
                  <span>{course.lessons}</span>
                </div>
              </TableCell>
              <TableCell className="tableCell">{course.date}</TableCell>
              <TableCell className="tableCell">{course.lesson}</TableCell>
              <TableCell className="tableCell">{course.duration}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
};

export default CourseTable;