setTimeout(() => {
    // history.back()
    // history.forward()
    // history.go(-1) // back 1 step
    
    // history.pushState({page: 2}, "title 2", "?page=2") // push to url with ?page=2
    history.replaceState('data', 'Title', '?page=3') // replace to url with ?page=3
}, 1000)