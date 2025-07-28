// Global variables for cart and current category selection
let cart = [];
let currentCategory = 'ทั้งหมด';

// Admin password (FOR DEMONSTRATION ONLY - NOT SECURE FOR PRODUCTION)
const ADMIN_PASSWORD = 'saifu.120447.';

// Product data organized by category, now with baseName and variants
const products = {
     "สายร้อน": [
        {
            baseName: "DEE",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=DEE",
            inStock: true, //ฟ เพิ่มสถานะสต็อก
            variants: [
                { type: "แดง", price: 180 },
                { type: "เหลือง", price: 180 }
            ],
            description: "บุหรี่ DEE ให้ความรู้สึกร้อนแรงและเข้มข้น เหมาะสำหรับผู้ที่ชื่นชอบรสชาติจัดจ้าน"
        },
        {
            baseName: "ROYAL ASCOT",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=ROYAL+ASCOT",
            inStock: true,
            variants: [
                { type: "แดง", price: 190 }
            ],
            description: "ROYAL ASCOT มอบประสบการณ์การสูบที่หรูหราและมีระดับ ด้วยกลิ่นอายคลาสสิก"
        },
        {
            baseName: "ZETRA",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=ZETRA",
            inStock: false, // ตัวอย่างสินค้าหมด
            variants: [
                { type: "แดง", price: 180 }
            ],
            description: "ZETRA รสชาติเข้มข้นถึงใจ ให้ความรู้สึกอบอุ่นทุกครั้งที่สูบ"
        },
        {
            baseName: "ZEUS",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=ZEUS",
            inStock: true,
            variants: [
                { type: "แดง", price: 200 },
                { type: "เหลือง", price: 200 }
            ],
            description: "ZEUS บุหรี่ที่มีพลังและรสชาติที่ลงตัว ให้ความรู้สึกสดชื่นและกระปรี้กระเปร่า"
        },
        {
            baseName: "GTR PLATINUM",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=GTR+PLATINUM",
            inStock: true,
            variants: [
                { type: "Original", price: 220 }
            ],
            description: "GTR PLATINUM มอบความหรูหราและความประณีตในทุกคำสูบ"
        },
        {
            baseName: "SPA",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=SPA",
            inStock: true,
            variants: [
                { type: "แดง", price: 220 }
            ],
            description: "SPA ให้ความรู้สึกผ่อนคลายและสบาย ด้วยกลิ่นหอมอ่อนๆ ที่เป็นเอกลักษณ์"
        },
        {
            baseName: "CAPITAL",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=CAPITAL",
            inStock: true,
            variants: [
                { type: "แดง", price: 220 }
            ],
            description: "CAPITAL บุหรี่ที่ให้ความรู้สึกมั่นคงและมีสไตล์ เหมาะสำหรับทุกโอกาส"
        },
        {
            baseName: "ORION",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=ORION",
            inStock: true,
            variants: [
                { type: "แดง", price: 220 },
                { type: "เหลือง", price: 220 }
            ],
            description: "ORION ให้รสชาติที่กลมกล่อมและนุ่มนวล ชวนให้นึกถึงดวงดาวบนท้องฟ้า"
        },
        {
            baseName: "MOND",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=MOND",
            inStock: true,
            variants: [
                { type: "ดำทอง", price: 220 },
                { type: "ดำน้ำเงิน", price: 220 }
            ],
            description: "MOND บุหรี่ที่มีสไตล์และรสชาติที่หลากหลาย ให้คุณเลือกตามอารมณ์"
        },
        {
            baseName: "HARVY",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=HARVY",
            inStock: true,
            variants: [
                { type: "แดง", price: 200 },
                { type: "เขียว", price: 200 }
            ],
            description: "HARVY ให้ความรู้สึกสดชื่นและมีชีวิตชีวา เหมาะสำหรับวันที่ต้องการความกระปรี้กระเปร่า"
        },
        {
            baseName: "COMPLY ORIGINAL",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=COMPLY",
            inStock: true,
            variants: [
                { type: "ดำแดง", price: 220 }
            ],
            description: "COMPLY ORIGINAL รสชาติต้นตำรับที่คุ้นเคย ให้ความรู้สึกอบอุ่นและสบาย"
        },
        {
            baseName: "SANTARA",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=SANTARA",
            inStock: true,
            variants: [
                { type: "แดง", price: 200 },
                { type: "น้ำเงิน", price: 200 }
            ],
            description: "SANTARA มอบความสดชื่นและรสชาติที่ลงตัว ให้คุณรู้สึกผ่อนคลาย"
        },
        {
            baseName: "TESS",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=TESS",
            inStock: true,
            variants: [
                { type: "แดง", price: 210 },
                { type: "เขียว", price: 210 }
            ],
            description: "TESS บุหรี่ที่ให้ความรู้สึกนุ่มนวลและสบาย เหมาะสำหรับทุกช่วงเวลา"
        },
        {
            baseName: "VESS",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=VESS",
            inStock: true,
            variants: [
                { type: "แดง", price: 200 },
                { type: "เขียว", price: 200 },
                { type: "น้ำเงิน", price: 200 }
            ],
            description: "VESS บุหรี่ที่มีรสชาติหลากหลาย ให้คุณเลือกตามความชอบ"
        },
        {
            baseName: "VESS (แฟนตาซี)",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=VESS+FANTASY",
            inStock: true,
            variants: [
                { type: "แดง", price: 220 }
            ],
            description: "VESS แฟนตาซี มอบประสบการณ์การสูบที่แปลกใหม่และน่าตื่นเต้น"
        },
        {
            baseName: "VESS (แฟนตาซี) 2",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=VESS+FANTASY2",
            inStock: true,
            variants: [
                { type: "แดง", price: 230 }
            ],
            description: "VESS แฟนตาซี 2 รสชาติที่เข้มข้นขึ้น ให้ความรู้สึกที่แตกต่าง"
        },
        {
            baseName: "VESS",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=VESS+GOLD",
            inStock: true,
            variants: [
                { type: "GOLD", price: 250 }
            ],
            description: "VESS GOLD มอบความหรูหราและรสชาติที่ลงตัวในทุกคำสูบ"
        },
        {
            baseName: "VESS",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=VESS+GREEN",
            inStock: true,
            variants: [
                { type: "เขียว", price: 210 }
            ],
            description: "VESS เขียว ให้ความรู้สึกสดชื่นและเย็นสบาย เหมาะสำหรับวันที่ต้องการความสดใส"
        },
        {
            baseName: "VESS (VIP GUM MINT)",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=VESS+VIP",
            inStock: true,
            variants: [
                { type: "ดำเหลือง", price: 250 }
            ],
            description: "VESS VIP GUM MINT มอบความสดชื่นของมิ้นต์และรสชาติที่เข้มข้น"
        },
        {
            baseName: "ATLANTA",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=ATLANTA",
            inStock: true,
            variants: [
                { type: "แดง", price: 240 },
                { type: "เขียว", price: 240 }
            ],
            description: "ATLANTA บุหรี่ที่ให้ความรู้สึกแข็งแกร่งและมีสไตล์ เหมาะสำหรับผู้ที่ต้องการความแตกต่าง"
        },
        {
            baseName: "CAVALLO",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=CAVALLO",
            inStock: true,
            variants: [
                { type: "ดำแดง", price: 230 },
                { type: "ดำน้ำเงิน", price: 230 }
            ],
            description: "CAVALLO มอบความหรูหราและรสชาติที่ลงตัว ให้คุณรู้สึกพิเศษในทุกคำสูบ"
        },
        {
            baseName: "235",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=235",
            inStock: true,
            variants: [
                { type: "แดง", price: 230 },
                { type: "เขียว", price: 230 }
            ],
            description: "บุหรี่ 235 รสชาติคลาสสิกที่คุ้นเคย ให้ความรู้สึกอบอุ่นและสบาย"
        },
        {
            baseName: "24",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=24",
            inStock: true,
            variants: [
                { type: "VXL", price: 230 },
                { type: "แดง", price: 230 }
            ],
            description: "บุหรี่ 24 ให้ความรู้สึกสดชื่นและมีชีวิตชีวา เหมาะสำหรับวันที่ต้องการความกระปรี้กระเปร่า"
        },
        {
            baseName: "WALTON",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=WALTON",
            inStock: true,
            variants: [
                { type: "แดง (ใหญ่)", price: 230 },
                { type: "แดง (เล็ก)", price: 230 },
                { type: "เขียว (ใหญ่)", price: 230 },
                { type: "เขียว (เล็ก)", price: 230 }
            ],
            description: "WALTON บุหรี่ที่ให้ความรู้สึกนุ่มนวลและสบาย เหมาะสำหรับทุกช่วงเวลา"
        },
        {
            baseName: "MILANO",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=MILANO",
            inStock: true,
            variants: [
                { type: "แดง", price: 230 }
            ],
            description: "MILANO มอบความหรูหราและรสชาติที่ลงตัว ให้คุณรู้สึกพิเศษในทุกคำสูบ"
        },
        {
            baseName: "MILANOTO",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=MILANOTO",
            inStock: true,
            variants: [
                { type: "Original", price: 240 }
            ],
            description: "MILANOTO รสชาติต้นตำรับที่คุ้นเคย ให้ความรู้สึกอบอุ่นและสบาย"
        },
        {
            baseName: "MILANO",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=MILANO+GOLD",
            inStock: true,
            variants: [
                { type: "ทอง", price: 240 },
                { type: "น้ำเงิน", price: 240 }
            ],
            description: "MILANO ทอง/น้ำเงิน ให้ความรู้สึกสดชื่นและมีชีวิตชีวา เหมาะสำหรับวันที่ต้องการความกระปรี้กระเปร่า"
        },
        {
            baseName: "MILANO (แฟนตาซี)",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=MILANO+FANTASY",
            inStock: true,
            variants: [
                { type: "ทอง", price: 260 }
            ],
            description: "MILANO แฟนตาซี มอบประสบการณ์การสูบที่แปลกใหม่และน่าตื่นเต้น"
        },
        {
            baseName: "MILANO",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=MILANO+PURPLE",
            inStock: true,
            variants: [
                { type: "ม่วงแดง", price: 260 }
            ],
            description: "MILANO ม่วงแดง ให้ความรู้สึกที่แตกต่างและมีสไตล์ เหมาะสำหรับผู้ที่ต้องการความพิเศษ"
        },
        {
            baseName: "GM",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=GM",
            inStock: true,
            variants: [
                { type: "แดง", price: 230 }
            ],
            description: "GM บุหรี่ที่ให้ความรู้สึกมั่นคงและมีสไตล์ เหมาะสำหรับทุกโอกาส"
        },
        {
            baseName: "LM",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=LM",
            inStock: true,
            variants: [
                { type: "แดง", price: 250 },
                { type: "เขียว", price: 250 }
            ],
            description: "LM บุหรี่ที่ให้ความรู้สึกสดชื่นและมีชีวิตชีวา เหมาะสำหรับวันที่ต้องการความกระปรี้กระเปร่า"
        },
        {
            baseName: "LM 71",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=LM+71",
            inStock: true,
            variants: [
                { type: "แดง", price: 290 },
                { type: "เขียว", price: 290 }
            ],
            description: "LM 71 รสชาติเข้มข้นถึงใจ ให้ความรู้สึกอบอุ่นทุกครั้งที่สูบ"
        },
        {
            baseName: "CAPITAL",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=CAPITAL+RED+BLACK",
            inStock: true,
            variants: [
                { type: "แดงดำ", price: 240 }
            ],
            description: "CAPITAL แดงดำ บุหรี่ที่ให้ความรู้สึกมั่นคงและมีสไตล์ เหมาะสำหรับทุกโอกาส"
        },
        {
            baseName: "CAPITAL",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=CAPITAL+MULTI",
            inStock: true,
            variants: [
                { type: "แดง", price: 280 },
                { type: "เขียว", price: 280 },
                { type: "เหลือง", price: 280 }
            ],
            description: "CAPITAL หลากสี ให้รสชาติที่หลากหลายและน่าสนใจ เหมาะสำหรับผู้ที่ชอบความแตกต่าง"
        },
        {
            baseName: "GOLD MOUNT",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=GOLD+MOUNT",
            inStock: true,
            variants: [
                { type: "แดงส้ม", price: 270 },
                { type: "เขียวดำ", price: 270 },
                { type: "ดำส้ม", price: 270 }
            ],
            description: "GOLD MOUNT บุหรี่ที่ให้ความรู้สึกหรูหราและมีระดับ ด้วยกลิ่นอายคลาสสิก"
        },
        {
            baseName: "GOLD MOUNT",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=GOLD+MOUNT+ORANGE",
            inStock: true,
            variants: [
                { type: "แดงส้ม", price: 270 },
                { type: "ดำส้ม", price: 270 }
            ],
            description: "GOLD MOUNT รสชาติเข้มข้นถึงใจ ให้ความรู้สึกอบอุ่นทุกครั้งที่สูบ"
        },
        {
            baseName: "GOLD MOUNT (บางยี่ห้อ) B",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=GOLD+MOUNT+BLACK+RED",
            inStock: true,
            variants: [
                { type: "ดำแดง", price: 260 }
            ],
            description: "GOLD MOUNT ดำแดง บุหรี่ที่ให้ความรู้สึกมั่นคงและมีสไตล์ เหมาะสำหรับทุกโอกาส"
        },
        {
            baseName: "VOXX",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=VOXX",
            inStock: true,
            variants: [
                { type: "ดำ", price: 270 },
                { type: "แดง", price: 270 }
            ],
            description: "VOXX บุหรี่ที่มีสไตล์และรสชาติที่หลากหลาย ให้คุณเลือกตามอารมณ์"
        },
        {
            baseName: "TEXAS",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=TEXAS",
            inStock: true,
            variants: [
                { type: "แดง", price: 260 },
                { type: "เขียว", price: 260 },
                { type: "ดำ", price: 260 },
                { type: "ทอง", price: 260 }
            ],
            description: "TEXAS บุหรี่ที่ให้ความรู้สึกแข็งแกร่งและมีสไตล์ เหมาะสำหรับผู้ที่ต้องการความแตกต่าง"
        },
        {
            baseName: "TEXAS 2",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=TEXAS2",
            inStock: true,
            variants: [
                { type: "แดง", price: 280 },
                { type: "เขียว", price: 280 },
                { type: "ดำ", price: 280 },
                { type: "ทอง", price: 280 }
            ],
            description: "TEXAS 2 รสชาติที่เข้มข้นขึ้น ให้ความรู้สึกที่แตกต่าง"
        },
        {
            baseName: "TEXAS DULY",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=TEXAS+DULY",
            inStock: true,
            variants: [
                { type: "แดง", price: 300 },
                { type: "ดำ", price: 300 }
            ],
            description: "TEXAS DULY มอบความหรูหราและรสชาติที่ลงตัวในทุกคำสูบ"
        },
        {
            baseName: "MARLBORO (ของแท้)",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=MARLBORO+AUTHENTIC",
            inStock: true,
            variants: [
                { type: "แดง", price: 250 },
                { type: "เขียว", price: 250 },
                { type: "ทอง", price: 250 }
            ],
            description: "MARLBORO ของแท้ รสชาติต้นตำรับที่คุ้นเคย ให้ความรู้สึกอบอุ่นและสบาย"
        },
        {
            baseName: "MARLBORO",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=MARLBORO+RED+BLUE",
            inStock: true,
            variants: [
                { type: "แดง", price: 320 },
                { type: "น้ำเงิน", price: 320 }
            ],
            description: "MARLBORO แดง/น้ำเงิน ให้ความรู้สึกสดชื่นและมีชีวิตชีวา เหมาะสำหรับวันที่ต้องการความกระปรี้กระเปร่า"
        },
        {
            baseName: "PLATINUM",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=PLATINUM+BLACK+RED",
            inStock: true,
            variants: [
                { type: "ดำแดง", price: 250 }
            ],
            description: "PLATINUM ดำแดง บุหรี่ที่ให้ความรู้สึกมั่นคงและมีสไตล์ เหมาะสำหรับทุกโอกาส"
        },
        {
            baseName: "PLATINUM",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=PLATINUM+BLACK+RED2",
            inStock: true,
            variants: [
                { type: "ดำ", price: 250 },
                { type: "แดง", price: 250 }
            ],
            description: "PLATINUM ดำ/แดง ให้ความรู้สึกสดชื่นและมีชีวิตชีวา เหมาะสำหรับวันที่ต้องการความกระปรี้กระเปร่า"
        },
        {
            baseName: "JOHN (ของปลอม)",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=JOHN+FAKE",
            inStock: true,
            variants: [
                { type: "ดำ", price: 290 },
                { type: "เขียว", price: 290 }
            ],
            description: "JOHN ของปลอม รสชาติเข้มข้นถึงใจ ให้ความรู้สึกอบอุ่นทุกครั้งที่สูบ"
        },
        {
            baseName: "JOHN JOHN (ของแท้)",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=JOHN+AUTHENTIC",
            inStock: true,
            variants: [
                { type: "ดำ", price: 320 },
                { type: "ขาว", price: 320 }
            ],
            description: "JOHN JOHN ของแท้ มอบความหรูหราและรสชาติที่ลงตัวในทุกคำสูบ"
        },
        {
            baseName: "ASTRO (ของปลอม)",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=ASTRO+FAKE",
            inStock: true,
            variants: [
                { type: "ดำ", price: 290 },
                { type: "แดง", price: 290 }
            ],
            description: "ASTRO ของปลอม รสชาติเข้มข้นถึงใจ ให้ความรู้สึกอบอุ่นทุกครั้งที่สูบ"
        },
        {
            baseName: "MOND INTERNATIONAL",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=MOND+INTERNATIONAL",
            inStock: true,
            variants: [
                { type: "Original", price: 260 }
            ],
            description: "MOND INTERNATIONAL บุหรี่ที่มีสไตล์และรสชาติที่หลากหลาย ให้คุณเลือกตามอารมณ์"
        },
        {
            baseName: "ทรงพิมพ์ ดำรูป (ของปลอม)",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=PRINTED+BLACK+FAKE",
            inStock: true,
            variants: [
                { type: "Original", price: 290 }
            ],
            description: "ทรงพิมพ์ ดำรูป ของปลอม รสชาติเข้มข้นถึงใจ ให้ความรู้สึกอบอุ่นทุกครั้งที่สูบ"
        },
        {
            baseName: "ทรงพิมพ์ (ของปลอม)",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=PRINTED+RED+FAKE",
            inStock: true,
            variants: [
                { type: "แดง", price: 280 }
            ],
            description: "ทรงพิมพ์ แดง ของปลอม รสชาติเข้มข้นถึงใจ ให้ความรู้สึกอบอุ่นทุกครั้งที่สูบ"
        },
        {
            baseName: "ทรงพิมพ์",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=PRINTED+RED+GREEN",
            inStock: true,
            variants: [
                { type: "แดง", price: 280 },
                { type: "เขียว", price: 280 }
            ],
            description: "ทรงพิมพ์ แดง/เขียว ให้ความรู้สึกสดชื่นและมีชีวิตชีวา เหมาะสำหรับวันที่ต้องการความกระปรี้กระเปร่า"
        },
        {
            baseName: "SMS",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=SMS",
            inStock: true,
            variants: [
                { type: "แดง", price: 290 },
                { type: "เขียว", price: 290 }
            ],
            description: "SMS บุหรี่ที่ให้ความรู้สึกนุ่มนวลและสบาย เหมาะสำหรับทุกช่วงเวลา"
        },
        {
            baseName: "WONDER",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=WONDER",
            inStock: true,
            variants: [
                { type: "แดง", price: 290 },
                { type: "เขียว", price: 290 }
            ],
            description: "WONDER บุหรี่ที่ให้ความรู้สึกสดชื่นและมีชีวิตชีวา เหมาะสำหรับวันที่ต้องการความกระปรี้กระเปร่า"
        },
        {
            baseName: "MEVIUS ORIGINAL BLUE",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=MEVIUS+BLUE",
            inStock: true,
            variants: [
                { type: "Original", price: 340 }
            ],
            description: "MEVIUS ORIGINAL BLUE รสชาติต้นตำรับที่คุ้นเคย ให้ความรู้สึกอบอุ่นและสบาย"
        },
        {
            baseName: "ORION AZURE BLUE",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=ORION+AZURE",
            inStock: true,
            variants: [
                { type: "Original", price: 270 }
            ],
            description: "ORION AZURE BLUE ให้รสชาติที่กลมกล่อมและนุ่มนวล ชวนให้นึกถึงดวงดาวบนท้องฟ้า"
        },
        {
            baseName: "DENVER",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=DENVER+GREEN",
            inStock: true,
            variants: [
                { type: "เขียว", price: 330 }
            ],
            description: "DENVER เขียว ให้ความรู้สึกสดชื่นและเย็นสบาย เหมาะสำหรับวันที่ต้องการความสดใส"
        },
        {
            baseName: "DENVER",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=DENVER+RED",
            inStock: true,
            variants: [
                { type: "แดง", price: 270 }
            ],
            description: "DENVER แดง รสชาติเข้มข้นถึงใจ ให้ความรู้สึกอบอุ่นทุกครั้งที่สูบ"
        },
        {
            baseName: "DENVER",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=DENVER+RED+BLUE",
            inStock: true,
            variants: [
                { type: "แดง", price: 300 },
                { type: "น้ำเงิน", price: 300 }
            ],
            description: "DENVER แดง/น้ำเงิน ให้ความรู้สึกสดชื่นและมีชีวิตชีวา เหมาะสำหรับวันที่ต้องการความกระปรี้กระเปร่า"
        },
        {
            baseName: "DENVER 2",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=DENVER+GREEN2",
            inStock: true,
            variants: [
                { type: "เขียว", price: 270 }
            ],
            description: "DENVER เขียว 2 ให้ความรู้สึกสดชื่นและเย็นสบาย เหมาะสำหรับวันที่ต้องการความสดใส"
        },
        {
            baseName: "DENVER",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=DENVER+GREY",
            inStock: true,
            variants: [
                { type: "เทา", price: 330 }
            ],
            description: "DENVER เทา รสชาติเข้มข้นถึงใจ ให้ความรู้สึกอบอุ่นทุกครั้งที่สูบ"
        },
    ],
    "สายหวาน / สายช็อกโกแลต": [
        {
            baseName: "HARMONI",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=HARMONI",
            inStock: true,
            variants: [
                { type: "12 มวน", price: 240 }
            ],
            description: "HARMONI บุหรี่หวานกลิ่นหอม ให้ความรู้สึกผ่อนคลายและสบาย"
        },
        {
            baseName: "ASTON ABSOLUTE BLUE",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=ASTON+BLUE",
            inStock: true,
            variants: [
                { type: "12 มวน", price: 230 }
            ],
            description: "ASTON ABSOLUTE BLUE มอบความสดชื่นและรสชาติที่ลงตัว ให้คุณรู้สึกผ่อนคลาย"
        },
        {
            baseName: "ASTON GOLD MINT",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=ASTON+MINT",
            inStock: true,
            variants: [
                { type: "12 มวน", price: 230 }
            ],
            description: "ASTON GOLD MINT ให้ความรู้สึกสดชื่นของมิ้นต์และรสชาติที่ลงตัว"
        },
        {
            baseName: "TOURO.",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=TOURO",
            inStock: true,
            variants: [
                { type: "12 มวน", price: 280 }
            ],
            description: "TOURO บุหรี่หวานกลิ่นหอม ให้ความรู้สึกผ่อนคลายและสบาย"
        },
        {
            baseName: "ISANSI INTERNATIONAL",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=ISANSI",
            inStock: true,
            variants: [
                { type: "16 มวน", price: 260 }
            ],
            description: "ISANSI INTERNATIONAL มอบความหรูหราและรสชาติที่ลงตัวในทุกคำสูบ"
        },
        {
            baseName: "GAJAH HARU ORIGIN",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=GAJAH+HARU",
            inStock: true,
            variants: [
                { type: "12 มวน", price: 280 }
            ],
            description: "GAJAH HARU ORIGIN รสชาติต้นตำรับที่คุ้นเคย ให้ความรู้สึกอบอุ่นและสบาย"
        },
        {
            baseName: "RAIJAH MINT",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=RAIJAH+MINT",
            inStock: true,
            variants: [
                { type: "12 มวน", price: 300 }
            ],
            description: "RAIJAH MINT ให้ความรู้สึกสดชื่นของมิ้นต์และรสชาติที่ลงตัว"
        },
        {
            baseName: "CANYON",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=CANYON+VANILLA",
            inStock: true,
            variants: [
                { type: "Vanilla", price: 340 }
            ],
            description: "CANYON Vanilla บุหรี่หวานกลิ่นวานิลลา ให้ความรู้สึกผ่อนคลายและสบาย"
        },
        {
            baseName: "ZOOK",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=ZOOK+LYCHEE",
            inStock: true,
            variants: [
                { type: "รส ลิ้นจี่", price: 370 }
            ],
            description: "ZOOK รสลิ้นจี่ ให้ความรู้สึกสดชื่นและหอมหวาน เหมาะสำหรับผู้ที่ชื่นชอบผลไม้"
        },
        {
            baseName: "ZOOK",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=ZOOK+BLUEBERRY",
            inStock: true,
            variants: [
                { type: "รส บลูเบอร์รี่", price: 370 }
            ],
            description: "ZOOK รสบลูเบอร์รี่ ให้ความรู้สึกสดชื่นและหอมหวาน เหมาะสำหรับผู้ที่ชื่นชอบผลไม้"
        },
        {
            baseName: "VIBES",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=VIBES+BANANA",
            inStock: true,
            variants: [
                { type: "รส กล้วยหอม", price: 220 }
            ],
            description: "VIBES รสกล้วยหอม ให้ความรู้สึกหอมหวานและนุ่มนวล เหมาะสำหรับผู้ที่ชื่นชอบกลิ่นผลไม้"
        },
        {
            baseName: "NEX THR33",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=NEX+THR33",
            inStock: true,
            variants: [
                { type: "12 มวน", price: 220 }
            ],
            description: "NEX THR33 บุหรี่หวานกลิ่นหอม ให้ความรู้สึกผ่อนคลายและสบาย"
        },
        {
            baseName: "NEOLITE BLUE",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=NEOLITE+BLUE",
            inStock: true,
            variants: [
                { type: "10 มวน", price: 230 }
            ],
            description: "NEOLITE BLUE มอบความสดชื่นและรสชาติที่ลงตัว ให้คุณรู้สึกผ่อนคลาย"
        },
        {
            baseName: "KINGS INTERNATIONAL",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=KINGS+INT",
            inStock: true,
            variants: [
                { type: "12 มวน", price: 220 }
            ],
            description: "KINGS INTERNATIONAL บุหรี่หวานกลิ่นหอม ให้ความรู้สึกผ่อนคลายและสบาย"
        },
        {
            baseName: "SURYA GUDANG GARAM",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=SURYA+GG",
            inStock: true,
            variants: [
                { type: "12 มวน", price: 420 }
            ],
            description: "SURYA GUDANG GARAM บุหรี่หวานกลิ่นหอม ให้ความรู้สึกผ่อนคลายและสบาย"
        },
        {
            baseName: "SURYA GUDANG GARAM (แพ็คแกะ)",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=SURYA+GG+PACK",
            inStock: true,
            variants: [
                { type: "12 มวน", price: 650 }
            ],
            description: "SURYA GUDANG GARAM แพ็คแกะ บุหรี่หวานกลิ่นหอม ให้ความรู้สึกผ่อนคลายและสบาย"
        },
        {
            baseName: "SURYA GUDANG GARAM (ซอง)",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=SURYA+GG+PACKET",
            inStock: true,
            variants: [
                { type: "12 มวน", price: 380 }
            ],
            description: "SURYA GUDANG GARAM ซอง บุหรี่หวานกลิ่นหอม ให้ความรู้สึกผ่อนคลายและสบาย"
        },
        {
            baseName: "GAMA GOLDEN PERMA",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=GAMA+GOLDEN",
            inStock: true,
            variants: [
                { type: "10 มวน", price: 220 }
            ],
            description: "GAMA GOLDEN PERMA บุหรี่หวานกลิ่นหอม ให้ความรู้สึกผ่อนคลายและสบาย"
        },
        {
            baseName: "GUDANG GARAM PROFESSIONAL",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=GUDANG+GG+PRO",
            inStock: true,
            variants: [
                { type: "16 มวน", price: 750 }
            ],
            description: "GUDANG GARAM PROFESSIONAL บุหรี่หวานกลิ่นหอม ให้ความรู้สึกผ่อนคลายและสบาย"
        },
    ],
    "สายเม็ดบีท / สายผลไม้": [
        {
            baseName: "ESSE CHANGE RED",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=ESSE+RED",
            inStock: true,
            variants: [
                { type: "2 เม็ด", price: 390 }
            ],
            description: "ESSE CHANGE RED บุหรี่เม็ดบีท รสชาติผลไม้ ให้ความสดชื่นและกลิ่นหอม"
        },
        {
            baseName: "ESSE CHANGE APPEL",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=ESSE+APPLE",
            inStock: true,
            variants: [
                { type: "2 เม็ด", price: 390 }
            ],
            description: "ESSE CHANGE APPEL บุหรี่เม็ดบีท รสแอปเปิ้ล ให้ความสดชื่นและกลิ่นหอม"
        },
        {
            baseName: "ESSE CHANGE BLUE",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=ESSE+BLUE",
            inStock: true,
            variants: [
                { type: "2 เม็ด", price: 390 }
            ],
            description: "ESSE CHANGE BLUE บุหรี่เม็ดบีท รสบลูเบอร์รี่ ให้ความสดชื่นและกลิ่นหอม"
        },
        {
            baseName: "ESSE DOUBLE SHOT",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=ESSE+DOUBLE",
            inStock: true,
            variants: [
                { type: "2 เม็ด", price: 380 }
            ],
            description: "ESSE DOUBLE SHOT บุหรี่เม็ดบีทสองรสชาติ ให้ความสดชื่นและกลิ่นหอม"
        },
        {
            baseName: "ASTRO BLUEBERRY",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=ASTRO+BLUEBERRY",
            inStock: true,
            variants: [
                { type: "1 เม็ด", price: 370 }
            ],
            description: "ASTRO BLUEBERRY บุหรี่เม็ดบีท รสบลูเบอร์รี่ ให้ความสดชื่นและกลิ่นหอม"
        },
        {
            baseName: "CANYON BLAST",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=CANYON+BLAST",
            inStock: true,
            variants: [
                { type: "1 เม็ด", price: 370 }
            ],
            description: "CANYON BLAST บุหรี่เม็ดบีท รสชาติผลไม้ ให้ความสดชื่นและกลิ่นหอม"
        },
        {
            baseName: "DENVER",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=DENVER+MIX",
            inStock: true,
            variants: [
                { type: "แดง (1 เม็ด)", price: 350 },
                { type: "ฟ้า (1 เม็ด)", price: 350 },
                { type: "บลูเบอร์รี่ (1 เม็ด)", price: 350 },
                { type: "ส้ม (1 เม็ด)", price: 350 }
            ],
            description: "DENVER บุหรี่เม็ดบีท รสชาติหลากหลาย ให้ความสดชื่นและกลิ่นหอม"
        },
        {
            baseName: "ORION PURPLE",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=ORION+PURPLE",
            inStock: true,
            variants: [
                { type: "1 เม็ด", price: 370 }
            ],
            description: "ORION PURPLE บุหรี่เม็ดบีท รสชาติองุ่น ให้ความสดชื่นและกลิ่นหอม"
        },
        {
            baseName: "ORIS PULSE",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=ORIS+PULSE",
            inStock: true,
            variants: [
                { type: "ส้ม (1 เม็ด)", price: 350 },
                { type: "ฟ้า (1 เม็ด)", price: 350 },
                { type: "ชมพู (1 เม็ด)", price: 350 }
            ],
            description: "ORIS PULSE บุหรี่เม็ดบีท รสชาติหลากหลาย ให้ความสดชื่นและกลิ่นหอม"
        },
        {
            baseName: "ORIS STRAWBERRY FUSION",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=ORIS+STRAWBERRY",
            inStock: true,
            variants: [
                { type: "2 เม็ด", price: 380 }
            ],
            description: "ORIS STRAWBERRY FUSION บุหรี่เม็ดบีท รสสตรอว์เบอร์รี ให้ความสดชื่นและกลิ่นหอม"
        },
        {
            baseName: "ORIS BLUEBERRY FUSION",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=ORIS+BLUEBERRY",
            inStock: true,
            variants: [
                { type: "2 เม็ด", price: 380 }
            ],
            description: "ORIS BLUEBERRY FUSION บุหรี่เม็ดบีท รสบลูเบอร์รี่ ให้ความสดชื่นและกลิ่นหอม"
        },
        {
            baseName: "ORIS TWIN SENSE BERRY MIX",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=ORIS+BERRY+MIX",
            inStock: true,
            variants: [
                { type: "2 เม็ด", price: 380 }
            ],
            description: "ORIS TWIN SENSE BERRY MIX บุหรี่เม็ดบีทสองรสชาติ ให้ความสดชื่นและกลิ่นหอม"
        },
        {
            baseName: "GOLD MOUNT CHOCOLATE",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=GOLD+MOUNT+CHOC",
            inStock: true,
            variants: [
                { type: "2 เม็ด", price: 380 }
            ],
            description: "GOLD MOUNT CHOCOLATE บุหรี่เม็ดบีท รสช็อกโกแลต ให้ความหอมหวานและกลมกล่อม"
        },
        {
            baseName: "PLATINUM GOLD BERRY",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=PLATINUM+GOLD+BERRY",
            inStock: true,
            variants: [
                { type: "2 เม็ด", price: 380 }
            ],
            description: "PLATINUM GOLD BERRY บุหรี่เม็ดบีท รสเบอร์รี่ทอง ให้ความสดชื่นและกลิ่นหอม"
        },
        {
            baseName: "PLATINUM BLUE RASP",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=PLATINUM+BLUE+RASP",
            inStock: true,
            variants: [
                { type: "2 เม็ด", price: 380 }
            ],
            description: "PLATINUM BLUE RASP บุหรี่เม็ดบีท รสบลูราสเบอร์รี่ ให้ความสดชื่นและกลิ่นหอม"
        },
        {
            baseName: "PLATINUM COOL MINT",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=PLATINUM+COOL+MINT",
            inStock: true,
            variants: [
                { type: "2 เม็ด", price: 380 }
            ],
            description: "PLATINUM COOL MINT บุหรี่เม็ดบีท รสมิ้นต์เย็น ให้ความสดชื่นและกลิ่นหอม"
        },
        {
            baseName: "PLATINUM (แพ็คเขียว)",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=PLATINUM+GREEN",
            inStock: true,
            variants: [
                { type: "2 เม็ด", price: 300 }
            ],
            description: "PLATINUM แพ็คเขียว บุหรี่เม็ดบีท รสชาติเข้มข้น ให้ความสดชื่นและกลิ่นหอม"
        },
        {
            baseName: "CAPITAL",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=CAPITAL+MIX",
            inStock: true,
            variants: [
                { type: "แดง", price: 290 },
                { type: "เหลือง", price: 290 },
                { type: "บลูเบอร์รี่", price: 290 },
                { type: "ดับเบิลมินต์ทอง", price: 290 }
            ],
            description: "CAPITAL บุหรี่เม็ดบีท รสชาติหลากหลาย ให้ความสดชื่นและกลิ่นหอม"
        },
        {
            baseName: "JOHN MAX TWIN",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=JOHN+MAX+TWIN",
            inStock: true,
            variants: [
                { type: "2 เม็ด", price: 310 }
            ],
            description: "JOHN MAX TWIN บุหรี่เม็ดบีทสองรสชาติ ให้ความสดชื่นและกลิ่นหอม"
        },
        {
            baseName: "JOHN",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=JOHN+BLUEBERRY",
            inStock: true,
            variants: [
                { type: "บลูเบอร์รี่ (2 เม็ด)", price: 310 }
            ],
            description: "JOHN บลูเบอร์รี่ บุหรี่เม็ดบีท รสบลูเบอร์รี่ ให้ความสดชื่นและกลิ่นหอม"
        },
        {
            baseName: "JOHN",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=JOHN+GREEN",
            inStock: true,
            variants: [
                { type: "เขียว (2 เม็ด)", price: 310 }
            ],
            description: "JOHN เขียว บุหรี่เม็ดบีท รสเขียว ให้ความสดชื่นและกลิ่นหอม"
        },
        {
            baseName: "VESS CRUSH",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=VESS+CRUSH+1",
            inStock: true,
            variants: [
                { type: "1 เม็ด", price: 280 }
            ],
            description: "VESS CRUSH บุหรี่เม็ดบีท รสชาติผลไม้ ให้ความสดชื่นและกลิ่นหอม"
        },
        {
            baseName: "VESS CRUSH",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=VESS+CRUSH+2",
            inStock: true,
            variants: [
                { type: "2 เม็ด", price: 310 }
            ],
            description: "VESS CRUSH 2 บุหรี่เม็ดบีท รสชาติผลไม้ ให้ความสดชื่นและกลิ่นหอม"
        },
        {
            baseName: "VESS",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=VESS+BERRY+MIX",
            inStock: true,
            variants: [
                { type: "สตอเบอรี่ (2 เม็ด)", price: 300 },
                { type: "แดง (2 เม็ด)", price: 300 },
                { type: "ม่วง (2 เม็ด)", price: 300 }
            ],
            description: "VESS บุหรี่เม็ดบีท รสชาติหลากหลาย ให้ความสดชื่นและกลิ่นหอม"
        },
        {
            baseName: "VESS",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=VESS+RANDOM+MIX",
            inStock: true,
            variants: [
                { type: "สุ่ม (2 เม็ด)", price: 300 },
                { type: "ชมพู (2 เม็ด)", price: 300 },
                { type: "เขียวมิ้นต์ (2 เม็ด)", price: 300 }
            ],
            description: "VESS บุหรี่เม็ดบีท รสชาติสุ่ม ให้ความสดชื่นและกลิ่นหอม"
        },
        {
            baseName: "BLUE ICE",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=BLUE+ICE",
            inStock: true,
            variants: [
                { type: "2 เม็ด", price: 300 }
            ],
            description: "BLUE ICE บุหรี่เม็ดบีท รสน้ำแข็ง ให้ความสดชื่นและกลิ่นหอม"
        },
        {
            baseName: "BLUE ICE DOUBLE BLUE",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=BLUE+ICE+DOUBLE",
            inStock: true,
            variants: [
                { type: "2 เม็ด", price: 380 }
            ],
            description: "BLUE ICE DOUBLE BLUE บุหรี่เม็ดบีทสองรสชาติ ให้ความสดชื่นและกลิ่นหอม"
        },
        {
            baseName: "RICHMAN SUPER SLIM",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=RICHMAN+SLIM",
            inStock: true,
            variants: [
                { type: "มาลาเกีย (2 เม็ด)", price: 370 }
            ],
            description: "RICHMAN SUPER SLIM บุหรี่เม็ดบีท รสมาลาเกีย ให้ความสดชื่นและกลิ่นหอม"
        },
        {
            baseName: "RICHMAN DOUBLE CLICK",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=RICHMAN+DOUBLE",
            inStock: true,
            variants: [
                { type: "มาลาเกีย (2 เม็ด)", price: 380 }
            ],
            description: "RICHMAN DOUBLE CLICK บุหรี่เม็ดบีทสองรสชาติ ให้ความสดชื่นและกลิ่นหอม"
        },
        {
            baseName: "CAVALLO TWIN BARK",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=CAVALLO+PACK",
            inStock: true,
            variants: [
                { type: "แพ็คแกะ", price: 650 }
            ],
            description: "CAVALLO TWIN BARK บุหรี่เม็ดบีทสองรสชาติ ให้ความสดชื่นและกลิ่นหอม"
        },
        {
            baseName: "MILANO KINGS RANDOM",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=MILANO+RANDOM",
            inStock: true,
            variants: [
                { type: "1 เม็ดเล็ก", price: 350 }
            ],
            description: "MILANO KINGS RANDOM บุหรี่เม็ดบีท รสชาติสุ่ม ให้ความสดชื่นและกลิ่นหอม"
        },
        {
            baseName: "MILANO GOLDEN GATE",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=MILANO+GOLDEN",
            inStock: true,
            variants: [
                { type: "1 เม็ดเล็ก", price: 350 }
            ],
            description: "MILANO GOLDEN GATE บุหรี่เม็ดบีท รสชาติทอง ให้ความสดชื่นและกลิ่นหอม"
        },
        {
            baseName: "MILANO",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=MILANO+RED",
            inStock: true,
            variants: [
                { type: "แดง (2 เม็ด)", price: 380 }
            ],
            description: "MILANO แดง บุหรี่เม็ดบีท รสแดง ให้ความสดชื่นและกลิ่นหอม"
        },
        {
            baseName: "MOND",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=MOND+ORIGINAL",
            inStock: true,
            variants: [
                { type: "ออริจินอล (2 เม็ด)", price: 380 }
            ],
            description: "MOND Original บุหรี่เม็ดบีท รสชาติต้นตำรับ ให้ความสดชื่นและกลิ่นหอม"
        },
        {
            baseName: "MOND",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=MOND+GREEN",
            inStock: true,
            variants: [
                { type: "เขียว (2 เม็ด)", price: 380 }
            ],
            description: "MOND เขียว บุหรี่เม็ดบีท รสเขียว ให้ความสดชื่นและกลิ่นหอม"
        },
        {
            baseName: "MOND (แถบสีแดง)",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=MOND+RED+STRIPE",
            inStock: true,
            variants: [
                { type: "1 เม็ด", price: 380 },
                { type: "2 เม็ด", price: 380 }
            ],
            description: "MOND แถบสีแดง บุหรี่เม็ดบีท รสชาติแดง ให้ความสดชื่นและกลิ่นหอม"
        },
        {
            baseName: "MOND (แถบสีน้ำเงิน)",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=MOND+BLUE+STRIPE",
            inStock: true,
            variants: [
                { type: "1 เม็ด", price: 380 },
                { type: "2 เม็ด", price: 380 }
            ],
            description: "MOND แถบสีน้ำเงิน บุหรี่เม็ดบีท รสชาติน้ำเงิน ให้ความสดชื่นและกลิ่นหอม"
        },
        {
            baseName: "MOND (แพ็คแดง)",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=MOND+RED+PACK",
            inStock: true,
            variants: [
                { type: "1 มวนเล็ก", price: 380 },
                { type: "2 เม็ด", price: 380 }
            ],
            description: "MOND แพ็คแดง บุหรี่เม็ดบีท รสชาติแดง ให้ความสดชื่นและกลิ่นหอม"
        },
        {
            baseName: "MOND",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=MOND+BLACK",
            inStock: true,
            variants: [
                { type: "สีดำ (2 เม็ด)", price: 400 }
            ],
            description: "MOND สีดำ บุหรี่เม็ดบีท รสชาติดำ ให้ความสดชื่นและกลิ่นหอม"
        },
        {
            baseName: "DJ",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=DJ",
            inStock: true,
            variants: [
                { type: "2 เม็ด", price: 400 }
            ],
            description: "DJ บุหรี่เม็ดบีท รสชาติผลไม้ ให้ความสดชื่นและกลิ่นหอม"
        },
        {
            baseName: "DJ DOUBLE SWITCH",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=DJ+DOUBLE",
            inStock: true,
            variants: [
                { type: "2 เม็ด", price: 400 }
            ],
            description: "DJ DOUBLE SWITCH บุหรี่เม็ดบีทสองรสชาติ ให้ความสดชื่นและกลิ่นหอม"
        },
        {
            baseName: "MARLBORO",
            img: "https://placehold.co/200x150/5B21B6/FFFFFF?text=MARLBORO+SKY",
            inStock: true,
            variants: [
                { type: "ฟ้า (1 เม็ด)", price: 420 }
            ],
            description: "MARLBORO ฟ้า บุหรี่เม็ดบีท รสชาติฟ้า ให้ความสดชื่นและกลิ่นหอม"
        },
    ]
};

