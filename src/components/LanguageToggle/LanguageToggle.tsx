import { type Language } from "~/i18n/settings";
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Icons } from "~/components/Icons";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";

type LanguageItem = {
  label: string;
  icon: string;
};

type LanguageMap = {
  [key in Language]: LanguageItem;
};

const languagesMap: LanguageMap = {
  pl: {
    label: "Polski",
    icon: "🇵🇱",
  },
  en: {
    label: "English",
    icon: "🇬🇧",
  },
};

export function LanguageToggle() {
  const [, i18n] = useTranslation();
  const router = useRouter();

  const handleChangeLanguage = (language: Language) => {
    void i18n.changeLanguage(language);
    router.refresh();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 w-8 px-0">
          <Icons.languages />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.entries(languagesMap).map(([language, { label, icon }]) => (
          <DropdownMenuItem
            key={language}
            onClick={() => handleChangeLanguage(language as Language)}
          >
            <span className="mr-2">{icon}</span>
            <span>{label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
