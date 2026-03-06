import type { Metadata } from "next"
import { TextToSpeechView } from "@/app/features/text-to-speech/view/text-to-speech-view";

export const metadata: Metadata = { title: "Text to Speech" };

export default function TextToSpeechPage() {
  return (
    <TextToSpeechView />
  )
}