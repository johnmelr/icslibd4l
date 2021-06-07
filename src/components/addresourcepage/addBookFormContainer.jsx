import React, { useState } from "react";
import Select from "react-select";
import ResourceServices from "../../services/resourceService";
// import AddResourcesHeader from "./addResourcesHeader";
import { nanoid } from "nanoid";
import { produce } from "immer";
import StatusModal from "../modal/operationStatusModal";
import { toast } from "react-toastify";
// import ToastNotification from "../toastNotification";
import "react-toastify/dist/ReactToastify.css";

const courseList = [
  { value: "CMSC 12", label: "CMSC 12" },
  { value: "CMSC 21", label: "CMSC 21" },
  { value: "CMSC 22", label: "CMSC 22" },
  { value: "CMSC 23", label: "CMSC 23" },
  { value: "CMSC 56", label: "CMSC 56" },
  { value: "CMSC 57", label: "CMSC 57" },
  { value: "CMSC 123", label: "CMSC 123" },
  { value: "CMSC 124", label: "CMSC 124" },
  { value: "CMSC 125", label: "CMSC 125" },
  { value: "CMSC 127", label: "CMSC 127" },
  { value: "CMSC 128", label: "CMSC 128" },
  { value: "CMSC 130", label: "CMSC 130" },
  { value: "CMSC 131", label: "CMSC 131" },
  { value: "CMSC 132", label: "CMSC 132" },
  { value: "CMSC 141", label: "CMSC 141" },
  { value: "CMSC 142", label: "CMSC 142" },
  { value: "CMSC 150", label: "CMSC 150" },
  { value: "CMSC 170", label: "CMSC 170" },
  { value: "CMSC 173", label: "CMSC 173" },
  { value: "CMSC 180", label: "CMSC 180" },
  { value: "CMSC 190", label: "CMSC 190" },
  { value: "CMSC 191", label: "CMSC 191" },
];