// Define main categories for the category grid
const mainCategories = [
    { name: 'สายร้อน', icon: '🔥', description: 'รสชาติเข้มข้นถึงใจ' },
    { name: 'สายหวาน / สายช็อกโกแลต', icon: '🍫', description: 'หอมหวานนุ่มนวล' },
    { name: 'สายเม็ดบีท / สายผลไม้', icon: '🍇', description: 'สดชื่นกลิ่นผลไม้' }
];

/**
 * Initializes Intersection Observer for fade-in animations.
 */
function initializeIntersectionObserver() {
    const sections = document.querySelectorAll('.fade-in-section');
    const observerOptions = {
        root: null, // viewport as the root
        rootMargin: '0px',
        threshold: 0.1 // 10% of the element must be visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
}

/**
 * Scrolls to the product grid section.
 */
function scrollToProducts() {
    document.getElementById('main-content').scrollIntoView({ behavior: 'smooth' });
}

/**
 * Toggles Dark Mode and Light Mode.
 */
function toggleDarkMode() {
    const body = document.body;
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    }
    updateThemeSpecificStyles();
}

/**
 * Applies theme-specific styles dynamically.
 */
function updateThemeSpecificStyles() {
    const isDarkMode = document.body.classList.contains('dark-mode');

    // Update header nav links
    document.querySelectorAll('.header-nav-link').forEach(link => {
        if (isDarkMode) {
            link.classList.add('text-gray-300', 'hover:text-white');
            link.classList.remove('text-gray-600', 'hover:text-gray-900');
        } else {
            link.classList.add('text-gray-600', 'hover:text-gray-900');
            link.classList.remove('text-gray-300', 'hover:text-white');
        }
    });

    // Update search input
    const searchInput = document.getElementById('searchInput');
    if (isDarkMode) {
        searchInput.classList.add('bg-gray-800', 'text-white', 'placeholder-gray-400');
        searchInput.classList.remove('bg-white', 'text-gray-800', 'placeholder-gray-600', 'border', 'border-gray-300');
    } else {
        searchInput.classList.add('bg-white', 'text-gray-800', 'placeholder-gray-600', 'border', 'border-gray-300');
        searchInput.classList.remove('bg-gray-800', 'text-white', 'placeholder-gray-400');
    }

    // Update main content background/text
    const mainContent = document.getElementById('main-content');
    if (isDarkMode) {
        mainContent.classList.add('dark-mode-bg', 'text-gray-100');
        mainContent.classList.remove('light-mode-bg-white', 'text-gray-800');
    } else {
        mainContent.classList.add('light-mode-bg-white', 'text-gray-800');
        mainContent.classList.remove('dark-mode-bg', 'text-gray-100');
    }

    // Update footer background/text
    const footer = document.querySelector('footer');
    if (isDarkMode) {
        footer.classList.add('dark-mode-bg', 'text-gray-400');
        footer.classList.remove('light-mode-bg-lightgray', 'text-gray-600');
    } else {
        footer.classList.add('light-mode-bg-lightgray', 'text-gray-600');
        footer.classList.remove('dark-mode-bg', 'text-gray-400');
    }

    // Update social media icons for dark/light mode
    document.querySelectorAll('footer img').forEach(img => {
        if (isDarkMode) {
            img.classList.add('filter', 'invert');
            img.classList.remove('dark:filter-none'); // Remove light mode specific filter
        } else {
            img.classList.remove('filter', 'invert');
            img.classList.add('dark:filter-none'); // Add light mode specific filter (which means no invert)
        }
    });
}


