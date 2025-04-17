# Express.js CRUD API Exercise

## Project Structure

```
.
├── public
│   │
│   └── uploads
│
├── src
│   ├── classes
│   │   │
│   │   └── errors
│   │
│   ├── config
│   ├── data
│   ├── middlewares
│   ├── resources
│   │   │
│   │   └── contact
│   │
│   ├── services
│   └── app.js
│
└── .env
```

## Routes and available methods

```
/api/contacts
    - GET
    - POST
```

```

/api/contacts/:id
    - GET
    - PUT
    - DELETE

```

## Contact example

`src/data/contacts.json`

```json
{
	"id": 1,
	"firstName": "Nicholas",
	"lastName": "Gislason",
	"email": "Anabel86@gmail.com",
	"phone": "1-499-711-3262",
	"address": "49341 The Lane",
	"avatar": {
		"fieldname": "avatar",
		"originalname": "IMG_7616.jpg",
		"encoding": "7bit",
		"mimetype": "image/jpeg",
		"destination": "public/uploads/",
		"filename": "0199f005cff70e3c368849157f198fa4",
		"path": "public\\uploads\\0199f005cff70e3c368849157f198fa4",
		"size": 51776
	}
}
```
