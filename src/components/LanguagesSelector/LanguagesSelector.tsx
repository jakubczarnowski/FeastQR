import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { type FullMenuOutput } from "~/utils/parseDishes";
type Props = {
  onSelectedLanguageChange: (languageId: string) => void;
  selectedLanguageId: string;
  menuLanguages: FullMenuOutput["menuLanguages"];
};

export const MenuLanguagesSelector = ({
  onSelectedLanguageChange,
  menuLanguages,
  selectedLanguageId,
}: Props) => {
  const { t } = useTranslation();
  const selectedMenuLanguage = menuLanguages.find(
    (lang) => lang.languageId === selectedLanguageId,
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <div className="flex flex-row items-center gap-2">
            {selectedMenuLanguage && (
              <Image
                alt={selectedMenuLanguage?.languages.isoCode}
                width={16}
                height={16}
                src={selectedMenuLanguage?.languages.flagUrl}
              />
            )}
            {selectedMenuLanguage?.languages.name ||
              t("menuCreator.changeLanguage")}
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {menuLanguages.map(({ languageId, languages }) => {
          return (
            <DropdownMenuItem
              key={languageId}
              onClick={() => {
                onSelectedLanguageChange(languageId);
              }}
            >
              <div className="flex flex-row gap-4">
                <Image
                  alt={languages.isoCode}
                  width={16}
                  height={16}
                  src={languages.flagUrl}
                />
                {languages.name}
              </div>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