/**
 * Renders the main product category grid.
 */
function renderMainCategoryGrid() {
    const categoryGridDiv = document.getElementById('categoryGrid');
    categoryGridDiv.innerHTML = ''; // Clear existing

    mainCategories.forEach(category => {
        const card = document.createElement('div');
        card.className = 'product-card p-6 text-center cursor-pointer'; // Reuse product-card styling
        card.onclick = () => selectCategory(category.name);
        card.innerHTML = `
            <div class="text-5xl mb-4">${category.icon}</div>
            <h4 class="text-2xl font-bold mb-2">${category.name}</h4>
            <p class="text-gray-400">${category.description}</p>
            <button class="mt-4 btn-info px-4 py-2 rounded-full text-sm">ดูสินค้า</button>
        `;
        categoryGridDiv.appendChild(card);
    });
}

/**
 * Renders the category tabs dynamically based on the 'products' data.
 * Adds an "All" tab and individual category tabs.
 */
function renderCategoryTabs() {
    const categoryTabsDiv = document.getElementById('categoryTabs');
    categoryTabsDiv.innerHTML = ''; // Clear existing tabs

    // Create and append "All" tab
    const allTab = document.createElement('div');
    allTab.className = 'category-tab active'; // 'active' by default
    allTab.innerText = 'ทั้งหมด';
    allTab.onclick = () => selectCategory('ทั้งหมด');
    categoryTabsDiv.appendChild(allTab);

    // Create and append tabs for each product category
    for (const category in products) {
        const tab = document.createElement('div');
        tab.className = 'category-tab';
        tab.innerText = category;
        tab.onclick = () => selectCategory(category);
        categoryTabsDiv.appendChild(tab);
    }
}

