import { useState } from "react";
import { useTranslation } from "react-i18next";
import { MultiCountriesSelect } from "~/components/CountriesSelect/CountriesSelect";
import { Button } from "~/components/ui/button";
import { useToast } from "~/components/ui/use-toast";
import { api } from "~/trpc/react";

export const LanguagesSelector = ({
  menuId,
  initialLanguages,
}: {
  menuId: string;
  initialLanguages: string[];
}) => {
  const { mutateAsync } = api.languages.changeMenuLanguages.useMutation();
  const { toast } = useToast();
  const { t } = useTranslation();
  const [selectedLanguages, setSelectedLanguages] =
    useState<string[]>(initialLanguages);

  const handleUpdateLanguages = async (languagesIds: string[]) => {
    await mutateAsync({ menuId, languages: languagesIds });
    toast({
      title: t("languageSelector.saved"),
      description: t("languageSelector.changesSaved"),
    });
  };

  return (
    <div className="flex flex-row gap-4">
      <MultiCountriesSelect
        value={selectedLanguages}
        onChange={(value) => setSelectedLanguages(value)}
        className="w-full"
      />
      <Button onClick={() => handleUpdateLanguages(selectedLanguages)}>
        {t("languageSelector.save")}
      </Button>
    </div>
  );
};
