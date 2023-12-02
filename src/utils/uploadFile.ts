import {
  type storageBucketsNames,
  supabase,
} from "~/server/supabase/supabaseClient";

export const uploadFileToStorage = async (
  path: string,
  file: Blob,
  bucket: (typeof storageBucketsNames)[keyof typeof storageBucketsNames] = "menus-files",
) => {
  const { error, data } = await supabase()
    .storage.from(bucket)
    .upload(path, file, { upsert: true });

  if (error) return { error };

  const { data: signedURLData, error: publicUrlError } = await supabase()
    .storage.from(bucket)
    .createSignedUrl(data.path, 999_999_999);

  if (publicUrlError) return { error: publicUrlError };

  return { url: signedURLData.signedUrl };
};