/**
 * Selects a category, updates the active tab, and re-renders products.
 * @param {string} categoryName - The name of the category to select.
 */
function selectCategory(categoryName) {
    currentCategory = categoryName;

    // Update active class on tabs
    const tabs = document.querySelectorAll('.category-tab');
    tabs.forEach(tab => {
        if (tab.innerText === categoryName) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });

    renderProducts(); // Re-render products for the selected category
    document.getElementById('searchInput').value = ''; // Clear search input
}

/**
 * Renders product cards based on the currently selected category and search filter.
 */
function renderProducts() {
    const productGridDiv = document.getElementById("productGrid");
    productGridDiv.innerHTML = ""; // Clear existing products

    let productsToDisplay = [];
    // If "All" category is selected, combine products from all categories
    if (currentCategory === 'ทั้งหมด') {
        for (const category in products) {
            products[category].forEach(p => productsToDisplay.push({ ...p, category: category }));
        }
    } else {
        // Otherwise, display products from the selected category
        productsToDisplay = products[currentCategory] || [];
        productsToDisplay = productsToDisplay.map(p => ({ ...p, category: currentCategory }));
    }

    // Create and append product cards to the grid
    productsToDisplay.forEach((product, index) => {
        const productCard = document.createElement("div");
        // Add 'out-of-stock' class if the product is not in stock
        productCard.className = `product-card p-4 rounded shadow-lg hover:shadow-xl ${product.inStock ? 'cursor-pointer' : 'out-of-stock'}`;
        productCard.setAttribute("data-base-name", product.baseName);
        productCard.setAttribute("data-category", product.category);

        // Add click listener to open product detail modal
        if (product.inStock) {
            productCard.onclick = () => showProductDetail(product);
        }

        let variantOptionsHtml = '';
        if (product.variants && product.variants.length > 1) {
            // Create a dropdown for multiple variants
            variantOptionsHtml = `
                <select id="variant-select-${index}" class="w-full p-2 rounded mt-2 focus:outline-none focus:ring-2 focus:ring-red-500 dark-mode-bg-gray-800 dark-mode-text-white light-mode-bg-gray-100 light-mode-text-gray-800" ${product.inStock ? '' : 'disabled'}>
                    ${product.variants.map(variant => `<option value="${variant.type}|${variant.price}">${variant.type} (${variant.price} บาท)</option>`).join('')}
                </select>
            `;
        } else if (product.variants && product.variants.length === 1) {
            // Display single variant directly
            variantOptionsHtml = `
                <p class="mt-1 dark-mode-text-gray-300 light-mode-text-gray-700">ชนิด: ${product.variants[0].type !== "Original" ? product.variants[0].type : ''}</p>
                <p class="mt-1 dark-mode-text-gray-300 light-mode-text-gray-700">ราคา: ${product.variants[0].price} บาท</p>
            `;
        } else {
            // Fallback if no variants are defined (shouldn't happen with new structure)
            variantOptionsHtml = `<p class="mt-1 dark-mode-text-gray-300 light-mode-text-gray-700">ราคา: N/A</p>`;
        }

        productCard.innerHTML = `
            <img src="${product.img}" alt="${product.baseName}" class="w-full rounded mb-3" onerror="this.onerror=null;this.src='https://placehold.co/200x150/333333/FFFFFF?text=No+Image';" />
            <h3 class="text-xl font-semibold dark-mode-text-white light-mode-text-gray-900">${product.baseName}</h3>
            ${variantOptionsHtml}
            ${product.inStock ? `
                <button onclick="event.stopPropagation(); addToCartFromCard(${index})" class="mt-3 w-full btn-primary py-2 rounded">เพิ่มลงตะกร้า</button>
            ` : `
                <div class="out-of-stock-overlay">
                    <span class="pulse-text">สินค้าหมด</span>
                </div>
                <button disabled class="mt-3 w-full bg-gray-500 text-white py-2 rounded cursor-not-allowed">สินค้าหมด</button>
            `}
        `;
        productGridDiv.appendChild(productCard);
    });

    filterProducts(); // Apply search filter after rendering products
}

