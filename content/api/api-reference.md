---
title: API Reference
description: This section contains the current API endpoints.
category: API
order: 2
---

# API Reference

This section contains the current API endpoints.

## Basic Endpoints

### GET /api/users
Get all users.

**Parameters:**
- `limit` (optional): Number of records per page
- `offset` (optional): Start point

**Example Response:**

```json
{
  "users": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com"
    }
  ],
  "total": 1
}
```

### POST /api/users
Create a new user.

**Body:**
```json
{
  "name": "string",
  "email": "string"
}
```

## Authentication

To use the API, you need to add the `Authorization` header with the Bearer token:

```bash
curl -H "Authorization: Bearer YOUR_TOKEN" \
     https://api.example.com/users
```

## Error Codes

| Code | Description |
|------|-------------|
| 400 | Invalid request |
| 401 | Authorization error |
| 404 | Resource not found |
| 500 | Server error | 