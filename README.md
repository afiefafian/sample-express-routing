# sample-express-routing
Sample routing with Express.js
- Route file per controller for better management
- All route files imported to routes/index.js
- And we can import all routes with just one file (routes/index.js) to app.js

Folder Structure
<pre>
.
├── README.md
├── index.js
├── package-lock.json
├── package.json
└── src
    ├── app.js
    ├── controllers
    │   ├── resource1.js
    │   └── resource2.js
    └── routes
        ├── index.js
        ├── resource1.js
        └── resource2.js
</pre>