/**
 * Adds a product (with selected variant) to the cart.
 * This function is called from the "Add to Cart" button on product cards.
 * @param {number} productIndex - The index of the product in the currently displayed productsToDisplay array.
 */
function addToCartFromCard(productIndex) {
    let productsToDisplay = [];
    if (currentCategory === 'ทั้งหมด') {
        for (const category in products) {
            products[category].forEach(p => productsToDisplay.push({ ...p, category: category }));
        }
    } else {
        productsToDisplay = products[currentCategory] || [];
        productsToDisplay = productsToDisplay.map(p => ({ ...p, category: currentCategory }));
    }

    const product = productsToDisplay[productIndex];

    // Prevent adding to cart if out of stock
    if (!product.inStock) {
        showAlertDialog('สินค้าหมด', `"${product.baseName}" หมดสต็อกแล้ว ไม่สามารถเพิ่มลงตะกร้าได้`);
        return;
    }

    let selectedVariantType = '';
    let selectedVariantPrice = 0;
    let fullProductName = product.baseName;

    if (product.variants.length > 1) {
        const selectElement = document.getElementById(`variant-select-${productIndex}`);
        const [type, price] = selectElement.value.split('|');
        selectedVariantType = type;
        selectedVariantPrice = parseFloat(price);
        fullProductName = `${product.baseName} (${selectedVariantType})`;
    } else if (product.variants.length === 1) {
        selectedVariantType = product.variants[0].type;
        selectedVariantPrice = product.variants[0].price;
        if (selectedVariantType !== "Original") {
            fullProductName = `${product.baseName} (${selectedVariantType})`;
        }
    } else {
        // Should not happen with the new data structure
        showAlertDialog('ข้อผิดพลาด', 'ไม่พบข้อมูลชนิดสินค้า');
        return;
    }

    const existingItem = cart.find(item => item.fullProductName === fullProductName);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            baseName: product.baseName,
            variantType: selectedVariantType,
            price: selectedVariantPrice,
            fullProductName: fullProductName, // Store the full name for display
            quantity: 1
        });
    }
    updateCartDisplay(); // Update cart UI
    showToast(`🛒 "${fullProductName}" ถูกเพิ่มในตะกร้าแล้ว!`); // Show a toast notification
}


/**
 * Displays a temporary toast notification at the top right of the screen.
 * @param {string} message - The message to display in the toast.
 */
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'fixed top-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg z-[9999] opacity-0 transition-opacity duration-300';
    toast.textContent = message;
    document.body.appendChild(toast);

    // Animate toast in
    setTimeout(() => {
        toast.style.opacity = '1';
    }, 100);

    // Animate toast out and remove after a delay
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.addEventListener('transitionend', () => toast.remove());
    }, 3000);
}

/**
 * Updates the quantity of an item in the cart or removes it if quantity is 0 or less.
 * @param {number} index - The index of the item in the cart array.
 * @param {number} newQuantity - The new quantity for the item.
 */
function updateCartItemQuantity(index, newQuantity) {
    if (newQuantity <= 0) {
        cart.splice(index, 1); // Remove item if quantity is 0 or less
    } else {
        cart[index].quantity = newQuantity; // Update quantity
    }
    updateCartDisplay(); // Re-render cart UI
}

/**
 * Updates the display of items in the cart modal, total price, and item count.
 */
