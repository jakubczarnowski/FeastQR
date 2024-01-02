import { type Resources } from "../types";

const messages: Resources["common"] = {
  login: {
    title: "Log in",
    emailLabel: "Email",
    passwordLabel: "Password",
    submitButton: "Log in",
    forgotPasswordButton: "Forgot your password?",
    registerButton: "Register",
  },
  register: {
    title: "Register",
    submitButton: "Register",
    loginButton: "Log in",
    checkYourEmailForConfirmation: "Check your email for confirmation",
  },
  resetPassword: {
    title: "Reset Password",
    emailLabel: "Email",
    resetButton: "Reset",
    checkYourEmailToReset: "Check your email to reset your password",
    checkYourEmail: "Check your email",
    passwordChangedSuccesfully: "Password changed successfully",
  },
  commonValidation: {
    required: "This field is required",
    email: "This field must be a valid email address",
    passwordConfirm: "Passwords must match",
  },
  common: {
    emailLabel: "Email",
    passwordLabel: "Password",
    passwordConfirmLabel: "Confirm password",
    backButton: "Back",
    noTranslation: "No translation",
    passwordSpecialCharacterValidation:
      "Password must contain a special character",
    passwordLengthValidation: "Password must be at least 8 characters long",
    passwordUppercaseValidation: "Password must contain an uppercase letter",
    passwordLowercaseValidation: "Password must contain a lowercase letter",
    passwordConfirmationValidation: "Passwords must match",
    confirmYourEmail: "Confirm your email",
  },
  dashboard: {
    title: "Menu",
    headingText: "Create and manage your menus.",
    createMenu: "Create Menu",
    noMenusCreated: "No Menus Created",
    noMenusCreatedDescription: "You haven't created any menus yet",
  },
  dashboardSidenav: {
    menus: "Menu",
    billing: "Billing",
    affiliates: "Affiliates",
    settings: "Settings",
  },
  settingsPage: {
    headerDescription: "Manage your account settings",
  },
  createMenu: {
    header: "Create",
    title: "Create your Restaurant",
  },
  editMenu: {
    header: "Edit",
    title: "Edit your Restaurant",
  },
  menuOperations: {
    editMenu: "Edit Menu",
    deleteMenu: "Delete Menu",
    areYouSureYouWantToDeleteThisMenu:
      "Are you sure you want to delete this menu?",
    itCannotBeUndone: "This operation cannot be undone",
    cancel: "Cancel",
    delete: "Delete",
    open: "Open",
    menuDeleted: "Menu Deleted",
    menuDeletedDescription: "Your menu has been deleted successfully",
  },
  addCategoryButton: {
    addCategory: "Add Category",
    editCategory: "Edit Category",
    edit: "Edit",
  },
  addDishButton: {
    addDish: "Add Dish",
    editDish: "Edit Dish",
    edit: "Edit",
  },
  categoryForm: {
    save: "Save",
  },
  deleteDishButton: {
    delete: "Delete",
    deleteDish: "Delete Dish",
    areYouSureYouWantToDeleteThisDish:
      "Are you sure you want to delete this dish",
    cancel: "Cancel",
  },
  deleteVariantButton: {
    delete: "Delete",
    deleteVariant: "Delete Variant",
    areYouSureYouWantToDeleteThisVariant:
      "Are you sure you want to delete this variant",
    cancel: "Cancel",
  },
  dishForm: {
    descriptionPlaceholder: "Ruskie dumplings with fried onions and bacon.",
    dishName: "Dish Name",
    dishDescription: "Dish Description",
    priceInPLN: "Price (PLN)",
    dishPhoto: "Dish Photo",
    categoryLabel: "Category",
    macronutrientsButton: "Macronutrients",
    calories: "Calories",
    protein: "Protein (g)",
    carbs: "Carbs (g)",
    fat: "Fat (g)",
    weight: "Weight (g)",
    macronutrientsDescription:
      "These fields are optional. Users would appreciate it!",
    tagsLabel: "Tags",
  },
  menuForm: {
    save: "Save",
    menuLogoImage: "Restaurant Logo",
    backgroundImage: "Restaurant Background Image",
    nameOfRestaurant: "Restaurant Name",
    city: "City",
    streetAndNumber: "Street and Building Number",
    phoneNumber: "Phone Number",
  },
  userAccountNav: {
    dashboard: "Dashboard",
    settings: "Settings",
    billing: "Billing",
    logout: "Logout",
  },
  navbar: {
    login: "Login",
    home: "Home",
    dashboard: "Dashboard",
  },
  menuCreator: {
    changeLanguage: "Change Language",
    noDishes: "No Dishes",
    noDishesDescription:
      "You haven't created any dishes for this category yet.",
    AddDishesToCategory: "Add Dishes to Category",
    noCategory: "No Category",
    dishesList: "Dish List",
    categoryNotTranslated: "Cateogory not translated",
    dishNotTranslated:
      "Dish not translated. Please add translations for all languages before publishing the menu.",
    variantsNotTranslated: "One of the variants is not translated",
    variantNotTranslated: "Variant is not translated",
    variants: "Variants",
  },
  menuPdfGenerator: {
    menu: "MENU",
    generatePDFToPrint: "Generate PDF for Printing",
  },
  languageSelector: {
    saved: "Saved",
    changesSaved: "Changes have been saved",
    save: "Save",
  },
  sidebar: {
    menu: "Menu",
    restaurant: "Restaurant",
    QRMenu: "QR Menu",
    edit: "Edit",
  },
  restaurantDashboard: {
    menuNotFound: "Menu Not Found",
    restaurant: "Restaurant",
    publish: "Publish",
    unpublish: "Unpublish",
    manageMenu: "Manage Menu Card",
    settings: "Settings",
    availableLanguages: "Available Menu Languages:",
    yourQRCode: "Your QR Code",
    menuPreview: "Menu Preview",

    menuPublished: "published",
    menuNotPublished: "not published",
    defaultLanguage: "Default menu language",
    upgradeAccount: "Subscribe to a plan to activate your menu",
    menuUnpublishedNotification: "Menu has been unpublished",
    menuUnpublishedNotificationDescription:
      "Your menu has been unpublished. Users will not be able to see your menu.",
    menuPublishedNotification: "Menu has been published",
    menuPublishedNotificationDescription:
      "Your menu has been published. Users will be able to see your menu.",
  },
  languageToggle: {
    toggleLanguage: "Toggle Language",
  },
  imageUploadInput: {
    restore: "Restore",
  },
  cropImageModal: {
    adjustImage: "Adjust Image",
    close: "Close",
  },
  colorModeToggle: {
    toggleTheme: "Toggle Theme",
    light: "Light",
    dark: "Dark",
    system: "System",
  },
  landingPage: {
    backgroundAlt: "Landing background image",
    section1: {
      header: "Innovative Online",
      headerHighlight: "Menu",
      headerSuffix: "for Your Restaurant",
      description:
        "Create and customize online menus and get your own QR codes to provide customers with convenience and quick ordering",
      getStarted: "Get Started",
      learnMore: "Learn More",
      featuredOn: "Featured on",
      productHunt: "Product Hunt",
      heroImageAlt: "Hero image",
      credit: "Made by",
    },
    section2: {
      showcaseAlt: "Showcase image",
      featuresTitle: "Our Powerful Features...",
      restaurantSuccess: "Your Restaurant Success!",
      discoverWhy:
        "Discover why our project is the perfect solution for your restaurant",
      createCustomize: "Create and customize",
      onlineMenus: "online menus",
      onlineMenusDescription:
        "Create attractive online menus in a few easy steps. Customize them to your style and seasonal menu changes, without the need for technical knowledge.",
      generateQR: "Generate",
      qrCodes: "QR codes",
      streamlinedOrders: "for streamlined orders",
      qrCodesDescription:
        "Generate unique QR codes that allow your customers to scan the menu and place touchless orders. This speeds up service and enhances safety.",
      easyMenu: "Easy menu",
      priceManagement: "and price management",
      menuPriceManagementDescription:
        "Control your menu and prices from anywhere. Update them in real-time, responding to market and seasonal changes.",
      manageOnlineOrders: "Manage online orders",
      manageOnlineOrdersDescription:
        "By collecting data on orders and customer preferences, you can customize menus, promotional offers, and services to their needs, leading to loyalty and profits.",
      enhanceCustomerService: "Enhance customer service",
      enhanceCustomerServiceDescription:
        "Improve the quality of service with an easier and more intuitive online menu. Your customers gain faster and more personalized access to dishes.",
      showcaseMobileAlt: "Showcase mobile image",
    },
    section3: {
      pricingTitle: "Pricing plans",
      planPro: "Plan Pro",
      oneMonthFree: "(1 month free trial)",
      enterprise: "Enterprise",
      contactUs: "(Contact us)",
    },
    pricing: {
      toggle: {
        monthly: "Monthly",
        annually: "Yearly",
      },
      standard: {
        name: "Standard",
        description: "Innovate your dining experience with online menus.",
        feature1: "Create menu for your restaurant",
        feature2: "Show macronutrients, allergens, and more",
        feature3: "Menu Translations",
      },
      enterprise: {
        name: "Enterprise",
        price: "Contact Us",
        yearlyPrice: "Contact Us",
        description:
          "Manage all restaurants restaurant with our powerful features and integrations.",
        feature1: "Custom domain",
        feature2: "Personalized branding",
        feature3: "24/7 Support",
        extraBenefits: "Everything in free plan, plus",
      },
    },
  },
  defaultLanguageSelector: {
    changeSavedTitle: "Saved",
    changeSavedDescription: "Changes have been saved",
    save: "Save",
  },
  notFound: {
    title: "Page not found",
    goBack: "Go back to main page",
  },
  errorPage: {
    title: "An Error Occurred",
    description: "We apologize! If the problem persists, please contact us at",
    tryAgain: "Try Again",
    goBack: "Go back to the main page",
  },
  tags: {
    keto: "Keto",
    vegan: "Vegan",
    vegetarian: "Vegetarian",
    glutenFree: "Gluten Free",
    lactoseFree: "Lactose Free",
    lowCarb: "Low Carb",
    highProtein: "High Protein",
    lowFat: "Low Fat",
    highFiber: "High Fiber",
    sugarFree: "Sugar Free",
    organic: "Organic",
  },
  dishVariantForm: {
    variantName: "Variant Name",
    variantDescription: "Variant Description",
    priceInPLN: "Price (PLN)",
    variantNamePlaceholder: "Combo box",
    variantDescriptionPlaceholder: "Combo box includes fries and a drink.",
  },
  addDishVariantButton: {
    edit: "Edit",
    addVariant: "Add Variant",
    editVariant: "Edit Variant",
  },
  globalMetadata: {
    title: "Online Menu for Your Restaurant",
    description:
      "Create and customize online menus and generate your own QR codes to provide customers with convenience and quick ordering.",
    keywords:
      "menu, restaurant, online, QR, orders, dining, restaurants, food, restaurant, dining",
    category: "Restaurant",
    openGraph: {
      title: "Online Menu for Your Restaurant",
      description:
        "Create and customize online menus and generate your own QR codes to provide customers with convenience and quick ordering.",
      type: "website",
      url: "https://www.feastqr.com/",
      image: "https://www.feastqr.com/og-image.png",
      siteName: "FeastQR - create your online menu",
      locale: "pl_PL",
    },
    twitter: {
      title: "Online Menu for Your Restaurant",
      description:
        "Create and customize online menus and generate your own QR codes to provide customers with convenience and quick ordering.",
    },
  },
  googleReviewGuideModal: {
    title: "How to add a Google review link to your menu?",
    step: "Step {step}",
    description:
      "Utwórz link do recenzji Google dla swojej restauracji i dodaj go do swojego menu. Dzięki temu Twoi klienci będą mogli zostawić recenzję Twojej restauracji w Google.",
    googleMaps: {
      name: "Google Maps",
      step1: "1. Find your restaurant on Google Maps",
      step2: "2. Click on 'Write a review'",
      step3:
        "3. Copy the link from the address bar and paste it in the 'Google Review Link' field in the 'Restaurant' tab of the menu editor",
    },
    googleDashboard: {
      name: "Google My Business Dashboard",
      step1: "Go to Google My Business dashboard",
      step2:
        "If you have multiple locations, select the location you want to add a review link to.",
      step3: "Click on 'Home' in the left menu",
      step4: "Click on 'Get more reviews'",
      step5: "Copy the link from the address bar. ",
      step6:
        "Paste the link in the 'Google Review Link' field in the 'Restaurant' tab of the menu editor",
    },
    ready: "Ready!",
  },
  socialMediaForm: {
    title: "Social Media",
    facebookPlaceholder: "Facebook Link",
    instagramPlaceholder: "Instagram Link",
    googlePlaceholder: "Google Review Link",
    save: "Save",
    description:
      "Add links to your social media to increase the reach of your restaurant.",
    updatedToastTitle: "Social media links updated",
    updatedToastDescription:
      "Your social media links have been updated successfully",
  },
  toastCommon: {
    errorTitle: "Error",
    errorDescription: "Something went wrong",
  },
  menuPrintCreator: {
    title: "QR Code Card Creator",
    socialMediaLabel: "Social Media",
    socialMediaDescription:
      "Add your social media handles to your menu to increase your followers.",
    instagramHandlePlaceholder: "Instagram Handle",
    facebookHandlePlaceholder: "Facebook Handle",
    wifiPasswordLabel: "Wifi Password",
    wifiPasswordDescription:
      "If you have a wifi password, add it to your menu to make it easier for your customers to connect.",
    wifiPasswordPlaceholder: "Your wifi password",
    restaurantNameLabel: "Add Restaurant Name",
    qrCodeEnabledLabel: "Include Logo in QR Code",
  },
  billing: {
    heading: "Billing",
    description: "Manage your billing information and subscription plan.",
    cancel: "Cancel",
    areYouSureYouWantToCancelSubscription:
      "Are you sure you want to cancel your subscription?",
    sadToSeeYouGo:
      "We are sad to see you go :(, if you have any feedback that can help us improve, please write to us at: support@feastqr.com",
    continue: "Continue",
    subscriptionPlan: "Subscription Plan",
    subscriptionDescription:
      "Online menu and QR Code for your customers to scan.",
    youAreCurrentlyOn: {
      firstPart: "Your plan: ",
      premium: "premium",
      free: "free",
    },
    customerPortal: {
      goTo: "Go to your customer portal to manage your subscription.",
      description:
        "View payment history, download invoices, and manage subscriptions and payment methods.",
      title: "Customer portal",
    },
  },
  contactUsCard: {
    title: `Provide us with your current menu, and we'll handle everything—from design and integration to setup.`,
    subtitle:
      "Our team stands ready to assist you. Trust in our Menu QR Creator service; we'll do it all for you, crafting the ultimate menu experience with seamless QR integration and real-time updates.",
    contactUs: "Contact us:",
  },
  affiliates: {
    title: "Affiliates",
    description: "Manage your affiliates system",
    comingSoon: "Coming soon!",
  },
  notifications: {
    menuNotFound: "Menu not found",
    subscriptionCancelled: "Subscription cancelled",
    subscriptionCancelledDescription:
      "Feel free to give us feedback on how can we improve! support@feastqr.com",
    somethingWentWrong: "Something went wrong.",
    tryAgainLater: "Try again later.",
  },
};

export default messages;
