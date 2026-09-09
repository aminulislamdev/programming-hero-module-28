export default function ApiBasics() {
  return (
    <div>
      {/* 
        API means Application Programming Interface.
        It allows different applications to communicate with each other.
        The frontend can request data from a server using HTTP methods
        like GET and POST, and the server sends a response.
      */}

      <h2>API Practice</h2>

      <h3>API Name: JSONPlaceholder</h3>

      {/* API URL is the web address used to access an API resource. */}

      <p>
        Users API:
        https://jsonplaceholder.typicode.com/users
      </p>

      <p>
        Posts API:
        https://jsonplaceholder.typicode.com/posts
      </p>

      {/* 
        Endpoint is a specific URL where we can request a particular resource.
        For example, /users is the users endpoint and /posts is the posts endpoint.
      */}

      {/* 
        API can return different types of data.
        Usually, APIs return data in JSON format.
        The response also contains a status code, such as 200 for success.
      */}

      <p>
        API can return data such as users, posts, products, comments, etc.
      </p>
    </div>
  );
}