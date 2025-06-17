---
title: API Referansı
description: Bu bölümde mevcut API endpoint'lerini bulabilirsiniz.
---

# API Referansı

Bu bölümde mevcut API endpoint'lerini bulabilirsiniz.

## Temel Endpoint'ler

### GET /api/users
Tüm kullanıcıları getirir.

**Parametreler:**
- `limit` (optional): Sayfa başına kayıt sayısı
- `offset` (optional): Başlangıç noktası

**Örnek Response:**
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
Yeni kullanıcı oluşturur.

**Body:**
```json
{
  "name": "string",
  "email": "string"
}
```

## Kimlik Doğrulama

API'yi kullanmak için `Authorization` header'ına Bearer token eklemeniz gerekir:

```bash
curl -H "Authorization: Bearer YOUR_TOKEN" \
     https://api.example.com/users
```

## Hata Kodları

| Kod | Açıklama |
|-----|----------|
| 400 | Geçersiz istek |
| 401 | Yetkilendirme hatası |
| 404 | Kaynak bulunamadı |
| 500 | Sunucu hatası | 