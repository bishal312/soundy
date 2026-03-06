import { TextToSpeechLayout } from "@/app/features/text-to-speech/view/text-to-speech-layout"

export default function Layout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <TextToSpeechLayout>
      {children}
    </TextToSpeechLayout>
  )
}