# rest-rant
| Method | Path | Purpose |
|--------|---------|----------
| GET | / | Home page|
| GET | /places | places index page |
| POST | /places| Create new place |
| GET | /places/new | Form page for creating a new place |
|GET|/places/:id|Details about a particular place
|PUT| /places/:id| Update a particiular place
|GET|/places/:id/edit|Form page for editing an existing place
|DELETE|/places/:id| Delete a particular place
|POST|/places/:id/rant|Create a rant(comment) about a particular place
|DELETE|/places/:id/rant/:rantId|Delete a rant (comment) about a particular place
|GET|*|404 page (matches any route not defined above)|

`places`
- `name` - String
- `city` - String
- `state` - String
- `cuisines` - String
- `pic` - String