interface AudioMediaPlayer  {
  playAudio(soundName: string): void
}

interface VideoMediaPlayer {
  playVideo(videoName: string): void
}

class MediaPlayer implements AudioMediaPlayer, VideoMediaPlayer {
  playAudio(soundName: string): void {
    console.log(`playing the video: ${soundName}`)
  }

  playVideo(videoName: string): void {
    console.log(`playing the video: ${videoName}`)
  }
}

class VlcMediaPlayer implements AudioMediaPlayer, VideoMediaPlayer {

  playVideo(videoName: string): string {
    // really nice implementation override
    return `nice video: ${videoName}`
  }

  playAudio(soundName: string): number {
    // really nice implementation override
    return 666
  }
}

class WinampMediaPlayer implements AudioMediaPlayer {
  playAudio(soundName: string): string {
    // really nice implementation override
    return `really nice music: ${soundName}`
  }
}
