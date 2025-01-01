export type FileType = "document" | "image" | "video" | "audio" | "other";

export interface ActionType {
  label: string;
  icon: string;
  value: string;
}

export interface SearchParamProps {
  params?: Promise<SegmentParams>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export interface UploadFileProps {
  file: File;
  ownerId: string;
  accountId: string;
  path: string;
}
