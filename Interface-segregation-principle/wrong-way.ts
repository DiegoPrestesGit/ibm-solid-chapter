interface GenericPlayer {
  playAudio(soundName: string): void
  playVideo(videoName: string): void
}

class GenericMediaPlayer implements GenericPlayer {
  playAudio(soundName: string): void {
    console.log(`playing the video: ${soundName}`)
  }

  playVideo(videoName: string): void {
    console.log(`playing the video: ${videoName}`)
  }
}

class GenericVlcMediaPlayer implements GenericPlayer {

  playVideo(videoName: string): string {
    // really nice implementation override
    return `nice video: ${videoName}`
  }

  playAudio(soundName: string): number {
    // really nice implementation override
    return 666
  }
}

class GenericWinampMediaPlayer implements GenericPlayer {
  playVideo(videoName: string): void {
    throw new Error("not really implemented, brah.")
  }

  playAudio(soundName: string): string {
    // really nice implementation override
    return `really nice music: ${soundName}`
  }
}