const AddBookFormContainer = () => {
  // functionalities:
  const [title, setTitle] = useState("");
  const [isbn, setISBN] = useState("");
  const [datePublished, setDatePublished] = useState();
  const [dateAcquired, setDateAcquired] = useState();
  // multiple authors should be possible
  const [authorList, setAuthorList] = useState([
    {
      authorid: nanoid(5),
      fname: "",
      lname: "",
    },
  ]);
  const [courses, setCourses] = useState(null);
  const [publisher, setPublisher] = useState("");
  const [numOfCopies, setNumOfCopies] = useState(0);
  const [description, setDescription] = useState("");
  const [bookCover, setBookCover] = useState(null);

  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userInput = {
        title,
        ISBN: isbn,
        authors: authorList,
        subjects: courses,
        physicalDesc: description,
        publisher,
        numberOfCopies: numOfCopies,
        bookCoverLink: bookCover,
        datePublished,
        dateAcquired,
      };
      console.log(userInput);
      await ResourceServices.addBook(userInput);

      setSuccess("success");
      setShow(true);
      // event.target.reset();
      // window.location = "/add-new-book";
    } catch (err) {
      if (err.response && err.response.data) {
        alert(err.response.data.errorMessage);
        toast(err.response.data.errorMessage, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        // ToastNotification();
        // setSuccess("fail");
        // setShow(true);
        // alert(err.response.data.errorMessage); // some reason error message
      }
    }
  };

  // adds the courses on array
  const handleCourses = (courses) => {
    const values = [...courses].map((opt) => opt.value);
    setCourses(values);
  };

  const handleDate = (date) => {
    var newDate = new Date(date).toJSON();
    // var date = new Date(date);
    return newDate;
    // setDateAcquired(date);
  };

  return (
    <div className="add-res-form-cont">
      <form id="addBookForm" autoComplete="off">
        <div className="form-container">
          <div className="res-primary-info">
            <h2>
              <b>Primary Info</b>
            </h2>
            <hr />
            <div className="primaryfields">
              <label htmlFor="resTitle">Title: &nbsp; </label>
              <input
                type="text"
                id="resTitle"
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
              />
            </div>
            <div className="primaryfields">
              <label htmlFor="publisher">Publisher: &nbsp; </label>
              <input
                type="text"
                id="publisher"
                onChange={(event) => {
                  setPublisher(event.target.value);
                }}
              />
            </div>
            <div className="primaryfields">
              <label htmlFor="datePublished">Date Published: &nbsp; </label>
              <input
                type="date"
                id="datePublished"
                required
                onChange={(event) => {
                  setDatePublished(handleDate(event.target.value));
                }}
              />
            </div>
            <div className="primaryfields">
              <label htmlFor="dateAcquired">Date Acquired: &nbsp; </label>
              <input
                type="date"
                id="dateAcquired"
                required
                onChange={(event) => {
                  setDateAcquired(handleDate(event.target.value));
                }}
              />
            </div>
            {/* Author fields */}
            <div className="authors-group">
              <h5>Author(s):</h5>
              {/* button adds fields for author */}
              <button
                id="addAuthor"
                onClick={() => {
                  setAuthorList((currentAuthors) => [
                    ...currentAuthors,
                    {
                      // author needs to generate ID para di madelete lahat ng fields in one button click
                      authorid: nanoid(5),
                      fname: "",
                      lname: "",
                    },
                  ]);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-plus"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
                Add Author
              </button>

              <br />
              <br />
              <br />
              {authorList.map((p, index) => {
                return (
                  <div key={p.authorid}>
                    {/* AUTHOR FIRST NAME FIELD */}
                    <div className="primaryfields">
                      <label htmlFor="resAuthorFN">
                        &nbsp;&nbsp;&nbsp;&nbsp;First Name: &nbsp;{" "}
                      </label>

                      <input
                        type="text"
                        id="resAuthorFN"
                        // name="fname"
                        required
                        value={p.fname}
                        onChange={(e) => {
                          const fname = e.target.value;
                          setAuthorList((currentAuthors) =>
                            produce(currentAuthors, (v) => {
                              v[index].fname = fname;
                            })
                          );
                          // we call setAuthorList, and return a new array with a new value for the first name (instead of default fname)
                        }}
                      />
                    </div>

                    {/* AUTHOR LAST NAME FIELD */}
                    <div className="primaryfields">
                      <label htmlFor="resAuthorLN">
                        &nbsp;&nbsp;&nbsp;&nbsp;Last Name: &nbsp;{" "}
                      </label>
                      <input
                        type="text"
                        id="resAuthorLN"
                        required
                        // name="lname"
                        value={p.lname}
                        onChange={(e) => {
                          const lname = e.target.value;
                          setAuthorList((currentAuthors) =>
                            produce(currentAuthors, (v) => {
                              v[index].lname = lname;
                            })
                          );
                          // we call setAuthorList, and return a new array with a new value for the first name (instead of default fname)
                        }}
                      />
                    </div>

                    {/* button deletes author fields */}
                    <button
                      id="deleteAuthor"
                      onClick={() => {
                        setAuthorList((currentAuthors) =>
                          currentAuthors.filter(
                            (x) => x.authorid !== p.authorid
                          )
                        );
                        // function checks if Author-To-Be-Deleted exists.
                        // function deletes ALL instances of same author to be deleted
                        // we generate a random id so no 2 author fields are the same
                        // hence no faulty deleting
                        // wag nalang istore si author id sa db
                      }}
                    >
                      Delete Author
                    </button>
                    <br />
                    <br />
                    <br />
                  </div>
                );
              })}

              {/* for testing only: */}
              {/* <div className = "testdiv">
                                {JSON.stringify(authorList, null, 2)}
                            </div> */}
            </div>{" "}
            {/* closing tag for authors group */}
          </div>{" "}
          {/* Primary Info closing tag */}
          <div className="res-primary-info">
            <h2>
              {" "}
              <b>Book</b>{" "}
            </h2>
            <hr />
            <div className="primaryfields">
              <label htmlFor="bookISBN">ISBN: &nbsp; </label>
              <input
                type="text"
                id="bookISBN"
                onChange={(event) => {
                  setISBN(event.target.value);
                }}
              />
            </div>
            <div className="primaryfields">
              <label htmlFor="physDescription">
                Physical Description: &nbsp;{" "}
              </label>
              <textarea
                id="physDescription"
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
              />
            </div>
            <div className="primaryfields">
              <label htmlFor="availBookCopies">
                No. of copies available: &nbsp;{" "}
              </label>
              <input
                type="number"
                id="availBookCopies"
                defaultValue={0}
                onChange={(event) => {
                  if (event.target.value < 0 || !event.target.value) {
                    event.target.value = event.target.defaultValue;
                  }
                  setNumOfCopies(event.target.value);
                }}
              />
            </div>
            <div className="bookRelatedCourses">
              <br />
              Related Courses:
              <Select
                id="relatedCourses"
                isMulti
                placeholder={"Courses..."}
                options={courseList}
                value={courseList.find((obj) => obj.value === courses)}
                onChange={(courses) => handleCourses(courses)}
              ></Select>
            </div>
            <br />
            <div className="primaryfields">
              <label htmlFor="bookCover"> Book Cover: &nbsp; </label>
              <input
                type="text"
                onChange={(event) => {
                  setBookCover(event.target.value);
                }}
              />
            </div>
            <br />
            <br />
            <br />
            <button type="submit" id="saveResource" onClick={handleSubmit}>
              Save
            </button>
          </div>
        </div>
      </form>
      <StatusModal
        message={success}
        name={"Book"}
        show={show}
        setShow={setShow}
        operation={"add"}
        pathAfter={"/add-new-book/"}
      />
    </div>
  );
};

export default AddBookFormContainer;
