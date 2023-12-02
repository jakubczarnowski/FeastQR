import { FormField } from "~/components/ui/form";
import { Switch } from "~/components/ui/switch";
import { FormInput } from "~/components/FormInput/FormInput";
import { Input } from "~/components/ui/input";
import { Icons } from "~/components/Icons";
import { useFormContext } from "react-hook-form";
import { type PrintCreatorFormValues } from "../../MenuPrintCreator.schema";

export const MenuOptionsForm = () => {
  const form = useFormContext<PrintCreatorFormValues>();

  return (
    <div className="flex w-full max-w-[300px] grow flex-col gap-8">
      <h1 className=" text-3xl font-bold ">Menu Print Creator</h1>
      <div className="flex flex-col gap-4">
        <div className="space-x flex flex-col items-start justify-end gap-3 rounded-md border p-4">
          <FormInput
            descriptionClassName="text-xs"
            label="Social Media Handles"
            description="Add your social media handles to your menu to increase your followers."
          >
            <div className="flex flex-col gap-4">
              <div className="flex flex-row items-center gap-2">
                <Icons.facebook className="h-6 w-6" />
                <Input placeholder="Facebook handle" className="h-7 w-full" />
                <Switch />
              </div>

              <div className="flex flex-row items-center gap-2">
                <Icons.instagram className="h-6 w-6" />
                <Input placeholder="Instagram handle" className="h-7 w-full" />
                <Switch />
              </div>

              <div className="flex flex-row items-center gap-2">
                <Icons.google className="h-6 w-6" />
                <Input placeholder="Google handle" className="h-7 w-full" />
                <Switch />
              </div>
            </div>
          </FormInput>
        </div>
        <div className="space-x flex flex-col items-start justify-end gap-3 rounded-md border p-4">
          <FormInput
            descriptionClassName="text-xs"
            label="Wifi Password"
            description="If you have a wifi password, add it to your menu to make it easier for your customers to connect."
          >
            <div className="flex flex-row items-center gap-2">
              <Icons.wifi className="h-6 w-6" />
              <Input placeholder="Your wifi password" className="h-7 w-full" />
              <Switch />
            </div>
          </FormInput>
        </div>
        <FormField
          control={form.control}
          name="restaurantNameEnabled"
          render={({ field }) => (
            <FormInput
              label="Add Restaurant Name"
              className="space-x flex flex-row items-center justify-between gap-2 space-y-0 rounded-md border p-4"
            >
              <Switch checked={field.value} onCheckedChange={field.onChange} />
            </FormInput>
          )}
        />
        <FormField
          control={form.control}
          name="qrCodeEnabled"
          render={({ field }) => (
            <FormInput
              label="Include Logo in QR Code"
              className="space-x flex flex-row items-center justify-between gap-2 space-y-0 rounded-md border p-4 text-center"
            >
              <Switch checked={field.value} onCheckedChange={field.onChange} />
            </FormInput>
          )}
        />
      </div>
    </div>
  );
};
