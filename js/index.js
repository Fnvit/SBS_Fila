const trendingSection = document.querySelector(".trending_section");
const [trendingButtonList, trendingItemList] = trendingSection.getElementsByTagName("ul");
const trendingListButtons = trendingButtonList.querySelectorAll("li");
const trendingItems = [
    {
        img:{
            src: 'image/clothes1.webp',
            alt: "<우즈 착용> 마이티셔츠 유니 세미오버핏",
        },
        tag: '공용',
        title: "&lt;우즈 착용&gt; 마이티셔츠 유니 세미오버핏"
    },
    {
        img:{
            src: 'image/clothes2.webp',
            alt: "<한소희 착용> 마이티셔츠 여성 오버핏",
        },
        tag: '공용',
        title: "&lt;한소희 착용&gt; 마이티셔츠 여성 오버핏",
    },
    {
        img:{
            src: 'image/clothes3.webp',
            alt: "<아일릿 착용> 마이티셔츠 여성 스탠다드",
        },
        tag: '공용',
        title: "&lt;아일릿 착용&gt; 마이티셔츠 여성 스탠다드",
    },
    {
        img:{
            src: 'image/clothes4.webp',
            alt: "마이티셔츠 유니 세미오버핏",
        },
        tag: '공용',
        title: "마이티셔츠 유니 세미오버핏",
    },
    {
        img:{
            src: 'image/clothes5.webp',
            alt: "마이티셔츠 여성 오버핏",
        },
        tag: '공용',
        title: "마이티셔츠 여성 오버핏",
    },
]



const shopTheLookSection = document.querySelector('.information4_section');
const shopTheLookSlides = shopTheLookSection.querySelectorAll('li');
const shopTheLookModalContainer = document.getElementById('shop_the_look');
const shopTheLookModal = shopTheLookModalContainer.querySelector('.modal');
const shopTheLookModalCloseButton = shopTheLookModalContainer.querySelector('.close_btn');

/*****************************************************************************************/
function generate_trending_items(){
    trendingItemList.innerHTML = '';
    const randomCount = Math.floor(Math.random() * 9) + 1;
    for(let i = 0; i < randomCount; i++) {
        const randomIndex = Math.floor(Math.random() * trendingItems.length);
        const randomPrice = Math.floor(Math.random() * 100000);
        const price = (randomPrice - (randomPrice % 100)).toLocaleString();
        const item = trendingItems[randomIndex];
        trendingItemList.insertAdjacentHTML('beforeend', `
                <li>
                    <a href="#">
                        <div class="image_container">
                            <img src='${item.img.src}' alt="${item.img.alt}">
                        </div>
                        <span class="tag">${item.tag}</span>
                        <strong class="title">${item.title}</strong>
                        <strong class="price">${price}원</strong>
                    </a>
                </li>
            `)
    }
}

generate_trending_items();
trendingListButtons.forEach(button => {
    button.onclick = () => {
        trendingListButtons.forEach((b) => {b.classList.remove('active');});
        button.classList.add('active');
        generate_trending_items();
    }
})




/*****************************************************************************************/
shopTheLookSlides.forEach(slide => {
    slide.addEventListener('click', (e) => {
        shopTheLookModalContainer.classList.add('active');
    });
});
shopTheLookModal.addEventListener('click', (e) => {
   e.stopPropagation();
});
shopTheLookModalContainer.addEventListener('click', (e) => {
    shopTheLookModalContainer.classList.remove('active');
});
shopTheLookModalCloseButton.addEventListener('click', (e) => {
    shopTheLookModalContainer.classList.remove('active');
})