function updateCartDisplay() {
    const cartList = document.getElementById("cartList");
    const cartItemCount = document.getElementById("cartItemCount");
    let total = 0;
    let itemCount = 0;

    cartList.innerHTML = ""; // Clear existing cart items

    if (cart.length === 0) {
        cartList.innerHTML = '<li class="text-gray-600 text-center py-4">ยังไม่มีสินค้าในตะกร้า</li>';
    } else {
        cart.forEach((item, idx) => {
            total += item.price * item.quantity;
            itemCount += item.quantity;
            const li = document.createElement("li");
            li.className = "flex justify-between items-center px-3 py-2 rounded-md border dark-mode-bg-gray-800 dark-mode-border-gray-700 light-mode-bg-gray-100 light-mode-border-gray-200";
            li.innerHTML = `
                <span class="flex-1 text-base dark-mode-text-gray-300 light-mode-text-gray-900">${item.fullProductName} <span class="dark-mode-text-gray-500 light-mode-text-gray-600 text-sm">(${item.price} บาท)</span></span>
                <div class="flex items-center">
                    <input type="number" min="1" value="${item.quantity}"
                           onchange="updateCartItemQuantity(${idx}, parseInt(this.value))"
                           class="w-20 text-center border rounded px-2 py-1 dark-mode-bg-gray-900 dark-mode-text-white dark-mode-border-gray-600 light-mode-bg-white light-mode-text-gray-800 light-mode-border-gray-300 focus:outline-none focus:ring-1 focus:ring-red-500">
                    <button onclick="updateCartItemQuantity(${idx}, 0)" class="text-red-500 hover:text-red-400 font-bold ml-3 transition duration-150 ease-in-out">ลบ</button>
                </div>
            `;
            cartList.appendChild(li);
        });
    }
    document.getElementById("cartTotal").innerText = total.toLocaleString(); // Format total with commas
    cartItemCount.innerText = itemCount;

    // Update notification count in header
    const notificationCount = document.getElementById('notificationCount');
    if (itemCount > 0) {
        notificationCount.innerText = itemCount;
        notificationCount.classList.remove('hidden');
        notificationCount.classList.add('animate-bounce'); // Add bounce animation
    } else {
        notificationCount.classList.add('hidden');
        notificationCount.classList.remove('animate-bounce');
    }
}

/**
 * Toggles the visibility of the cart modal.
 */
function toggleCart() {
    const cartModal = document.getElementById("cartModal");
    if (cartModal.classList.contains("hidden")) {
        cartModal.classList.remove("hidden");
        cartModal.classList.add("flex");
    } else {
        cartModal.classList.add("hidden");
        cartModal.classList.remove("flex");
    }
}

/**
 * Filters product cards based on the search input and current category.
 */
function filterProducts() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const productCards = document.querySelectorAll('#productGrid .product-card'); // Target only main product grid

    productCards.forEach(card => {
        const baseName = card.getAttribute('data-base-name').toLowerCase();
        const category = card.getAttribute('data-category');
        // Check if any variant type matches the search input
        const variantSelect = card.querySelector('select');
        let variantMatches = false;
        if (variantSelect) {
            Array.from(variantSelect.options).forEach(option => {
                if (option.textContent.toLowerCase().includes(input)) {
                    variantMatches = true;
                }
            });
        } else {
            // For single-variant products, check the displayed type if it exists
            const typeText = card.querySelector('p:nth-of-type(1)')?.textContent.toLowerCase();
            if (typeText && typeText.includes(input)) {
                variantMatches = true;
            }
        }

        const isVisibleBySearch = baseName.includes(input) || variantMatches;
        const isVisibleByCategory = (currentCategory === 'ทั้งหมด' || category === currentCategory);

        card.style.display = (isVisibleBySearch && isVisibleByCategory) ? 'block' : 'none';
    });
}

/**
 * Transitions from the cart modal to the checkout modal.
 * Shows an alert if the cart is empty.
 */
function goToCheckout() {
    if (cart.length === 0) {
        showAlertDialog('ตะกร้าว่าง', 'กรุณาเพิ่มสินค้าก่อนดำเนินการสั่งซื้อ'); // Use custom alert
        return;
    }
    const cartModal = document.getElementById("cartModal");
    cartModal.classList.add("hidden");
    cartModal.classList.remove("flex");

    const checkoutModal = document.getElementById("checkoutModal");
    checkoutModal.classList.remove("hidden");
    checkoutModal.classList.add("flex");

    populateCheckoutSummary(); // Populate checkout summary when opening
}

/**
 * Toggles the visibility of the checkout modal.
 */
function toggleCheckoutModal() {
    const checkoutModal = document.getElementById("checkoutModal");
    if (checkoutModal.classList.contains("hidden")) {
        checkoutModal.classList.remove("hidden");
        checkoutModal.classList.add("flex");
    } else {
        checkoutModal.classList.add("hidden");
        checkoutModal.classList.remove("flex");
    }
}

/**
 * Populates the order summary list in the checkout modal.
 */
function populateCheckoutSummary() {
    const checkoutSummaryList = document.getElementById('checkoutSummaryList');
    const checkoutTotalSpan = document.getElementById('checkoutTotal');
    let total = 0;
    let totalCots = 0; // To calculate total number of cots

    // Calculate total cots
    cart.forEach(item => {
        totalCots += item.quantity;
    });

    checkoutSummaryList.innerHTML = ''; // Clear existing summary items
    cart.forEach(item => {
        const li = document.createElement('li');
        li.className = 'flex justify-between items-center summary-item';
        li.innerHTML = `
            <span>${item.fullProductName} x ${item.quantity}</span>
            <span>${(item.price * item.quantity).toLocaleString()} บาท</span>
        `;
        checkoutSummaryList.appendChild(li);
        total += item.price * item.quantity;
    });

    // Calculate shipping cost based on payment method and total cots
    const shippingMethod = document.querySelector('input[name="shippingMethod"]:checked')?.value;
    let shippingCost = 0;

    if (shippingMethod === 'standard') { // Standard shipping
        if (totalCots >= 1 && totalCots <= 2) {
            shippingCost = 40;
        } else if (totalCots >= 3 && totalCots <= 9) {
            shippingCost = 50;
        } else if (totalCots >= 10 && totalCots <= 24) {
            shippingCost = 60;
        }
    } else if (shippingMethod === 'ems') { // COD shipping
        if (totalCots === 1) {
            shippingCost = 50;
        } else if (totalCots >= 2 && totalCots <= 9) {
            shippingCost = 80;
        } else if (totalCots >= 10 && totalCots <= 24) {
            shippingCost = 100;
        }
    }

    if (shippingCost > 0) {
        const shippingLi = document.createElement('li');
        shippingLi.className = 'flex justify-between items-center text-red-400 font-semibold border-t border-gray-700 pt-2 mt-2 summary-item';
        shippingLi.innerHTML = `
            <span>ค่าจัดส่ง (${shippingMethod === 'standard' ? 'Standard' : 'เก็บเงินปลายทาง'})</span>
            <span>${shippingCost} บาท</span>
        `;
        checkoutSummaryList.appendChild(shippingLi);
    } else if (totalCots > 24) {
        // Handle cases where total cots exceed the defined ranges
        const shippingLi = document.createElement('li');
        shippingLi.className = 'flex justify-between items-center text-red-400 font-semibold border-t border-gray-700 pt-2 mt-2 summary-item';
        shippingLi.innerHTML = `
            <span>ค่าจัดส่ง (กรุณาติดต่อร้านค้า)</span>
            <span>N/A</span>
        `;
        checkoutSummaryList.appendChild(shippingLi);
    }

    total += shippingCost;
    checkoutTotalSpan.innerText = total.toLocaleString(); // Format total with commas
}

/**
 * Toggles the visibility of bank transfer details based on payment method selection.
 * This function is now simplified as bank transfer details are removed.
 */
function togglePaymentDetails() {
    // No action needed as bank transfer details are removed.
    // This function is kept for compatibility if other payment methods were to be added later.
}

/**
 * Displays a custom alert dialog.
 * @param {string} title - The title of the alert.
 * @param {string} message - The message content of the alert.
 * @param {function} [confirmCallback=null] - Callback function for confirmation.
 * @param {boolean} [isConfirm=false] - True if it's a confirmation dialog.
 */
function showAlertDialog(title, message, confirmCallback = null, isConfirm = false) {
    const alertDialog = document.getElementById('customAlertDialog');
    document.getElementById('alertDialogTitle').innerText = title;
    document.getElementById('alertDialogMessage').innerText = message;
    const confirmButton = alertDialog.querySelector('button');

    // Clear previous event listeners
    confirmButton.onclick = null;

    if (isConfirm && confirmCallback) {
        // Change button text to "ยืนยัน" and add a cancel button
        confirmButton.innerText = 'ยืนยัน';
        confirmButton.classList.remove('btn-primary', 'bg-red-600', 'hover:bg-red-700');
        confirmButton.classList.add('btn-success');

        const cancelButton = document.createElement('button');
        cancelButton.innerText = 'ยกเลิก';
        cancelButton.className = 'btn-secondary px-6 py-2 rounded-lg text-lg font-semibold transition duration-200 ease-in-out ml-4';
        cancelButton.onclick = () => closeAlertDialog();
        confirmButton.parentNode.appendChild(cancelButton); // Add cancel button next to confirm

        confirmButton.onclick = () => {
            confirmCallback();
            if (cancelButton.parentNode) {
                cancelButton.parentNode.removeChild(cancelButton); // Remove cancel button after action
            }
        };
    } else {
        // Default "OK" button behavior
        confirmButton.innerText = 'ตกลง';
        confirmButton.classList.remove('btn-success');
        confirmButton.classList.add('btn-primary');
        confirmButton.onclick = () => closeAlertDialog();
        // Ensure no extra cancel button is present
        const existingCancelButton = confirmButton.parentNode.querySelector('.btn-secondary');
        if (existingCancelButton) {
            existingCancelButton.remove();
        }
    }

    alertDialog.classList.remove('hidden');
    alertDialog.classList.add('flex');
}

/**
 * Closes the custom alert dialog.
 */
function closeAlertDialog() {
    const alertDialog = document.getElementById('customAlertDialog');
    alertDialog.classList.add('hidden');
    alertDialog.classList.remove('flex');
}

/**
 * Handles the submission of the order form.
 * Performs client-side validation and sends data to Google Apps Script.
 */
