let shareLogo = document.getElementById('share_logo')
let shareContent = document.querySelector('.share_content')
let svg = document.getElementById('path_svg')

shareLogo.addEventListener('click', () => {
    if (shareContent.classList.contains('hide')) {
        shareContent.classList.remove('hide')
        shareLogo.style.backgroundColor = 'var(--desaturated_dark_blue)'
        svg.style.fill = '#ffffff'
    } else {
        shareContent.classList.add('hide')
        shareLogo.style.backgroundColor = 'var(--light_grayish_blue)'
        svg.style.fill = '#6E8098'
    }
})