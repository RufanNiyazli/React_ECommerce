Mövcud qovluq strukturuna əsaslanaraq **README** faylını layihə quruluşuna uyğun şəkildə yeniləyə bilərik. Bu fayl komponentlər, səhifələr, Redux strukturu və CSS stil fayllarını necə təşkil etdiyiniz haqqında məlumatları əks etdirəcək.

---

# **E-commerce Website**

## **Təsvir**  
Bu layihə React və Redux ilə hazırlanmış e-ticarət platformasıdır. Layihədə məhsul siyahısını göstərmək, detallarına baxmaq və səbətə əlavə etmək kimi əsas funksionallıqlar mövcuddur. Sadə və komponent əsaslı arxitektura tətbiq edilib.

---

## **Qovluq Quruluşu**  
Layihənin qovluq quruluşu belədir:  

```
/Components
    ├── DrawerComponent.jsx    # Yan menyu üçün komponent
    ├── Header.jsx             # Sayt başlığı
    ├── ProductDetails.jsx     # Məhsul detalları
    ├── ProductList.jsx        # Məhsulların siyahısı

/Config
    ├── Container.jsx          # Layihə konteyneri (global tərtibat üçün)

/Css
    ├── Drawer.css             # DrawerComponent üçün stil
    ├── Header.css             # Header üçün stil
    ├── Product.css            # Məhsul siyahısı üçün stil
    ├── ProductDetails.css     # Məhsul detalları üçün stil

/Image
    ├── logo.jpg               # Logo faylı
    ├── Logo.png               # Alternativ logo faylı

/Pages
    ├── Home.jsx               # Ana səhifə komponenti

/Redux
    ├── basketSlice.jsx        # Səbət vəziyyətinin idarəsi (Redux Toolkit slice)
    ├── productSlice.jsx       # Məhsul vəziyyətinin idarəsi
    ├── store.jsx              # Redux Store konfiqurasiyası

App.css                        # Ümumi stil
App.jsx                        # Layihənin əsas faylı
```

---

## **Xüsusiyyətlər**  
- **Dinamik Məhsul Siyahısı:** API-dan məlumatları alır və məhsulları siyahıda göstərir.  
- **Məhsul Detalları:** Məhsul haqqında ətraflı məlumat göstərilir.  
- **Səbət İdarəsi:** Redux istifadə edərək məhsulları səbətə əlavə və ya silmək imkanı.  
- **Responsiv Dizayn:** Müxtəlif cihazlara uyğun tərtibat.  

---

## **Quraşdırma və İstifadə**  
### 1. **Tələblər**  
- Node.js (və npm/yarn).  
- Backend API server.  

### 2. **Quraşdırma**  
1. Repository-ni klonlayın:  
   ```bash
   git clone https://github.com/your-repo/ecommerce-website.git
   ```
2. Layihə qovluğuna keçin:  
   ```bash
   cd ecommerce-website
   ```
3. NPM vasitəsilə lazımi paketləri quraşdırın:  
   ```bash
   npm install
   ```
4. API ünvanını `.env` faylına əlavə edin:  
   ```plaintext
   REACT_APP_API_URL=<API URL>
   ```
5. Serveri işə salın:  
   ```bash
   npm start
   ```
6. Brauzerdə açın: [http://localhost:3000](http://localhost:3000)

---

## **Redux Axını**  
Layihədə Redux Toolkit istifadə olunur.  
- **basketSlice.jsx:** Səbət məlumatlarını idarə edir (məhsul əlavə/silmə).  
- **productSlice.jsx:** Məhsul siyahısını API-dan alır və idarə edir.  
- **store.jsx:** Redux store-u tərtib edir və tətbiqə daxil edir.  

---

## **Strukturun Əsas Məntiqi**  
- **Components:** Veb saytın təkrarlanan hissələri (Başlıq, Məhsul siyahısı və s.).  
- **Pages:** Layihədə əsas səhifələr (məsələn, ana səhifə).  
- **Redux:** Vəziyyət idarəsi üçün istifadə olunan fayllar.  
- **CSS:** Hər bir komponent üçün ayrılmış stil faylları.  

---

## **Təkmilləşdirmə Planı**  
- **Admin Paneli:** Məhsulların idarə olunması.  
- **İstifadəçi Autentifikasiyası:** Giriş və qeydiyyat funksionallığı.  
- **Ödəniş Sistemi:** Stripe və ya PayPal inteqrasiyası.  

---

## **Lisenziya**  
Bu layihə [MIT Lisenziyası](https://opensource.org/licenses/MIT) altında lisenziyalaşdırılıb.