async function submitOrder() {
    const form = document.getElementById('checkoutForm');

    // Basic client-side form validation
    if (!form.checkValidity()) {
        form.reportValidity(); // Show native browser validation errors
        return;
    }

    // Check if cart is empty
    if (cart.length === 0) {
        showAlertDialog('ข้อผิดพลาด', 'ตะกร้าสินค้าว่างเปล่า ไม่สามารถดำเนินการสั่งซื้อได้');
        return;
    }

    const customerName = document.getElementById('customerName').value;
    const customerAddress = document.getElementById('customerAddress').value;
    const customerPhone = document.getElementById('customerPhone').value;
    const shippingMethod = document.querySelector('input[name="shippingMethod"]:checked').value;
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
    // bankSlipFile is no longer used as bank transfer is removed.
    // const bankSlipFile = document.getElementById('bankSlip').files[0];

    let totalAmount = parseFloat(document.getElementById('checkoutTotal').innerText.replace(/,/g, ''));

    // Prepare order details for sending
    let orderDetails = {
        customerName: customerName,
        customerAddress: customerAddress,
        customerPhone: customerPhone,
        shippingMethod: shippingMethod,
        paymentMethod: paymentMethod, // Will always be 'cod' now unless other options are added
        items: cart.map(item => ({ name: item.fullProductName, price: item.price, quantity: item.quantity })), // Use fullProductName for backend
        totalAmount: totalAmount
    };

    // If bank transfer was selected, check for bank slip file (NO LONGER NEEDED)
    // if (paymentMethod === 'bank_transfer' && !bankSlipFile) {
    //     showAlertDialog('ข้อผิดพลาด', 'กรุณาแนบสลิปโอนเงิน');
    //     return;
    // }

    showToast('กำลังส่งคำสั่งซื้อ...');

    const formData = new FormData();
    formData.append('orderDetails', JSON.stringify(orderDetails));
    // if (bankSlipFile) { // NO LONGER NEEDED
    //     formData.append('bankSlip', bankSlipFile);
    // }

    // --- Google Apps Script Web App URL ---
    // REPLACE THIS URL with your deployed Google Apps Script Web App URL
    const GOOGLE_APP_SCRIPT_WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbzWizr_5fN4Nuj9XhaQfTVO-v966aG5qNzKQfnShzZL7kzdDif9LP2AvkKFdOUYW_u4Ag/exec';

    try {
        const response = await fetch(GOOGLE_APP_SCRIPT_WEB_APP_URL, {
            method: 'POST',
            body: formData // FormData handles multipart/form-data for file uploads
        });

        const result = await response.json();

        if (result.status === 'SUCCESS') {
            showAlertDialog('คำสั่งซื้อสำเร็จ!', 'คำสั่งซื้อของคุณได้รับการยืนยันแล้ว! ทางร้านจะติดต่อกลับโดยเร็วที่สุด');
            cart = []; // Clear cart after successful order
            updateCartDisplay(); // Update cart count to 0
            toggleCheckoutModal(); // Close checkout modal
            form.reset(); // Reset the form
            // togglePaymentDetails(); // No longer needed as there's no dynamic display
        } else {
            showAlertDialog('ข้อผิดพลาด', `เกิดข้อผิดพลาดในการส่งคำสั่งซื้อ: ${result.message || 'ไม่ทราบข้อผิดพลาด'}`);
            console.error('Apps Script Error:', result.message);
        }
    } catch (error) {
        console.error('Error submitting order:', error);
        showAlertDialog('ข้อผิดพลาด', 'เกิดข้อผิดพลาดในการเชื่อมต่อ โปรดตรวจสอบอินเทอร์เน็ตของคุณและลองอีกครั้ง');
    }
}

// --- Product Detail Modal Functions ---

/**
 * Shows the product detail modal with the given product information.
 * @param {object} product - The product object to display.
 */
function showProductDetail(product) {
    const detailModal = document.getElementById('productDetailModal');
    const detailImage = document.getElementById('detailProductImage');
    const detailName = document.getElementById('detailProductName');
    const detailDescription = document.getElementById('detailProductDescription');
    const detailVariants = document.getElementById('detailProductVariants');
    const detailPrice = document.getElementById('detailProductPrice');
    const detailAddToCartButton = document.getElementById('detailAddToCartButton');

    detailImage.src = product.img;
    detailName.innerText = product.baseName;
    detailDescription.innerText = product.description || "ไม่มีรายละเอียดเพิ่มเติมสำหรับสินค้านี้";

    // Render variants for product detail page
    detailVariants.innerHTML = '';
    if (product.variants && product.variants.length > 0) {
        if (product.variants.length > 1) {
            const selectElement = document.createElement('select');
            selectElement.id = 'detailVariantSelect';
            selectElement.className = 'w-full p-2 rounded border dark-mode-bg-gray-800 dark-mode-text-white dark-mode-border-gray-700 light-mode-bg-gray-100 light-mode-text-gray-800 light-mode-border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500';
            product.variants.forEach(variant => {
                const option = document.createElement('option');
                option.value = `${variant.type}|${variant.price}`;
                option.innerText = `${variant.type} (${variant.price} บาท)`;
                selectElement.appendChild(option);
            });
            detailVariants.appendChild(selectElement);
            // Update price display when variant changes
            selectElement.onchange = () => {
                const [type, price] = selectElement.value.split('|');
                detailPrice.innerText = `ราคา: ${parseFloat(price).toLocaleString()} บาท`;
            };
            // Set initial price display
            const [initialType, initialPrice] = selectElement.value.split('|');
            detailPrice.innerText = `ราคา: ${parseFloat(initialPrice).toLocaleString()} บาท`;

        } else {
            // Single variant
            const variant = product.variants[0];
            detailVariants.innerHTML = `<p class="dark-mode-text-gray-300 light-mode-text-gray-700">ชนิด: ${variant.type !== "Original" ? variant.type : 'มาตรฐาน'}</p>`;
            detailPrice.innerText = `ราคา: ${variant.price.toLocaleString()} บาท`;
        }
    } else {
        detailVariants.innerHTML = `<p class="dark-mode-text-gray-300 light-mode-text-gray-700">ไม่มีชนิดให้เลือก</p>`;
        detailPrice.innerText = `ราคา: N/A`;
    }

    // Update Add to Cart button based on stock
    if (product.inStock) {
        detailAddToCartButton.disabled = false;
        detailAddToCartButton.classList.remove('bg-gray-500', 'cursor-not-allowed');
        detailAddToCartButton.classList.add('btn-primary');
        // Set onclick for the button in the detail modal
        detailAddToCartButton.onclick = () => {
            let selectedType = '';
            let selectedPrice = 0;
            if (product.variants.length > 1) {
                const selectElement = document.getElementById('detailVariantSelect');
                const [type, price] = selectElement.value.split('|');
                selectedType = type;
                selectedPrice = parseFloat(price);
            } else if (product.variants.length === 1) {
                selectedType = product.variants[0].type;
                selectedPrice = product.variants[0].price;
            }
            const fullProductName = `${product.baseName} (${selectedType !== "Original" ? selectedType : 'มาตรฐาน'})`;
            addToCartFromDetail(product.baseName, selectedType, selectedPrice, fullProductName);
        };
        detailAddToCartButton.innerText = 'เพิ่มลงตะกร้า';
    } else {
        detailAddToCartButton.disabled = true;
        detailAddToCartButton.classList.remove('btn-primary');
        detailAddToCartButton.classList.add('bg-gray-500', 'cursor-not-allowed');
        detailAddToCartButton.innerText = 'สินค้าหมด';
    }

    detailModal.classList.remove('hidden');
    detailModal.classList.add('flex');
}

/**
 * Closes the product detail modal.
 */
function toggleProductDetailModal() {
    const detailModal = document.getElementById('productDetailModal');
    detailModal.classList.add('hidden');
    detailModal.classList.remove('flex');
}

/**
 * Adds a product (with selected variant) from the detail page to the cart.
 * @param {string} baseName - The base name of the product.
 * @param {string} variantType - The selected variant type.
 * @param {number} price - The price of the selected variant.
 * @param {string} fullProductName - The full product name including variant.
 */
function addToCartFromDetail(baseName, variantType, price, fullProductName) {
    const existingItem = cart.find(item => item.fullProductName === fullProductName);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            baseName: baseName,
            variantType: variantType,
            price: price,
            fullProductName: fullProductName,
            quantity: 1
        });
    }
    updateCartDisplay();
    showToast(`🛒 "${fullProductName}" ถูกเพิ่มในตะกร้าแล้ว!`);
    toggleProductDetailModal(); // Close detail modal after adding to cart
}


// --- Admin Panel Functions ---

/**
 * Toggles the visibility of the admin login modal.
 */
function toggleAdminLoginModal() {
    const adminLoginModal = document.getElementById('adminLoginModal');
    if (adminLoginModal.classList.contains('hidden')) {
        adminLoginModal.classList.remove('hidden');
        adminLoginModal.classList.add('flex');
        document.getElementById('adminPassword').value = ''; // Clear password field
    } else {
        adminLoginModal.classList.add('hidden');
        adminLoginModal.classList.remove('flex');
    }
}

/**
 * Shows the admin login modal.
 */
function showAdminLogin() {
    toggleAdminLoginModal();
}

/**
 * Handles admin login authentication.
 */
function adminLogin() {
    const passwordInput = document.getElementById('adminPassword');
    if (passwordInput.value === ADMIN_PASSWORD) {
        toggleAdminLoginModal(); // Close login modal
        toggleAdminPanelModal(); // Open admin panel
        renderAdminProducts(); // Load products in admin panel
    } else {
        showAlertDialog('เข้าสู่ระบบล้มเหลว', 'รหัสผ่านไม่ถูกต้อง');
        passwordInput.value = ''; // Clear password field
    }
}

/**
 * Toggles the visibility of the admin panel modal.
 */
function toggleAdminPanelModal() {
    const adminPanelModal = document.getElementById('adminPanelModal');
    if (adminPanelModal.classList.contains('hidden')) {
        adminPanelModal.classList.remove('hidden');
        adminPanelModal.classList.add('flex');
    } else {
        adminPanelModal.classList.add('hidden');
        adminPanelModal.classList.remove('flex');
        renderProducts(); // Re-render main product grid after closing admin panel
    }
}

/**
 * Renders the list of products in the admin panel for editing.
 */
function renderAdminProducts() {
    const adminProductListDiv = document.getElementById('adminProductList');
    adminProductListDiv.innerHTML = ''; // Clear existing list

    // Flatten products into a single array for easier iteration
    let allProducts = [];
    for (const category in products) {
        products[category].forEach((p, idx) => {
            allProducts.push({ ...p, category: category, originalIndex: idx });
        });
    }

    if (allProducts.length === 0) {
        adminProductListDiv.innerHTML = '<p class="text-gray-600 text-center py-4">ยังไม่มีสินค้าในระบบ</p>';
        return;
    }

    allProducts.forEach((product, globalIndex) => {
        const productItem = document.createElement('div');
        productItem.className = 'p-3 rounded-lg shadow-md flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border dark-mode-bg-gray-800 dark-mode-border-gray-700 light-mode-bg-gray-100 light-mode-border-gray-200';
        productItem.innerHTML = `
            <div class="flex-1">
                <p class="text-lg font-semibold dark-mode-text-gray-100 light-mode-text-gray-900">${product.baseName}</p>
                <p class="text-sm dark-mode-text-gray-400 light-mode-text-gray-600">หมวดหมู่: ${product.category}</p>
                <p class="text-sm dark-mode-text-gray-400 light-mode-text-gray-600">สถานะ: <span class="${product.inStock ? 'text-green-400' : 'text-red-400'} font-bold">${product.inStock ? 'มีในสต็อก' : 'สินค้าหมด'}</span></p>
            </div>
            <div class="flex flex-wrap gap-2 mt-3 sm:mt-0">
                <button onclick="toggleProductStock('${product.category}', ${product.originalIndex})" class="btn-warning px-3 py-1 rounded-lg text-sm">
                    ${product.inStock ? 'แจ้งสินค้าหมด' : 'แจ้งมีสินค้า'}
                </button>
                <button onclick="showEditProductModal('${product.category}', ${product.originalIndex})" class="btn-info px-3 py-1 rounded-lg text-sm">
                    แก้ไข
                </button>
                <button onclick="deleteProduct('${product.category}', ${product.originalIndex})" class="btn-danger px-3 py-1 rounded-lg text-sm">
                    ลบ
                </button>
            </div>
        `;
        adminProductListDiv.appendChild(productItem);
    });
}

/**
 * Toggles the inStock status of a product.
 * @param {string} categoryName - The category of the product.
 * @param {number} productIndex - The index of the product within its category.
 */
