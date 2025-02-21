
## 1. What is the resource path (listed in index.js)?
The resource paths are:
- `/user/create` - Creates a new user.
- `/user/:id` - Retrieves a user by ID.
- `/search/author` - Filters books by author.
- `/search/book` - Filters books by title.

## 2. What is the full path, including the domain of the website above?
If running locally, the full paths are:
```
http://localhost:3999/user/create
http://localhost:3999/user/:id
http://localhost:3999/search/author
http://localhost:3999/search/book
```
The domain is `localhost:3999` when run locally.

## 3. Extra Check: If this was a POST request that CREATED something to this list of resources that we are getting, what is the resource path? What else would you need to pass in? (Recall: Postman)

- **Resource Path for Creating a User:** `/user/create`
- **What You Need to Pass In (JSON Body Example):**
```json
{
  "username": "maya",
  "password": "webdev",
  "email": "maya_rangarajan@horacemann.com"
}

