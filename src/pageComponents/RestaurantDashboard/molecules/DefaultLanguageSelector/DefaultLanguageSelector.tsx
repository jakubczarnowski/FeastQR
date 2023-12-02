import { useParams } from "next/navigation";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Select from "react-select";
import { Button } from "~/components/ui/button";
import { useToast } from "~/components/ui/use-toast";
import { api } from "~/trpc/react";

export const DefaultLanguagesSelector = ({
  menuId,
  initialDefaultLanguage,
}: {
  menuId: string;
  initialDefaultLanguage: string;
}) => {
  const { mutateAsync } = api.languages.changeDefaultLanguage.useMutation();
  const { toast } = useToast();
  const { t } = useTranslation();
  const { slug } = useParams() as { slug: string };
  const { data, isLoading } = api.menus.getMenuBySlug.useQuery({ slug });

  const languagesSelectOptions = data?.menuLanguages.map((lang) => ({
    label: lang.languages.name,
    value: lang.languages.id,
  }));

  const [selectedDefaultLanguage, setselectedDefaultLanguage] =
    useState<string>(initialDefaultLanguage);

  const handleUpdateLanguages = async () => {
    await mutateAsync({ menuId, languageId: selectedDefaultLanguage });
    toast({
      title: t("defaultLanguageSelector.changeSavedTitle"),
      description: t("defaultLanguageSelector.changeSavedDescription"),
    });
  };

  return (
    <div className="flex flex-row gap-4">
      <Select
        options={languagesSelectOptions}
        value={languagesSelectOptions?.find(
          (option) => selectedDefaultLanguage === option.value,
        )}
        onChange={(newValue) =>
          newValue && setselectedDefaultLanguage(newValue.value)
        }
        isSearchable
        isLoading={isLoading}
        className="w-full"
      />
      <Button onClick={() => handleUpdateLanguages()}>
        {t("defaultLanguageSelector.save")}
      </Button>
    </div>
  );
};
