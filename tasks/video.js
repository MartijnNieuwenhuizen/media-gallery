import { videos as config } from '../config'
import { src, dest, watch, series } from 'gulp'
import { reload } from 'browser-sync'

/**
 * Task: Copy videos
 * @returns {NodeJS.WritableStream}
 */
export function videos() {
  return src(config.src.videos)
    .pipe(dest(config.dist.videos))
    .pipe(reload({ stream: true }))
}

/**
 * Task: Video watch
 */
export function videosWatch() {
  watch(config.src.videos, series(videos))
}
