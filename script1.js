//PRODUCT PAGE T-SHIRTS
const wrapper = document.querySelector(".wrapper"); //scroll otomatis
const carousel = document.querySelector(".carousel"); //utama
const arrowBtns = document.querySelectorAll(".wrapper i"); //tombolnya bisa diklik
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const carouselChildrens = [...carousel.children];

let isDragging = false, startX, startScrollLeft, timeoutId;

//dapatkan jumlah card yang bisa masuk ke dalam carousel sekaligus
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

//sisipkan salinan beberapa card akhir ke awal carousel untuk pengguliran tak terbatas
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
})

//sisipkan salinan beberapa card awal ke akhir carousel untuk pengguliran tak terbatas
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
})

//menambahkan event listeners untuk tombol panah untuk menggulir carousel ke kiri dan ke kanan
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth; //Jika tombol yang diklik adalah kiri, maka kurangi lebar first card dari carousel scrollLeft jika tidak, tambahkan ke sana
    })
})

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    //merekam posisi awal kursor dan scroll corausel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return; //Jika isDragging adalah salah kembali dari sini
    //memperbarui posisi scroll carousel berdasarkan gerakan kursor
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

const autoPlay = () => {
    if(window.innerWidth < 400) return; //kembali jika jendela lebih kecil dari 800
    //Autoplay carousel setelah 2500 ms
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}
autoPlay();

const infiniteScroll = () => {
    //jika carousel adalah awal, scroll ke akhir
    if(carousel.scrollLeft === 0) { //(Kiri akhir)
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - ( 2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    } 
    //jika carousel adalah akhir, scroll ke awal
    //carousel.scrollLeft memberikan angka mengambang, jadi kita perlu membulatkannya agar kondisi ini menjadi benar, metode Math.ceil() membulatkan sebuah angka dibulatkan ke atas ke bilangan bulat terdekat
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth){ //(Kanan akhir) scrollWidth mengembalikan lebar konten elemen termasuk konten yang tidak terlihat di layar karena overflow
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }

    //hapus batas waktu keluar & mulai autoPlay jika mouse tidak melayang di atas carousel
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);



//PRODUCT PAGE SHIRTS
const wrapper1 = document.querySelector(".wrapper-satu");
const carousel1 = document.querySelector(".carousel-satu"); 
const arrowBtns1 = document.querySelectorAll(".wrapper-satu i"); 
const firstCardWidth1 = carousel1.querySelector(".card-satu").offsetWidth;
const carouselChildrens1 = [...carousel1.children];

let isDragging1 = false, startX1, startScrollLeft1, timeoutId1;

let cardPerView1 = Math.round(carousel1.offsetWidth / firstCardWidth1);

carouselChildrens1.slice(-cardPerView1).reverse().forEach(card => {
    carousel1.insertAdjacentHTML("afterbegin", card.outerHTML);
})

carouselChildrens1.slice(0, cardPerView1).forEach(card => {
    carousel1.insertAdjacentHTML("beforeend", card.outerHTML);
})

arrowBtns1.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel1.scrollLeft += btn.id === "left-satu" ? -firstCardWidth1 : firstCardWidth1; 
    })
})

const dragStart1 = (e) => {
    isDragging1 = true;
    carousel1.classList.add("dragging");
    startX1 = e.pageX;
    startScrollLeft1 = carousel1.scrollLeft;
}

const dragging1 = (e) => {
    if(!isDragging1) return; 
    carousel1.scrollLeft = startScrollLeft1 - (e.pageX - startX1);
}

const dragStop1 = () => {
    isDragging1 = false;
    carousel1.classList.remove("dragging");
}

const autoPlay1 = () => {
    if(window.innerWidth < 400) return; 
    timeoutId1 = setTimeout(() => carousel1.scrollLeft += firstCardWidth1, 2500);
}
autoPlay1();

const infiniteScroll1 = () => {
    if(carousel1.scrollLeft === 0) { 
        carousel1.classList.add("no-transition");
        carousel1.scrollLeft = carousel1.scrollWidth - (2 * carousel1.offsetWidth);
        carousel1.classList.remove("no-transition");
    } 
    else if(Math.ceil(carousel1.scrollLeft) === carousel1.scrollWidth - carousel1.offsetWidth){ 
        carousel1.classList.add("no-transition");
        carousel1.scrollLeft = carousel1.offsetWidth;
        carousel1.classList.remove("no-transition");
    }

    clearTimeout(timeoutId1);
    if(!wrapper1.matches(":hover")) autoPlay1();
}

carousel1.addEventListener("mousedown", dragStart1);
carousel1.addEventListener("mousemove", dragging1);
document.addEventListener("mouseup", dragStop1);
carousel1.addEventListener("scroll", infiniteScroll1);
wrapper1.addEventListener("mouseenter", () => clearTimeout(timeoutId1));
wrapper1.addEventListener("mouseleave", autoPlay1);



//PRODUCT PAGE JACKET
const wrapper2 = document.querySelector(".wrapper-dua");
const carousel2 = document.querySelector(".carousel-dua"); 
const arrowBtns2 = document.querySelectorAll(".wrapper-dua i"); 
const firstCardWidth2 = carousel2.querySelector(".card-dua").offsetWidth;
const carouselChildrens2 = [...carousel2.children];

let isDragging2 = false, startX2, startScrollLeft2, timeoutId2;

let cardPerView2 = Math.round(carousel2.offsetWidth / firstCardWidth2);

carouselChildrens2.slice(-cardPerView2).reverse().forEach(card => {
    carousel2.insertAdjacentHTML("afterbegin", card.outerHTML);
})

carouselChildrens2.slice(0, cardPerView2).forEach(card => {
    carousel2.insertAdjacentHTML("beforeend", card.outerHTML);
})

arrowBtns2.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel2.scrollLeft += btn.id === "left-dua" ? -firstCardWidth2 : firstCardWidth2; 
    })
})

const dragStart2 = (e) => {
    isDragging2 = true;
    carousel2.classList.add("dragging");
    startX2 = e.pageX;
    startScrollLeft2 = carousel2.scrollLeft;
}

const dragging2 = (e) => {
    if(!isDragging2) return; 
    carousel2.scrollLeft = startScrollLeft2 - (e.pageX - startX2);
}

const dragStop2 = () => {
    isDragging2 = false;
    carousel2.classList.remove("dragging");
}

const autoPlay2 = () => {
    if(window.innerWidth < 400) return; 
    timeoutId2 = setTimeout(() => carousel2.scrollLeft += firstCardWidth2, 2500);
}
autoPlay2();

const infiniteScroll2 = () => {
    if(carousel2.scrollLeft === 0) { 
        carousel2.classList.add("no-transition");
        carousel2.scrollLeft = carousel2.scrollWidth - (2 * carousel2.offsetWidth);
        carousel2.classList.remove("no-transition");
    } 
    else if(Math.ceil(carousel2.scrollLeft) === carousel2.scrollWidth - carousel2.offsetWidth){ 
        carousel2.classList.add("no-transition");
        carousel2.scrollLeft = carousel2.offsetWidth;
        carousel2.classList.remove("no-transition");
    }

    clearTimeout(timeoutId2);
    if(!wrapper2.matches(":hover")) autoPlay2();
}

carousel2.addEventListener("mousedown", dragStart2);
carousel2.addEventListener("mousemove", dragging2);
document.addEventListener("mouseup", dragStop2);
carousel2.addEventListener("scroll", infiniteScroll2);
wrapper2.addEventListener("mouseenter", () => clearTimeout(timeoutId2));
wrapper2.addEventListener("mouseleave", autoPlay2);