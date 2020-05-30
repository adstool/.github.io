var bs_imgs = [
'//static.blueseed.tv/ajs/ad-core/upload/img/gif/970x250.gif',
'//static.blueseed.tv/ajs/ad-core/upload/img/gif/970x250-2.gif',
'//static.blueseed.tv/ajs/ad-core/upload/img/gif/970x250-3.gif',
'//static.blueseed.tv/ajs/ad-core/upload/img/gif/970x250-4.gif',
'//static.blueseed.tv/ajs/ad-core/upload/img/gif/970x250-5.gif',
];
var bs_rand = bs_imgs[Math.floor(Math.random() * bs_imgs.length)];
var bs_show = document.querySelector('#bs-ads-masthead')
if(bs_show){
    var bs_img = document.createElement('img');
    bs_img.src = bs_rand;
    bs_show.appendChild(bs_img)
}