const messages = {
  login: {
    title: "Zaloguj się",
    emailLabel: "Email",
    passwordLabel: "Hasło",
    submitButton: "Zaloguj się",
    forgotPasswordButton: "Zapomniałeś hasła?",
    registerButton: "Zarejestruj się",
  },
  register: {
    title: "Zarejestruj się",
    submitButton: "Zarejestruj się",
    loginButton: "Zaloguj się",
    checkYourEmailForConfirmation:
      "Sprawdź swoją skrzynkę email, aby potwierdzić adres email",
  },
  resetPassword: {
    title: "Zresetuj Hasło",
    emailLabel: "Email",
    resetButton: "Resetuj",
    checkYourEmailToReset: "Wysłaliśmy Ci email",
    checkYourEmail: "Sprawdź swoją skrzynkę email aby kontynuować.",
    passwordChangedSuccesfully: "Hasło zostało zmienione pomyślnie!",
  },
  commonValidation: {
    required: "To pole jest wymagane",
    email: "To pole musi być poprawnym adresem email",
    passwordConfirm: "Hasła muszą być takie same",
  },
  common: {
    passwordSpecialCharacterValidation: "Hasło musi zawierać znak specjalny",
    passwordLengthValidation: "Hasło musi mieć minimum 8 znaków",
    passwordUppercaseValidation: "Hasło musi zawierać wielką literę",
    passwordLowercaseValidation: "Hasło musi zawierać małą literę",
    passwordConfirmationValidation: "Hasła muszą być takie same",
    confirmYourEmail: "Potwierdź swój adres email",
    backButton: "Wróć",
    noTranslation: "Brak tłumaczenia",
    emailLabel: "Email",
    passwordLabel: "Hasło",
    passwordConfirmLabel: "Potwierdź hasło",
  },
  dashboard: {
    title: "Menu",
    headingText: "Twórz i zarządzaj swoimi menu.",
    createMenu: "Stwórz menu",
    noMenusCreated: "Brak stworzonych menu",
    noMenusCreatedDescription: "Nie stworzyłeś jeszcze żadnego menu",
  },
  dashboardSidenav: {
    menus: "Menu",
    billing: "Płatności",
    affiliates: "Partnerzy",
    settings: "Ustawienia",
  },
  settingsPage: {
    headerDescription: "Zarządzaj ustawieniami swojego konta",
  },
  createMenu: {
    header: "Stwórz",
    title: "Stwórz swoją Restauracje",
  },
  editMenu: {
    header: "Edytuj",
    title: "Edytuj dane swojej Restauracji",
  },
  menuOperations: {
    editMenu: "Edytuj menu",
    deleteMenu: "Usuń menu",
    areYouSureYouWantToDeleteThisMenu: "Czy na pewno chcesz usunąć to menu?",
    itCannotBeUndone: "Tej operacji nie można cofnąć",
    cancel: "Anuluj",
    delete: "Usuń",
    open: "Open",
    menuDeleted: "Menu usunięte",
    menuDeletedDescription: "Menu zostało usunięte pomyślnie",
  },
  addCategoryButton: {
    addCategory: "Dodaj kategorię",
    editCategory: "Edytuj kategorię",
    edit: "Edytuj",
  },
  addDishButton: {
    addDish: "Dodaj danie",
    editDish: "Edytuj danie",
    edit: "Edytuj",
  },
  categoryForm: {
    save: "Zapisz",
  },
  deleteDishButton: {
    delete: "Usuń",
    deleteDish: "Usuń danie",
    areYouSureYouWantToDeleteThisDish: "Czy na pewno chcesz usunąć to danie",
    cancel: "Anuluj",
  },
  deleteVariantButton: {
    delete: "Usuń",
    deleteVariant: "Usuń wariant",
    areYouSureYouWantToDeleteThisVariant:
      "Czy na pewno chcesz usunąć ten wariant?",
    cancel: "Anuluj",
  },
  dishForm: {
    descriptionPlaceholder: "Pierogi Ruskie z cebulką smażone na bekonie. ",
    dishName: "Nazwa dania",
    dishDescription: "Opis dania",
    priceInPLN: "Cena (PLN)",
    dishPhoto: "Zdjęcie dania",
    categoryLabel: "Kategoria",
    macronutrientsButton: "Makroskładniki",
    calories: "Kalorie",
    protein: "Białko (g)",
    carbs: "Węglowodany (g)",
    fat: "Tłuszcze (g)",
    weight: "Waga (g)",
    tagsLabel: "Tagi",
    macronutrientsDescription: `Pola opcjonalne. Wypełnij je, jeśli chcesz, aby dane o kaloriach i makroskładnikach były widoczne dla klientów.`,
  },
  menuForm: {
    save: "Zapisz",
    menuLogoImage: "Logo restauracji",
    backgroundImage: "Zdjęcie tła",
    nameOfRestaurant: "Nazwa restauracji",
    city: "Miasto",
    streetAndNumber: "Ulica i numer Budynku",
    phoneNumber: "Numer telefonu",
  },
  userAccountNav: {
    dashboard: "Panel Główny",
    settings: "Ustawienia",
    billing: "Płatności",
    logout: "Wyloguj się",
  },
  navbar: {
    login: "Zaloguj się",
    home: "Strona główna",
    dashboard: "Panel Główny",
  },
  menuCreator: {
    changeLanguage: "Zmień język",
    noDishes: "Brak dań",
    noDishesDescription:
      "Nie stworzyłeś jeszcze żadnych dań dla tej kategorii.",
    AddDishesToCategory: "Dodaj dania do kategorii",
    noCategory: "Brak kategorii",
    dishesList: "Lista dań",
    categoryNotTranslated: "Kategoria nie jest przetłumaczona",
    dishNotTranslated:
      "Danie nie przetłumaczone. Przetłumacz je przed ukończeniem menu.",
    variantsNotTranslated: "Jeden z wariantów nie jest przetłumaczony.",
    variantNotTranslated: "Wariant nie jest przetłumaczony.",
    variants: "Warianty",
  },
  menuPdfGenerator: {
    menu: "MENU",
    generatePDFToPrint: "Generuj PDF do wydruku",
  },
  languageSelector: {
    saved: "Zapisano",
    changesSaved: "Zmiany zostały zapisane",
    save: "Zapisz",
  },
  sidebar: {
    menu: "Menu",
    restaurant: "Restauracja",
    QRMenu: "QR Menu",
    edit: "Edytuj",
  },
  restaurantDashboard: {
    menuNotFound: "Nie znaleziono menu",
    restaurant: "Restauracja",
    publish: "Aktywuj",
    unpublish: "Dezaktywuj",
    manageMenu: "Zarządzaj kartą menu",
    settings: "Ustawienia",
    availableLanguages: "Dostępne języki menu:",
    yourQRCode: "Twój kod QR",
    menuPreview: "Podgląd menu",
    menuPublished: "opublikowana",
    menuNotPublished: "nie opublikowana",
    defaultLanguage: "Domyślny język menu",
    upgradeAccount: "Zasubskrybuj aby aktywować menu",
    menuUnpublishedNotification: "Menu zostało dezaktywowane",
    menuUnpublishedNotificationDescription:
      "Twoje menu zostało dezaktywowane. Użytownicy nie będą mogli zobaczyć Twojego menu dopóki nie zostanie ponownie opublikowane.",
    menuPublishedNotification: "Menu zostało opublikowane",
    menuPublishedNotificationDescription:
      "Twoje menu zostało opublikowane. Użytkownicy będą mogli zobaczyć Twoje menu.",
  },
  languageToggle: {
    toggleLanguage: "Zmień język",
  },
  imageUploadInput: {
    restore: "Przywróć",
  },
  cropImageModal: {
    adjustImage: "Dopasuj zdjęcie",
    close: "Zamknij",
  },
  colorModeToggle: {
    toggleTheme: "Zmień motyw",
    light: "Jasny",
    dark: "Ciemny",
    system: "Systemowy",
  },
  landingPage: {
    backgroundAlt: "Obraz tła strony głównej",
    section1: {
      header: "Innowacyjne Menu Online",
      headerHighlight: "Menu",
      headerSuffix: "dla Twojej Restauracji",
      description:
        "Stwórz i dostosuj menu online oraz uzyskaj własne kody QR, aby zapewnić klientom wygodę i szybkie zamawianie",
      getStarted: "Zacznij teraz",
      learnMore: "Dowiedz się więcej",
      featuredOn: "Polecane na",
      productHunt: "Product Hunt",
      heroImageAlt: "Główny obraz",
      credit: "Stworzone przez",
    },
    section2: {
      showcaseAlt: "Zdjęcie prezentacji",
      featuresTitle: "Nasze Potężne Funkcje...",
      restaurantSuccess: "Sukces Twojej Restauracji!",
      discoverWhy:
        "Odkryj, dlaczego nasz projekt jest idealnym rozwiązaniem dla Twojej restauracji",
      createCustomize: "Twórz i dostosuj",
      onlineMenus: "menu online",
      onlineMenusDescription:
        "Stwórz atrakcyjne menu online w kilku prostych krokach. Dostosuj je do swojego stylu i sezonowych zmian w menu, bez potrzeby posiadania wiedzy technicznej.",
      generateQR: "Generuj",
      qrCodes: "kody QR",
      streamlinedOrders: "dla usprawnionych zamówień",
      qrCodesDescription:
        "Generuj unikalne kody QR, które pozwalają Twoim klientom skanować menu i składać bezdotykowe zamówienia. Przyspiesza to obsługę i zwiększa bezpieczeństwo.",
      easyMenu: "Łatwe zarządzanie menu",
      priceManagement: "i cenami",
      menuPriceManagementDescription:
        "Kontroluj swoje menu i ceny z dowolnego miejsca. Aktualizuj je w czasie rzeczywistym, reagując na zmiany rynkowe i sezonowe.",
      manageOnlineOrders: "Zarządzaj zamówieniami online",
      manageOnlineOrdersDescription:
        "Zbierając dane o zamówieniach i preferencjach klientów, możesz dostosować menu, oferty promocyjne i usługi do ich potrzeb, co prowadzi do lojalności i zwiększenia zysków.",
      enhanceCustomerService: "Ulepsz obsługę klienta",
      enhanceCustomerServiceDescription:
        "Popraw jakość obsługi dzięki łatwiejszemu i bardziej intuicyjnemu menu online. Twoi klienci uzyskują szybszy i bardziej spersonalizowany dostęp do dań.",
      showcaseMobileAlt: "Mobilne zdjęcie prezentacji",
    },
    section3: {
      pricingTitle: "Plany cenowe",
      planPro: "Plan Pro",
      oneMonthFree: "(1 miesiąc darmowego okresu próbnego)",
      enterprise: "Enterprise",
      contactUs: "(Skontaktuj się z nami)",
    },
    pricing: {
      toggle: {
        monthly: "Miesięcznie",
        annually: "Rocznie",
      },
      standard: {
        name: "Standardowy",
        description:
          "Innowacje w Twoim doświadczeniu restauracyjnym z menu online.",
        feature1: "Stwórz menu dla Twojej restauracji",
        feature2: "Pokazuj makroskładniki, alergeny i więcej",
        feature3: "Tłumaczenia menu",
      },
      enterprise: {
        name: "Enterprise",
        price: "Contact Us",
        yearlyPrice: "Contact Us",
        description:
          "Zarządzaj wszystkimi swoimi restauracjami z jednego miejsca.",
        feature1: "Własna domena",
        feature2: "Spersonalizowany branding",
        feature3: "Wsparcie 24/7",
        extraBenefits: "Wszystko w darmowym planie, plus",
      },
    },
  },
  defaultLanguageSelector: {
    changeSavedTitle: "Zapisano",
    changeSavedDescription: "Zmiany zostały zapisane",
    save: "Zapisz",
  },
  notFound: {
    title: "Strona nie znaleziona",
    goBack: "Wróć do strony głównej",
  },
  errorPage: {
    title: "Wystąił błąd",
    description:
      "Przepraszamy! Jeśli problem będzie się potwarzał skontaktuj się z nami na maila:",
    tryAgain: "Spróbuj ponownie",
    goBack: "Wróć do strony głównej",
  },
  tags: {
    keto: "Keto",
    vegan: "Wegańskie",
    vegetarian: "Wegetariańskie",
    glutenFree: "Bezglutenowe",
    lactoseFree: "Bezlaktozowe",
    lowCarb: "Niskowęglowodanowe",
    highProtein: "Wysokobiałkowe",
    lowFat: "Niskotłuszczowe",
    highFiber: "Wysokobłonnikowe",
    sugarFree: "Bezcukrowe",
    organic: "Organiczne",
  },
  dishVariantForm: {
    variantName: "Nazwa wariantu",
    variantDescription: "Opis wariantu",
    priceInPLN: "Cena (PLN)",
    variantNamePlaceholder: "W zestawie",
    variantDescriptionPlaceholder: "W zestawie frytki i napój.",
  },
  addDishVariantButton: {
    edit: "Edytuj",
    addVariant: "Dodaj wariant",
    editVariant: "Edytuj wariant",
  },
  globalMetadata: {
    title: "Menu Online dla Twojej Restauracji",
    description:
      "Twórz i dostosuj menu internetowe oraz uzyskuj własne kody QR, aby zapewnić klientom wygodę i szybkość zamawiania.",
    keywords:
      "menu, restauracja, online, qr, zamówienia, restauracyjne, restauracje, jedzenie, restauracja, restauracje",
    category: "Restauracja",
    openGraph: {
      title: "Menu Online dla Twojej Restauracji",
      description:
        "Twórz i dostosuj menu internetowe oraz uzyskuj własne kody QR, aby zapewnić klientom wygodę i szybkość zamawiania.",
      type: "website",
      url: "https://www.feastqr.com/",
      image: "https://www.feastqr.com/og-image.png",
      siteName: "FeastQR - stwórz swoje menu online",
      locale: "pl_PL",
    },
    twitter: {
      title: "Menu Online dla Twojej Restauracji",
      description:
        "Twórz i dostosuj menu internetowe oraz uzyskuj własne kody QR, aby zapewnić klientom wygodę i szybkość zamawiania.",
    },
  },
  googleReviewGuideModal: {
    title: "Jak dodać recenzję na Google?",
    step: "Krok {{step}}",
    description:
      "Utwórz link do recenzji Google dla swojej restauracji i dodaj go do swojego menu. Dzięki temu Twoi klienci będą mogli zostawić recenzję Twojej restauracji w Google.",
    googleMaps: {
      name: "Google Maps",
      step1: " Znajdź swoją restaurację na Google",
      step2: "Kliknij przycisk 'Dodaj opinię'",
      step3:
        " Kopiuj link do swojej recenzji z paska adresu i wklej go w polu poniżej. Gotowe!",
    },
    googleDashboard: {
      name: "Panel Google Moja Firma",
      step1: "Przejdź do panelu Google Moja Firma",
      step2:
        "Jeśli masz wiele lokalizacji, wybierz lokalizację, do której chcesz dodać link do recenzji.",
      step3: "Kliknij 'Strona główna' w menu po lewej stronie",
      step4: "Kliknij 'Uzyskaj więcej opinii'",
      step5: "W okienku które nam się pojawi znajdziemy nasz link. ",
      step6: "Teraz wystarczy go skopiować i gotowe.",
    },
    ready: "Gotowe!",
  },
  socialMediaForm: {
    title: "Media społecznościowe",
    facebookPlaceholder: "Link do Facebooka",
    instagramPlaceholder: "Link do Instagrama",
    googlePlaceholder: "Link do recenzji Google",
    save: "Zapisz",
    description:
      "Dodaj linki do swoich mediów społecznościowych, aby zwiększyć zasięg swojej restauracji.",
    updatedToastTitle: "Zaktualizowano",
    updatedToastDescription: "Linki do mediów społecznościowych zaktualizowane",
  },
  toastCommon: {
    errorTitle: "Błąd",
    errorDescription: "Coś poszło nie tak. Spróbuj ponownie później.",
  },
  menuPrintCreator: {
    title: "Kreator wydruku",
    socialMediaLabel: "Media społecznościowe",
    socialMediaDescription:
      "Dodaj linki do swoich mediów społecznościowych, aby zwiększyć zasięg swojej restauracji.",

    instagramHandlePlaceholder: "Nazwa Instagrama",
    facebookHandlePlaceholder: "Nazwa na Facebooku",
    wifiPasswordLabel: "Hasło wifi",
    wifiPasswordDescription:
      "Dodaj hasło do wifi, aby ułatwić klientom połączenie się z siecią wifi Twojej restauracji.",
    wifiPasswordPlaceholder: "Hasło wifi",
    restaurantNameLabel: "Dodaj Nazwa restauracji",
    qrCodeEnabledLabel: "Dodaj logo do kodu QR",
  },
  billing: {
    heading: "Płatności",
    description: "Zarządzaj swoimi płatnościami",
    cancel: "Anuluj",
    areYouSureYouWantToCancelSubscription:
      "Czy na pewno chcesz anulować subskrypcję?",
    sadToSeeYouGo:
      "Smutek nas ogarnia, że odchodzisz :(, jeśli masz jakieś uwagi, które mogą pomóc nam w rozwoju, napisz do nas na adres: support@feastqr.com",
    continue: "Kontynuuj",
    subscriptionPlan: "Plan subskrypcji",
    subscriptionDescription:
      "Online menu oraz kod QR do skanowania dla twoich klientów.",
    youAreCurrentlyOn: {
      firstPart: "Jesteś obecnie na planie ",
      premium: "premium",
      free: "darmowym",
    },

    customerPortal: {
      goTo: "Przejdź do portalu zarządzania płatnościami",
      description:
        "Zarządzaj swoimi płatnościami, zmieniaj plany subskrypcji i anuluj subskrypcję.",
      title: "Portal zarządzania płatnościami",
    },
  },
  contactUsCard: {
    title: `Dostarcz nam swoje aktualne menu, a my zajmiemy się wszystkim - od projektu i integracji po konfigurację.`,
    subtitle:
      "Nasz zespół jest gotowy, by Ci pomóc. Zaufaj naszej usłudze Tworzenia Menu QR; zrobimy wszystko za Ciebie, tworząc doskonałe doświadczenie z menu, z płynną integracją QR i aktualizacjami w czasie rzeczywistym.",
    contactUs: "Skontaktuj się z nami:",
  },
  affiliates: {
    title: "Partnerzy",
    description: "Zarządzaj systemem partnerskim",
    comingSoon: "Już wkrótce!",
  },
  notifications: {
    menuNotFound: "Nie znaleziono menu",
    subscriptionCancelled: "Subskrypcja anulowana",
    subscriptionCancelledDescription:
      "Daj nam znać, co moglibyśmy zrobić lepiej na adres: support@feastqr.com",
    somethingWentWrong: "Coś poszło nie tak. ",
    tryAgainLater: "Spróbuj ponownie później.",
  },
};

export default messages;
