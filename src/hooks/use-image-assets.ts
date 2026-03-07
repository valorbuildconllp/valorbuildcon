import { useEffect, useMemo, useState } from "react";

type ImageAssetRow = {
  folder: string;
  filename: string;
  relative_path: string;
  public_path: string;
};

const DEFAULT_SUPABASE_URL = "https://prkslpntprhnecvbtjos.supabase.co";
const DEFAULT_SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBya3NscG50cHJobmVjdmJ0am9zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI4NTYyNzQsImV4cCI6MjA4ODQzMjI3NH0.cqjTSoKXPf71gsT9NmBe2Jnk47QiG-m1WkFy1mfeyv0";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL ?? DEFAULT_SUPABASE_URL;
const supabaseApiKey =
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY ??
  import.meta.env.VITE_SUPABASE_ANON_KEY ??
  DEFAULT_SUPABASE_KEY;

const IMAGE_TABLE_ENDPOINT = `${supabaseUrl}/rest/v1/image_assets?select=folder,filename,relative_path,public_path&order=relative_path.asc`;

let cachedAssets: ImageAssetRow[] | null = null;
let pendingRequest: Promise<ImageAssetRow[]> | null = null;

const fetchImageAssets = async (): Promise<ImageAssetRow[]> => {
  if (cachedAssets) {
    return cachedAssets;
  }

  if (pendingRequest) {
    return pendingRequest;
  }

  pendingRequest = fetch(IMAGE_TABLE_ENDPOINT, {
    headers: {
      apikey: supabaseApiKey,
      Authorization: `Bearer ${supabaseApiKey}`,
    },
    cache: "no-store",
  })
    .then(async (response) => {
      if (!response.ok) {
        return [] as ImageAssetRow[];
      }
      const rows = (await response.json()) as ImageAssetRow[];
      return Array.isArray(rows) ? rows : [];
    })
    .catch(() => [] as ImageAssetRow[])
    .finally(() => {
      pendingRequest = null;
    });

  cachedAssets = await pendingRequest;
  return cachedAssets;
};

export const useImageAssets = () => {
  const [assets, setAssets] = useState<ImageAssetRow[]>(cachedAssets ?? []);

  useEffect(() => {
    let mounted = true;

    fetchImageAssets().then((rows) => {
      if (!mounted) {
        return;
      }
      setAssets(rows);
    });

    return () => {
      mounted = false;
    };
  }, []);

  const pathMap = useMemo(() => {
    const nextMap = new Map<string, string>();

    assets.forEach((asset) => {
      if (!asset?.relative_path || !asset?.public_path) {
        return;
      }
      nextMap.set(asset.relative_path.replace(/^\/+/, ""), asset.public_path);
    });

    return nextMap;
  }, [assets]);

  const resolveImagePath = (path: string) => {
    if (!path) {
      return path;
    }

    const normalizedPath = path.replace(/^\/+/, "");
    return pathMap.get(normalizedPath) ?? path;
  };

  return {
    assets,
    resolveImagePath,
  };
};
