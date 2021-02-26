const canvas = document.getElementById('canvas')
const slider = document.getElementById('slider')
slider.addEventListener('input', handleInputSlide)

const ctx = canvas.getContext('2d')

const images = []
window.addEventListener('load', pageLoaded)
    function pageLoaded() {
        for (let i = 1; i <= 36; i += 1){
            const number = i.toString().padStart(2, '00')
            const url = `https://stockx-360.imgix.net/Air-Jordan-1-Retro-High-Silver-Toe-W/Images/Air-Jordan-1-Retro-High-Silver-Toe-W/Lv2/img${number}.jpg?auto=format,compress&q=90&updated_at=1611952888&w=1000`
            const image = new Image()
            image.src = url
            image.addEventListener('load', () => {
                images[i] = image
                if (i === 1) {
                    loadImage(i)
                }
            })
        }
    }

function loadImage(index) {
    ctx.drawImage(images[index], 0, 0, canvas.width, canvas.height)
}

function handleInputSlide() {    
    console.log(this.value)
    loadImage(this.value)
}