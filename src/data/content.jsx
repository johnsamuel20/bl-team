import tamam from "../assets/social media/tamam tv logo.png"
import BlWorship from "../assets/social media/BL Worship logo.png"
import BlVideo from "../assets/social media/blv logo.png"
import BlLogo from "../assets/social media/BL logo.png"
import BlKids from "../assets/social media/kids logo.png"

import Facebook from "../assets/SM-Music Icons/facebook-logo-png-blue.png"
import Instagram from "../assets/SM-Music Icons/Instagram_icon.png.webp"
import Tiktok from "../assets/SM-Music Icons/tiktok.png"



import AppleMusic from "../assets/SM-Music Icons/Apple_Music_icon.svg.png"
import Spotify from "../assets/SM-Music Icons/Spotify_logo_without_text.svg.webp"
import Anghami from "../assets/SM-Music Icons/anghami.png"
import SoundCloud from "../assets/SM-Music Icons/soundcloud.png"


// Section 1
export const section1Cards = [
  { id: 'bible-app', title: 'Bible App', type: 'link', href: 'https://example.com/bible', color: '#1E3A8A' }, // deep blue
  { id: 'bible-youth', title: 'Bible App Youth', type: 'link', href: 'https://example.com/bible-youth', color: '#FBBF24' }, // soft gold
  { id: 'noury-ai', title: 'Noury AI', type: 'link', href: 'https://example.com/noury', color: '#38BDF8' }, // sky blue
  { id: 'bl-radio', title: 'BL Radio', type: 'link', href: 'https://example.com/bl-radio', color: '#0E7490' }, // teal
  { id: 'mahaba-radio', title: 'Mahaba Radio', type: 'link', href: 'https://example.com/mahaba', color: '#F59E0B' }, // warm amber
  { id: 'rannem', title: 'Rannem - Kids App', type: 'link', href: 'https://example.com/rannem', color: '#EC4899' } // playful pink
];

// Section 2
export const songChannels = [
  { id: 'betterlife', title: 'Better Life', logo: BlLogo, playlistHref: 'https://youtu.be/ozvEBNK2B30?si=MC0jchkWQzB9wfs3' },
  { id: 'bl-worship', title: 'BL Worship', logo: BlWorship, playlistHref: 'https://youtu.be/so3eaGgAX6Q?si=7qjJi_LjFFqA3ELa' },
  { id: 'bl-kids', title: 'BL Kids', logo: BlKids, playlistHref: 'https://youtu.be/pwx79UrBD6Q?si=ihhVbAMHPoXH6w5_' }
];

export const programChannels = [
  { id: 'bl-videos', title: 'BL Videos', logo: BlVideo, playlistHref: 'https://youtu.be/TOU2lF4Hmd0?si=x8TLD05q0ZjW952X' },
  { id: 'tamamtv', title: 'TamamTV', logo: tamam, playlistHref: 'https://youtu.be/x8pGpoX2eVc?si=LQsHDhbwDWL5mrLK' }
];

// Section 3
export const socialLinks = [
  { id: 'facebook', title: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/betterlife/' },
  { id: 'instagram', title: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/betterlife.team/' },
  { id: 'tiktok', title: 'Tiktok', icon: Tiktok, href: 'https://www.tiktok.com/channel/better-life?lang=en' },
  // { id: 'meshwary', title: 'Meshwary', icon: 'site', href: 'https://meshwary.example' },
  // { id: 'timeless', title: 'Timeless Truth', icon: 'site', href: 'https://timelesstruth.example' }
];
export const musicLinks = [
  { id: 'apple', title: 'Apple Music', icon: AppleMusic, href: 'https://music.apple.com/us/artist/better-life/319157542' },
  { id: 'spotify', title: 'Spotify', icon: Spotify, href: 'https://open.spotify.com/artist/3VtbwbYtXFE00DyRtKJNUa?si=aDTLZoqrT0mvdJaJ6uP7gA' },
  { id: 'anghami', title: 'Anghami', icon: Anghami, href: 'https://play.anghami.com/artist/1930524' },
  { id: 'soundcloud', title: 'SoundCloud', icon: SoundCloud, href: 'https://soundcloud.com/better-life-733580510' },
];
