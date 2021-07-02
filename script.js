document.addEventListener("contextmenu", function(e){
    e.preventDefault();
}, false);

// ----------------------- Home page topics -----------------
const topics = [
    {
        url: 'Battery/index.html',
        name: 'Battery'
    },
    {
        url: 'Broadcast Channel/index.html',
        name: 'Broadcast Channel'
    },
    {
        url: 'Geo Location/index.html',
        name: 'Geo Location'
    },
    {
        url: 'History/index.html',
        name: 'History'
    },
    {
        url: 'Picture In Picture/index.html',
        name: 'Picture In Picture'
    },
    {
        url: 'Push/index.html',
        name: 'Push'
    }
]

const wrapper = document.querySelector('.lessons')
if(wrapper){
    var html = ''
    
        for (let i = 0; i < topics.length; i++) {
            html += '<li>' +
                        '<a href="'+ topics[i].url +'">'+ topics[i].name +'</a>' +
                    '</li>'
        }
    
    wrapper.innerHTML = html
}

// ----------------------- Go Back Button -----------------
const goBackBtn = document.querySelector('.go-back')
if(goBackBtn){
    goBackBtn.addEventListener("click", function(){
        window.location.href = '../index.html'
    })
}

// ----------------------- Reload Button -----------------
const reloadBtn = document.querySelector('.reload')
if(reloadBtn){
    reloadBtn.addEventListener("click", function(){
        window.location.reload()
    })
}