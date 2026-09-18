 

        const vetoraGate = document.getElementById("vetoraGate");
        const gateStatus = document.getElementById("gateStatus");
        const cart = [];
        const cartNumber = document.getElementById("cartCount");
        const cartButton = document.getElementById("cartButton");
        const menuToggle = document.getElementById("menuToggle");
        const mainNavigation = document.getElementById("mainNavigation");
        const navigation = document.querySelector("nav");
        const languageButtons = document.querySelectorAll(".language-button");
        const cartPanel = document.getElementById("cartPanel");
        const closeCart = document.getElementById("closeCart");
        const cartItems = document.getElementById("cartItems");
        const cartTotal = document.getElementById("cartTotal");
        const currencySelects = document.querySelectorAll(".currency-select");
        const checkoutButton = document.getElementById("checkoutButton");
        const checkoutModal = document.getElementById("checkoutModal");
        const closeCheckout = document.getElementById("closeCheckout");
        const checkoutForm = document.getElementById("checkoutForm");
        const formError = document.getElementById("formError");
        const orderSummaryItems = document.getElementById("orderSummaryItems");
        const orderSummaryTotal = document.getElementById("orderSummaryTotal");
        const message = document.getElementById("cartMessage");
        const buttons = document.querySelectorAll(".buy");
        const filterButtons = document.querySelectorAll(".filter-button");
        const products = document.querySelectorAll(".product");
        const reviewForm = document.getElementById("reviewForm");
        const savedReviews = document.getElementById("savedReviews");
        const reviewFormError = document.getElementById("reviewFormError");
        const savedReviewKey = "vetora-reviews";
        const savedReplyKey = "vetora-replies";
        const reviewsSection = document.getElementById("reviews");
        const productSearch = document.getElementById("productSearch");
        const clearProductSearch = document.getElementById("clearProductSearch");
        const searchEmpty = document.getElementById("searchEmpty");
        const registeredEmails = ["demo@gmail.com", "customer@example.com", "client@noire.md", "hello@noire.md"];
        const exchangeRate = 19.5;
        const commentRecipient = "nick.catia2019@gmail.com";
        const blockedWords = ["prost", "proastă", "prosti", "idiot", "idiotă", "fraier", "tâmpit", "tampit", "idiotule", "muie", "pula", "curva"];
        let currency = "MDL";
        let selectedProductType = "all";
        const languageStorageKey = "vetora-language";
        let currentLanguage = localStorage.getItem(languageStorageKey) || "ro";

        const translations = {
            ro: {
                title: "Vetora.md — Parfumuri de lux",
                gateKicker: "VETORA / ACCES PRIVAT",
                gateTitle: "Intră în lumea<br><span>Vetora</span>",
                gateCopy: "Pregătim o experiență parfumată, creată pentru tine.",
                luxuryPerfumes: "PARFUMURI DE LUX",
                homeLabel: "Revino la începutul paginii Vetora",
                shop: "Magazin",
                about: "Despre noi",
                cart: "🛒 Coș ",
                cartAria: "Deschide coșul de cumpărături",
                menuOpen: "Deschide meniul",
                menuClose: "Închide meniul",
                heroBadge: "COLECȚIE DE PARFUMURI DE LUX",
                heroCopy: "Descoperă parfumuri memorabile create pentru cei care vor să lase o impresie de durată.",
                offerTag: "OFERTĂ FLASH",
                offerCopy: "Două arome. Un singur moment memorabil.",
                offerLink: "Vezi oferta",
                collection: "COLECȚIA NOASTRĂ",
                collectionTitle: "Parfumuri deosebite",
                searchLabel: "Caută parfumul tău",
                searchPlaceholder: "Ex: Oud, Rose, Noir...",
                clearSearch: "Șterge căutarea",
                all: "Toate parfumurile",
                boys: "Pentru bărbați",
                girls: "Pentru femei",
                currencyLabel: "Afișează prețurile în:",
                currencyMDL: "MDL - lei moldovenești",
                currencyEUR: "EUR - euro",
                category50: "Apă de parfum • 50 ml",
                category75: "Apă de parfum • 75 ml",
                category100: "Apă de parfum • 100 ml",
                add: "Adaugă în coș",
                emptySearch: "Nu am găsit parfumuri pentru această căutare.",
                priveTitle: "Detaliile care fac diferența.",
                priveCopy: "O experiență atent aleasă, de la primul acord până la ultimul detaliu al livrării.",
                consultation: "Consultanță personală",
                consultationCopy: "Găsește aroma care te reprezintă cu recomandări directe de la echipa Vetora.",
                packaging: "Ambalaj signature",
                packagingCopy: "Fiecare comandă pleacă împachetată elegant, gata să devină un moment special.",
                delivery: "Livrare discretă",
                deliveryCopy: "Primește parfumul rapid și în siguranță, cu atenție la fiecare detaliu.",
                opinions: "PĂRERILE CLIENȚILOR",
                reviewsTitle: "De ce le place Magazinul Vetora",
                reviewHeading: "Lasă și tu un comentariu",
                reviewCopy: "Spune-ne de ce îți place Magazinul Vetora.",
                namePlaceholder: "Numele tău",
                ratingLabel: "Alege numărul de stele",
                reviewPlaceholder: "Scrie comentariul tău...",
                publish: "Publică comentariul",
                experience: "EXPERIENȚA Vetora",
                whyChoose: "De ce să ne alegi?",
                premiumQuality: "Calitate premium",
                premiumQualityCopy: "Parfumuri atent selecționate, de o calitate excepțională.",
                fastDelivery: "Livrare rapidă",
                fastDeliveryCopy: "Livrare rapidă și sigură în toată Moldova.",
                elegantStyle: "Stil elegant",
                elegantStyleCopy: "Parfumuri elegante create pentru a impresiona.",
                exclusive: "Colecție exclusivă",
                exclusiveCopy: "Descoperă arome unice pe care nu le vei uita.",
                join: "Alătură-te Vetora",
                newsletterCopy: "Primește noutăți despre parfumuri, oferte speciale și lansări exclusive.",
                emailPlaceholder: "Introdu adresa de email",
                subscribe: "Abonează-te",
                socialCopy: "Alătură-te nouă și pe rețelele sociale pentru noutăți, inspirație și oferte speciale.",
                luxuryFooter: "Parfumuri de lux",
                madeIn: "Creat cu ✨ în Moldova",
                assistantOpen: "Deschide asistentul Vetora",
                assistantTitle: "Atelierul tău de arome",
                assistantOnline: "Online • gata să creeze o recomandare",
                assistantGreeting: "Salut. Spune-mi ce vrei să transmiți astăzi și îți găsesc aroma potrivită, fără răspunsuri generice.",
                assistantEvening: "Seară elegantă",
                assistantGift: "Cadou sub 1700 MDL",
                assistantQuiz: "Quiz rapid",
                assistantPlaceholder: "Descrie vibe-ul tău...",
                assistantInputLabel: "Scrie un mesaj pentru Vetora AI",
                assistantNote: "Răspunsuri instant • recomandări din colecția Vetora",
                cartTitle: "Coșul tău",
                closeCart: "Închide coșul de cumpărături",
                emptyCart: "Coșul tău este gol.",
                money: "Monedă",
                total: "Total",
                buyNow: "Cumpără acum",
                closeOrder: "Închide comanda",
                orderKicker: "FINALIZEAZĂ COMANDA",
                orderTitle: "Este aproape al tău.",
                orderCopy: "Introdu datele de contact și vom pregăti comanda ta de parfum.",
                purchased: "Produsele cumpărate",
                phone: "Număr de telefon",
                email: "Adresă de email",
                confirm: "Confirmă achiziția",
                added: "Adăugat în coș ✨",
                thankYou: "Îți mulțumim pentru achiziția parfumului ✨",
                reply: "Răspunde",
                send: "Trimite",
                replyPlaceholder: "Scrie un răspuns...",
                replyPrefix: "Răspuns:"
            },
            ru: {
                title: "Vetora.md — Роскошные ароматы",
                gateKicker: "VETORA / ЧАСТНЫЙ ДОСТУП",
                gateTitle: "Добро пожаловать в мир<br><span>Vetora</span>",
                gateCopy: "Мы создаём ароматный опыт специально для вас.",
                luxuryPerfumes: "РОСКОШНЫЕ АРОМАТЫ",
                homeLabel: "Вернуться в начало страницы Vetora",
                shop: "Магазин",
                about: "О нас",
                cart: "🛒 Корзина ",
                cartAria: "Открыть корзину",
                menuOpen: "Открыть меню",
                menuClose: "Закрыть меню",
                heroBadge: "КОЛЛЕКЦИЯ ЭЛИТНЫХ АРОМАТОВ",
                heroCopy: "Откройте незабываемые ароматы для тех, кто хочет оставить впечатление.",
                offerTag: "ВЫГОДНОЕ ПРЕДЛОЖЕНИЕ",
                offerCopy: "Два аромата. Один незабываемый момент.",
                offerLink: "Смотреть предложение",
                collection: "НАША КОЛЛЕКЦИЯ",
                collectionTitle: "Изысканные ароматы",
                searchLabel: "Найдите свой аромат",
                searchPlaceholder: "Например: Oud, Rose, Noir...",
                clearSearch: "Очистить поиск",
                all: "Все ароматы",
                boys: "Для мужчин",
                girls: "Для женщин",
                currencyLabel: "Показывать цены в:",
                currencyMDL: "MDL - молдавские леи",
                currencyEUR: "EUR - евро",
                category50: "Парфюмерная вода • 50 мл",
                category75: "Парфюмерная вода • 75 мл",
                category100: "Парфюмерная вода • 100 мл",
                add: "Добавить в корзину",
                emptySearch: "По вашему запросу ароматы не найдены.",
                priveTitle: "Детали создают разницу.",
                priveCopy: "Продуманный опыт от первого аккорда до последней детали доставки.",
                consultation: "Персональная консультация",
                consultationCopy: "Найдите свой аромат с рекомендациями команды Vetora.",
                packaging: "Фирменная упаковка",
                packagingCopy: "Каждый заказ упакован элегантно и готов стать особенным моментом.",
                delivery: "Деликатная доставка",
                deliveryCopy: "Получите аромат быстро и безопасно, с вниманием к каждой детали.",
                opinions: "ОТЗЫВЫ КЛИЕНТОВ",
                reviewsTitle: "Почему выбирают Vetora",
                reviewHeading: "Оставьте свой отзыв",
                reviewCopy: "Расскажите, почему вам нравится Vetora.",
                namePlaceholder: "Ваше имя",
                ratingLabel: "Выберите количество звёзд",
                reviewPlaceholder: "Напишите свой отзыв...",
                publish: "Опубликовать отзыв",
                experience: "ОПЫТ VETORA",
                whyChoose: "Почему выбирают нас?",
                premiumQuality: "Премиальное качество",
                premiumQualityCopy: "Тщательно отобранные ароматы исключительного качества.",
                fastDelivery: "Быстрая доставка",
                fastDeliveryCopy: "Быстрая и безопасная доставка по всей Молдове.",
                elegantStyle: "Элегантный стиль",
                elegantStyleCopy: "Элегантные ароматы, созданные для впечатления.",
                exclusive: "Эксклюзивная коллекция",
                exclusiveCopy: "Откройте уникальные ароматы, которые невозможно забыть.",
                join: "Присоединяйтесь к Vetora",
                newsletterCopy: "Получайте новости об ароматах, специальные предложения и эксклюзивные запуски.",
                emailPlaceholder: "Введите адрес электронной почты",
                subscribe: "Подписаться",
                socialCopy: "Следите за нами в социальных сетях: новости, вдохновение и специальные предложения.",
                luxuryFooter: "Роскошные ароматы",
                madeIn: "Создано с ✨ в Молдове",
                assistantOpen: "Открыть ассистента Vetora",
                assistantTitle: "Ваша ароматная мастерская",
                assistantOnline: "Онлайн • готов создать рекомендацию",
                assistantGreeting: "Здравствуйте. Расскажите, какое впечатление хотите создать, и я подберу подходящий аромат.",
                assistantEvening: "Элегантный вечер",
                assistantGift: "Подарок до 1700 MDL",
                assistantQuiz: "Быстрый тест",
                assistantPlaceholder: "Опишите своё настроение...",
                assistantInputLabel: "Напишите сообщение Vetora AI",
                assistantNote: "Мгновенные ответы • рекомендации из коллекции Vetora",
                cartTitle: "Ваша корзина",
                closeCart: "Закрыть корзину",
                emptyCart: "Ваша корзина пуста.",
                money: "Валюта",
                total: "Итого",
                buyNow: "Купить сейчас",
                closeOrder: "Закрыть заказ",
                orderKicker: "ОФОРМЛЕНИЕ ЗАКАЗА",
                orderTitle: "Он почти ваш.",
                orderCopy: "Оставьте контактные данные, и мы подготовим ваш заказ.",
                purchased: "Выбранные товары",
                phone: "Номер телефона",
                email: "Адрес электронной почты",
                confirm: "Подтвердить покупку",
                added: "Добавлено в корзину ✨",
                thankYou: "Спасибо за покупку аромата ✨",
                reply: "Ответить",
                send: "Отправить",
                replyPlaceholder: "Напишите ответ...",
                replyPrefix: "Ответ:"
            },
            en: {
                title: "Vetora.md — Luxury fragrances",
                gateKicker: "VETORA / PRIVATE ACCESS",
                gateTitle: "Enter the world of<br><span>Vetora</span>",
                gateCopy: "We are preparing a fragrance experience made for you.",
                luxuryPerfumes: "LUXURY FRAGRANCES",
                homeLabel: "Return to the Vetora homepage",
                shop: "Shop",
                about: "About us",
                cart: "🛒 Cart ",
                cartAria: "Open shopping cart",
                menuOpen: "Open menu",
                menuClose: "Close menu",
                heroBadge: "LUXURY FRAGRANCE COLLECTION",
                heroCopy: "Discover memorable fragrances created for those who want to leave an impression.",
                offerTag: "FLASH OFFER",
                offerCopy: "Two scents. One unforgettable moment.",
                offerLink: "View offer",
                collection: "OUR COLLECTION",
                collectionTitle: "Exceptional fragrances",
                searchLabel: "Find your fragrance",
                searchPlaceholder: "Ex: Oud, Rose, Noir...",
                clearSearch: "Clear search",
                all: "All fragrances",
                boys: "For men",
                girls: "For women",
                currencyLabel: "Show prices in:",
                currencyMDL: "MDL - Moldovan lei",
                currencyEUR: "EUR - euros",
                category50: "Eau de parfum • 50 ml",
                category75: "Eau de parfum • 75 ml",
                category100: "Eau de parfum • 100 ml",
                add: "Add to cart",
                emptySearch: "No fragrances match your search.",
                priveTitle: "Details make the difference.",
                priveCopy: "A considered experience, from the first accord to the final delivery detail.",
                consultation: "Personal consultation",
                consultationCopy: "Find your signature scent with direct recommendations from the Vetora team.",
                packaging: "Signature packaging",
                packagingCopy: "Every order leaves elegantly wrapped, ready to become a special moment.",
                delivery: "Discreet delivery",
                deliveryCopy: "Receive your fragrance quickly and safely, with care in every detail.",
                opinions: "CLIENT VOICES",
                reviewsTitle: "Why customers choose Vetora",
                reviewHeading: "Leave a review",
                reviewCopy: "Tell us why you love Vetora.",
                namePlaceholder: "Your name",
                ratingLabel: "Choose a star rating",
                reviewPlaceholder: "Write your review...",
                publish: "Publish review",
                experience: "THE VETORA EXPERIENCE",
                whyChoose: "Why choose us?",
                premiumQuality: "Premium quality",
                premiumQualityCopy: "Carefully selected fragrances of exceptional quality.",
                fastDelivery: "Fast delivery",
                fastDeliveryCopy: "Fast and secure delivery across Moldova.",
                elegantStyle: "Elegant style",
                elegantStyleCopy: "Elegant fragrances created to make an impression.",
                exclusive: "Exclusive collection",
                exclusiveCopy: "Discover unique scents you will never forget.",
                join: "Join Vetora",
                newsletterCopy: "Receive fragrance news, special offers, and exclusive launches.",
                emailPlaceholder: "Enter your email address",
                subscribe: "Subscribe",
                socialCopy: "Join us on social media for news, inspiration, and special offers.",
                luxuryFooter: "Luxury fragrances",
                madeIn: "Made with ✨ in Moldova",
                assistantOpen: "Open Vetora assistant",
                assistantTitle: "Your fragrance atelier",
                assistantOnline: "Online • ready to create a recommendation",
                assistantGreeting: "Hello. Tell me what you want to express today and I will find your perfect scent.",
                assistantEvening: "Elegant evening",
                assistantGift: "Gift under 1700 MDL",
                assistantQuiz: "Quick quiz",
                assistantPlaceholder: "Describe your vibe...",
                assistantInputLabel: "Write a message for Vetora AI",
                assistantNote: "Instant answers • recommendations from the Vetora collection",
                cartTitle: "Your cart",
                closeCart: "Close shopping cart",
                emptyCart: "Your cart is empty.",
                money: "Currency",
                total: "Total",
                buyNow: "Buy now",
                closeOrder: "Close checkout",
                orderKicker: "CHECKOUT",
                orderTitle: "It is almost yours.",
                orderCopy: "Enter your contact details and we will prepare your fragrance order.",
                purchased: "Purchased products",
                phone: "Phone number",
                email: "Email address",
                confirm: "Confirm purchase",
                added: "Added to cart ✨",
                thankYou: "Thank you for your fragrance purchase ✨",
                reply: "Reply",
                send: "Send",
                replyPlaceholder: "Write a reply...",
                replyPrefix: "Reply:"
            }
        };

        function languageText(key) {
            return translations[currentLanguage][key] || translations.ro[key] || key;
        }

        function setLanguageText(selector, key) {
            const element = document.querySelector(selector);
            if (element) element.textContent = languageText(key);
        }

        function setLanguageTexts(selector, keys) {
            document.querySelectorAll(selector).forEach((element, index) => {
                if (keys[index]) element.textContent = languageText(keys[index]);
            });
        }

        function applyLanguage() {
            const language = translations[currentLanguage];
            document.documentElement.lang = currentLanguage === "ru" ? "ru" : currentLanguage === "en" ? "en" : "ro";
            languageButtons.forEach(button => {
                const isSelected = (currentLanguage === "ro" && button.dataset.language === "română") ||
                    (currentLanguage === "ru" && button.dataset.language === "rusă") ||
                    (currentLanguage === "en" && button.dataset.language === "engleză");
                button.classList.toggle("active", isSelected);
                button.setAttribute("aria-pressed", String(isSelected));
            });
            document.title = language.title;
            setLanguageText(".gate-kicker", "gateKicker");
            document.querySelector(".gate-content h1").innerHTML = language.gateTitle;
            setLanguageText(".gate-copy", "gateCopy");
            setLanguageTexts(".gate-footer span", ["luxuryPerfumes", "luxuryPerfumes", "luxuryPerfumes"]);
            setLanguageText(".logo", "homeLabel");
            document.querySelector(".logo").innerHTML = `<img src="images/Vectora.jpg" alt="Vetora"> Vetora`;
            setLanguageTexts("#mainNavigation > li > a", ["shop", "about"]);
            cartButton.childNodes[0].textContent = language.cart;
            cartButton.setAttribute("aria-label", language.cartAria);
            menuToggle.setAttribute("aria-label", navigation.classList.contains("menu-open") ? language.menuClose : language.menuOpen);
            setLanguageText(".hero .badge", "heroBadge");
            setLanguageText(".hero-content > p", "heroCopy");
            setLanguageText(".hero-offer-tag", "offerTag");
            setLanguageText(".hero-offer-copy span", "offerCopy");
            setLanguageText(".hero-offer-link", "offerLink");
            setLanguageText("#shop .section-title span", "collection");
            setLanguageText("#shop .section-title h2", "collectionTitle");
            setLanguageText(".shop-search label", "searchLabel");
            productSearch.placeholder = language.searchPlaceholder;
            clearProductSearch.setAttribute("aria-label", language.clearSearch);
            setLanguageTexts(".filter-button", ["all", "boys", "girls"]);
            setLanguageText(".shop-currency-row label", "currencyLabel");
            setLanguageTexts("#shopCurrency option", ["currencyMDL", "currencyEUR"]);
            products.forEach(product => {
                const category = product.querySelector(".category");
                const buyButton = product.querySelector(".buy");
                const categoryKey = category?.textContent.includes("100") ? "category100" : category?.textContent.includes("75") ? "category75" : "category50";
                if (category && categoryKey) category.textContent = language[categoryKey];
                if (buyButton) {
                    buyButton.textContent = language.add;
                    buyButton.dataset.category = category?.textContent || language.category50;
                }
            });
            setLanguageText("#searchEmpty", "emptySearch");
            setLanguageText(".prive-intro h2", "priveTitle");
            setLanguageText(".prive-intro p", "priveCopy");
            setLanguageTexts(".prive-service h3", ["consultation", "packaging", "delivery"]);
            setLanguageTexts(".prive-service p", ["consultationCopy", "packagingCopy", "deliveryCopy"]);
            setLanguageText("#reviews .section-title span", "opinions");
            setLanguageText("#reviews .section-title h2", "reviewsTitle");
            const reviewQuotes = currentLanguage === "ru"
                ? ["Мне нравится Vetora за качественные ароматы, которые долго держатся.", "Я выбираю Vetora за быструю доставку и красивую упаковку.", "В Vetora элегантный магазин, хорошие цены и простой опыт покупки.", "Мне нравится выбор ароматов для мужчин и женщин. Легко найти подарок."]
                : currentLanguage === "en"
                    ? ["I love Vetora for its quality fragrances and long-lasting scents.", "I choose Vetora for fast delivery and beautifully wrapped products.", "Vetora has an elegant store, good prices, and a simple shopping experience.", "I love the variety of fragrances for men and women. Gifts are easy to find."]
                    : ["Îmi place Magazinul Vetora pentru parfumurile de calitate și aromele care rezistă mult timp.", "Aleg Vetora pentru livrarea rapidă și pentru că produsele ajung mereu ambalate foarte frumos.", "Vetora are un magazin elegant, prețuri bune și o experiență simplă de la alegere până la comandă.", "Îmi place varietatea de parfumuri pentru bărbați și femei. Găsesc ușor un cadou potrivit."];
            const reviewReplies = currentLanguage === "ru"
                ? ["Спасибо, что оценили наш магазин! Мы рады, что вам понравилось качество ароматов.", "Спасибо за отзыв! Мы заботимся о каждой посылке, чтобы ваш опыт был приятным.", "Большое спасибо за ваши слова! Для нас честь создавать элегантный и простой опыт.", "Спасибо, что выбрали нас! Мы рады помочь найти аромат для любого случая."]
                : currentLanguage === "en"
                    ? ["Thank you for enjoying our store! We are glad you appreciate the fragrance quality.", "Thank you for your kind words! We care about every order to make your experience special.", "Thank you for your words! It is our honor to offer an elegant and effortless experience.", "Thank you for choosing us! We are happy to help you find the right scent for every occasion."]
                    : ["Vă mulțumim că v-a plăcut magazinul nostru! Ne bucurăm că apreciați calitatea parfumurilor.", "Vă mulțumim pentru apreciere! Punem grijă în fiecare comandă pentru ca experiența dumneavoastră să fie una plăcută.", "Vă mulțumim frumos pentru cuvintele dumneavoastră! Ne onorează să vă oferim o experiență elegantă și simplă.", "Vă mulțumim că ați ales magazinul nostru! Ne bucurăm că găsiți la Vetora parfumul potrivit pentru fiecare ocazie."];
            setLanguageTexts(".review-card > p", reviewQuotes);
            setLanguageTexts(".store-reply p", reviewReplies);
            setLanguageText(".new-review-area h3", "reviewHeading");
            setLanguageText(".new-review-area > p", "reviewCopy");
            document.getElementById("reviewName").placeholder = language.namePlaceholder;
            document.getElementById("reviewRating").setAttribute("aria-label", language.ratingLabel);
            document.getElementById("reviewText").placeholder = language.reviewPlaceholder;
            setLanguageText("#reviewForm .btn", "publish");
            setLanguageTexts(".reply-button", document.querySelectorAll(".reply-button").length ? ["reply"].concat(Array(document.querySelectorAll(".reply-button").length - 1).fill("reply")) : []);
            setLanguageTexts(".reply-form button", document.querySelectorAll(".reply-form button").length ? ["send"].concat(Array(document.querySelectorAll(".reply-form button").length - 1).fill("send")) : []);
            document.querySelectorAll(".reply-form input").forEach(input => input.placeholder = language.replyPlaceholder);
            setLanguageText("#about .section-title span", "experience");
            setLanguageText("#about .section-title h2", "whyChoose");
            setLanguageTexts(".feature h3", ["premiumQuality", "fastDelivery", "elegantStyle", "exclusive"]);
            setLanguageTexts(".feature p", ["premiumQualityCopy", "fastDeliveryCopy", "elegantStyleCopy", "exclusiveCopy"]);
            setLanguageText(".newsletter h2", "join");
            setLanguageText(".newsletter > p", "newsletterCopy");
            document.querySelector(".email-box input").placeholder = language.emailPlaceholder;
            setLanguageText(".email-box .btn", "subscribe");
            setLanguageText(".social-section > p", "socialCopy");
            setLanguageTexts("footer p", ["luxuryFooter", "madeIn"]);
            assistantLauncher.setAttribute("aria-label", language.assistantOpen);
            setLanguageText(".assistant-header h2", "assistantTitle");
            setLanguageText(".assistant-signal", "assistantOnline");
            setLanguageText(".assistant-messages .assistant-message p", "assistantGreeting");
            setLanguageTexts(".assistant-prompts button", ["assistantEvening", "assistantGift", "assistantQuiz"]);
            assistantInput.placeholder = language.assistantPlaceholder;
            assistantInput.setAttribute("aria-label", language.assistantInputLabel);
            setLanguageText(".assistant-note", "assistantNote");
            setLanguageText(".cart-panel h2", "cartTitle");
            closeCart.setAttribute("aria-label", language.closeCart);
            setLanguageText(".empty-cart", "emptyCart");
            setLanguageText(".currency-label", "money");
            setLanguageTexts("#currencySelect option", ["currencyMDL", "currencyEUR"]);
            setLanguageText(".cart-total span", "total");
            setLanguageText("#checkoutButton", "buyNow");
            closeCheckout.setAttribute("aria-label", language.closeOrder);
            setLanguageText(".modal-kicker", "orderKicker");
            setLanguageText(".checkout-modal h2", "orderTitle");
            setLanguageText(".checkout-modal > p", "orderCopy");
            setLanguageText(".order-summary h3", "purchased");
            setLanguageTexts(".checkout-form label", ["phone", "email"]);
            setLanguageText(".checkout-form .btn", "confirm");
        }

        window.vetoraVerified = function () {
            gateStatus.classList.add("verified");
            gateStatus.innerHTML = '<span class="status-dot"></span> Acces verificat';
            window.setTimeout(() => {
                vetoraGate.classList.add("gate-hidden");
                document.body.classList.remove("gate-active");
            }, 650);
        };

        document.body.classList.add("gate-active");

        function formatPrice(price) {
            const convertedPrice = currency === "EUR" ? price / exchangeRate : price;
            return `${convertedPrice.toLocaleString("ro-RO", { minimumFractionDigits: currency === "EUR" ? 2 : 0, maximumFractionDigits: 2 })} ${currency}`;
        }

        function formatBothCurrencies(price) {
            const mdl = price.toLocaleString("ro-RO", { maximumFractionDigits: 0 });
            const eur = (price / exchangeRate).toLocaleString("ro-RO", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            return `${mdl} MDL / ${eur} EUR`;
        }

        function updateProductPrices() {
            products.forEach((product, index) => {
                const priceElement = product.querySelector(".price");
                const buyButton = product.querySelector(".buy");
                if (priceElement && buyButton) {
                    const salePrice = Number(buyButton.dataset.price);
                    const oldPrice = Math.ceil((salePrice * (1.55 + ((index * 13) % 35) / 100)) / 10) * 10;
                    priceElement.innerHTML = `<del class="old-price">${formatPrice(oldPrice)}</del><strong>${formatPrice(salePrice)}</strong>`;
                }
            });
        }

        function showMessage(text) {
            message.textContent = text;
            message.classList.add("show");
            setTimeout(() => message.classList.remove("show"), 1800);
        }

        function renderSavedReviews() {
            const reviews = JSON.parse(localStorage.getItem(savedReviewKey) || "[]");
            savedReviews.replaceChildren();
            reviews.forEach((review, index) => {
                const card = document.createElement("article");
                card.className = "review-card saved-review-card";
                card.dataset.reviewId = review.id || `saved-review-${index}`;

                const stars = document.createElement("div");
                stars.className = "stars";
                stars.setAttribute("aria-label", `${review.rating} stele`);
                stars.textContent = "★".repeat(review.rating) + "☆".repeat(5 - review.rating);

                const text = document.createElement("p");
                text.textContent = `„${review.text}”`;

                const name = document.createElement("strong");
                name.textContent = review.name;

                card.append(stars, text, name);
                savedReviews.appendChild(card);
                addReplyControls(card);
            });
        }

        function renderReplies(card) {
            const replies = JSON.parse(localStorage.getItem(savedReplyKey) || "{}")[card.dataset.reviewId] || [];
            const repliesArea = card.querySelector(".replies-area");
            repliesArea.replaceChildren();
            replies.forEach(reply => {
                const replyElement = document.createElement("p");
                replyElement.className = "reply-text";
                replyElement.textContent = `${languageText("replyPrefix")} ${reply}`;
                repliesArea.appendChild(replyElement);
            });
        }

        function addReplyControls(card) {
            if (card.querySelector(".reply-button")) return;
            const replyButton = document.createElement("button");
            replyButton.className = "reply-button";
            replyButton.type = "button";
            replyButton.textContent = languageText("reply");

            const replyForm = document.createElement("form");
            replyForm.className = "reply-form";
            replyForm.hidden = true;
            replyForm.innerHTML = `<input type="text" maxlength="180" placeholder="${languageText("replyPlaceholder")}" required><button type="submit">${languageText("send")}</button>`;

            const repliesArea = document.createElement("div");
            repliesArea.className = "replies-area";
            card.append(replyButton, replyForm, repliesArea);
            renderReplies(card);
        }

        function renderCart() {
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
            cartNumber.textContent = totalItems;
            cartTotal.textContent = formatBothCurrencies(totalPrice);
            checkoutButton.disabled = cart.length === 0;

            if (!cart.length) {
                cartItems.innerHTML = `<p class="empty-cart">${languageText("emptyCart")}</p>`;
                return;
            }

            cartItems.innerHTML = cart.map((item, index) => `
                <div class="cart-item">
                    <div>
                        <h3>${item.name}</h3>
                        <p>${item.category} · ${formatPrice(item.price)} / buc.</p>
                    </div>
                    <div class="item-actions">
                        <button type="button" data-action="decrease" data-index="${index}" aria-label="Scade cantitatea pentru ${item.name}">−</button>
                        <select class="quantity-select" data-action="quantity" data-index="${index}" aria-label="Alege cantitatea pentru ${item.name}">
                            ${Array.from({ length: 100 }, (_, quantityIndex) => `<option value="${quantityIndex + 1}" ${item.quantity === quantityIndex + 1 ? "selected" : ""}>${quantityIndex + 1}</option>`).join("")}
                        </select>
                        <button type="button" data-action="increase" data-index="${index}" aria-label="Mărește cantitatea pentru ${item.name}">+</button>
                        <button class="delete-item" type="button" data-action="delete" data-index="${index}" aria-label="Șterge ${item.name}">×</button>
                    </div>
                </div>
            `).join("");
        }

        function setCartOpen(isOpen) {
            cartPanel.classList.toggle("open", isOpen);
            cartPanel.setAttribute("aria-hidden", String(!isOpen));
        }

        buttons.forEach(button => button.addEventListener("click", () => {
            const existingItem = cart.find(item => item.name === button.dataset.name);
            if (existingItem) {
                existingItem.quantity = Math.min(existingItem.quantity + 1, 100);
            } else {
                cart.push({
                    name: button.dataset.name,
                    category: button.dataset.category,
                    price: Number(button.dataset.price),
                    quantity: 1
                });
            }
            renderCart();
            showMessage(languageText("added"));
        }));

        function filterProducts() {
            const query = productSearch.value.trim().toLocaleLowerCase("ro");
            let visibleProducts = 0;

            products.forEach(product => {
                const matchesType = selectedProductType === "all" || product.dataset.type === selectedProductType;
                const matchesQuery = !query || product.textContent.toLocaleLowerCase("ro").includes(query);
                product.hidden = !matchesType || !matchesQuery;
                if (!product.hidden) visibleProducts++;
            });

            searchEmpty.hidden = visibleProducts > 0;
            clearProductSearch.hidden = !query;
        }

        filterButtons.forEach(filterButton => filterButton.addEventListener("click", () => {
            selectedProductType = filterButton.dataset.filter;
            filterButtons.forEach(button => button.classList.toggle("active", button === filterButton));
            filterProducts();
        }));

        productSearch.addEventListener("input", filterProducts);
        clearProductSearch.addEventListener("click", () => {
            productSearch.value = "";
            productSearch.focus();
            filterProducts();
        });

        cartItems.addEventListener("click", event => {
            const actionButton = event.target.closest("button[data-action]");
            if (!actionButton) return;
            const item = cart[Number(actionButton.dataset.index)];
            if (actionButton.dataset.action === "increase") item.quantity = Math.min(item.quantity + 1, 100);
            if (actionButton.dataset.action === "decrease") item.quantity -= 1;
            if (actionButton.dataset.action === "delete" || item.quantity < 1) cart.splice(Number(actionButton.dataset.index), 1);
            renderCart();
        });

        cartItems.addEventListener("change", event => {
            const quantitySelect = event.target.closest('select[data-action="quantity"]');
            if (!quantitySelect) return;
            cart[Number(quantitySelect.dataset.index)].quantity = Number(quantitySelect.value);
            renderCart();
        });

        currencySelects.forEach(currencySelect => currencySelect.addEventListener("change", () => {
            currency = currencySelect.value;
            currencySelects.forEach(select => select.value = currency);
            updateProductPrices();
            renderCart();
        }));

        function renderOrderSummary() {
            orderSummaryItems.innerHTML = cart.map(item => `<p>${item.quantity} × ${item.name} <span>${formatPrice(item.price * item.quantity)}</span></p>`).join("");
            const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
            orderSummaryTotal.textContent = `Total: ${formatBothCurrencies(totalPrice)}`;
        }

        function setMenuOpen(isOpen) {
            navigation.classList.toggle("menu-open", isOpen);
            menuToggle.setAttribute("aria-expanded", String(isOpen));
            menuToggle.setAttribute("aria-label", isOpen ? "Închide meniul" : "Deschide meniul");
        }

        menuToggle.addEventListener("click", () => {
            setMenuOpen(!navigation.classList.contains("menu-open"));
        });

        mainNavigation.addEventListener("click", event => {
            if (event.target.closest("a")) setMenuOpen(false);
        });

        languageButtons.forEach(languageButton => languageButton.addEventListener("click", () => {
            const selectedLanguage = languageButton.dataset.language === "rusă" ? "ru" : languageButton.dataset.language === "engleză" ? "en" : "ro";
            localStorage.setItem(languageStorageKey, selectedLanguage);
            window.location.reload();
        }));

        document.addEventListener("click", event => {
            if (!navigation.contains(event.target)) setMenuOpen(false);
        });

        cartButton.addEventListener("click", () => setCartOpen(true));
        closeCart.addEventListener("click", () => setCartOpen(false));
        checkoutButton.addEventListener("click", () => {
            formError.textContent = "";
            renderOrderSummary();
            checkoutModal.classList.add("show");
            checkoutModal.setAttribute("aria-hidden", "false");
        });
        closeCheckout.addEventListener("click", () => {
            checkoutModal.classList.remove("show");
            checkoutModal.setAttribute("aria-hidden", "true");
        });

        checkoutForm.addEventListener("submit", event => {
            event.preventDefault();
            const email = document.getElementById("checkoutEmail").value.trim().toLowerCase();
            if (!registeredEmails.includes(email)) {
                formError.textContent = "Această adresă de email nu este corectă sau nu este înregistrată.";
                return;
            }
            checkoutModal.classList.remove("show");
            checkoutModal.setAttribute("aria-hidden", "true");
            setCartOpen(false);
            cart.length = 0;
            renderCart();
            checkoutForm.reset();
            showMessage(languageText("thankYou"));
        });

        reviewForm.addEventListener("submit", event => {
            event.preventDefault();
            reviewFormError.textContent = "";
            const reviewName = document.getElementById("reviewName").value.trim();
            const reviewText = document.getElementById("reviewText").value.trim();
            const reviewRating = Number(document.getElementById("reviewRating").value);
            const containsBlockedWord = blockedWords.some(word => `${reviewName} ${reviewText}`.toLowerCase().includes(word));
            if (containsBlockedWord) {
                reviewFormError.textContent = "Comentariul nu poate fi publicat deoarece conține cuvinte jignitoare.";
                return;
            }
            const reviews = JSON.parse(localStorage.getItem(savedReviewKey) || "[]");
            reviews.push({
                id: `saved-review-${Date.now()}`,
                name: reviewName,
                rating: reviewRating,
                text: reviewText
            });
            localStorage.setItem(savedReviewKey, JSON.stringify(reviews));
            reviewForm.reset();
            renderSavedReviews();
            showMessage("Comentariul tău a fost publicat ✨");

            const subject = encodeURIComponent(`Comentariu nou pentru Magazinul Vetora - ${reviewName}`);
            const body = encodeURIComponent(`Nume: ${reviewName}\nRating: ${reviewRating} stele\nComentariu: ${reviewText}`);
            window.location.href = `mailto:${commentRecipient}?subject=${subject}&body=${body}`;
        });

        reviewsSection.addEventListener("click", event => {
            const replyButton = event.target.closest(".reply-button");
            if (!replyButton) return;
            const card = replyButton.closest(".review-card");
            card.querySelector(".reply-form").hidden = !card.querySelector(".reply-form").hidden;
        });

        reviewsSection.addEventListener("submit", event => {
            const replyForm = event.target.closest(".reply-form");
            if (!replyForm) return;
            event.preventDefault();
            const card = replyForm.closest(".review-card");
            const replyInput = replyForm.querySelector("input");
            const replies = JSON.parse(localStorage.getItem(savedReplyKey) || "{}");
            replies[card.dataset.reviewId] = [...(replies[card.dataset.reviewId] || []), replyInput.value.trim()];
            localStorage.setItem(savedReplyKey, JSON.stringify(replies));
            replyForm.reset();
            replyForm.hidden = true;
            renderReplies(card);
        });

        updateProductPrices();
        renderCart();
        document.querySelectorAll(".review-card").forEach(addReplyControls);
        renderSavedReviews();

        const assistantLauncher = document.getElementById("assistantLauncher");
        const assistantPanel = document.getElementById("assistantPanel");
        const assistantClose = document.getElementById("assistantClose");
        const assistantNewChat = document.getElementById("assistantNewChat");
        const assistantMessages = document.getElementById("assistantMessages");
        const assistantForm = document.getElementById("assistantForm");
        const assistantInput = document.getElementById("assistantInput");
        const assistantPrompts = document.getElementById("assistantPrompts");
        let quizStep = 0;
        applyLanguage();

        function toggleAssistant(isOpen) {
            assistantPanel.classList.toggle("open", isOpen);
            assistantPanel.setAttribute("aria-hidden", String(!isOpen));
            assistantLauncher.setAttribute("aria-expanded", String(isOpen));
            if (isOpen) assistantInput.focus();
        }

        function addAssistantMessage(text, type = "ai", product = null) {
            const messageElement = document.createElement("article");
            messageElement.className = `assistant-message assistant-message-${type}`;
            if (type === "ai") {
                const label = document.createElement("span");
                label.className = "assistant-message-label";
                label.textContent = "VECTOR";
                messageElement.appendChild(label);
            }
            const paragraph = document.createElement("p");
            paragraph.textContent = text;
            messageElement.appendChild(paragraph);

            if (product) {
                const productElement = document.createElement("div");
                productElement.className = "assistant-product";
                productElement.innerHTML = `<img src="${product.image}" alt="${product.name}"><div><strong>${product.name}</strong><small>${formatPrice(product.price)} • ${product.category}</small></div><button class="assistant-add" type="button" data-product="${product.name}">Adaugă</button>`;
                messageElement.appendChild(productElement);
            }

            assistantMessages.appendChild(messageElement);
            assistantMessages.scrollTop = assistantMessages.scrollHeight;
        }

        function showAssistantTyping() {
            const typingElement = document.createElement("div");
            typingElement.className = "assistant-typing";
            typingElement.innerHTML = "<span></span><span></span><span></span>";
            assistantMessages.appendChild(typingElement);
            assistantMessages.scrollTop = assistantMessages.scrollHeight;
            return typingElement;
        }

        function getCatalog() {
            return [...buttons].map(button => ({
                name: button.dataset.name,
                category: button.dataset.category,
                price: Number(button.dataset.price),
                image: button.closest(".product")?.querySelector("img")?.src || ""
            }));
        }

        function findRecommendation(query) {
            const catalog = getCatalog();
            const normalizedQuery = query.toLowerCase();
            const budgetMatch = normalizedQuery.match(/(?:sub|până la| pana la)\s*(\d{3,4})/);
            const budget = budgetMatch ? Number(budgetMatch[1]) : Infinity;
            let candidates = catalog.filter(product => product.price <= budget);
            if (!candidates.length) candidates = catalog;

            if (normalizedQuery.includes("trandafir") || normalizedQuery.includes("romantic") || normalizedQuery.includes("floral")) {
                return candidates.find(product => /rose|velvet|amber|bloom/i.test(product.name)) || candidates[0];
            }
            if (normalizedQuery.includes("oud") || normalizedQuery.includes("intens") || normalizedQuery.includes("puternic") || normalizedQuery.includes("masculin")) {
                return candidates.find(product => /oud|knight|noir|storm/i.test(product.name)) || candidates[0];
            }
            if (normalizedQuery.includes("fresh") || normalizedQuery.includes("vară") || normalizedQuery.includes("zi")) {
                return candidates.find(product => /sun|golden|stronger/i.test(product.name)) || candidates[0];
            }
            if (normalizedQuery.includes("seară") || normalizedQuery.includes("elegant") || normalizedQuery.includes("lux")) {
                return candidates.find(product => /midnight|royal|noir|prestige/i.test(product.name)) || candidates[0];
            }
            return candidates.sort((first, second) => second.price - first.price)[0];
        }

        function replyToAssistant(rawText) {
            const text = rawText.trim();
            if (!text) return;
            addAssistantMessage(text, "user");
            const normalizedText = text.toLowerCase();
            let reply = "Pot să-ți găsesc o aromă după vibe, ocazie, buget sau familie olfactivă. Încearcă: «ceva fresh pentru zi» sau «un cadou sub 1700 MDL».";
            let product = null;

            if (quizStep > 0) {
                product = findRecommendation(normalizedText);
                reply = quizStep === 1
                    ? "Perfect. Ai ales o direcție clară. Pentru personalitatea asta, aș începe cu:"
                    : "Alegerea ta are prezență. Iată match-ul meu pentru tine:";
                quizStep = 0;
            } else if (normalizedText.includes("quiz") || normalizedText.includes("test")) {
                quizStep = 1;
                reply = "Începem. Ce te reprezintă mai mult: fresh și luminos, dulce și magnetic sau intens și misterios? Scrie una dintre cele trei direcții.";
            } else if (normalizedText.includes("livrar") || normalizedText.includes("comand")) {
                reply = "Livrarea este rapidă și sigură în toată Moldova. Pentru comandă, adaugă parfumul în coș, apoi apasă «Cumpără acum» și completează datele de contact.";
            } else if (normalizedText.includes("coș") || normalizedText.includes("cos") || normalizedText.includes("preț") || normalizedText.includes("pret")) {
                reply = "Te pot ajuta să alegi după buget. Avem parfumuri de la 1.350 MDL, iar moneda se poate schimba în MDL sau EUR din magazin.";
            } else if (normalizedText.includes("cadou") || normalizedText.includes("fresh") || normalizedText.includes("trandafir") || normalizedText.includes("romantic") || normalizedText.includes("oud") || normalizedText.includes("intens") || normalizedText.includes("seară") || normalizedText.includes("elegant") || normalizedText.includes("vară")) {
                product = findRecommendation(normalizedText);
                reply = `Am citit vibe-ul. ${product.name} mi se pare alegerea potrivită pentru ce ai descris:`;
            } else if (normalizedText.includes("mulțum") || normalizedText.includes("mersi")) {
                reply = "Cu plăcere. Aroma potrivită nu se caută la întâmplare, se recunoaște.";
            }

            const typingElement = showAssistantTyping();
            window.setTimeout(() => {
                typingElement.remove();
                addAssistantMessage(reply, "ai", product);
            }, 520);
        }

        assistantLauncher.addEventListener("click", () => toggleAssistant(!assistantPanel.classList.contains("open")));
        assistantClose.addEventListener("click", () => toggleAssistant(false));
        assistantNewChat.addEventListener("click", () => {
            quizStep = 0;
            assistantMessages.replaceChildren();
            addAssistantMessage("Conversație nouă. Sunt gata să-ți găsesc aroma potrivită. Spune-mi ocazia, bugetul sau starea pe care vrei să o transmiți.");
            assistantInput.focus();
        });
        assistantForm.addEventListener("submit", event => {
            event.preventDefault();
            const text = assistantInput.value;
            assistantInput.value = "";
            replyToAssistant(text);
        });
        assistantPrompts.addEventListener("click", event => {
            const promptButton = event.target.closest("button[data-prompt]");
            if (!promptButton) return;
            replyToAssistant(promptButton.dataset.prompt);
        });
        assistantMessages.addEventListener("click", event => {
            const addButton = event.target.closest(".assistant-add");
            if (!addButton) return;
            const matchingButton = [...buttons].find(button => button.dataset.name === addButton.dataset.product);
            if (matchingButton) {
                matchingButton.click();
                addButton.textContent = "Adăugat";
                addButton.disabled = true;
            }
        });

    