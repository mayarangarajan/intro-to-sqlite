# Intro to SQLite
This repo provides a very basic template for using `sqlite` with `express`. 

## Assignment
Write the rest of the missing endpoints in `index.ts` to create a simple backend for a CRUD app.  This will require you to write code in `db.ts` as well!

The [documentation for sqlite3](https://github.com/mapbox/node-sqlite3/wiki/API) will be very helpful.

Make sure that you return the correct HTTP status code as well.

### index.js
Most of this file should look familiar. Look at past assignments to review what each section of this file does.

You can ignore the middleware code -- at a very basic level, this code allows us to test our front end later on in this course.

### db.js
The database `foo.db` contains one table named `user`.

Use DB Browser to explore this database before you write any code!


### test runs

1. get all users: get localhost:4000/users

[
    {
        "id": 1,
        "name": "foo"
    },
    {
        "id": 2,
        "name": "bar"
    },
    {
        "id": 3,
        "name": "baz"
    },
    {
        "id": 4,
        "name": "wobble"
    }
]

2. specific user test: get localhost:4000/user/2

{
    "id": 2,
    "name": "bar"
}


3. create: post localhost:4000/user


{
  "name": "maya r",
  "email": "maya.r@example.com"
}


{
    "id": 5,
    "name": "maya r"
}



4. update: put localhost:4000/user/1

{
  "name": "maya r",
  "email": "maya.r@example.com"
}

{
    "id": 1,
    "name": "maya r"
}

5. delete: localhost:4000/user/1 i deleted 1 and 2 so they may not work but 3 and 4 probably do 

User with ID 1 deleted

