var bs_imgs = [
'//static.blueseed.tv/ajs/ad-core/upload/img/gif/travel1.gif',
'//static.blueseed.tv/ajs/ad-core/upload/img/gif/travel3.gif',
'//static.blueseed.tv/ajs/ad-core/upload/img/gif/travel8.gif',
'//static.blueseed.tv/ajs/ad-core/upload/img/gif/300x600.gif',
'//static.blueseed.tv/ajs/ad-core/upload/img/gif/300x600-2.gif',
'//static.blueseed.tv/ajs/ad-core/upload/img/gif/300x600-3.gif',
];
var bs_rand = bs_imgs[Math.floor(Math.random() * bs_imgs.length)];
var bs_show = document.querySelector('#bs-ads-show')
if(bs_show){
    var bs_img = document.createElement('img');
    bs_img.src = bs_rand;
    bs_show.appendChild(bs_img)
}