function toggleProductStock(categoryName, productIndex) {
    if (products[categoryName] && products[categoryName][productIndex]) {
        products[categoryName][productIndex].inStock = !products[categoryName][productIndex].inStock;
        renderAdminProducts(); // Re-render admin list
        renderProducts(); // Re-render main shop page
        showToast(`สถานะสินค้า "${products[categoryName][productIndex].baseName}" ถูกอัปเดตแล้ว`);
    }
}

/**
 * Shows the edit product modal, populating it with product data or for a new product.
 * @param {string} categoryName - The category of the product (or 'new' for a new product).
 * @param {number} [productIndex] - The index of the product within its category (optional for new product).
 */
function showEditProductModal(categoryName, productIndex) {
    const editProductModal = document.getElementById('editProductModal');
    const editProductModalTitle = document.getElementById('editProductModalTitle');
    const editProductForm = document.getElementById('editProductForm');
    const editVariantsContainer = document.getElementById('editVariantsContainer');
    const editCategorySelect = document.getElementById('editCategory');
    const editDescriptionInput = document.getElementById('editDescription'); // Get description input

    // Clear previous variant fields
    editVariantsContainer.innerHTML = '';
    editProductForm.reset(); // Reset form fields

    // Populate category dropdown
    editCategorySelect.innerHTML = '';
    for (const cat in products) {
        const option = document.createElement('option');
        option.value = cat;
        option.innerText = cat;
        editCategorySelect.appendChild(option);
    }

    document.getElementById('editProductCategory').value = categoryName;
    document.getElementById('editProductIndex').value = productIndex !== undefined ? productIndex : '';

    if (categoryName === 'new') {
        editProductModalTitle.innerText = 'เพิ่มสินค้าใหม่';
        document.getElementById('editBaseName').value = '';
        document.getElementById('editImgUrl').value = '';
        editDescriptionInput.value = ''; // Clear description for new product
        document.getElementById('editInStock').checked = true; // New products are in stock by default
        addVariantField(); // Add one default variant field
    } else {
        editProductModalTitle.innerText = 'แก้ไขสินค้า';
        const product = products[categoryName][productIndex];
        document.getElementById('editBaseName').value = product.baseName;
        document.getElementById('editImgUrl').value = product.img;
        editDescriptionInput.value = product.description || ''; // Populate description
        document.getElementById('editInStock').checked = product.inStock;
        editCategorySelect.value = categoryName; // Set selected category

        // Populate existing variants
        product.variants.forEach(variant => {
            addVariantField(variant.type, variant.price);
        });
        if (product.variants.length === 0) { // Ensure at least one variant field if none exist
            addVariantField();
        }
    }

    editProductModal.classList.remove('hidden');
    editProductModal.classList.add('flex');
}

/**
 * Adds a new variant input field to the edit product form.
 * @param {string} [type=''] - Initial value for variant type.
 * @param {number} [price=''] - Initial value for variant price.
 */
function addVariantField(type = '', price = '') {
    const container = document.getElementById('editVariantsContainer');
    const variantDiv = document.createElement('div');
    variantDiv.className = 'flex flex-col sm:flex-row gap-2 items-center p-2 rounded border dark-mode-bg-gray-900 dark-mode-border-gray-700 light-mode-bg-gray-200 light-mode-border-gray-300';
    variantDiv.innerHTML = `
        <input type="text" placeholder="ชนิด (เช่น แดง, 2 เม็ด)" value="${type}" class="variant-type flex-1 p-2 rounded dark-mode-text-white dark-mode-bg-gray-700 light-mode-text-gray-800 light-mode-bg-white focus:outline-none focus:ring-1 focus:ring-red-500">
        <input type="number" placeholder="ราคา" value="${price}" class="variant-price w-24 p-2 rounded dark-mode-text-white dark-mode-bg-gray-700 light-mode-text-gray-800 light-mode-bg-white focus:outline-none focus:ring-1 focus:ring-red-500">
        <button type="button" onclick="this.parentNode.remove()" class="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-full text-sm">X</button>
    `;
    container.appendChild(variantDiv);
}

/**
 * Saves product changes (add new or update existing).
 */
function saveProduct() {
    const categoryName = document.getElementById('editProductCategory').value;
    const productIndex = document.getElementById('editProductIndex').value;
    const newBaseName = document.getElementById('editBaseName').value.trim();
    const newImgUrl = document.getElementById('editImgUrl').value.trim();
    const newDescription = document.getElementById('editDescription').value.trim(); // Get new description
    const newInStock = document.getElementById('editInStock').checked;
    const targetCategory = document.getElementById('editCategory').value;

    const variantTypeInputs = document.querySelectorAll('#editVariantsContainer .variant-type');
    const variantPriceInputs = document.querySelectorAll('#editVariantsContainer .variant-price');

    const newVariants = [];
    for (let i = 0; i < variantTypeInputs.length; i++) {
        const type = variantTypeInputs[i].value.trim();
        const price = parseFloat(variantPriceInputs[i].value);
        if (type && !isNaN(price)) {
            newVariants.push({ type, price });
        }
    }

    if (!newBaseName || newVariants.length === 0) {
        showAlertDialog('ข้อมูลไม่ครบถ้วน', 'กรุณากรอกชื่อสินค้าและอย่างน้อยหนึ่งชนิดสินค้าพร้อมราคา');
        return;
    }

    const newProductData = {
        baseName: newBaseName,
        img: newImgUrl || 'https://placehold.co/200x150/333333/FFFFFF?text=No+Image',
        inStock: newInStock,
        variants: newVariants,
        description: newDescription // Use the new description from the input
    };

    if (productIndex === '') { // Adding new product
        if (!products[targetCategory]) {
            products[targetCategory] = []; // Create category if it doesn't exist
        }
        products[targetCategory].push(newProductData);
        showToast(`เพิ่มสินค้า "${newBaseName}" สำเร็จ`);
    } else { // Updating existing product
        // If category changed, remove from old and add to new
        if (categoryName !== targetCategory) {
            products[categoryName].splice(productIndex, 1); // Remove from old category
            if (!products[targetCategory]) {
                products[targetCategory] = [];
            }
            products[targetCategory].push(newProductData); // Add to new category
        } else {
            // Update in place if category is the same
            products[categoryName][productIndex] = newProductData;
        }
        showToast(`แก้ไขสินค้า "${newBaseName}" สำเร็จ`);
    }

    toggleEditProductModal(); // Close edit modal
    renderAdminProducts(); // Re-render admin list
    renderProducts(); // Re-render main shop page
    renderCategoryTabs(); // Re-render category tabs in case a new category was added
    renderMainCategoryGrid(); // Re-render main category grid if categories changed
    renderAISuggestions(); // Re-render AI suggestions
}

/**
 * Deletes a product.
 * @param {string} categoryName - The category of the product.
 * @param {number} productIndex - The index of the product within its category.
 */
function deleteProduct(categoryName, productIndex) {
    // Using custom alert for confirmation
    showAlertDialog('ยืนยันการลบ', `คุณแน่ใจหรือไม่ที่จะลบสินค้า "${products[categoryName][productIndex].baseName}"?`, () => {
        products[categoryName].splice(productIndex, 1);
        renderAdminProducts(); // Re-render admin list
        renderProducts(); // Re-render main shop page
        showToast('ลบสินค้าสำเร็จ');
        closeAlertDialog(); // Close the alert after action
    }, true); // Pass true to indicate it's a confirmation with a callback
}

/**
 * Toggles the visibility of the edit product modal.
 */
function toggleEditProductModal() {
    const editProductModal = document.getElementById('editProductModal');
    if (editProductModal.classList.contains('hidden')) {
        editProductModal.classList.remove('hidden');
        editProductModal.classList.add('flex');
    } else {
        editProductModal.classList.add('hidden');
        editProductModal.classList.remove('flex');
    }
}

/**
 * Renders AI-powered product suggestions.
 * For demonstration, this picks random products. In a real app, this would be dynamic.
 */
function renderAISuggestions() {
    const aiSuggestionsGrid = document.getElementById('aiSuggestionsGrid');
    aiSuggestionsGrid.innerHTML = ''; // Clear existing suggestions

    const allProducts = [];
    for (const category in products) {
        products[category].forEach(p => allProducts.push({ ...p, category: category }));
    }

    // Shuffle products and pick a few (e.g., 4-8)
    const shuffledProducts = allProducts.sort(() => 0.5 - Math.random());
    const suggestions = shuffledProducts.slice(0, Math.min(shuffledProducts.length, 8)); // Max 8 suggestions

    if (suggestions.length === 0) {
        aiSuggestionsGrid.innerHTML = '<p class="text-gray-600 text-center py-4 col-span-full">ไม่มีสินค้าแนะนำในขณะนี้</p>';
        return;
    }

    suggestions.forEach(product => {
        const suggestionCard = document.createElement('div');
        suggestionCard.className = 'ai-suggestion-card p-4 text-center cursor-pointer';
        if (product.inStock) {
            suggestionCard.onclick = () => showProductDetail(product);
        } else {
            suggestionCard.classList.add('out-of-stock');
        }

        let variantInfo = '';
        if (product.variants && product.variants.length > 0) {
            // Display info for the first variant or "หลายชนิด"
            if (product.variants.length === 1) {
                variantInfo = `<p class="text-sm dark-mode-text-gray-400 light-mode-text-gray-600">${product.variants[0].type !== "Original" ? product.variants[0].type : ''}</p>`;
            } else {
                variantInfo = `<p class="text-sm dark-mode-text-gray-400 light-mode-text-gray-600">หลายชนิด</p>`;
            }
        }

        suggestionCard.innerHTML = `
            <img src="${product.img}" alt="${product.baseName}" class="w-full h-32 object-cover rounded mb-3" onerror="this.onerror=null;this.src='https://placehold.co/200x150/333333/FFFFFF?text=No+Image';" />
            <h4 class="text-lg font-semibold mb-1">${product.baseName}</h4>
            ${variantInfo}
            <p class="text-xl font-bold text-green-500">${product.variants[0]?.price.toLocaleString() || 'N/A'} บาท</p>
            ${product.inStock ? `
                <button onclick="event.stopPropagation(); showProductDetail(product)" class="mt-3 w-full btn-primary py-2 rounded text-sm">ดูสินค้า</button>
            ` : `
                <div class="out-of-stock-overlay">
                    <span class="pulse-text">สินค้าหมด</span>
                </div>
                <button disabled class="mt-3 w-full bg-gray-500 text-white py-2 rounded cursor-not-allowed text-sm">สินค้าหมด</button>
            `}
        `;
        aiSuggestionsGrid.appendChild(suggestionCard);
    });
}


// Event listener to ensure DOM is fully loaded before running scripts
document.addEventListener("DOMContentLoaded", () => {
    // Initialize theme based on local storage or default to dark
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.add(savedTheme + '-mode');
    } else {
        document.body.classList.add('dark-mode'); // Default to dark mode
    }
    updateThemeSpecificStyles(); // Apply initial theme styles

    document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);

    renderMainCategoryGrid(); // Render main category grid
    renderCategoryTabs(); // Render product categories
    selectCategory('ทั้งหมด'); // Select "All" category by default
    updateCartDisplay(); // Initialize cart display
    // togglePaymentDetails(); // This call is no longer needed as there's no dynamic display for bank details
    initializeIntersectionObserver(); // Initialize Intersection Observer for animations
    renderAISuggestions(); // Render AI suggestions on load
});
