setTimeout(function() {
  loading.classList.remove('active')
}, 1000);
let specialTags = document.querySelectorAll('[data-x]')
for(let i = 0; i < specialTags.length; i++) {
  specialTags[i].classList.add('offset')
}
findClosest()

window.onscroll = function(e) {
  if(window.scrollY > 0) {
    topNav.classList.add('navFixed')
  } else {
    topNav.classList.remove('navFixed')
  }
  findClosest()
}

function findClosest() {
  let specialTags = document.querySelectorAll('[data-x]')
  let minIndex = 0
  for(let i = 1; i < specialTags.length; i++) {
    if(Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
      minIndex = i
    }
  }
  // minIndex 就是里窗口顶部最近的元素
  specialTags[minIndex].classList.remove('offset')
  let id = specialTags[minIndex].id
  let a = document.querySelector('a[href="#' + id + '"]')
  let li = a.parentNode
  let brothersAndMe = li.parentNode.children
  for(let i = 0; i < brothersAndMe.length; i++) {
    brothersAndMe[i].classList.remove('highlight')
  }
  li.classList.add('highlight')
}
let liTags = document.querySelectorAll('nav.menu > ul > li')
for(let i = 0; i < liTags.length; i++) {
  liTags[i].onmouseenter = function(x) {
    x.currentTarget.classList.add('active')
  }
  liTags[i].onmouseleave = function(x) {
    x.currentTarget.classList.remove('active')
  }
}

let aTags = document.querySelectorAll('.topNav .topNaviner nav ul li a ')

function animate(time) {
  requestAnimationFrame(animate);
  TWEEN.update(time);
}
requestAnimationFrame(animate);

for(let i = 0; i < aTags.length; i++) {
  aTags[i].onclick = function(x) {
    x.preventDefault()
    let a = x.currentTarget
    let href = a.getAttribute('href') //'#siteAbout'
    let element = document.querySelector(href)
    let top = element.offsetTop

    let currentTop = window.scrollY
    let targetTop = top - 80
    let s = targetTop - currentTop // 路程
    var coords = {
      y: currentTop
    }; // 起始位置
    var t = Math.abs((s / 100) * 300) // 时间
    if(t > 500) {
      t = 500
    }
    var tween = new TWEEN.Tween(coords) // 起始位置
      .to({
        y: targetTop - 100
      }, t) // 结束位置 和 时间
      .easing(TWEEN.Easing.Cubic.InOut) // 缓动类型
      .onUpdate(function() {
        // coords.y 已经变了
        window.scrollTo(0, coords.y) // 如何更新界面
      })
      .start(); // 开始缓动
  }
}

var APP_ID = 'tjLK1owHL4N1lFIArnImnrjN-gzGzoHsz';
var APP_KEY = '0pt05duTgpOfwrL2XI9RoS6L';
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});
var query = new AV.Query('Message');
var messageList = document.querySelector('.messageList')
var li = document.createElement('li')
query.find().then(function(Message) {
  let array = Message.map(function(item) {
    return item.attributes
  })
  array.forEach(function(item) {
    let li = document.createElement('li')
    li.innerText = item.name + ':' + item.content
    messageList.appendChild(li)
  })
}, function(error) {
  // 异常处理
});
xxx.addEventListener('submit', function(e) {
  e.preventDefault()
  var TestObject = AV.Object.extend('Message');
  var testObject = new TestObject();
  var content = xxx.querySelector('input[name=content]').value
  var name = xxx.querySelector('input[name=name]').value
  let li = document.createElement('li')
  li.innerText = name + ":" + content
  messageList.appendChild(li)
  testObject.save({
    'name': name,
    'content': content
  })
})
window.onload = function(){
   var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,

    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },

    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // 如果需要滚动条
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })
}
