import React from "react";

const Blog = () => {
  return (
    <div className="p-10 mb-8">
      <h1 className="text-2xl py-3 font-bold">What was differcence SQL & NOSQL ? </h1>
      <p>
        SQL is the programming language used to interface with relational
        databases. (Relational databases model data as records in rows and
        tables with logical links between them). NoSQL is a class of DBMs that
        are non-relational and generally do not use SQL.
      </p>
      <h1 className="text-2xl py-3 font-bold">What is jwt and how does it works? </h1>
      <p>
        What is JSON Web Token? JSON Web Token (JWT) is an open standard (RFC
        7519) that defines a compact and self-contained way for securely
        transmitting information between parties as a JSON object. This
        information can be verified and trusted because it is digitally signed.
      </p>

      <h1 className="text-2xl py-3 font-bold">
        What is difference javascript and NodeJs?
      </h1>

      <p>
        JavaScript is a simple programming language that can be used with any
        browser that has the JavaScript Engine installed. Node. js, on the other
        hand, is an interpreter or execution environment for the JavaScript
        programming language
      </p>
      <h1 className="text-2xl py-3 font-bold">
        How does Nodejs handle multiple request at the same time??
      </h1>
      <p>
        {" "}
        How NodeJS handle multiple client requests? NodeJS receives multiple
        client requests and places them into EventQueue. NodeJS is built with
        the concept of event-driven architecture. NodeJS has its own EventLoop
        which is an infinite loop that receives requests and processes them
      </p>
    </div>
  );
};

export default Blog;
