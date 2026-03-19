import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { env } from "./env";

const supa = new S3Client({
  region: "auto",
  endpoint: `https://${env.SUPA_ACCOUNT_ID}.storage.supabase.co/storage/v1/s3`,
  forcePathStyle: true,
  credentials: {
    accessKeyId: env.SUPA_ACCESS_KEY_ID,
    secretAccessKey: env.SUPA_SECRET_ACCESS_KEY,
  },
});

type UploadAudioOptions = {
  buffer: Buffer;
  key: string;
  contentType?: string;
};

export async function uploadAudio({
  buffer,
  key,
  contentType = "audio/wav",
}: UploadAudioOptions): Promise<void> {
  await supa.send(
    new PutObjectCommand({
      Bucket: env.SUPA_BUCKET_NAME,
      Key: key,
      Body: buffer,
      ContentType: contentType,
      ACL: "public-read",
      ContentLength: buffer.length,
    }),
  );
}

export async function deleteAudio(key: string): Promise<void> {
  await supa.send(
    new DeleteObjectCommand({
      Bucket: env.SUPA_BUCKET_NAME,
      Key: key,
    }),
  );
}

export async function getSignedAudioUrl(key: string): Promise<string> {
  const command = new GetObjectCommand({
    Bucket: env.SUPA_BUCKET_NAME,
    Key: key,
  });
  return getSignedUrl(supa, command, { expiresIn: 3600 }); // 1 hour
}
