import React from "react";
import "./About.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";         

const About = () => {
    const notify = () => {
        toast.success("We got your message!", {
            position: toast.POSITION.BOTTOM_RIGHT,
        });
    };

    return (
        <div style={style.about}>
            <span className="pageTitle">About Us</span>

            <div style={style.content}>
                <p>Hello, wishes from cinematime</p>

                <p>
                    Cinema time is the recommendation resource for quality entertainment.
                    As the leading online website of movie and TV show reviews from
                    critics, we provide users with a comprehensive guide to what’s Fresh –
                    and what’s best –at home. you will find more user-friendly features,
                    faster loading with improved search engine optimization, a Collections
                    section of movies by genre, pegination, and many other delights. So
                    sit back, grab your popcorn and join in the conversation!
                </p>

                <p>
                    We will continue to bring not only current reviews of films from major
                    studios, but one of the most comprehensive coverage of reviews from
                    independent and documentary film makers, as well as reviews of leading
                    television or cable series and shows from various streaming platforms.
                    you will find more user-friendly features, faster loading with
                    improved search engine optimization, a Collections section of movies
                    by genre, cleaner more aesthetically pleasing graphics, and many other
                    delights. So sit back, grab your popcorn and join in the conversation!
                </p>
                <br />

                <h3>Contact Us</h3>
                <input
                    className="email"
                    placeholder="Email"
                    style={style.email}
                ></input>
                <br />
                <br />
                <input
                    className="message"
                    placeholder="Message"
                    style={style.message}
                ></input>
                <br />
                <br />

                <button
                    onClick={notify}
                    style={{
                        color: "black",
                        fontSize: 15,
                        backgroundColor: "#7393B3",
                        height: 35,
                        borderRadius: 5,
                    }}
                >
                    submit
                </button>
                <ToastContainer />
            </div>
            <br />
        </div>
    );
};

export default About;

const style = {
    about: {
        border: "1px solid #2d313a",
        borderRadius: 8,
        padding: 20,
        paddingTop: "3%",
        boxShadow: "5px 5px 10px 10px #2d313a",
    },

    content: {
        padding: "5%",
    },

    email: {
        backgroundColor: "#E3EBF8",
        border: "2px solid black",
        borderRadius: 5,
        height: 35,
        width: 250,
    },

    message: {
        backgroundColor: "#E3EBF8",
        border: "2px solid black",
        borderRadius: 5,
        height: 50,
        width: 250,
        alignItems: "start",
    },
};
