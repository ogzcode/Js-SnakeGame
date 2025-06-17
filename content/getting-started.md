---
title: Başlangıç Rehberi
description: Bu dokümantasyon sistemi Nuxt Content kullanarak oluşturulmuştur.
---

# Başlangıç Rehberi

Bu dokümantasyon sistemi **Nuxt Content** kullanarak oluşturulmuştur.

## Kurulum

Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları takip edin:

### Gereksinimler

- Node.js 18+ sürümü
- npm veya yarn paket yöneticisi
- Git

### Adım Adım Kurulum

1. Repository'yi klonlayın
2. Bağımlılıkları yükleyin
3. Geliştirme sunucusunu başlatın

## Özellikler

### Ana Özellikler

- ✅ Markdown dosyalarını otomatik render etme
- ✅ Modern ve responsive tasarım
- ✅ SEO dostu yapı
- ✅ Kolay navigasyon
- ✅ Dinamik sayfa içi navigasyon

### Gelişmiş Özellikler

- Otomatik table of contents
- Smooth scroll navigasyon
- Active section highlighting
- Responsive sidebar tasarım

## Nasıl Kullanılır

### İçerik Ekleme

1. `content/` klasörüne yeni markdown dosyaları ekleyin
2. Ana sayfada otomatik olarak listelenecektir
3. Her sayfa kendi URL'sine sahip olacaktır

### Markdown Formatı

Markdown dosyalarınızın başında frontmatter ekleyin:

```yaml
---
title: Sayfa Başlığı
description: Sayfa açıklaması
---
```

## Kod Örneği

```javascript
const example = "Bu bir kod örneğidir";
console.log(example);
```

### TypeScript Desteği

```typescript
interface User {
  name: string;
  email: string;
}

const user: User = {
  name: "Örnek Kullanıcı",
  email: "ornek@email.com"
};
```

## Sonuç

> **Not:** Bu sistem TypeScript ve TailwindCSS ile geliştirilmiştir.

İyi çalışmalar! 🚀 