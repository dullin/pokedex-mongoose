# pokedex-mongoose

# API

## Requests

### **GET** - /api/pokedex

#### CURL

```sh
curl -X GET "http://localhost:3000/api/pokedex"
```

### **POST** - /api/pokedex

#### CURL

```sh
curl -X POST "http://localhost:3000/api/pokedex" \
    -H "Content-Type: application/json; charset=utf-8" \
    --data-raw "$body"
```

#### Header Parameters

- **Content-Type** should respect the following schema:

```
{
  "type": "string",
  "enum": [
    "application/json; charset=utf-8"
  ],
  "default": "application/json; charset=utf-8"
}
```

#### Body Parameters

- **body** should respect the following schema:

```
{
  "type": "string",
  "default": "{\"name\":\"Charmander\",\"_id\":\"1\",\"type\":\"Fire\"}"
}
```

### **POST** - /api/pokedex

#### CURL

```sh
curl -X POST "http://localhost:3000/api/pokedex" \
    -H "Content-Type: application/json; charset=utf-8" \
    --data-raw "$body"
```

#### Header Parameters

- **Content-Type** should respect the following schema:

```
{
  "type": "string",
  "enum": [
    "application/json; charset=utf-8"
  ],
  "default": "application/json; charset=utf-8"
}
```

#### Body Parameters

- **body** should respect the following schema:

```
{
  "type": "string",
  "default": "{\"name\":\"Bulbasaur\",\"_id\":\"4\",\"type\":\"Grass\"}"
}
```

### **GET** - /api/pokedex/1

#### CURL

```sh
curl -X GET "http://localhost:3000/api/pokedex/1"
```

### **GET** - /api/pokedex/8

#### CURL

```sh
curl -X GET "http://localhost:3000/api/pokedex/8"
```

### **PATCH** - /api/pokedex/1

#### CURL

```sh
curl -X PATCH "http://localhost:3000/api/pokedex/1" \
    -H "Content-Type: application/json; charset=utf-8" \
    --data-raw "$body"
```

#### Header Parameters

- **Content-Type** should respect the following schema:

```
{
  "type": "string",
  "enum": [
    "application/json; charset=utf-8"
  ],
  "default": "application/json; charset=utf-8"
}
```

#### Body Parameters

- **body** should respect the following schema:

```
{
  "type": "string",
  "default": "{\"type\":\"Fire / Fighting\"}"
}
```

### **DELETE** - /api/pokedex/1

#### CURL

```sh
curl -X DELETE "http://localhost:3000/api/pokedex/1"
```

### **DELETE** - /api/pokedex/reset

#### CURL

```sh
curl -X DELETE "http://localhost:3000/api/pokedex/reset"
```

## References

