//PRODUCT PAGE
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