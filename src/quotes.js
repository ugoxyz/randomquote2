let AllQuotes = [
  {
    text: "There are no two words in the English language more harmful than 'good job'",
    author: "Terence Fletcher",
    avi: "https://i.pinimg.com/originals/ad/7e/fb/ad7efbba92265aaa0df49e11365707b4.png",
    title: "Whiplash (2013)",
  },
  {
    text: "You either die a hero or live long enough to see yourself become the villain.",
    author: "Harvey Dent",
    avi: "https://i.pinimg.com/564x/fe/da/ef/fedaef32d10a3342b1f2145c0a8c133d.jpg",
    title: "DA Gotham City",
  },
  {
    text: "Physics is like sex: sure, it may give some practical results, but that's not why we do it.",
    author: "Richard Feynman",
    avi: "https://miro.medium.com/v2/resize:fit:640/1*ZqTRrfzLWb34H1tpdu7EzQ.png",
    title: "Theoretical Physicist",
  },
  {
    text: "Religion is a culture of faith; science is a culture of doubt.",
    author: "Richard Feynman",
    avi: "https://miro.medium.com/v2/resize:fit:640/1*ZqTRrfzLWb34H1tpdu7EzQ.png",
    title: "Theoretical Physicist",
  },
  {
    text: "To every man is given the key to the gates of heaven. The same key opens the gates of hell",
    author: "Richard Feynman",
    avi: "https://miro.medium.com/v2/resize:fit:640/1*ZqTRrfzLWb34H1tpdu7EzQ.png",
    title: "Theoretical Physicist",
  },
  {
    text: "Never confuse education with intelligence, you can have a Ph.D. and still be an idiot.",
    author: "Richard Feynman",
    avi: "https://miro.medium.com/v2/resize:fit:640/1*ZqTRrfzLWb34H1tpdu7EzQ.png",
    title: "Theoretical Physicist",
  },
  {
    text: "Anything can happen, in spite of what you're pretty sure should happen.",
    author: "Richard Feynman",
    avi: "https://miro.medium.com/v2/resize:fit:640/1*ZqTRrfzLWb34H1tpdu7EzQ.png",
    title: "Theoretical Physicist",
  },
  {
    text: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    author: "Oprah Winfrey",
    avi: "https://pyxis.nymag.com/v1/imgs/e4a/695/a7aa0a6e6e0b1b391b7ce7542f1017e70d-04-oprah.rsquare.w330.jpg",
    title: "TV Personality",
  },
  {
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
    avi: "https://d23.com/app/uploads/2015/07/031009Walt_Hero_feature.jpg",
    title: "Entrepreneur",
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
    avi: "https://www.femalefirst.co.uk/image-library/square/250/j/john-lennon-trans-from-old.jpg",
    title: "Musician",
  },

  {
    text: "Never let the fear of striking out keep you from playing the game.",
    author: "Babe Ruth",
    avi: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/babe-ruth-boston-red-sox-colorized-20170622-square-wingsdomain-art-and-photography.jpg",
    title: "Baseball Player",
 },
  {
    text: "We move.",
    author: "Anonymous",
    avi: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_Nigeria.svg/2000px-Flag_of_Nigeria.svg.png",
    title: "Nigerian",
  },
  {
    text: "Whenever you find yourself on the side of the majority, it is time to pause and reflect.",
    author: "Mark Twain",
    avi: "https://ephemeralnewyork.files.wordpress.com/2011/06/marktwain.jpg?w=150&h=139",
    title: "Writer",
  },
  {
    text: "Do or do not. There is no try..",
    author: "Yoda",
    avi: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Yoda_Empire_Strikes_Back.png/220px-Yoda_Empire_Strikes_Back.png",
    title: "Star Wars",
  },
  {
    text: "Life is so much better when you live in slow motion.",
    author: "SiR",
    avi: "https://e-cdn-images.dzcdn.net/images/artist/d660c236454699f831ea9cfce66290b9/264x264-000000-80-0-0.jpg",
    title: "Singer",
  },
  {
    text: "If we're not headed to the top, where are we going?",
    author: "SiR",
    avi: "https://e-cdn-images.dzcdn.net/images/artist/d660c236454699f831ea9cfce66290b9/264x264-000000-80-0-0.jpg",
    title: "Singer",
  },
  {
    text: "Facts don't care about your feelings.",
    author: "Ben Shapiro",
    avi: "https://bloximages.newyork1.vip.townnews.com/laconiadailysun.com/content/tncms/assets/v3/editorial/d/e9/de9d6950-8d9a-11eb-9b0a-176d9d5c391c/605cdb65ada6d.image.jpg?resize=1200%2C1200",
    title: "Political Commentator",
  },
  {
    text: "You must understand that there is more than one path to the top of the mountain.",
    author: "Miyamoto Musashi",
    avi: "https://render.fineartamerica.com/images/rendered/square-dynamic/small/images/artworkimages/mediumlarge/3/vintage-manga-miyamoto-musashi-shinmen-takezo-16-evans-julie.jpg",
    title: "Ronin Philosopher",
  },
  {
    text: "Respect the gods without counting on their help.",
    author: "Miyamoto Musashi",
    avi: "https://render.fineartamerica.com/images/rendered/square-dynamic/small/images/artworkimages/mediumlarge/3/vintage-manga-miyamoto-musashi-shinmen-takezo-16-evans-julie.jpg",
    title: "Ronin Philosopher",
  },
  {
    text: "Sacrifice your life before you sacrifice your name.",
    author: "Miyamoto Musashi",
    avi: "https://render.fineartamerica.com/images/rendered/square-dynamic/small/images/artworkimages/mediumlarge/3/vintage-manga-miyamoto-musashi-shinmen-takezo-16-evans-julie.jpg",
    title: "Ronin Philosopher",
  },
  {
    text: "In all things, have no preferences.",
    author: "Miyamoto Musashi",
    avi: "https://render.fineartamerica.com/images/rendered/square-dynamic/small/images/artworkimages/mediumlarge/3/vintage-manga-miyamoto-musashi-shinmen-takezo-16-evans-julie.jpg",
    title: "Ronin Philosopher",
  },
  {
    text: "You can't stop an avalanche with a horse.",
    author: "Levy Rozman",
    avi: "https://pogchess.com/sites/default/files/styles/square_medium/public/2020-04/72158a5d-ef99-448c-9cac-bc3e0bdbf4ff-profile_image-300x300.png",
    title: "Chess Streamer",
  },
  {
    text: "The fact that you went in once doesn't mean you have to go in again.",
    author: "Levy Rozman",
    avi: "https://pogchess.com/sites/default/files/styles/square_medium/public/2020-04/72158a5d-ef99-448c-9cac-bc3e0bdbf4ff-profile_image-300x300.png",
    title: "Chess Streamer",
  },
  {
    text: "I am breaking mirrors at home to avoid myself.",
    author: "Alex Pereira",
    avi: "https://cdn.vox-cdn.com/thumbor/hGYqUAuPS3_M7hN8d1hhbjQOmSs=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23661694/PRE_Alex_Pereira.jpg",
    title: "UFC Champion",
  },
  {
    text: "You can always have money, but you can never go back in time.",
    author: "Henry Cejudo",
    avi: "https://www.fite.tv/thumbs/s3/ims-thumbs/fighters_images/Henry_Cedujo.jpg",
    title: "UFC Champion",
  },
  {
    text: "We watch history, we make history, and one day we become it.",
    author: "Kendall Roy",
    avi: "https://www.famousbirthdays.com/headshots/jeremy-strong-movieactor-4.jpg",
    title: "Succession",
  },
];

//////////////////////////26 Quotes///////////////////////////////
export default AllQuotes;
